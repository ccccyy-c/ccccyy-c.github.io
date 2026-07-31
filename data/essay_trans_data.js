// ======== 好文推荐数据池 ========
const essayPool = [
  { // CET-4
    id:'e001', level:'CET-4', topic:'On the Importance of Reading',
    title:'The Power of Reading',
    fullText: `Reading has always been an essential part of human civilization. In today's fast-paced society, however, many people seem to have forgotten the joy and benefits of reading books.

First and foremost, reading broadens our horizons. Through books, we can travel to distant lands, explore different cultures, and gain insights into various fields of knowledge without leaving our homes. A single book can open a window to an entirely new world.

Secondly, reading enhances our critical thinking skills. When we engage with a well-written argument or a complex narrative, we learn to analyze information, question assumptions, and form our own opinions. This ability is invaluable in both academic and professional settings.

Last but not least, reading serves as a form of mental relaxation. In a world dominated by screens and constant notifications, sitting down with a good book provides a much-needed escape from digital overload. It calms the mind and reduces stress.

In conclusion, reading is more than just a hobby\u2014it is a lifelong investment in ourselves. I strongly encourage everyone to set aside at least thirty minutes each day for reading.`,
    translation: `阅读一直是人类文明的重要组成部分。然而，在当今快节奏的社会中，许多人似乎已经遗忘了读书的乐趣和益处。

首先，阅读能拓宽我们的视野。通过书籍，我们足不出户就可以游历远方、探索不同的文化、深入了解各个领域的知识。一本书就能为我们打开一扇通往全新世界的窗户。

其次，阅读能提升我们的批判性思维能力。当我们阅读一篇论证充分的文章或一个复杂的叙事时，我们学会了分析信息、质疑假设、形成自己的观点。这种能力在学术和职场环境中都极为宝贵。

最后同样重要的是，阅读是一种精神放松的方式。在被屏幕和不断弹出的通知所主宰的世界里，坐下来读一本好书能让我们从数字过载中得到亟需的喘息。它能让心灵平静，减轻压力。

总之，阅读不仅仅是一种爱好——它是对我们自己的一项终身投资。我强烈建议每个人每天至少抽出三十分钟来阅读。`,
    vocab: [
      {word:'broaden one\'s horizons', meaning:'拓宽视野', note:'高分短语，可用于各类议论文开头'},
      {word:'critical thinking', meaning:'批判性思维', note:'学术写作高频词，CET-4/6 必备'},
      {word:'digital overload', meaning:'数字过载', note:'地道表达，描述信息时代的负面现象'},
      {word:'lifelong investment', meaning:'终身投资', note:'比喻修辞，升华主题的经典用法'},
      {word:'set aside', meaning:'留出（时间）', note:'实用短语动词，比 save 更正式'}
    ],
    patterns: [
      {pattern:'First and foremost, ...', analysis:'用于引出第一个论点，比 Firstly 更正式有力'},
      {pattern:'Last but not least, ...', analysis:'引出最后一个但同样重要的论点，经典写作句型'},
      {pattern:'... is more than just ... \u2014 it is ...', analysis:'强调句式，用破折号引出深层含义，增强说服力'}
    ]
  },
  { // CET-4
    id:'e002', level:'CET-4', topic:'Online Learning vs. Traditional Classroom',
    title:'Embracing the New Era of Learning',
    fullText: `With the rapid development of internet technology, online learning has become increasingly popular in recent years. While traditional classroom education still holds its ground, the advantages of online learning cannot be ignored.

On the one hand, online learning offers unprecedented flexibility. Students can access course materials anytime and anywhere, allowing them to learn at their own pace. This is particularly beneficial for those who have part-time jobs or family responsibilities.

On the other hand, online platforms provide access to a vast array of resources that a single physical classroom cannot offer. From video lectures by world-renowned professors to interactive quizzes and discussion forums, the digital learning environment is rich and diverse.

However, we must also acknowledge the limitations of online learning. The lack of face-to-face interaction can lead to feelings of isolation, and self-discipline becomes crucial when there is no teacher physically present to supervise.

In my opinion, the ideal approach is to combine the best of both worlds. Traditional classrooms provide structure and social interaction, while online tools offer flexibility and abundant resources.`,
    translation: `随着互联网技术的飞速发展，近年来在线学习越来越普及。虽然传统课堂教育仍然占有一席之地，但在线学习的优势也不容忽视。

一方面，在线学习提供了前所未有的灵活性。学生可以随时随地访问课程资料，按照自己的节奏学习。这对那些有兼职工作或家庭责任的人来说尤其有益。

另一方面，在线平台提供了海量资源，这是单一实体教室无法提供的。从世界知名教授的录播课程到互动测验和讨论论坛，数字化学习环境丰富而多元。

然而，我们也必须承认在线学习的局限性。缺乏面对面互动可能导致孤独感，而当没有老师现场监督时，自律就变得至关重要。

在我看来，理想的方法是取两者之长。传统课堂提供结构和社交互动，而在线工具则提供灵活性和丰富资源。`,
    vocab: [
      {word:'unprecedented', meaning:'前所未有的', note:'高分形容词，CET-4 高频词'},
      {word:'at one\'s own pace', meaning:'按自己的节奏', note:'地道表达，替代 slowly/fast'},
      {word:'a vast array of', meaning:'大量的；一系列的', note:'比 a lot of 高级很多'},
      {word:'face-to-face interaction', meaning:'面对面互动', note:'对比类作文常用概念'},
      {word:'the best of both worlds', meaning:'两全其美', note:'经典习语，结尾段点睛之笔'}
    ],
    patterns: [
      {pattern:'With the rapid development of ..., ... has become increasingly ...', analysis:'开篇万能句型，适用于描述社会现象'},
      {pattern:'On the one hand ... On the other hand ...', analysis:'对比论证的标准结构'},
      {pattern:'In my opinion, the ideal approach is to ...', analysis:'个人观点表达，比 I think 更成熟'}
    ]
  },
  { // CET-6
    id:'e003', level:'CET-6', topic:'Innovation and Entrepreneurship',
    title:'Innovation: The Engine of Social Progress',
    fullText: `Throughout history, innovation has been the driving force behind human progress. From the invention of the wheel to the rise of artificial intelligence, every major leap forward has been fueled by creative thinking and the courage to challenge the status quo.

Innovation is not merely about creating new products; it is about solving problems in novel ways. Entrepreneurs who succeed are those who identify unmet needs and develop innovative solutions to address them. Companies like Apple and Tesla did not just improve existing products\u2014they redefined entire industries.

However, fostering a culture of innovation requires more than individual talent. Governments and educational institutions play a crucial role in creating an environment conducive to innovation. This includes investing in research and development, protecting intellectual property rights, and encouraging risk-taking rather than punishing failure.

At the individual level, cultivating an innovative mindset means staying curious, embracing lifelong learning, and being willing to step outside one's comfort zone. As Steve Jobs famously said, "Stay hungry, stay foolish."

To sum up, innovation is the engine of social progress, and nurturing it requires collective effort from individuals, businesses, and governments alike.`,
    translation: `纵观历史，创新一直是人类进步的驱动力。从轮子的发明到人工智能的崛起，每一次重大飞跃都是由创造性思维和挑战现状的勇气推动的。

创新不仅仅是创造新产品，而是以新颖的方式解决问题。成功的企业家是那些能识别未被满足的需求并开发创新解决方案的人。苹果和特斯拉这样的公司不只是改进了现有产品——它们重新定义了整个行业。

然而，培养创新文化需要的不仅仅是个人的才能。政府和教育机构在创造有利于创新的环境方面发挥着关键作用。这包括投资研发、保护知识产权、鼓励冒险而非惩罚失败。

在个人层面，培养创新思维意味着保持好奇心、拥抱终身学习、愿意走出舒适区。正如史蒂夫·乔布斯那句名言："求知若饥，虚心若愚。"

综上所述，创新是社会进步的引擎，培育创新需要个人、企业和政府的共同努力。`,
    vocab: [
      {word:'the status quo', meaning:'现状', note:'CET-6 高频词，常用于论述社会变革'},
      {word:'conducive to', meaning:'有助于……的', note:'高级搭配，替代 good for/helpful'},
      {word:'intellectual property rights', meaning:'知识产权', note:'议论文常见话题词汇'},
      {word:'step outside one\'s comfort zone', meaning:'走出舒适区', note:'地道习语，个人成长类文章必备'},
      {word:'cultivate a mindset', meaning:'培养一种思维方式', note:'比 develop 更优雅'}
    ],
    patterns: [
      {pattern:'... is not merely about ...; it is about ...', analysis:'否定+肯定对照，强调本质，论证力度强'},
      {pattern:'At the individual level, ... means ...', analysis:'分层论述，从宏观到微观的结构标志'},
      {pattern:'... requires collective effort from ... alike.', analysis:'结尾收束句型，强调多方参与'}
    ]
  },
  { // CET-6
    id:'e004', level:'CET-6', topic:'Work-Life Balance',
    title:'Striking a Balance Between Work and Life',
    fullText: `In contemporary society, the boundary between work and personal life has become increasingly blurred. With smartphones keeping us connected around the clock, many people find it difficult to truly disconnect from their professional responsibilities.

The consequences of poor work-life balance are far-reaching. Physically, prolonged stress can lead to burnout, insomnia, and a weakened immune system. Mentally, it can result in anxiety, depression, and a diminished sense of fulfillment. What is the point of career success if it comes at the expense of one's health and happiness?

On a positive note, an increasing number of companies are recognizing the importance of employee well-being. Flexible working hours, remote work options, and mental health support programs are becoming more common. These measures not only benefit employees but also boost productivity and reduce turnover rates.

From an individual perspective, setting clear boundaries is essential. This may involve designating specific times for checking emails, learning to say no to unreasonable demands, and prioritizing activities that bring genuine joy outside of work.

Ultimately, a meaningful life is not about maximizing productivity at all costs, but about finding harmony between professional ambition and personal fulfillment.`,
    translation: `在当代社会，工作与个人生活的界限变得越来越模糊。智能手机让我们全天候保持联系，许多人发现自己很难真正脱离职业责任。

工作与生活失衡的后果是深远的。身体上，长期的压力可能导致倦怠、失眠和免疫力下降。心理上，它可能导致焦虑、抑郁和成就感的减弱。如果以健康和幸福为代价来换取事业成功，那又有什么意义呢？

积极的一面是，越来越多的公司开始认识到员工福祉的重要性。弹性工作时间、远程办公选项和心理健康支持项目变得越来越普遍。这些措施不仅有利于员工，还能提高生产力并降低员工流失率。

从个人角度来看，设定明确的界限至关重要。这可能包括指定查看邮件的时间、学会拒绝不合理要求、优先考虑工作之外能带来真正快乐的活动。

归根结底，有意义的人生不是不惜一切代价最大化生产力，而是在职业抱负和个人成就之间找到和谐。`,
    vocab: [
      {word:'around the clock', meaning:'全天候地', note:'地道习语，比 all the time 更生动'},
      {word:'far-reaching', meaning:'深远的', note:'CET-6 高频形容词，修饰影响/后果'},
      {word:'at the expense of', meaning:'以……为代价', note:'经典短语，用于批判性论述'},
      {word:'turnover rates', meaning:'员工流失率', note:'商务/管理类话题专业词汇'},
      {word:'at all costs', meaning:'不惜一切代价', note:'强调副词短语，结尾点睛'}
    ],
    patterns: [
      {pattern:'What is the point of ... if ...', analysis:'反问句式，增强批判语气，极具说服力'},
      {pattern:'On a positive note, ...', analysis:'转折引出积极面，平衡论述结构'},
      {pattern:'Ultimately, ... is not about ..., but about ...', analysis:'终极结论句式，否定+肯定的经典收尾'}
    ]
  },
  { // 考研
    id:'e005', level:'考研', topic:'Perseverance and Success',
    title:'The Role of Perseverance in Achieving Success',
    fullText: `Success is a concept that has captivated the human imagination for centuries. While talent, opportunity, and luck all play their parts, it is perseverance\u2014the ability to persist in the face of adversity\u2014that ultimately separates those who achieve their goals from those who fall short.

History is replete with examples of individuals who triumphed not because they were the most gifted, but because they refused to give up. Thomas Edison conducted thousands of failed experiments before inventing the light bulb. J.K. Rowling's Harry Potter manuscript was rejected by twelve publishers before finding a home. These stories share a common thread: relentless determination in the face of repeated failure.

It is important to distinguish between blind stubbornness and intelligent perseverance. The latter involves learning from setbacks, adjusting strategies, and maintaining a growth mindset. As the ancient Chinese saying goes, "Failure is the mother of success." Each setback provides valuable feedback that can guide future efforts.

In the context of academic pursuits, perseverance manifests as the willingness to tackle difficult problems, the discipline to maintain a consistent study schedule, and the resilience to bounce back from disappointing grades. These qualities are arguably more important than raw intelligence.

To conclude, perseverance is not merely a virtue\u2014it is a prerequisite for meaningful achievement. While the path to success is rarely linear, those who keep moving forward, however slowly, will eventually reach their destination.`,
    translation: `成功是一个几个世纪以来一直吸引着人类想象力的概念。虽然天赋、机遇和运气都各有一席之地，但最终将实现目标者与落后者区分开来的，是毅力——即在逆境中坚持的能力。

历史上充满了这样的例子：有人之所以成功，不是因为他们最有天赋，而是因为他们拒绝放弃。爱迪生在发明电灯泡之前进行了数千次失败的实验。J.K.罗琳的《哈利·波特》手稿被十二家出版社拒绝后才找到归宿。这些故事都有一条共同的主线：在反复失败面前展现的不屈决心。

重要的是要区分盲目的固执和聪明的毅力。后者涉及从挫折中学习、调整策略、并保持成长型思维。正如中国古语所说："失败是成功之母。"每一次挫折都提供了有价值的反馈，可以指导未来的努力。

在学术追求的语境中，毅力体现为攻克难题的意愿、保持稳定学习计划的纪律性、以及从令人失望的成绩中恢复的韧性。这些品质可以说比纯粹的智力更为重要。

总而言之，毅力不仅仅是一种美德——它是实现有意义成就的先决条件。虽然成功之路很少是直线的，但那些不断前行的人，无论步伐多慢，最终都会到达目的地。`,
    vocab: [
      {word:'in the face of adversity', meaning:'面对逆境', note:'考研高分短语，可用于各类论述'},
      {word:'replete with', meaning:'充满', note:'比 full of 高级，书面语体'},
      {word:'relentless determination', meaning:'不屈的决心', note:'强情感色彩搭配，打动阅卷人'},
      {word:'growth mindset', meaning:'成长型思维', note:'心理学经典概念，考研热门话题'},
      {word:'prerequisite for', meaning:'……的先决条件', note:'比 necessary for 更正式有力'}
    ],
    patterns: [
      {pattern:'While ..., it is ... that ultimately ...', analysis:'让步+强调复合句，考研大作文经典结构'},
      {pattern:'It is important to distinguish between ... and ...', analysis:'概念辨析句型，体现思辨深度'},
      {pattern:'..., not merely ... \u2014 it is ...', analysis:'递进强调句，用破折号升华主题'}
    ]
  },
  { // 考研
    id:'e006', level:'考研', topic:'Technology and Human Connection',
    title:'Does Technology Bring Us Closer or Drive Us Apart?',
    fullText: `The advent of digital technology has fundamentally transformed the way we communicate. Social media platforms, instant messaging apps, and video conferencing tools have made it possible to stay connected with people across the globe at the touch of a button. Yet, paradoxically, many people report feeling more isolated than ever before.

On the surface, technology appears to bring us closer. Families separated by oceans can share moments in real time. Long-lost friends can reconnect with a simple search. Communities of like-minded individuals can form around shared interests regardless of geographical boundaries.

However, beneath this veneer of connectivity lies a troubling reality. The quality of our interactions has suffered. A "like" on social media is a poor substitute for a genuine conversation. Scrolling through curated highlight reels of others' lives often breeds envy rather than connection. The very tools designed to unite us can, if misused, deepen our sense of alienation.

The key lies not in rejecting technology but in using it mindfully. We must learn to distinguish between meaningful engagement and passive consumption. Setting aside phone-free time for face-to-face interactions, prioritizing depth over breadth in our relationships, and being intentional about how we use digital tools can help us harness the benefits of technology while mitigating its drawbacks.

In the final analysis, technology is a double-edged sword. Whether it brings us closer or drives us apart depends not on the tools themselves, but on how we choose to wield them.`,
    translation: `数字技术的出现从根本上改变了我们的沟通方式。社交媒体平台、即时通讯应用和视频会议工具让我们能够一键联系全球各地的人。然而，矛盾的是，许多人却报告说自己感到前所未有的孤独。

表面上，技术似乎让我们更亲近了。被海洋分隔的家庭可以实时分享生活瞬间。失散多年的朋友可以通过一个简单的搜索重新联系。志同道合的人可以围绕共同兴趣形成社群，不受地理边界的限制。

然而，在这种连接的表象之下，隐藏着一个令人不安的现实。我们互动的质量下降了。社交媒体上的一个"赞"无法替代真正的对话。浏览他人精心策划的生活高光时刻常常滋生羡慕而非连接。这些本为团结我们而设计的工具，如果使用不当，反而会加深我们的疏离感。

关键在于不是拒绝技术，而是有意识地使用它。我们必须学会区分有意义的互动和被动的消费。留出无手机时间用于面对面交流、在人际关系中优先追求深度而非广度、有意识地使用数字工具，这些都能帮助我们在享受技术益处的同时减少其弊端。

归根结底，技术是一把双刃剑。它让我们更亲近还是更疏远，不取决于工具本身，而取决于我们如何使用它们。`,
    vocab: [
      {word:'at the touch of a button', meaning:'一键即可', note:'生动短语，描述科技的便捷性'},
      {word:'beneath the veneer of', meaning:'在……的表象之下', note:'考研级别高级表达，揭示深层问题'},
      {word:'breed envy', meaning:'滋生嫉妒', note:'地道搭配，breed 比 cause 更生动'},
      {word:'mitigate its drawbacks', meaning:'减少其弊端', note:'平衡论述的关键词汇'},
      {word:'a double-edged sword', meaning:'双刃剑', note:'经典比喻，科技话题万能结论'}
    ],
    patterns: [
      {pattern:'On the surface, ... Yet, beneath this veneer lies ...', analysis:'表象vs实质的高级对比结构，极具思辨性'},
      {pattern:'The key lies not in ... but in ...', analysis:'否定+肯定点明核心，简洁有力'},
      {pattern:'Whether ... depends not on ..., but on ...', analysis:'条件判断收尾句型，升华主题的经典写法'}
    ]
  },
  { // CET-4
    id:'e007', level:'CET-4', topic:'Environmental Protection',
    title:'Protecting Our Planet: Everyone\'s Responsibility',
    fullText: `Environmental protection has become one of the most pressing issues of our time. As industrialization and urbanization continue to accelerate, the natural environment is under unprecedented strain. It is high time that every individual took action to protect our planet.

There are several practical steps we can take in our daily lives. First, we should reduce our consumption of single-use plastics by carrying reusable bags, bottles, and containers. A small change in habit can make a significant difference when multiplied by millions of people. Second, conserving energy at home\u2014such as turning off lights when leaving a room and using energy-efficient appliances\u2014can substantially reduce our carbon footprint.

Beyond individual actions, raising public awareness is equally important. Schools should incorporate environmental education into their curricula, teaching students about the importance of sustainability from an early age. Media outlets can also play a vital role by highlighting environmental issues and promoting eco-friendly lifestyles.

In conclusion, protecting the environment is not just the responsibility of governments and large corporations; it is a duty that falls on every one of us. By making conscious choices in our daily lives and spreading awareness, we can contribute to a greener and more sustainable future.`,
    translation: `环境保护已经成为我们这个时代最紧迫的问题之一。随着工业化和城市化不断加速，自然环境正承受着前所未有的压力。现在正是每个人都采取行动保护我们星球的时候了。

在日常生活中，我们可以采取几个切实可行的步骤。首先，我们应该通过携带可重复使用的袋子、瓶子和容器来减少一次性塑料的消费。一个小小的习惯改变，当乘以数百万人时，就能产生显著的差异。其次，在家中节约能源——比如离开房间时关灯、使用节能电器——可以大幅减少我们的碳足迹。

除了个人行动之外，提高公众意识同样重要。学校应将环境教育纳入课程，从小教导学生可持续发展的理念。媒体也可以通过突出环境问题和推广环保生活方式来发挥重要作用。

总之，保护环境不仅仅是政府和大企业的责任，更是落在我们每个人身上的义务。通过在日常生活中做出有意识的选择并传播意识，我们可以为更绿色、更可持续的未来贡献一份力量。`,
    vocab: [
      {word:'under unprecedented strain', meaning:'承受前所未有的压力', note:'CET-4 高分搭配，描述环境现状'},
      {word:'single-use plastics', meaning:'一次性塑料', note:'环保话题核心词汇'},
      {word:'carbon footprint', meaning:'碳足迹', note:'热点环保术语，考试高频'},
      {word:'incorporate ... into', meaning:'将……纳入', note:'比 include 更正式'},
      {word:'falls on every one of us', meaning:'落在我们每个人身上', note:'结尾强调，责任感表达'}
    ],
    patterns: [
      {pattern:'It is high time that ... took action to ...', analysis:'虚拟语气句型，表达紧迫性'},
      {pattern:'By making conscious choices in ..., we can ...', analysis:'方式状语+结果，经典结尾结构'},
      {pattern:'... is not just ...; it is a duty that falls on ...', analysis:'递进强调句，升华个人责任主题'}
    ]
  },
  { // CET-4
    id:'e008', level:'CET-4', topic:'The Value of Teamwork',
    title:'Together We Achieve More',
    fullText: `In today's increasingly interconnected world, the ability to work effectively in a team has become more important than ever. Whether in academic settings, professional environments, or community projects, teamwork is often the key to achieving outstanding results.

The benefits of teamwork are numerous. First and foremost, collaboration brings together diverse perspectives and skill sets. When people with different backgrounds and expertise work together, they can approach problems from multiple angles and generate more creative solutions. As the saying goes, "Two heads are better than one."

Furthermore, teamwork fosters a sense of shared responsibility and mutual support. When facing challenges, team members can encourage one another and share the workload, making difficult tasks more manageable. This not only improves efficiency but also boosts morale and creates a positive working atmosphere.

However, effective teamwork does not happen automatically. It requires clear communication, mutual respect, and a willingness to compromise. Each member must learn to listen actively, express ideas constructively, and put the team's goals above personal preferences when necessary.

In summary, teamwork is an essential skill that benefits both individuals and organizations. By learning to collaborate effectively, we can accomplish far more together than we ever could alone.`,
    translation: `在当今这个日益互联的世界中，有效团队合作的能力变得比以往任何时候都更加重要。无论是在学术环境、职业场所还是社区项目中，团队合作往往是取得卓越成果的关键。

团队合作的好处不胜枚举。首先，协作汇集了多元化的视角和技能组合。当拥有不同背景和专业知识的人一起工作时，他们可以从多个角度看待问题，产生更具创意的解决方案。俗话说："三个臭皮匠，顶个诸葛亮。"

此外，团队合作培养了共同责任感和相互支持的氛围。面对挑战时，团队成员可以互相鼓励、分担工作量，使困难任务更易于管理。这不仅提高了效率，还能提振士气，创造积极的工作氛围。

然而，有效的团队合作并非自然形成。它需要清晰的沟通、相互尊重和妥协的意愿。每个成员都必须学会积极倾听、建设性地表达观点，并在必要时将团队目标置于个人偏好之上。

总之，团队合作是一项对个人和组织都至关重要的技能。通过学会有效协作，我们可以共同实现远超个人能力的成就。`,
    vocab: [
      {word:'diverse perspectives', meaning:'多元视角', note:'比 different views 更正式'},
      {word:'foster a sense of', meaning:'培养……的意识/氛围', note:'CET-4 高频动词搭配'},
      {word:'mutual support', meaning:'相互支持', note:'团队话题核心词汇'},
      {word:'boost morale', meaning:'提振士气', note:'地道管理用语'},
      {word:'put ... above', meaning:'将……置于……之上', note:'表达取舍的实用短语'}
    ],
    patterns: [
      {pattern:'As the saying goes, "..."', analysis:'引用谚语增强说服力，万能论证句型'},
      {pattern:'This not only ... but also ...', analysis:'递进结构，双重强调效果'},
      {pattern:'... does not happen automatically. It requires ...', analysis:'先否定再给出条件，逻辑清晰有力'}
    ]
  },
  { // CET-6
    id:'e009', level:'CET-6', topic:'The Impact of Social Media',
    title:'Social Media: A Blessing or a Curse?',
    fullText: `Social media has become an integral part of modern life, with billions of users worldwide sharing content, connecting with others, and consuming information on a daily basis. While its influence is undeniable, opinions on whether it is a force for good or ill remain deeply divided.

On the positive side, social media has democratized information and given a voice to those who were previously unheard. Grassroots movements, charitable campaigns, and social justice initiatives have all gained momentum through platforms like Twitter and Weibo. Moreover, social media enables people to maintain relationships across vast distances, keeping families and friends connected regardless of geographical barriers.

However, the negative aspects cannot be ignored. The addictive nature of these platforms has been well-documented, with countless users spending hours scrolling through feeds at the expense of real-world interactions. Furthermore, the spread of misinformation, cyberbullying, and the culture of comparison have taken a toll on mental health, particularly among young people.

The way forward lies not in abandoning social media altogether but in developing a healthier relationship with it. This involves setting time limits, curating one's feed to prioritize positive content, and regularly engaging in offline activities. Educational institutions and parents also have a role to play in teaching digital literacy and responsible usage.

Ultimately, social media is what we make of it. Used wisely, it can be a powerful tool for connection and positive change. Used carelessly, it can become a source of stress and division.`,
    translation: `社交媒体已经成为现代生活中不可或缺的一部分，全球数十亿用户每天都在分享内容、与他人联系和消费信息。虽然它的影响力毋庸置疑，但关于它究竟是善还是恶的力量，意见仍然存在深刻分歧。

积极的一面是，社交媒体使信息民主化，让那些之前没有发言权的人有了发声的机会。草根运动、慈善活动和社会正义倡议都通过微博和Twitter等平台获得了动力。此外，社交媒体让人们能够跨越遥远的距离维持关系，让家人和朋友不受地理障碍的限制而保持联系。

然而，负面影响也不容忽视。这些平台的成瘾性已有充分记录，无数用户花费数小时刷信息流，牺牲了现实世界的互动。此外，虚假信息的传播、网络欺凌和攀比文化对心理健康造成了损害，尤其是在年轻人之中。

前进的道路不在于完全抛弃社交媒体，而在于与它建立更健康的关系。这包括设定时间限制、精心管理自己的信息流以优先获取正面内容、以及定期参与线下活动。教育机构和家长在教授数字素养和负责任使用方面也扮演着重要角色。

归根结底，社交媒体掌握在我们自己手中。明智地使用，它可以成为连接和积极改变的强大工具。轻率地使用，它可能成为压力和分裂的来源。`,
    vocab: [
      {word:'an integral part of', meaning:'不可分割的一部分', note:'CET-6 高分搭配'},
      {word:'democratize information', meaning:'使信息民主化', note:'社交媒体话题高频词汇'},
      {word:'at the expense of', meaning:'以……为代价', note:'批判性论述必备短语'},
      {word:'take a toll on', meaning:'对��…造成损害', note:'地道表达，描述负面影响'},
      {word:'digital literacy', meaning:'数字素养', note:'CET-6 新兴热门话题词汇'}
    ],
    patterns: [
      {pattern:'While ..., opinions on whether ... remain deeply divided.', analysis:'让步+争议引入，开篇引出论点'},
      {pattern:'The way forward lies not in ... but in ...', analysis:'解决问题的经典结构，否定+肯定'},
      {pattern:'Used wisely, ... Used carelessly, ...', analysis:'对偶句式，对比论证收尾，极具力度'}
    ]
  },
  { // CET-6
    id:'e010', level:'CET-6', topic:'Cultural Exchange',
    title:'The Importance of Cross-Cultural Communication',
    fullText: `In an era of globalization, cross-cultural communication has become an indispensable skill. As people from different cultural backgrounds interact more frequently than ever before\u2014whether in business, education, or travel\u2014the ability to navigate cultural differences effectively is crucial for building meaningful relationships and avoiding misunderstandings.

One of the primary benefits of cross-cultural communication is that it broadens our worldview. Exposure to different customs, values, and ways of thinking challenges our assumptions and helps us see the world through others' eyes. This not only enriches our personal lives but also enhances our professional competence in an increasingly globalized job market.

However, effective cross-cultural communication is not without challenges. Language barriers, different communication styles, and varying social norms can all lead to confusion and conflict. For instance, what is considered assertive in one culture may be perceived as aggressive in another. Similarly, gestures and body language that are perfectly acceptable in one country may be offensive in another.

To overcome these challenges, we must cultivate cultural intelligence\u2014the ability to adapt and function effectively across different cultural contexts. This involves being open-minded, observant, and willing to learn. Practical steps include studying the customs of other cultures, learning foreign languages, and seeking opportunities for genuine cultural immersion.

In conclusion, cross-cultural communication is not merely a useful skill for international travelers or businesspeople; it is an essential competency for anyone living in today's interconnected world. By embracing cultural diversity and learning to communicate across boundaries, we can build bridges of understanding that benefit us all.`,
    translation: `在全球化时代，跨文化交流已成为一项不可或缺的技能。随着来自不同文化背景的人们比以往任何时候都更频繁地互动——无论是在商务、教育还是旅行中——有效地处理文化差异的能力对于建立有意义的关系和避免误解至关重要。

跨文化交流的主要好处之一是它拓宽了我们的世界观。接触不同的习俗、价值观和思维方式挑战了我们的假设，帮助我们通过他人的眼睛看世界。这不仅丰富了我们的个人生活，也提升了我们在日益全球化的就业市场中的职业竞争力。

然而，有效的跨文化交流并非没有挑战。语言障碍、不同的沟通风格和各异的社会规范都可能导致困惑和冲突。例如，在一种文化中被认为是自信果断的行为，在另一种文化中可能被视为咄咄逼人。同样，在一个国家完全可接受的手势和身体语言，在另一个国家可能具有冒犯性。

为了克服这些挑战，我们必须培养文化智商——即在不同文化背景下适应和有效运作的能力。这需要开放的心态、细致的观察力和学习的意愿。具体步骤包括学习其他文化的习俗、学习外语、以及寻找真正的文化沉浸机会。

总之，跨文化交流不仅仅是国际旅行者或商务人士的有用技能；对于生活在当今互联世界中的任何人来说，它都是必不可少的能力。通过拥抱文化多样性和学会跨越界限进行沟通，我们可以搭建理解之桥，使我们所有人受益。`,
    vocab: [
      {word:'indispensable', meaning:'不可或缺的', note:'CET-6 高频词，比 necessary 更强'},
      {word:'navigate cultural differences', meaning:'处理文化差异', note:'地道搭配，navigate 比 deal with 更生动'},
      {word:'cultural intelligence', meaning:'文化智商', note:'新兴学术概念，CET-6 加分词汇'},
      {word:'cultural immersion', meaning:'文化沉浸', note:'描述深度跨文化体验的精准表达'},
      {word:'build bridges of understanding', meaning:'搭建理解之桥', note:'隐喻修辞，结尾升华主题'}
    ],
    patterns: [
      {pattern:'In an era of ..., ... has become an indispensable ...', analysis:'时代背景引出主题，万能开头句型'},
      {pattern:'... is not without challenges. ... can all lead to ...', analysis:'承认挑战 + 具体展开，辩证论述结构'},
      {pattern:'... is not merely ...; it is an essential competency for ...', analysis:'否定+肯定递进，升华主题的经典结尾'}
    ]
  },
  { // 考研
    id:'e011', level:'考研', topic:'Integrity and Trust',
    title:'Integrity: The Foundation of a Meaningful Life',
    fullText: `Integrity is a virtue that transcends cultures, professions, and generations. It refers to the quality of being honest and having strong moral principles, and it serves as the bedrock upon which trust\u2014both personal and societal\u2014is built. In a world where shortcuts and compromises are often tempting, maintaining one's integrity is both a moral imperative and a practical necessity.

At the individual level, integrity shapes character and defines reputation. A person of integrity is someone whose words align with their actions, who keeps promises even when it is inconvenient, and who does the right thing even when no one is watching. Such individuals earn the respect and trust of those around them, which opens doors to opportunities that dishonesty never can.

At the societal level, integrity is equally crucial. When institutions\u2014whether governments, corporations, or educational bodies\u2014operate with integrity, they foster public trust and social cohesion. Conversely, when integrity is compromised, the resulting erosion of trust can have far-reaching consequences, from economic instability to social unrest.

Cultivating integrity requires conscious effort. It involves self-reflection, the courage to admit mistakes, and the willingness to accept short-term losses for long-term gains. Educational systems should emphasize character education alongside academic achievement, teaching students that success without integrity is ultimately hollow.

In the final analysis, integrity is not just a personal virtue but a social asset. In the words of Warren Buffett, "In looking for people to hire, you look for three qualities: integrity, intelligence, and energy. And if they don't have the first, the other two will kill you."`,
    translation: `诚信是一种超越文化、职业和世代的品德。它指的是诚实和拥有坚定道德原则的品质，是个人和社会信任的基石。在一个捷径和妥协往往充满诱惑的世界里，保持诚信既是道德上的必然要求，也是实际上的必要选择。

在个人层面，诚信塑造品格，定义声誉。一个诚信的人是言行一致的人，是即使不方便也信守承诺的人，是在无人监督时仍做正确之事的人。这样的人赢得周围人的尊重和信任，这为他们打开了不诚实永远无法打开的机会之门。

在社会层面，诚信同样至关重要。当各类机构——无论是政府、企业还是教育机构——以诚信运作时，它们能促进公众信任和社会凝聚力。相反，当诚信失守时，由此产生的信任侵蚀可能带来深远的后果，从经济不稳定到社会动荡。

培养诚信需要刻意的努力。它涉及自我反省、承认错误的勇气以及愿意为长远利益接受短期损失。教育体系应在学业成就之外强调品格教育，教导学生没有诚信的成功归根结底是空洞的。

最终分析来看，诚信不仅是个人美德，更是一种社会资产。用沃伦·巴菲特的话说："在寻找人才时，你寻找三种品质：诚信、智慧和精力。如果他们没有第一种，另外两种会毁了你。"`,
    vocab: [
      {word:'transcend', meaning:'超越', note:'考研高频词，表达跨越界限'},
      {word:'the bedrock upon which ... is built', meaning:'……赖以建立的基础', note:'高级比喻表达'},
      {word:'words align with their actions', meaning:'言行一致', note:'比 actions match words 更书面'},
      {word:'erosion of trust', meaning:'信任的侵蚀', note:'earthquake 级别词汇搭配'},
      {word:'ultimately hollow', meaning:'最终是空洞的', note:'极具力量的批判性表达'}
    ],
    patterns: [
      {pattern:'... is a virtue that transcends ...', analysis:'定义式开篇，以超越性强调主题重要性'},
      {pattern:'At the individual level ... At the societal level ...', analysis:'分层论述，从微观到宏观，结构清晰'},
      {pattern:'In the words of XX, "..."', analysis:'引用名人名言收尾，增强权威性和说服力'}
    ]
  },
  { // 考研
    id:'e012', level:'考研', topic:'Dreams and Reality',
    title:'Bridging the Gap Between Dreams and Reality',
    fullText: `Every great achievement begins with a dream. Throughout history, visionaries who dared to imagine a different future\u2014from the Wright brothers envisioning human flight to Steve Jobs dreaming of a computer in every home\u2014have propelled humanity forward. However, a dream without action remains nothing more than a fantasy. The real challenge lies in bridging the gap between aspiration and achievement.

The first step in turning dreams into reality is to translate vague ambitions into concrete goals. A dream of "becoming successful" is too abstract to be actionable. Breaking it down into specific, measurable, and time-bound objectives\u2014such as completing a degree, acquiring a particular skill, or launching a project by a certain date\u2014makes the path forward visible and attainable.

Equally important is the willingness to embrace failure as part of the journey. The road from dream to reality is rarely a straight line. Setbacks, rejections, and disappointments are not signs that one should give up; rather, they are valuable learning experiences that refine our approach and strengthen our resolve. Thomas Edison's famous remark\u2014"I have not failed. I've just found 10,000 ways that won't work"\u2014captures this spirit perfectly.

Furthermore, surrounding oneself with supportive and like-minded individuals can make a significant difference. Mentors provide guidance, peers offer encouragement, and collaborators bring complementary skills. No great achievement is accomplished in complete isolation.

To conclude, dreams give us direction, but it is disciplined action, resilience in the face of setbacks, and the support of others that turn those dreams into reality. Dream big, plan carefully, and act persistently\u2014these are the three pillars of turning the impossible into the inevitable.`,
    translation: `每一项伟大的成就都始于一个梦想。纵观历史，那些敢于想象不同未来的远见者——从莱特兄弟想象人类飞行到史蒂夫·乔布斯梦想每家每户都有一台电脑——推动了人类前进。然而，没有行动的梦想不过是空想。真正的挑战在于弥合愿望与成就之间的鸿沟。

将梦想变为现实的第一步，是把模糊的志向转化为具体的目标。"变得成功"这样的梦想太过抽象，难以付诸行动。将其分解为具体、可衡量、有时限的目标——比如完成一个学位、掌握某项技能、或在某个日期前启动一个项目——让前进的道路变得可见且可及。

同样重要的是愿意将失败视为旅程的一部分。从梦想到现实的道路很少是直线型的。挫折、拒绝和失望并不是应该放弃的信号；相反，它们是宝贵的学习经历，能够完善我们的方法并坚定我们的决心。爱迪生的名言——"我没有失败。我只是找到了一万种行不通的方法。"——完美地诠释了这种精神。

此外，让自己周围环绕着支持和志同道合的人可以带来显著的改变。导师提供指引，同伴给予鼓励，合作者带来互补的技能。没有任何伟大的成就是在完全孤立中完成的。

总而言之，梦想给了我们方向，但将梦想变为现实的是有纪律的行动、面对挫折的韧性和他人的支持。敢于梦想、精心规划、坚持不懈——这是将不可能变为必然的三大支柱。`,
    vocab: [
      {word:'visionaries', meaning:'远见者', note:'考研级别高级词汇'},
      {word:'bridge the gap between', meaning:'弥合……之间的鸿沟', note:'经典高分搭配'},
      {word:'translate ... into ...', meaning:'将……转化为……', note:'比 change/turn 更书面'},
      {word:'complementary skills', meaning:'互补的技能', note:'团队合作话题核心词汇'},
      {word:'the inevitable', meaning:'必然之事', note:'高级收尾用词，极具力度'}
    ],
    patterns: [
      {pattern:'Every great achievement begins with ... However, ... remains nothing more than ...', analysis:'先扬后抑，引出核心论点'},
      {pattern:'... are not signs that ...; rather, they are ...', analysis:'否定+肯定对照，深化论证'},
      {pattern:'Dream big, plan carefully, and act persistently\u2014these are the three pillars of ...', analysis:'三词排比 + 破折号总结，气势十足的收尾'}
    ]
  }
];

