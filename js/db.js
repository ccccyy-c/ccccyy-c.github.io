/**
 * WorkBuddy IndexedDB Persistence Layer
 * Auto-save, cloud sync, and history management
 */
(function() {
  'use strict';

  const DB_NAME = 'workbuddy_db';
  const DB_VERSION = 2;
  let db = null;

  // ========== Init ==========
  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const d = e.target.result;
        if (!d.objectStoreNames.contains('data')) {
          d.createObjectStore('data', { keyPath: 'category' });
        }
        if (!d.objectStoreNames.contains('history')) {
          d.createObjectStore('history', { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => {
        db = e.target.result;
        resolve(db);
      };
      req.onerror = () => reject(req.error);
    });
  }

  // ========== Core Read/Write ==========
  function dbGet(category) {
    return new Promise((resolve, reject) => {
      if (!db) return resolve(null);
      const tx = db.transaction('data', 'readonly');
      const store = tx.objectStore('data');
      const req = store.get(category);
      req.onsuccess = () => resolve(req.result ? req.result.value : null);
      req.onerror = () => reject(req.error);
    });
  }

  function dbPut(category, value) {
    return new Promise((resolve, reject) => {
      if (!db) return resolve(false);
      const tx = db.transaction('data', 'readwrite');
      const store = tx.objectStore('data');
      store.put({ category, value, updatedAt: Date.now() });
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }

  // ========== Auto-Save (debounced) ==========
  const saveTimers = {};
  const dirtyFlags = {};
  const versionMap = {};

  function markDirty(category) {
    dirtyFlags[category] = true;
    if (saveTimers[category]) clearTimeout(saveTimers[category]);
    saveTimers[category] = setTimeout(() => flushSave(category), 500);
  }

  function flushSave(category) {
    if (!dirtyFlags[category]) return;
    dirtyFlags[category] = false;

    switch (category) {
      case 'accounting':
        if (window._acctTxns) dbPut('accounting', window._acctTxns);
        break;
      case 'menstrual_weight':
        if (window._periodData !== undefined && window._weightData !== undefined) {
          dbPut('menstrual_weight', { periodData: window._periodData, weightData: window._weightData });
        }
        break;
      case 'diary':
        if (window._diaryData) dbPut('diary', window._diaryData);
        break;
      case 'fitness_measurements':
        if (window._measData) dbPut('fitness_measurements', window._measData);
        break;
      case 'fitness_videos':
        if (window._videoData) dbPut('fitness_videos', window._videoData);
        break;
      case 'podcasts':
        if (window._podcastData) dbPut('podcasts', window._podcastData);
        break;
      case 'english_vocab':
        if (window._vocabWordData) dbPut('english_vocab', window._vocabWordData);
        break;
      case 'listening':
        if (window._listeningData) {
          dbPut('listening', window._listeningData);
          localStorage.setItem('workbuddy_listening', JSON.stringify(window._listeningData));
        }
        break;
      case 'listening_notes':
        if (window._listenNoteKey && window._listenNoteData !== undefined) {
          dbPut('listening_notes', { key: window._listenNoteKey, data: window._listenNoteData });
          localStorage.setItem(window._listenNoteKey, window._listenNoteData);
        }
        break;
      case 'overview_todos':
        if (window._overviewTodos !== undefined) dbPut('overview_todos', window._overviewTodos);
        break;
    }
  }

  function flushAll() {
    Object.keys(dirtyFlags).forEach(k => {
      if (dirtyFlags[k]) flushSave(k);
    });
  }

  // ========== Load from DB ==========
  async function loadAllFromDB() {
    const categories = [
      'accounting', 'menstrual_weight', 'diary',
      'fitness_measurements', 'fitness_videos', 'podcasts',
      'english_vocab', 'listening', 'listening_notes',
      'overview_todos'
    ];

    const results = {};
    for (const cat of categories) {
      results[cat] = await dbGet(cat);
    }
    return results;
  }

  // Apply loaded data to window globals
  function applyLoadedData(loaded) {
    if (loaded.accounting && window._acctTxns !== undefined) {
      window._acctTxns = loaded.accounting;
    }
    if (loaded.menstrual_weight) {
      if (window._periodData !== undefined) window._periodData = loaded.menstrual_weight.periodData || {};
      if (window._weightData !== undefined) window._weightData = loaded.menstrual_weight.weightData || {};
    }
    if (loaded.diary && window._diaryData !== undefined) {
      Object.assign(window._diaryData, loaded.diary);
    }
    if (loaded.fitness_measurements && window._measData !== undefined) {
      window._measData = loaded.fitness_measurements;
    }
    if (loaded.fitness_videos && window._videoData !== undefined) {
      // Merge user-added videos
      const userVids = (loaded.fitness_videos || []).filter(v => v.userAdded);
      window._videoData = [...window._videoData, ...userVids].filter((v, i, a) =>
        a.findIndex(x => x.id === v.id) === i
      );
    }
    if (loaded.podcasts && window._podcastData !== undefined) {
      const userPods = (loaded.podcasts || []).filter(p => p.userAdded);
      window._podcastData = [...window._podcastData, ...userPods].filter((p, i, a) =>
        a.findIndex(x => x.id === p.id) === i
      );
    }
    if (loaded.english_vocab && window._vocabWordData !== undefined) {
      // Merge custom banks
      const saved = loaded.english_vocab;
      if (saved.custom && window._vocabWordData.custom) {
        window._vocabWordData.custom = saved.custom;
      }
    }
    if (loaded.listening && window._listeningData !== undefined) {
      window._listeningData = loaded.listening;
    }
    if (loaded.listening_notes && window._listenNoteKey) {
      window._listenNoteData = loaded.listening_notes.data || '';
    }
    if (loaded.overview_todos && window._overviewTodos !== undefined) {
      window._overviewTodos.splice(0, window._overviewTodos.length, ...(loaded.overview_todos || []));
    }
  }

  // ========== Cloud Sync ==========
  const SYNC_URL = window.location.origin;

  async function syncToCloud() {
    const payload = { categories: {} };

    const cats = [
      { name: 'accounting', data: window._acctTxns },
      { name: 'menstrual_weight', data: { periodData: window._periodData, weightData: window._weightData } },
      { name: 'diary', data: window._diaryData },
      { name: 'fitness_measurements', data: window._measData },
      { name: 'fitness_videos', data: window._videoData },
      { name: 'podcasts', data: window._podcastData },
      { name: 'english_vocab', data: window._vocabWordData },
      { name: 'listening', data: window._listeningData },
      { name: 'listening_notes', data: { key: window._listenNoteKey, data: window._listenNoteData } },
      { name: 'overview_todos', data: window._overviewTodos }
    ];

    for (const cat of cats) {
      if (cat.data === undefined || cat.data === null) continue;
      payload.categories[cat.name] = {
        data: cat.data,
        clientVersion: versionMap[cat.name] || 0
      };
    }

    try {
      const resp = await fetch(`${SYNC_URL}/api/sync/batch`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await resp.json();

      // Update versions and handle conflicts
      for (const [cat, info] of Object.entries(result)) {
        if (info.success) {
          versionMap[cat] = info.version;
        } else if (info.conflict) {
          // Server has newer data - merge it
          console.warn(`Conflict on ${cat}, server version: ${info.serverVersion}`);
          if (info.serverData && window._syncCallback) {
            window._syncCallback(cat, info.serverData);
          }
        }
      }
      return result;
    } catch (e) {
      console.warn('Sync failed (server unreachable):', e.message);
      return null;
    }
  }

  async function syncFromCloud() {
    try {
      const resp = await fetch(`${SYNC_URL}/api/sync/all`);
      if (!resp.ok) return null;
      const result = await resp.json();

      for (const [cat, record] of Object.entries(result)) {
        if (!record.data) continue;
        versionMap[cat] = record.version;

        // Don't overwrite local if local is newer
        const localVer = await getLocalVersion(cat);
        if (localVer && localVer >= record.version) continue;

        // Apply remote data
        switch (cat) {
          case 'accounting': if (window._acctTxns) window._acctTxns = record.data; break;
          case 'menstrual_weight':
            if (window._periodData) window._periodData = record.data.periodData || {};
            if (window._weightData) window._weightData = record.data.weightData || {};
            break;
          case 'diary': if (window._diaryData) Object.assign(window._diaryData, record.data); break;
          case 'fitness_measurements': if (window._measData) window._measData = record.data; break;
          case 'fitness_videos':
            if (window._videoData) {
              const userVids = (record.data || []).filter(v => v.userAdded);
              window._videoData = [...window._videoData.filter(v => !v.userAdded), ...userVids];
            }
            break;
          case 'podcasts':
            if (window._podcastData) {
              const userPods = (record.data || []).filter(p => p.userAdded);
              window._podcastData = [...window._podcastData.filter(p => !p.userAdded), ...userPods];
            }
            break;
          case 'listening': if (window._listeningData) window._listeningData = record.data; break;
        }

        // Also save to local DB
        await dbPut(cat, record.data);
      }
      return result;
    } catch (e) {
      console.warn('Pull sync failed:', e.message);
      return null;
    }
  }

  async function getLocalVersion(category) {
    if (versionMap[category]) return versionMap[category];
    const val = await dbGet(category);
    return val ? (val._version || 0) : 0;
  }

  // ========== History Management ==========
  function getDatesFromData(dateKeyedObj) {
    if (!dateKeyedObj) return [];
    return Object.keys(dateKeyedObj).sort().reverse();
  }

  function getEntriesByDate(dateKeyedObj, date) {
    return dateKeyedObj ? dateKeyedObj[date] : null;
  }

  function getTxnsByDate(txns, date) {
    return (txns || []).filter(t => t.date === date);
  }

  // ========== Export/Import ==========
  async function exportAllData() {
    const all = {
      accounting: window._acctTxns,
      menstrual_weight: { periodData: window._periodData, weightData: window._weightData },
      diary: window._diaryData,
      fitness_measurements: window._measData,
      fitness_videos: window._videoData,
      podcasts: window._podcastData,
      english_vocab: window._vocabWordData,
      listening: window._listeningData,
      listening_notes: { key: window._listenNoteKey, data: window._listenNoteData },
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(all, null, 2);
  }

  async function importAllData(jsonStr) {
    try {
      const all = JSON.parse(jsonStr);
      if (all.accounting && window._acctTxns) window._acctTxns = all.accounting;
      if (all.menstrual_weight) {
        if (window._periodData) window._periodData = all.menstrual_weight.periodData || {};
        if (window._weightData) window._weightData = all.menstrual_weight.weightData || {};
      }
      if (all.diary && window._diaryData) Object.assign(window._diaryData, all.diary);
      if (all.fitness_measurements && window._measData) window._measData = all.fitness_measurements;
      if (all.fitness_videos && window._videoData) window._videoData = all.fitness_videos;
      if (all.podcasts && window._podcastData) window._podcastData = all.podcasts;
      if (all.english_vocab && window._vocabWordData) window._vocabWordData = all.english_vocab;
      if (all.listening && window._listeningData) window._listeningData = all.listening;
      if (all.listening_notes) {
        window._listenNoteData = all.listening_notes.data || '';
      }

      flushAll();
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  }

  // ========== Expose to global ==========
  window.WBDB = {
    open: openDB,
    loadAll: loadAllFromDB,
    applyLoaded: applyLoadedData,
    markDirty: markDirty,
    flushAll: flushAll,
    flushSave: flushSave,
    syncToCloud: syncToCloud,
    syncFromCloud: syncFromCloud,
    exportAllData: exportAllData,
    importAllData: importAllData,
    getDatesFromData: getDatesFromData,
    getEntriesByDate: getEntriesByDate,
    getTxnsByDate: getTxnsByDate,
    dbGet: dbGet,
    dbPut: dbPut
  };
})();