// ======== 翻译练习数据池 ========
const transPool = [
  { // C-E CET-6
    id:'t001', type:'C-E', level:'CET-6',
    sourceText: `中国书法是中国传统文化的瑰宝，拥有数千年的历史。它不仅是一种书写方式，更是一种艺术形式，体现了书写者的个性和情感。许多中国人从小就开始练习书法，认为它能培养耐心和专注力。近年来，随着中国文化在世界范围内的传播，越来越多的外国人也开始对学习中国书法产生兴趣。`,
    answerText: `Chinese calligraphy is a <span class="trans-hl-vocab">treasure</span> of traditional Chinese culture, with a history of <span class="trans-hl-vocab">thousands of years</span>. It is not only a way of writing, but also an art form that <span class="trans-hl-grammar">reflects</span> the personality and emotions of the writer. Many Chinese people begin practicing calligraphy <span class="trans-hl-structure">from an early age</span>, believing that it can <span class="trans-hl-idiom">cultivate patience and concentration</span>. In recent years, with the <span class="trans-hl-vocab">spread</span> of Chinese culture around the world, an increasing number of foreigners have also <span class="trans-hl-grammar">developed an interest in</span> learning Chinese calligraphy.`,
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'treasure, thousands of years, spread'},
      {color:'grammar', label:'语法重点', desc:'reflects (主谓一致), developed an interest in (短语搭配)'},
      {color:'structure', label:'句式亮点', desc:'from an early age (时间状语后置)'},
      {color:'idiom', label:'地道表达', desc:'cultivate patience and concentration'}
    ]
  },
  { // C-E 考研
    id:'t002', type:'C-E', level:'考研',
    sourceText: `近年来，随着经济的快速发展和城市化进程的加快，中国的环境问题日益突出。空气污染、水资源短缺和垃圾处理已经成为城市居民最关心的问题之一。为了应对这些挑战，政府已经出台了一系列政策措施，包括推广清洁能源、提高排放标准和加强环境保护法的执行力度。与此同时，公众的环保意识也在逐步提高，越来越多的人开始选择绿色出行和低碳生活方式。`,
    answerText: `In recent years, with the <span class="trans-hl-vocab">rapid economic development</span> and <span class="trans-hl-vocab">accelerating urbanization</span>, China's environmental problems have become <span class="trans-hl-idiom">increasingly prominent</span>. Air pollution, water shortages, and waste disposal have become <span class="trans-hl-structure">among the top concerns</span> of urban residents. To <span class="trans-hl-vocab">address</span> these challenges, the government has <span class="trans-hl-grammar">introduced a series of</span> policy measures, including promoting clean energy, raising emission standards, and <span class="trans-hl-grammar">strengthening the enforcement</span> of environmental protection laws. Meanwhile, public <span class="trans-hl-vocab">awareness</span> of environmental protection has been <span class="trans-hl-idiom">gradually increasing</span>, and a growing number of people are choosing green commuting and low-carbon lifestyles.`,
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'accelerating urbanization, address, awareness'},
      {color:'grammar', label:'语法重点', desc:'have become (现在完成时), strengthening the enforcement (动名词)'},
      {color:'structure', label:'句式亮点', desc:'among the top concerns (介词短语作表语)'},
      {color:'idiom', label:'地道表达', desc:'increasingly prominent, gradually increasing'}
    ]
  },
  { // C-E CET-6
    id:'t003', type:'C-E', level:'CET-6',
    sourceText: `移动支付已经深刻改变了中国人的日常生活。无论是在大型商场还是街头小摊，人们都可以通过扫描二维码完成支付，无需携带现金或银行卡。这种支付方式不仅方便快捷，还提高了交易的安全性。据统计，中国移动支付的普及率已经超过85%，位居世界前列。此外，移动支付还催生了共享经济、在线医疗等一系列新业态，为经济发展注入了新的活力。`,
    answerText: `Mobile payment has <span class="trans-hl-vocab">profoundly transformed</span> the daily lives of Chinese people. Whether in large shopping malls or at street stalls, people can complete payments by <span class="trans-hl-idiom">scanning QR codes</span>, without needing to carry cash or bank cards. This payment method is not only <span class="trans-hl-structure">convenient and efficient</span>, but also <span class="trans-hl-grammar">enhances</span> transaction security. According to statistics, the <span class="trans-hl-vocab">penetration rate</span> of mobile payment in China has <span class="trans-hl-grammar">exceeded</span> 85%, <span class="trans-hl-structure">ranking among the top in the world</span>. Furthermore, mobile payment has also <span class="trans-hl-idiom">given rise to</span> a series of new business forms such as the sharing economy and online healthcare, <span class="trans-hl-grammar">injecting new vitality into</span> economic development.`,
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'profoundly transformed, penetration rate'},
      {color:'grammar', label:'语法重点', desc:'has exceeded (现在完成时), injecting (现在分词作伴随状语)'},
      {color:'structure', label:'句式亮点', desc:'convenient and efficient (形容词并列), ranking among the top (分词短语作状语)'},
      {color:'idiom', label:'地道表达', desc:'scanning QR codes, given rise to, injecting new vitality into'}
    ]
  },
  { // E-C CET-6
    id:'t004', type:'E-C', level:'CET-6',
    sourceText: `The concept of lifelong learning has gained widespread recognition in the 21st century. As technology continues to evolve at an unprecedented pace, the skills that were relevant a decade ago may no longer be sufficient today. This means that individuals must constantly update their knowledge and acquire new competencies to remain competitive in the job market. Moreover, lifelong learning is not limited to professional development; it also encompasses personal growth, cultural enrichment, and the pursuit of intellectual curiosity. In an era of rapid change, the ability to learn, unlearn, and relearn is perhaps the most valuable skill one can possess.`,
    answerText: `终身学习的理念在21世纪已经获得了<span class="trans-hl-vocab">广泛认可</span>。随着技术以<span class="trans-hl-vocab">前所未有的速度</span>持续发展，十年前还<span class="trans-hl-grammar">适用</span>的技能今天可能已经不够用了。这意味着个人必须不断更新知识、获取新能力，才能在就业市场上<span class="trans-hl-idiom">保持竞争力</span>。此外，终身学习不仅仅限于职业发展，它还<span class="trans-hl-vocab">涵盖</span>了个人成长、文化修养和对求知欲的追求。在这个快速变化的时代，<span class="trans-hl-structure">学会学习、学会忘记、学会再学习</span>的能力，也许是一个人所能拥有的最宝贵的技能。`,
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'广泛认可 (widespread recognition), 前所未有的速度 (unprecedented pace), 涵盖 (encompass)'},
      {color:'grammar', label:'语法重点', desc:'were relevant (过去时), may no longer be (情态动词+否定)'},
      {color:'structure', label:'句式亮点', desc:'learn, unlearn, and relearn (三词排比，翻译需保留节奏)'},
      {color:'idiom', label:'地道表达', desc:'保持竞争力 (remain competitive), 个人成长 (personal growth)'}
    ]
  },
  { // E-C 考研
    id:'t005', type:'E-C', level:'考研',
    sourceText: `The relationship between economic growth and environmental protection has long been a subject of heated debate. Proponents of unrestricted development argue that economic prosperity should take precedence, as it lifts people out of poverty and improves living standards. However, a growing body of evidence suggests that environmental degradation ultimately undermines the very foundation of economic activity. Depleted natural resources, polluted air and water, and the increasing frequency of extreme weather events all impose enormous costs on society. The challenge, therefore, is not to choose between growth and sustainability, but to find a model of development that reconciles the two.`,
    answerText: `经济增长与环境保护之间的关系长期以来一直是<span class="trans-hl-vocab">激烈争论</span>的话题。支持无限制发展的人认为，经济繁荣应该<span class="trans-hl-vocab">优先</span>考虑，因为它能帮助人们摆脱贫困、提高生活水平。然而，<span class="trans-hl-idiom">越来越多的证据</span>表明，环境退化最终会<span class="trans-hl-grammar">破坏</span>经济活动本身的根基。枯竭的自然资源、受污染的空气和水、以及日益频繁的极端天气事件，都对社会造成了<span class="trans-hl-vocab">巨大的代价</span>。因此，挑战不在于在增长与可持续性之间<span class="trans-hl-structure">做出选择</span>，而在于找到一种能够<span class="trans-hl-vocab">调和</span>二者的发展模式。`,
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'激烈争论 (heated debate), 优先 (take precedence), 调和 (reconcile)'},
      {color:'grammar', label:'语法重点', desc:'has long been (现在完成时+long), ultimately undermines (副词+动词)'},
      {color:'structure', label:'句式亮点', desc:'not to choose ... but to find (否定+肯定对照)'},
      {color:'idiom', label:'地道表达', desc:'a growing body of evidence, imposes enormous costs on'}
    ]
  },
  { // E-C 考研
    id:'t006', type:'E-C', level:'考研',
    sourceText: `Artificial intelligence is reshaping industries at a pace that few could have predicted a decade ago. From healthcare diagnostics to autonomous vehicles, AI-powered systems are demonstrating capabilities that rival or even surpass human performance in specific domains. While this technological revolution brings immense opportunities\u2014improved efficiency, personalized services, and scientific breakthroughs\u2014it also raises profound ethical questions. How do we ensure that AI systems are fair and unbiased? What happens to workers whose jobs are automated? These are not merely technical challenges; they are questions about the kind of society we want to build.`,
    answerText: `人工智能正在以<span class="trans-hl-vocab">十年前几乎无人能预测的速度</span>重塑各行各业。从医疗诊断到自动驾驶汽车，AI驱动的系统在特定领域展现出<span class="trans-hl-idiom">媲美甚至超越</span>人类表现的能力。虽然这场技术革命带来了巨大机遇——提高效率、个性化服务和科学突破——但它也引发了<span class="trans-hl-vocab">深刻的伦理问题</span>。我们如何确保AI系统是<span class="trans-hl-grammar">公平且无偏见</span>的？那些工作被自动化取代的劳动者该怎么办？这些不仅仅是<span class="trans-hl-structure">技术挑战</span>，更是关于我们想要建设什么样的社会的问题。`,
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'few could have predicted, profound ethical questions, immense opportunities'},
      {color:'grammar', label:'语法重点', desc:'could have predicted (虚拟语气), are not merely ... they are (递进否定)'},
      {color:'structure', label:'句式亮点', desc:'破折号列举 + 反问句增强论述'},
      {color:'idiom', label:'地道表达', desc:'rival or even surpass, at a pace that, raises questions'}
    ]
  },
  { // C-E CET-6
    id:'t007', type:'C-E', level:'CET-6',
    sourceText: '中国的高铁网络是世界上最庞大、最先进的高速铁路系统。自2008年第一��高铁线路开通以来，中国高铁的运营里程已经超过4万公里，覆盖了全国大部分主要城市。高铁不仅大大缩短了城市之间的旅行时间，还促进了沿线地区的经济发展和人员流动。如今，乘坐高铁出行已经成为中国人日常生活的一部分，其便捷、舒适和准时的特点深受乘客喜爱。',
    answerText: 'China\'s high-speed rail network is the <span class="trans-hl-vocab">largest and most advanced</span> high-speed railway system in the world. Since the first high-speed rail line <span class="trans-hl-grammar">was launched</span> in 2008, the <span class="trans-hl-vocab">operational mileage</span> of China\'s high-speed rail has <span class="trans-hl-grammar">exceeded</span> 40,000 kilometers, covering most major cities across the country. High-speed rail has not only greatly <span class="trans-hl-vocab">shortened</span> travel time between cities, but also <span class="trans-hl-idiom">boosted</span> economic development and <span class="trans-hl-idiom">personnel mobility</span> in areas along the routes. Nowadays, traveling by high-speed rail has become <span class="trans-hl-structure">a part of daily life</span> for Chinese people, and its <span class="trans-hl-grammar">convenience, comfort, and punctuality</span> are deeply <span class="trans-hl-idiom">appreciated by</span> passengers.',
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'operational mileage, shortened, exceeded'},
      {color:'grammar', label:'语法重点', desc:'was launched (被动语态), convenience, comfort, and punctuality (名词并列)'},
      {color:'structure', label:'句式亮点', desc:'a part of daily life (介词短语作表语)'},
      {color:'idiom', label:'地道表达', desc:'boosted economic development, personnel mobility, appreciated by'}
    ]
  },
  { // C-E 考研
    id:'t008', type:'C-E', level:'考研',
    sourceText: '中医是中华文明的瑰宝，拥有数千年的悠久历史。它以阴阳平衡和五行学说为理论基础，强调人体是一个有机的整体，各个部分相互联系、相互影响。中医的治疗方法多种多样，包括针灸、推拿、中药和食疗等。近年来，随着人们对健康和自然疗法的关注度不断提高，中医在世界范围内获得了越来越多的认可。许多国家已将针灸纳入其医疗保险体系，这充分证明了中医的价值和影响力。',
    answerText: 'Traditional Chinese Medicine (TCM) is a <span class="trans-hl-vocab">treasure</span> of Chinese civilization, with a <span class="trans-hl-vocab">long history</span> of thousands of years. It is <span class="trans-hl-grammar">based on</span> the theories of yin-yang balance and the five elements, <span class="trans-hl-idiom">emphasizing</span> that the human body is an <span class="trans-hl-vocab">organic whole</span> in which all parts are interconnected and <span class="trans-hl-vocab">mutually influential</span>. TCM\'s treatment methods are <span class="trans-hl-structure">diverse and varied</span>, including acupuncture, tuina massage, herbal medicine, and dietary therapy. In recent years, with <span class="trans-hl-idiom">growing attention</span> to health and natural therapies, TCM has gained <span class="trans-hl-idiom">increasing recognition</span> worldwide. Many countries have <span class="trans-hl-grammar">incorporated</span> acupuncture into their medical insurance systems, which <span class="trans-hl-structure">fully demonstrates</span> the value and influence of TCM.',
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'treasure, organic whole, mutually influential'},
      {color:'grammar', label:'语法重点', desc:'is based on (被动语态), have incorporated (现在完成时)'},
      {color:'structure', label:'句式亮点', desc:'diverse and varied (近义词并列增强表达), fully demonstrates (副词修饰)'},
      {color:'idiom', label:'地道表达', desc:'growing attention, increasing recognition'}
    ]
  },
  { // C-E CET-6
    id:'t009', type:'C-E', level:'CET-6',
    sourceText: '北京的胡同是这座城市最具特色的文化遗产之一。这些狭窄的小巷大多建于元、明、清三个朝代，见证了北京数百年的历史变迁。胡同不仅是居民的生活空间，更是一种独特的社区文化。在这里，邻里之间关系密切，孩子们在巷子里玩耍，老人们坐在门口聊天，构成了一幅温馨的生活画卷。然而，随着城市现代化进程的推进，许多胡同面临被拆除的危险。如何平衡城市发展与文化遗产保护，已经成为一个亟待解决的问题。',
    answerText: 'Beijing\'s hutongs are <span class="trans-hl-structure">one of the most distinctive</span> cultural heritages of this city. These narrow alleys were mostly <span class="trans-hl-grammar">built during</span> the Yuan, Ming, and Qing dynasties, <span class="trans-hl-grammar">witnessing</span> hundreds of years of historical changes in Beijing. Hutongs are not only living spaces for residents, but also a <span class="trans-hl-vocab">unique community culture</span>. Here, neighbors maintain <span class="trans-hl-idiom">close relationships</span>, children play in the alleys, and the elderly sit at doorways chatting, <span class="trans-hl-idiom">forming a heartwarming picture of life</span>. However, with the <span class="trans-hl-vocab">advancement of urban modernization</span>, many hutongs are facing the <span class="trans-hl-vocab">risk of demolition</span>. How to <span class="trans-hl-idiom">strike a balance between</span> urban development and cultural heritage preservation has become an <span class="trans-hl-vocab">urgent issue</span> to be addressed.',
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'distinctive, advancement of, demolition, urgent issue'},
      {color:'grammar', label:'语法重点', desc:'were built (过去被动), witnessing (现在分词作伴随状语)'},
      {color:'structure', label:'句式亮点', desc:'one of the most distinctive (最高级), forming a heartwarming picture (分词短语)'},
      {color:'idiom', label:'地道表达', desc:'close relationships, strike a balance between'}
    ]
  },
  { // E-C CET-6
    id:'t010', type:'E-C', level:'CET-6',
    sourceText: 'Time management is a skill that separates highly effective individuals from those who constantly feel overwhelmed. The key principle is not to work harder, but to work smarter by prioritizing tasks based on their importance and urgency. One widely adopted method is the Eisenhower Matrix, which categorizes tasks into four quadrants: urgent and important, important but not urgent, urgent but not important, and neither urgent nor important. Research shows that people who spend most of their time on important-but-not-urgent activities such as planning, learning, and relationship building tend to achieve better long-term results. In contrast, those who are constantly firefighting urgent but unimportant tasks often find themselves trapped in a cycle of busyness without meaningful progress.',
    answerText: '时间管理是将<span class="trans-hl-vocab">高效能人士</span>与那些<span class="trans-hl-idiom">经常感到不堪重负的人</span>区分开来的一项技能。其核心原则不是<span class="trans-hl-grammar">更努力地工作</span>，而是根据任务的重要性和紧急性进行<span class="trans-hl-vocab">优先级排序</span>，从而<span class="trans-hl-structure">更聪明地工作</span>。一个被广泛采用的方法是<span class="trans-hl-vocab">艾森豪威尔矩阵</span>，它将任务分为四个象限：紧急且重要、重要但不紧急、紧急但不重要、既不紧急也不重要。研究表明，将大部分时间花在<span class="trans-hl-grammar">重要但不紧急</span>的活动上的人——如规划、学习和关系建立——往往能取得<span class="trans-hl-idiom">更好的长期成果</span>。相比之下，那些不断<span class="trans-hl-idiom">疲于应付</span>紧急但不重要的任务的人，常常发现自己陷入了<span class="trans-hl-structure">忙碌而无实质进展的循环</span>。',
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'高效能人士 (highly effective individuals), 优先级排序 (prioritizing), 艾森豪威尔矩阵 (Eisenhower Matrix)'},
      {color:'grammar', label:'语法重点', desc:'not to work harder, but to work smarter (对比不定式), tend to (表示倾向)'},
      {color:'structure', label:'句式亮点', desc:'a cycle of busyness without meaningful progress (抽象名词短语)'},
      {color:'idiom', label:'地道表达', desc:'constantly feel overwhelmed, firefighting tasks, trapped in a cycle'}
    ]
  },
  { // E-C 考研
    id:'t011', type:'E-C', level:'考研',
    sourceText: 'The concept of delayed gratification, the ability to resist the temptation of an immediate reward in favor of a later, often greater reward, has been identified by psychologists as one of the most reliable predictors of long-term success. The famous Stanford marshmallow experiment demonstrated that children who could wait longer for a preferred treat tended to have better life outcomes decades later, including higher academic achievement and healthier body weight. In the modern world, the ability to delay gratification is more important than ever, as we are constantly bombarded with distractions and instant pleasures. Developing this capacity requires conscious practice: setting long-term goals, breaking them into manageable steps, celebrating small wins along the way, and reminding oneself that the satisfaction derived from meaningful achievement far outweighs the fleeting pleasure of instant gratification.',
    answerText: '<span class="trans-hl-vocab">延迟满足</span>的概念，即抵制即时奖励的诱惑以换取之后通常更大的回报的能力，已被心理学家认定为<span class="trans-hl-grammar">预测长期成功的最可靠指标之一</span>。著名的<span class="trans-hl-vocab">斯坦福棉花糖实验</span>表明，那些能为更喜欢的零食等待更长时间的儿童，几十年后往往拥有<span class="trans-hl-idiom">更好的人生成果</span>，包括更高的学业成就和更健康的体重。在现代世界，延迟满足的能力<span class="trans-hl-structure">比以往任何时候都更加重要</span>，因为我们不断被干扰和即时享乐所<span class="trans-hl-vocab">轰炸</span>。培养这种能力需要<span class="trans-hl-idiom">刻意的练习</span>：设定长期目标、将其分解为可管理的步骤、在过程中庆祝小成就、并提醒自己，有意义成就带来的满足感<span class="trans-hl-grammar">远远超过</span>即时满足的短暂快感。',
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'延迟满足 (delayed gratification), 棉花糖实验 (marshmallow experiment), bombarded (轰炸)'},
      {color:'grammar', label:'语法重点', desc:'one of the most reliable predictors (最高级), far outweighs (副词+动词强调)'},
      {color:'structure', label:'句式亮点', desc:'as we are constantly bombarded with (as引导的原因状语从句)'},
      {color:'idiom', label:'地道表达', desc:'life outcomes, in favor of, conscious practice, fleeting pleasure'}
    ]
  },
  { // E-C 考研
    id:'t012', type:'E-C', level:'考研',
    sourceText: 'The power of habit is one of the most underappreciated forces in human behavior. According to research, approximately 40% of our daily actions are not conscious decisions but automatic habits. This means that the quality of our lives is, to a large extent, determined by the quality of our habits. The good news is that habits can be deliberately cultivated and reshaped through a process known as the habit loop, which consists of three elements: a cue that triggers the behavior, the routine itself, and a reward that reinforces it. By understanding this mechanism, we can systematically replace undesirable habits with beneficial ones. The key is to start small, as attempting to overhaul one\'s entire lifestyle overnight is a recipe for failure, and to be patient, as research suggests that it takes an average of 66 days for a new behavior to become automatic.',
    answerText: '<span class="trans-hl-vocab">习惯的力量</span>是人类行为中<span class="trans-hl-idiom">最被低估的力量之一</span>。据研究，我们每天大约有40%的行动不是有意识的决定，而是<span class="trans-hl-vocab">自动化的习惯</span>。这意味着我们生活的质量在很大程度上取决于我们习惯的质量。好消息是，习惯可以通过一个被称为<span class="trans-hl-vocab">习惯回路</span>的过程<span class="trans-hl-grammar">有意识地培养和重塑</span>，该过程由三个要素组成：<span class="trans-hl-structure">触发行为的暗示</span>、行为本身、以及<span class="trans-hl-vocab">强化它的奖励</span>。通过理解这一机制，我们可以<span class="trans-hl-idiom">系统性地</span>用有益的习惯取代不良习惯。关键在于<span class="trans-hl-grammar">从小处着手</span>——试图一夜之间彻底改变整个生活方式的<span class="trans-hl-structure">做法注定会失败</span>——并且要有耐心，因为研究表明，一种新行为平均需要66天才能变得自动化。',
    highlights: [
      {color:'vocab', label:'高级词汇', desc:'underappreciated, automatic, deliberately cultivated, reinforce, overhaul'},
      {color:'grammar', label:'语法重点', desc:'is determined by (被动语态), to be patient (不定式作表语)'},
      {color:'structure', label:'句式亮点', desc:'is a recipe for failure (比喻结构), it takes an average of 66 days (it作形式主语)'},
      {color:'idiom', label:'地道表达', desc:'to a large extent, the good news is that, start small, a recipe for failure'}
    ]
  }
];

// ======== 用户控制更新 & 学习追踪 ========
var STORAGE_KEY_ESSAY = 'wb_learned_essays';
var STORAGE_KEY_TRANS = 'wb_learned_trans';
var STORAGE_KEY_CUSTOM_ESSAY = 'wb_custom_essays';
var STORAGE_KEY_CUSTOM_TRANS = 'wb_custom_trans';
var STORAGE_KEY_ESSAY_BATCH = 'wb_essay_batch';
var STORAGE_KEY_TRANS_BATCH = 'wb_trans_batch';

function getLearned(key) {
  try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : []; } catch(e) { return []; }
}
function setLearned(key, arr) {
  try { localStorage.setItem(key, JSON.stringify(arr)); } catch(e) {}
}
function getCustomData(key) {
  try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : []; } catch(e) { return []; }
}
function setCustomData(key, arr) {
  try { localStorage.setItem(key, JSON.stringify(arr)); } catch(e) {}
}
function getBatchId(key) {
  try { return localStorage.getItem(key) || ''; } catch(e) { return ''; }
}
function setBatchId(key, id) {
  try { localStorage.setItem(key, id); } catch(e) {}
}

// 当前批次显示的ID列表（避免重复渲染同批）
var currentEssayBatch = [];
var currentTransBatch = [];

// ======== 好文推荐渲染（用户控制更新，3 篇一批） ========
function renderEssays() {
  var container = document.getElementById('essayList');
  if (!container) return;

  var learnedIds = getLearned(STORAGE_KEY_ESSAY);
  var customData = getCustomData(STORAGE_KEY_CUSTOM_ESSAY);
  var fullPool = essayPool.concat(customData);
  // 过滤掉已学完的
  var available = fullPool.filter(function(e) { return learnedIds.indexOf(e.id) === -1; });

  var today = new Date();
  var dateStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
  var weekdayNames = ['日','一','二','三','四','五','六'];
  var weekday = weekdayNames[today.getDay()];

  // 每批 3 篇
  var batchSize = 3;
  var headerEl = document.getElementById('essayDailyHeader');

  if (available.length === 0) {
    // 全部学完了
    if (headerEl) {
      headerEl.innerHTML = '<span class="badge" style="background:#7F77DD;">\u{1F4DD} 好文推荐</span>' +
        '<span style="font-size:13px;color:var(--accent-green);font-weight:500;">\u{1F389} 恭喜！已学完全部 ' + fullPool.length + ' 篇范文！</span>' +
        '<button class="refresh-batch-btn" onclick="resetEssayProgress()">\u{1F504} 重置进度，重新学习</button>';
    }
    container.innerHTML = '';
    return;
  }

  // 检查是否有尚未完成的本批（用户之前开始但未完成）
  var savedBatch = getBatchId(STORAGE_KEY_ESSAY_BATCH);
  var batchIds;
  if (savedBatch) {
    try { batchIds = JSON.parse(savedBatch); } catch(e) { batchIds = null; }
  }
  // 验证保存的批次是否仍然有效（ID都还在available中）
  var batchValid = batchIds && batchIds.length === batchSize && batchIds.every(function(id) {
    return available.some(function(e) { return e.id === id; });
  });

  if (!batchValid) {
    // 需要选新的一批
    var rng = seededRandom('essay_batch_' + Date.now());
    var pool = available.slice();
    batchIds = [];
    for (var i = 0; i < batchSize && pool.length > 0; i++) {
      batchIds.push(pool.splice(Math.floor(rng() * pool.length), 1)[0].id);
    }
    setBatchId(STORAGE_KEY_ESSAY_BATCH, JSON.stringify(batchIds));
  }

  currentEssayBatch = batchIds;
  var picked = batchIds.map(function(id) { return fullPool.find(function(e) { return e.id === id; }); }).filter(Boolean);

  // 检查本批次是否已全部学完
  var allDone = batchIds.every(function(id) { return learnedIds.indexOf(id) !== -1; });

  if (headerEl) {
    var poolCount = fullPool.length;
    var learnedCount = learnedIds.length;
    var remainingCount = poolCount - learnedCount;
    headerEl.innerHTML = '<span class="badge" style="background:#7F77DD;">\u{1F4DD} 好文推荐</span>' +
      '<span style="font-size:13px;font-weight:500;">' + dateStr + ' 星期' + weekday + '</span>' +
      '<span class="pool-info">（总题库 ' + poolCount + ' 篇，未学 ' + remainingCount + ' 篇）</span>' +
      '<button class="import-floating-btn" onclick="openEssayImport()" title="导入好文">\u2795 导入</button>' +
      (allDone ? '<button class="refresh-batch-btn" onclick="refreshEssayBatch()">\u{1F504} 换一批（3篇）</button>' : '');
  }

  var levelClass = { 'CET-4':'cet4', 'CET-6':'cet6', '考研':'pg' };
  container.innerHTML = picked.map(function(e) {
    if (!e) return '';
    var isLearned = learnedIds.indexOf(e.id) !== -1;
    return '<div class="essay-card' + (isLearned ? ' essay-done' : '') + '">' +
      '<div class="essay-header" onclick="this.parentElement.classList.toggle(\'open\')">' +
        '<span class="essay-level-badge ' + (levelClass[e.level] || 'cet4') + '">' + e.level + '</span>' +
        '<h4>' + e.title + '</h4>' +
        '<span style="font-size:12px;color:var(--text-tertiary);">' + e.topic + '</span>' +
        (isLearned ? '<span class="essay-done-tag">\u2705 已学</span>' : '') +
        '<span class="essay-arrow">\u25BC</span>' +
      '</div>' +
      '<div class="essay-body">' +
        '<div class="essay-section-title">\u{1F4D6} 英文原文</div>' +
        '<div class="essay-text">' + e.fullText + '</div>' +
        '<div class="essay-section-title">\u{1F1E8}\u{1F1F3} 参考译文</div>' +
        '<div class="essay-text-zh">' + e.translation + '</div>' +
        '<div class="essay-section-title">\u2B50 高级词汇拆解</div>' +
        '<div class="essay-vocab-grid">' +
          (e.vocab || []).map(function(v) {
            return '<div class="essay-vocab-item">' +
              '<span class="ew">' + v.word + '</span><span class="em">' + v.meaning + '</span>' +
              '<span class="en">' + v.note + '</span></div>';
          }).join('') +
        '</div>' +
        '<div class="essay-section-title">\u{1F527} 高分句型解析</div>' +
        (e.patterns || []).map(function(p) {
          return '<div class="essay-pattern-item">' +
            '<span class="ep">' + p.pattern + '</span>' +
            '<span class="ea">' + (p.analysis || p.description) + '</span></div>';
        }).join('') +
        (isLearned ? '' : '<div class="essay-done-section"><button class="btn-done-learn" onclick="markEssayDone(\'' + e.id + '\')">\u2705 完成学习</button></div>') +
      '</div></div>';
  }).join('');

  // 如果都学完了自动出现换一批按钮（已在 header 中处理）
}

function markEssayDone(id) {
  var learned = getLearned(STORAGE_KEY_ESSAY);
  if (learned.indexOf(id) === -1) {
    learned.push(id);
    setLearned(STORAGE_KEY_ESSAY, learned);
  }
  renderEssays();
}

function refreshEssayBatch() {
  setBatchId(STORAGE_KEY_ESSAY_BATCH, '');
  renderEssays();
}

function resetEssayProgress() {
  setLearned(STORAGE_KEY_ESSAY, []);
  setBatchId(STORAGE_KEY_ESSAY_BATCH, '');
  renderEssays();
}

// ======== 翻译练习渲染（用户控制更新，2 题一批） ========
function renderTranslation() {
  var container = document.getElementById('transList');
  if (!container) return;

  var learnedIds = getLearned(STORAGE_KEY_TRANS);
  var customData = getCustomData(STORAGE_KEY_CUSTOM_TRANS);
  var fullPool = transPool.concat(customData);
  var available = fullPool.filter(function(e) { return learnedIds.indexOf(e.id) === -1; });

  var today = new Date();
  var dateStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
  var weekdayNames = ['日','一','二','三','四','五','六'];
  var weekday = weekdayNames[today.getDay()];

  var batchSize = 2;
  var headerEl = document.getElementById('transDailyHeader');

  if (available.length === 0) {
    if (headerEl) {
      headerEl.innerHTML = '<span class="badge" style="background:#D85A30;">\u{1F310} 翻译练习</span>' +
        '<span style="font-size:13px;color:var(--accent-green);font-weight:500;">\u{1F389} 恭喜！已练完全部 ' + fullPool.length + ' 题！</span>' +
        '<button class="refresh-batch-btn" onclick="resetTransProgress()" style="background:#D85A30;border-color:#D85A30;">\u{1F504} 重置进度，重新练习</button>';
    }
    container.innerHTML = '';
    return;
  }

  var savedBatch = getBatchId(STORAGE_KEY_TRANS_BATCH);
  var batchIds;
  if (savedBatch) {
    try { batchIds = JSON.parse(savedBatch); } catch(e) { batchIds = null; }
  }
  var batchValid = batchIds && batchIds.length === batchSize && batchIds.every(function(id) {
    return available.some(function(e) { return e.id === id; });
  });

  if (!batchValid) {
    var rng = seededRandom('trans_batch_' + Date.now());
    var pool = available.slice();
    batchIds = [];
    for (var i = 0; i < batchSize && pool.length > 0; i++) {
      batchIds.push(pool.splice(Math.floor(rng() * pool.length), 1)[0].id);
    }
    setBatchId(STORAGE_KEY_TRANS_BATCH, JSON.stringify(batchIds));
  }

  currentTransBatch = batchIds;
  var picked = batchIds.map(function(id) { return fullPool.find(function(e) { return e.id === id; }); }).filter(Boolean);

  var allDone = batchIds.every(function(id) { return learnedIds.indexOf(id) !== -1; });

  var poolCount = fullPool.length;
  var learnedCount = learnedIds.length;
  var remainingCount = poolCount - learnedCount;

  if (headerEl) {
    headerEl.innerHTML = '<span class="badge" style="background:#D85A30;">\u{1F310} 翻译练习</span>' +
      '<span style="font-size:13px;font-weight:500;">' + dateStr + ' 星期' + weekday + '</span>' +
      '<span class="pool-info">（总题库 ' + poolCount + ' 题，未练 ' + remainingCount + ' 题）</span>' +
      '<button class="import-floating-btn" onclick="openTransImport()" style="color:#D85A30;border-color:#D85A30;" title="导入翻译">\u2795 导入</button>' +
      (allDone ? '<button class="refresh-batch-btn" onclick="refreshTransBatch()" style="background:#D85A30;border-color:#D85A30;">\u{1F504} 换一批（2题）</button>' : '');
  }

  var typeLabel = { 'C-E':'中译英', 'E-C':'英译中' };
  var typeClass = { 'C-E':'ce', 'E-C':'ec' };
  var levelClass = { 'CET-6':'cet6', '考研':'pg' };

  container.innerHTML = picked.map(function(t, idx) {
    if (!t) return '';
    var isLearned = learnedIds.indexOf(t.id) !== -1;
    return '<div class="trans-card' + (isLearned ? ' trans-done' : '') + '">' +
      '<div class="trans-header">' +
        '<span class="trans-type-badge ' + (typeClass[t.type] || 'ce') + '">' + (typeLabel[t.type] || t.type) + '</span>' +
        '<span class="essay-level-badge ' + (levelClass[t.level] || 'cet6') + '">' + t.level + '</span>' +
        (isLearned ? '<span class="essay-done-tag" style="margin-left:8px;">\u2705 已练</span>' : '') +
        '<span style="font-size:12px;color:var(--text-tertiary);margin-left:auto;">第 ' + (idx+1) + ' 题</span>' +
      '</div>' +
      '<div class="trans-body">' +
        '<div class="trans-source-text">' + t.sourceText + '</div>' +
        '<button class="trans-answer-btn" onclick="revealAnswer(this)">\u{1F4A1} 点击查看参考答案</button>' +
        '<div class="trans-answer-panel" style="display:none;">' +
          '<hr class="trans-divider">' +
          '<div class="trans-answer-label">\u2705 参考答案</div>' +
          '<div class="trans-answer-text">' + t.answerText + '</div>' +
          '<div class="trans-legend">' +
            '<span><span class="dot" style="background:#FFF0D0;"></span> 高级词汇</span>' +
            '<span><span class="dot" style="background:#FFE0EC;"></span> 语法重点</span>' +
            '<span><span class="dot" style="background:#FFF0E0;"></span> 句式亮点</span>' +
            '<span><span class="dot" style="background:#FFDBE0;"></span> 地道表达</span>' +
          '</div>' +
          '<div style="margin-top:10px;font-size:12px;color:var(--text-secondary);line-height:1.7;">' +
            (t.highlights || []).map(function(h) {
              return '<div style="margin-bottom:6px;">' +
                '<span class="trans-type-badge ' + (typeClass[t.type] || 'ce') + '" style="font-size:10px;margin-right:6px;">' + h.label + '</span>' +
                h.desc + '</div>';
            }).join('') +
          '</div>' +
        '</div>' +
        (isLearned ? '' : '<div style="margin-top:16px;text-align:center;"><button class="btn-done-learn" style="background:#D85A30;border-color:#D85A30;" onclick="markTransDone(\'' + t.id + '\')">\u2705 完成练习</button></div>') +
      '</div></div>';
  }).join('');
}

function markTransDone(id) {
  var learned = getLearned(STORAGE_KEY_TRANS);
  if (learned.indexOf(id) === -1) {
    learned.push(id);
    setLearned(STORAGE_KEY_TRANS, learned);
  }
  renderTranslation();
}

function refreshTransBatch() {
  setBatchId(STORAGE_KEY_TRANS_BATCH, '');
  renderTranslation();
}

function resetTransProgress() {
  setLearned(STORAGE_KEY_TRANS, []);
  setBatchId(STORAGE_KEY_TRANS_BATCH, '');
  renderTranslation();
}

function revealAnswer(btn) {
  var panel = btn.nextElementSibling;
  panel.style.display = 'block';
  btn.style.display = 'none';
}

// ======== 导入自定义好文 ========
function openEssayImport() {
  var modal = document.getElementById('essayImportModal');
  if (modal) modal.style.display = 'flex';
}

function closeEssayImport() {
  var modal = document.getElementById('essayImportModal');
  if (modal) modal.style.display = 'none';
}

function doImportEssay() {
  var level = document.getElementById('essayImportLevel').value;
  var topic = document.getElementById('essayImportTopic').value.trim();
  var title = document.getElementById('essayImportTitle').value.trim();
  var fullText = document.getElementById('essayImportText').value.trim();
  var translation = document.getElementById('essayImportTrans').value.trim();
  var vocabRaw = document.getElementById('essayImportVocab').value.trim();
  var patternsRaw = document.getElementById('essayImportPatterns').value.trim();

  if (!title || !fullText) { alert('请至少填写标题和英文原文'); return; }

  // 解析词汇（格式：word|meaning|note，每行一个）
  var vocab = [];
  if (vocabRaw) {
    vocabRaw.split('\n').forEach(function(line) {
      line = line.trim(); if (!line) return;
      var parts = line.split('|');
      vocab.push({ word: (parts[0] || '').trim(), meaning: (parts[1] || '').trim(), note: (parts[2] || '').trim() });
    });
  }

  // 解析句型（格式：pattern|analysis，每行一个）
  var patterns = [];
  if (patternsRaw) {
    patternsRaw.split('\n').forEach(function(line) {
      line = line.trim(); if (!line) return;
      var parts = line.split('|');
      patterns.push({ pattern: (parts[0] || '').trim(), analysis: (parts[1] || '').trim() });
    });
  }

  var newEssay = {
    id: 'custom_essay_' + Date.now(),
    level: level,
    topic: topic || '自定义',
    title: title,
    fullText: fullText,
    translation: translation || '',
    vocab: vocab,
    patterns: patterns
  };

  var customData = getCustomData(STORAGE_KEY_CUSTOM_ESSAY);
  customData.push(newEssay);
  setCustomData(STORAGE_KEY_CUSTOM_ESSAY, customData);

  // 清空表单
  document.getElementById('essayImportTitle').value = '';
  document.getElementById('essayImportText').value = '';
  document.getElementById('essayImportTrans').value = '';
  document.getElementById('essayImportTopic').value = '';
  document.getElementById('essayImportVocab').value = '';
  document.getElementById('essayImportPatterns').value = '';

  closeEssayImport();
  renderEssays();
}

// ======== 导入自定义翻译 ========
function openTransImport() {
  var modal = document.getElementById('transImportModal');
  if (modal) modal.style.display = 'flex';
}

function closeTransImport() {
  var modal = document.getElementById('transImportModal');
  if (modal) modal.style.display = 'none';
}

function doImportTrans() {
  var type = document.getElementById('transImportType').value;
  var level = document.getElementById('transImportLevel').value;
  var sourceText = document.getElementById('transImportSource').value.trim();
  var answerText = document.getElementById('transImportAnswer').value.trim();
  var highlightsRaw = document.getElementById('transImportHighlights').value.trim();

  if (!sourceText || !answerText) { alert('请至少填写原文和答案'); return; }

  var highlights = [];
  if (highlightsRaw) {
    highlightsRaw.split('\n').forEach(function(line) {
      line = line.trim(); if (!line) return;
      var parts = line.split('|');
      highlights.push({ color: (parts[0] || 'vocab').trim(), label: (parts[1] || '').trim(), desc: (parts[2] || '').trim() });
    });
  }

  var newTrans = {
    id: 'custom_trans_' + Date.now(),
    type: type,
    level: level,
    sourceText: sourceText,
    answerText: answerText,
    highlights: highlights
  };

  var customData = getCustomData(STORAGE_KEY_CUSTOM_TRANS);
  customData.push(newTrans);
  setCustomData(STORAGE_KEY_CUSTOM_TRANS, customData);

  document.getElementById('transImportSource').value = '';
  document.getElementById('transImportAnswer').value = '';
  document.getElementById('transImportHighlights').value = '';

  closeTransImport();
  renderTranslation();
}

// ======== 删除自定义内容 ========
function deleteCustomEssay(id) {
  if (!confirm('确定删除这篇自定义好文？')) return;
  var customData = getCustomData(STORAGE_KEY_CUSTOM_ESSAY);
  customData = customData.filter(function(e) { return e.id !== id; });
  setCustomData(STORAGE_KEY_CUSTOM_ESSAY, customData);
  // 如果正在学习中，移除学习记录
  var learned = getLearned(STORAGE_KEY_ESSAY);
  learned = learned.filter(function(lid) { return lid !== id; });
  setLearned(STORAGE_KEY_ESSAY, learned);
  renderEssays();
}

function deleteCustomTrans(id) {
  if (!confirm('确定删除这道自定义翻译？')) return;
  var customData = getCustomData(STORAGE_KEY_CUSTOM_TRANS);
  customData = customData.filter(function(e) { return e.id !== id; });
  setCustomData(STORAGE_KEY_CUSTOM_TRANS, customData);
  var learned = getLearned(STORAGE_KEY_TRANS);
  learned = learned.filter(function(lid) { return lid !== id; });
  setLearned(STORAGE_KEY_TRANS, learned);
  renderTranslation();
}
