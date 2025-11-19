// Bible Planner JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Brand colors
    const brandColors = {
        primary: '#205782',
        secondary: '#f2842f',
        accent: '#2e8b57',
        light: '#e6f2ff',
        warm: '#fff5eb'
    };

    // State management
    let activeTab = 'calendar';
    let selectedMonth = 'meskerem';
    let selectedPlan = 'chronological';
    const expandedWeeks = {};

    // Data
    const ethiopianMonths = [
        { id: 'meskerem', name: 'Meskerem (መስከረም)', days: 30, gregorian: 'Sep 11 - Oct 10, 2024' },
        { id: 'tikimt', name: 'Tikimt (ጥቅምት)', days: 30, gregorian: 'Oct 11 - Nov 9, 2024' },
        { id: 'hidar', name: 'Hidar (ኅዳር)', days: 30, gregorian: 'Nov 10 - Dec 9, 2024' },
        { id: 'tahsas', name: 'Tahsas (ታኅሣሥ)', days: 30, gregorian: 'Dec 10, 2024 - Jan 8, 2025' },
        { id: 'tir', name: 'Tir (ጥር)', days: 30, gregorian: 'Jan 9 - Feb 7, 2025' },
        { id: 'yekatit', name: 'Yekatit (የካቲት)', days: 30, gregorian: 'Feb 8 - Mar 9, 2025' },
        { id: 'megabit', name: 'Megabit (መጋቢት)', days: 30, gregorian: 'Mar 10 - Apr 8, 2025' },
        { id: 'miazia', name: 'Miazia (ሚያዝያ)', days: 30, gregorian: 'Apr 9 - May 8, 2025' },
        { id: 'ginbot', name: 'Ginbot (ግንቦት)', days: 30, gregorian: 'May 9 - Jun 7, 2025' },
        { id: 'sene', name: 'Sene (ሰኔ)', days: 30, gregorian: 'Jun 8 - Jul 7, 2025' },
        { id: 'hamle', name: 'Hamle (ሐምሌ)', days: 30, gregorian: 'Jul 8 - Aug 6, 2025' },
        { id: 'nehase', name: 'Nehase (ነሐሴ)', days: 30, gregorian: 'Aug 7 - Sep 5, 2025' },
        { id: 'pagume', name: 'Pagume (ጳጉሜን)', days: 5, gregorian: 'Sep 6-10, 2025' }
    ];

    const holyDays = [
        { month: 'meskerem', day: 1, name: 'Ethiopian New Year (እንቁጣጣሽ)', date: 'Sep 11, 2025' },
        { month: 'meskerem', day: 17, name: 'Finding of True Cross (መስቀል)', date: 'Sep 27, 2025' },
        { month: 'tahsas', day: 29, name: 'Ethiopian Christmas (ገና/ልደት)', date: 'Jan 7, 2026' },
        { month: 'tir', day: 11, name: 'Epiphany/Timkat (ጥምቀት)', date: 'Jan 19, 2026' },
        { month: 'nehase', day: 16, name: 'Assumption of Mary (ፍልሰታ)', date: 'Aug 22, 2026' }
    ];

    const ministryEvents = [
        { month: 'tir', day: 4, name: 'Ministry Establishment', date: 'Jan 12, 2025', type: 'milestone' },
        { month: 'meskerem', day: 1, name: 'Phase 1 Launch (Arsi & Bale)', date: 'Sep 11, 2025', type: 'launch' },
        { month: 'megabit', day: 1, name: 'Mid-Year Evaluation', date: 'Mar 10, 2026', type: 'evaluation' },
        { month: 'nehase', day: 30, name: 'Phase 1 Completion', date: 'Sep 5, 2026', type: 'milestone' }
    ];

    const chronologicalPlan = {
        meskerem: { 
            weeks: 4, 
            reading: 'Genesis 1-50; Exodus 1-14', 
            theme: 'Creation to Exodus',
            weeklyBreakdown: [
                {
                    week: 1,
                    focus: 'Creation & Fall',
                    readings: 'Genesis 1-11',
                    keyThemes: 'God as Creator, Human Sin, Covenant Beginnings',
                    studyQuestions: [
                        'What does Creation teach us about God\'s character?',
                        'How does the Fall affect our relationship with God?',
                        'What promises do we see in the early covenants?'
                    ],
                    memoryVerse: 'Genesis 1:1',
                    practicalApplication: 'Reflect on God as Creator in your daily life'
                },
                {
                    week: 2,
                    focus: 'Patriarchs: Abraham & Isaac',
                    readings: 'Genesis 12-25',
                    keyThemes: 'Faith, Promise, Testing, Provision',
                    studyQuestions: [
                        'How did Abraham demonstrate faith?',
                        'What can we learn from Abraham\'s mistakes?',
                        'How does God fulfill His promises?'
                    ],
                    memoryVerse: 'Genesis 15:6',
                    practicalApplication: 'Step out in faith in one area this week'
                },
                {
                    week: 3,
                    focus: 'Patriarchs: Jacob & Joseph',
                    readings: 'Genesis 26-50',
                    keyThemes: 'Transformation, Forgiveness, Sovereignty',
                    studyQuestions: [
                        'How did God transform Jacob\'s character?',
                        'What does Joseph\'s story teach about forgiveness?',
                        'How does God work through difficult circumstances?'
                    ],
                    memoryVerse: 'Genesis 50:20',
                    practicalApplication: 'Practice forgiveness in a relationship'
                },
                {
                    week: 4,
                    focus: 'Exodus Begins',
                    readings: 'Exodus 1-14',
                    keyThemes: 'Deliverance, Passover, Faith in Crisis',
                    studyQuestions: [
                        'How does God hear the cries of His people?',
                        'What does the Passover teach us about redemption?',
                        'How can we trust God in impossible situations?'
                    ],
                    memoryVerse: 'Exodus 14:14',
                    practicalApplication: 'Trust God with an impossible situation'
                }
            ]
        },
        tikimt: { 
            weeks: 4, 
            reading: 'Exodus 15-40; Leviticus 1-27', 
            theme: 'Wilderness & Law',
            weeklyBreakdown: [
                {
                    week: 5,
                    focus: 'Wilderness Journey',
                    readings: 'Exodus 15-18',
                    keyThemes: 'Provision, Testing, Leadership',
                    studyQuestions: [
                        'How does God provide in the wilderness?',
                        'What can we learn from Israel\'s complaining?',
                        'How does God raise up leaders?'
                    ],
                    memoryVerse: 'Exodus 15:2',
                    practicalApplication: 'Thank God for His daily provision'
                },
                {
                    week: 6,
                    focus: 'The Ten Commandments',
                    readings: 'Exodus 19-24',
                    keyThemes: 'Law, Covenant, Holiness',
                    studyQuestions: [
                        'What is the purpose of the Ten Commandments?',
                        'How does the law reveal God\'s character?',
                        'What does it mean to be a holy nation?'
                    ],
                    memoryVerse: 'Exodus 20:1-3',
                    practicalApplication: 'Apply one commandment specifically this week'
                },
                {
                    week: 7,
                    focus: 'Tabernacle & Worship',
                    readings: 'Exodus 25-40',
                    keyThemes: 'Worship, Presence, Obedience',
                    studyQuestions: [
                        'What does the tabernacle teach about God\'s presence?',
                        'Why is detailed obedience important in worship?',
                        'How does God respond to disobedience?'
                    ],
                    memoryVerse: 'Exodus 25:8',
                    practicalApplication: 'Create a dedicated space for prayer'
                },
                {
                    week: 8,
                    focus: 'Laws of Holiness',
                    readings: 'Leviticus 1-27',
                    keyThemes: 'Sacrifice, Purity, Atonement',
                    studyQuestions: [
                        'What do the sacrifices teach about sin and forgiveness?',
                        'How does holiness affect everyday life?',
                        'What principles of purity apply today?'
                    ],
                    memoryVerse: 'Leviticus 19:2',
                    practicalApplication: 'Practice holiness in your thoughts'
                }
            ]
        },
        hidar: { 
            weeks: 4, 
            reading: 'Numbers 1-36; Deuteronomy 1-34', 
            theme: 'Wilderness Wandering',
            weeklyBreakdown: [
                {
                    week: 9,
                    focus: 'Census & Organization',
                    readings: 'Numbers 1-10',
                    keyThemes: 'Order, Preparation, Leadership',
                    studyQuestions: [
                        'Why was organization important for Israel?',
                        'How does God prepare His people for journey?',
                        'What can we learn about God\'s order?'
                    ],
                    memoryVerse: 'Numbers 6:24-26',
                    practicalApplication: 'Organize your spiritual priorities'
                },
                {
                    week: 10,
                    focus: 'Rebellion & Consequences',
                    readings: 'Numbers 11-21',
                    keyThemes: 'Complaining, Judgment, Faithfulness',
                    studyQuestions: [
                        'What causes rebellion against God?',
                        'How does God discipline His children?',
                        'What examples of faithfulness do we see?'
                    ],
                    memoryVerse: 'Numbers 14:18',
                    practicalApplication: 'Replace complaining with thanksgiving'
                },
                {
                    week: 11,
                    focus: 'Balaam & Preparation',
                    readings: 'Numbers 22-36',
                    keyThemes: 'Obedience, Prophecy, Inheritance',
                    studyQuestions: [
                        'What can we learn from Balaam\'s story?',
                        'How does God protect His people?',
                        'What does inheritance teach about God\'s promises?'
                    ],
                    memoryVerse: 'Numbers 23:19',
                    practicalApplication: 'Trust God\'s protection in difficult situations'
                },
                {
                    week: 12,
                    focus: 'Deuteronomy: Covenant Renewal',
                    readings: 'Deuteronomy 1-34',
                    keyThemes: 'Remembering, Obedience, Choice',
                    studyQuestions: [
                        'Why is remembering important in faith?',
                        'What does Deuteronomy teach about obedience?',
                        'How do we choose life daily?'
                    ],
                    memoryVerse: 'Deuteronomy 6:4-5',
                    practicalApplication: 'Memorize and meditate on the Shema'
                }
            ]
        },
        tahsas: { 
            weeks: 4, 
            reading: 'Joshua 1-24; Judges 1-21; Ruth 1-4', 
            theme: 'Conquest & Judges',
            weeklyBreakdown: [
                {
                    week: 13,
                    focus: 'Joshua: Conquest Begins',
                    readings: 'Joshua 1-12',
                    keyThemes: 'Courage, Obedience, Victory',
                    studyQuestions: [
                        'What made Joshua a good leader?',
                        'How did God give victory to Israel?',
                        'What role does courage play in faith?'
                    ],
                    memoryVerse: 'Joshua 1:9',
                    practicalApplication: 'Face one fear with God\'s courage'
                },
                {
                    week: 14,
                    focus: 'Division & Settlement',
                    readings: 'Joshua 13-24',
                    keyThemes: 'Inheritance, Faithfulness, Service',
                    studyQuestions: [
                        'How was the land divided among tribes?',
                        'What was Joshua\'s final challenge?',
                        'How do we serve God faithfully?'
                    ],
                    memoryVerse: 'Joshua 24:15',
                    practicalApplication: 'Renew your commitment to serve God'
                },
                {
                    week: 15,
                    focus: 'Judges: Cycle of Sin',
                    readings: 'Judges 1-12',
                    keyThemes: 'Disobedience, Oppression, Deliverance',
                    studyQuestions: [
                        'What pattern repeats in Judges?',
                        'How does God raise up deliverers?',
                        'What causes spiritual decline?'
                    ],
                    memoryVerse: 'Judges 2:18',
                    practicalApplication: 'Break a cycle of sin in your life'
                },
                {
                    week: 16,
                    focus: 'Samson & Ruth',
                    readings: 'Judges 13-21; Ruth 1-4',
                    keyThemes: 'Strength, Redemption, Loyalty',
                    studyQuestions: [
                        'What can we learn from Samson\'s strengths and weaknesses?',
                        'How does Ruth demonstrate loyalty?',
                        'What does Boaz teach about redemption?'
                    ],
                    memoryVerse: 'Ruth 1:16',
                    practicalApplication: 'Show loyalty to family or friends'
                }
            ]
        },
        tir: { 
            weeks: 4, 
            reading: '1 Samuel 1-31; 2 Samuel 1-24; Psalms 1-40', 
            theme: 'Kingdom Established',
            weeklyBreakdown: [
                {
                    week: 17,
                    focus: 'Samuel & Saul',
                    readings: '1 Samuel 1-15',
                    keyThemes: 'Prayer, Leadership, Obedience',
                    studyQuestions: [
                        'What made Samuel an effective leader?',
                        'Why did Saul fail as king?',
                        'How does God choose leaders?'
                    ],
                    memoryVerse: '1 Samuel 15:22',
                    practicalApplication: 'Evaluate your obedience to God'
                },
                {
                    week: 18,
                    focus: 'David\'s Rise',
                    readings: '1 Samuel 16-31',
                    keyThemes: 'Anointing, Patience, Integrity',
                    studyQuestions: [
                        'Why was David called a man after God\'s heart?',
                        'How did David handle waiting for God\'s timing?',
                        'What can we learn from David\'s integrity?'
                    ],
                    memoryVerse: '1 Samuel 16:7',
                    practicalApplication: 'Practice patience in God\'s timing'
                },
                {
                    week: 19,
                    focus: 'David\'s Reign',
                    readings: '2 Samuel 1-12',
                    keyThemes: 'Kingship, Sin, Repentance',
                    studyQuestions: [
                        'How did David establish his kingdom?',
                        'What led to David\'s sin with Bathsheba?',
                        'How does true repentance look?'
                    ],
                    memoryVerse: '2 Samuel 12:13',
                    practicalApplication: 'Practice immediate repentance'
                },
                {
                    week: 20,
                    focus: 'Psalms of David',
                    readings: 'Psalms 1-40',
                    keyThemes: 'Worship, Lament, Trust',
                    studyQuestions: [
                        'What do the Psalms teach about honest prayer?',
                        'How can we worship in difficult times?',
                        'What does it mean to trust God completely?'
                    ],
                    memoryVerse: 'Psalm 23:1',
                    practicalApplication: 'Write your own psalm of praise'
                }
            ]
        },
        yekatit: { 
            weeks: 4, 
            reading: '1 Kings 1-22; 2 Kings 1-25; Psalms 41-100', 
            theme: 'Divided Kingdom',
            weeklyBreakdown: [
                {
                    week: 21,
                    focus: 'Solomon\'s Reign',
                    readings: '1 Kings 1-11',
                    keyThemes: 'Wisdom, Temple, Compromise',
                    studyQuestions: [
                        'What made Solomon wise initially?',
                        'How did the temple worship please God?',
                        'What led to Solomon\'s downfall?'
                    ],
                    memoryVerse: '1 Kings 3:9',
                    practicalApplication: 'Seek God\'s wisdom in decisions'
                },
                {
                    week: 22,
                    focus: 'Kingdom Divides',
                    readings: '1 Kings 12-22',
                    keyThemes: 'Division, Idolatry, Prophets',
                    studyQuestions: [
                        'Why did the kingdom divide?',
                        'How did idolatry enter Israel?',
                        'What role did prophets play?'
                    ],
                    memoryVerse: '1 Kings 18:21',
                    practicalApplication: 'Identify and remove idols in your life'
                },
                {
                    week: 23,
                    focus: 'Northern Kingdom Falls',
                    readings: '2 Kings 1-17',
                    keyThemes: 'Judgment, Mercy, Exile',
                    studyQuestions: [
                        'Why did Israel fall to Assyria?',
                        'How did God show mercy despite judgment?',
                        'What warnings apply to us today?'
                    ],
                    memoryVerse: '2 Kings 17:13-14',
                    practicalApplication: 'Heed God\'s warnings in your life'
                },
                {
                    week: 24,
                    focus: 'Psalms of Worship',
                    readings: 'Psalms 41-100',
                    keyThemes: 'Praise, Justice, Refuge',
                    studyQuestions: [
                        'How do these Psalms express praise?',
                        'What do they teach about God\'s justice?',
                        'How is God our refuge?'
                    ],
                    memoryVerse: 'Psalm 46:1',
                    practicalApplication: 'Praise God throughout your day'
                }
            ]
        },
        megabit: { 
            weeks: 4, 
            reading: '2 Kings 18-25; Chronicles; Proverbs; Ecclesiastes; Psalms 101-150', 
            theme: 'Exile & Wisdom',
            weeklyBreakdown: [
                {
                    week: 25,
                    focus: 'Southern Kingdom',
                    readings: '2 Kings 18-25',
                    keyThemes: 'Reform, Judgment, Hope',
                    studyQuestions: [
                        'What made Hezekiah a good king?',
                        'Why did Judah go into exile?',
                        'Where was hope found?'
                    ],
                    memoryVerse: '2 Kings 23:25',
                    practicalApplication: 'Be a reformer in your community'
                },
                {
                    week: 26,
                    focus: 'Wisdom Literature',
                    readings: 'Proverbs 1-15',
                    keyThemes: 'Wisdom, Fear of God, Instruction',
                    studyQuestions: [
                        'What is the beginning of wisdom?',
                        'How do proverbs guide daily life?',
                        'What benefits come from wisdom?'
                    ],
                    memoryVerse: 'Proverbs 1:7',
                    practicalApplication: 'Apply one proverb daily'
                },
                {
                    week: 27,
                    focus: 'More Wisdom',
                    readings: 'Proverbs 16-31; Ecclesiastes',
                    keyThemes: 'Justice, Work, Meaning',
                    studyQuestions: [
                        'What does Proverbs teach about justice?',
                        'How should we view work?',
                        'What is life\'s ultimate meaning?'
                    ],
                    memoryVerse: 'Ecclesiastes 12:13',
                    practicalApplication: 'Find meaning in fearing God'
                },
                {
                    week: 28,
                    focus: 'Final Psalms',
                    readings: 'Psalms 101-150',
                    keyThemes: 'Thanksgiving, History, Praise',
                    studyQuestions: [
                        'How do these Psalms give thanks?',
                        'What historical events do they recall?',
                        'How do they call us to praise?'
                    ],
                    memoryVerse: 'Psalm 100:4',
                    practicalApplication: 'Develop a thankful heart'
                }
            ]
        },
        miazia: { 
            weeks: 4, 
            reading: 'Job 1-42; Isaiah 1-66', 
            theme: 'Prophets of Judgment',
            weeklyBreakdown: [
                {
                    week: 29,
                    focus: 'Job: Suffering',
                    readings: 'Job 1-21',
                    keyThemes: 'Suffering, Faith, Mystery',
                    studyQuestions: [
                        'Why did Job suffer?',
                        'How did Job maintain faith?',
                        'What do Job\'s friends misunderstand?'
                    ],
                    memoryVerse: 'Job 1:21',
                    practicalApplication: 'Trust God in suffering'
                },
                {
                    week: 30,
                    focus: 'Job: Restoration',
                    readings: 'Job 22-42',
                    keyThemes: 'Wisdom, Repentance, Restoration',
                    studyQuestions: [
                        'What does God reveal about Himself?',
                        'How does Job respond to God?',
                        'What does restoration look like?'
                    ],
                    memoryVerse: 'Job 42:5-6',
                    practicalApplication: 'Humble yourself before God'
                },
                {
                    week: 31,
                    focus: 'Isaiah: Judgment',
                    readings: 'Isaiah 1-39',
                    keyThemes: 'Sin, Judgment, Holiness',
                    studyQuestions: [
                        'What sins does Isaiah condemn?',
                        'How does God judge nations?',
                        'What does holy living require?'
                    ],
                    memoryVerse: 'Isaiah 6:8',
                    practicalApplication: 'Respond to God\'s call'
                },
                {
                    week: 32,
                    focus: 'Isaiah: Comfort',
                    readings: 'Isaiah 40-66',
                    keyThemes: 'Comfort, Salvation, Restoration',
                    studyQuestions: [
                        'How does God comfort His people?',
                        'What does the suffering servant teach?',
                        'What future restoration is promised?'
                    ],
                    memoryVerse: 'Isaiah 40:31',
                    practicalApplication: 'Wait on the Lord for strength'
                }
            ]
        },
        ginbot: { 
            weeks: 4, 
            reading: 'Jeremiah 1-52; Lamentations; Ezekiel 1-48', 
            theme: 'Major Prophets',
            weeklyBreakdown: [
                {
                    week: 33,
                    focus: 'Jeremiah\'s Call',
                    readings: 'Jeremiah 1-20',
                    keyThemes: 'Calling, Persecution, Faithfulness',
                    studyQuestions: [
                        'How was Jeremiah called?',
                        'Why was he persecuted?',
                        'What made him faithful?'
                    ],
                    memoryVerse: 'Jeremiah 1:5',
                    practicalApplication: 'Embrace God\'s calling'
                },
                {
                    week: 34,
                    focus: 'Jeremiah\'s Message',
                    readings: 'Jeremiah 21-52; Lamentations',
                    keyThemes: 'Covenant, Hope, Mourning',
                    studyQuestions: [
                        'What was the new covenant?',
                        'Where was hope found?',
                        'How do we lament properly?'
                    ],
                    memoryVerse: 'Jeremiah 29:11',
                    practicalApplication: 'Find hope in God\'s plans'
                },
                {
                    week: 35,
                    focus: 'Ezekiel: Visions',
                    readings: 'Ezekiel 1-24',
                    keyThemes: 'Glory, Responsibility, Judgment',
                    studyQuestions: [
                        'What do Ezekiel\'s visions reveal?',
                        'What is individual responsibility?',
                        'How does God judge?'
                    ],
                    memoryVerse: 'Ezekiel 18:4',
                    practicalApplication: 'Take responsibility for your faith'
                },
                {
                    week: 36,
                    focus: 'Ezekiel: Restoration',
                    readings: 'Ezekiel 25-48',
                    keyThemes: 'Hope, New Temple, Life',
                    studyQuestions: [
                        'What hope does Ezekiel offer?',
                        'What does the new temple represent?',
                        'How does God bring life?'
                    ],
                    memoryVerse: 'Ezekiel 36:26',
                    practicalApplication: 'Allow God to renew your heart'
                }
            ]
        },
        sene: { 
            weeks: 4, 
            reading: 'Daniel 1-12; Hosea-Malachi', 
            theme: 'Restoration Prophets',
            weeklyBreakdown: [
                {
                    week: 37,
                    focus: 'Daniel: Faithfulness',
                    readings: 'Daniel 1-6',
                    keyThemes: 'Faithfulness, Courage, Deliverance',
                    studyQuestions: [
                        'How did Daniel remain faithful?',
                        'What gave him courage?',
                        'How did God deliver him?'
                    ],
                    memoryVerse: 'Daniel 3:17-18',
                    practicalApplication: 'Stand firm in your faith'
                },
                {
                    week: 38,
                    focus: 'Daniel: Visions',
                    readings: 'Daniel 7-12',
                    keyThemes: 'Prophecy, Kingdom, End Times',
                    studyQuestions: [
                        'What kingdoms did Daniel see?',
                        'What end times events are predicted?',
                        'How should we live in light of prophecy?'
                    ],
                    memoryVerse: 'Daniel 12:3',
                    practicalApplication: 'Live with eternal perspective'
                },
                {
                    week: 39,
                    focus: 'Minor Prophets I',
                    readings: 'Hosea - Jonah',
                    keyThemes: 'Love, Justice, Mercy',
                    studyQuestions: [
                        'How does Hosea show God\'s love?',
                        'What does Amos teach about justice?',
                        'What does Jonah teach about mercy?'
                    ],
                    memoryVerse: 'Micah 6:8',
                    practicalApplication: 'Act justly, love mercy'
                },
                {
                    week: 40,
                    focus: 'Minor Prophets II',
                    readings: 'Nahum - Malachi',
                    keyThemes: 'Judgment, Promise, Preparation',
                    studyQuestions: [
                        'How does God judge nations?',
                        'What promises are given?',
                        'How do we prepare for Messiah?'
                    ],
                    memoryVerse: 'Malachi 3:10',
                    practicalApplication: 'Test God in your giving'
                }
            ]
        },
        hamle: { 
            weeks: 4, 
            reading: 'Ezra; Nehemiah; Esther; 1&2 Chronicles', 
            theme: 'Return from Exile',
            weeklyBreakdown: [
                {
                    week: 41,
                    focus: 'Return & Rebuilding',
                    readings: 'Ezra 1-10',
                    keyThemes: 'Return, Worship, Purity',
                    studyQuestions: [
                        'How did God move Cyrus?',
                        'Why was rebuilding the temple important?',
                        'How did Ezra address sin?'
                    ],
                    memoryVerse: 'Ezra 7:10',
                    practicalApplication: 'Study God\'s Word diligently'
                },
                {
                    week: 42,
                    focus: 'Nehemiah: Wall Building',
                    readings: 'Nehemiah 1-7',
                    keyThemes: 'Prayer, Leadership, Opposition',
                    studyQuestions: [
                        'How did Nehemiah pray?',
                        'What made him a good leader?',
                        'How did he handle opposition?'
                    ],
                    memoryVerse: 'Nehemiah 6:3',
                    practicalApplication: 'Pray before acting'
                },
                {
                    week: 43,
                    focus: 'Spiritual Renewal',
                    readings: 'Nehemiah 8-13',
                    keyThemes: 'Word, Revival, Covenant',
                    studyQuestions: [
                        'How did the Word bring revival?',
                        'What covenants were renewed?',
                        'How did Nehemiah reform worship?'
                    ],
                    memoryVerse: 'Nehemiah 8:8',
                    practicalApplication: 'Let God\'s Word transform you'
                },
                {
                    week: 44,
                    focus: 'Esther & Chronicles',
                    readings: 'Esther; 1 Chronicles 1-29',
                    keyThemes: 'Providence, History, Worship',
                    studyQuestions: [
                        'How did God work through Esther?',
                        'What does Chronicles emphasize?',
                        'How important is worship?'
                    ],
                    memoryVerse: 'Esther 4:14',
                    practicalApplication: 'Recognize God\'s providence'
                }
            ]
        },
        nehase: { 
            weeks: 4, 
            reading: '2 Chronicles; Matthew 1-28; Mark 1-16', 
            theme: 'Gospels Begin',
            weeklyBreakdown: [
                {
                    week: 45,
                    focus: 'Chronicles Conclusion',
                    readings: '2 Chronicles 1-20',
                    keyThemes: 'Temple, Kings, Reform',
                    studyQuestions: [
                        'How did Solomon build the temple?',
                        'What made good kings good?',
                        'How did reforms work?'
                    ],
                    memoryVerse: '2 Chronicles 7:14',
                    practicalApplication: 'Humble yourself and pray'
                },
                {
                    week: 46,
                    focus: 'Exile & Return',
                    readings: '2 Chronicles 21-36',
                    keyThemes: 'Judgment, Hope, Cyrus',
                    studyQuestions: [
                        'Why did Judah fall?',
                        'What hope remained?',
                        'How did God use Cyrus?'
                    ],
                    memoryVerse: '2 Chronicles 36:23',
                    practicalApplication: 'Trust God\'s sovereignty'
                },
                {
                    week: 47,
                    focus: 'Matthew: Messiah',
                    readings: 'Matthew 1-14',
                    keyThemes: 'Fulfillment, Kingdom, Discipleship',
                    studyQuestions: [
                        'How does Matthew show Jesus as Messiah?',
                        'What is the kingdom of heaven?',
                        'What does discipleship require?'
                    ],
                    memoryVerse: 'Matthew 4:19',
                    practicalApplication: 'Follow Jesus completely'
                },
                {
                    week: 48,
                    focus: 'Matthew & Mark',
                    readings: 'Matthew 15-28; Mark 1-16',
                    keyThemes: 'Sacrifice, Resurrection, Mission',
                    studyQuestions: [
                        'Why did Jesus have to die?',
                        'What does resurrection mean?',
                        'What is our mission?'
                    ],
                    memoryVerse: 'Matthew 28:19-20',
                    practicalApplication: 'Make disciples'
                }
            ]
        }
    };

    const ntIntensive = [
        { 
            days: '1-9', 
            reading: 'Matthew 1-28', 
            focus: 'Jesus as King',
            dailyBreakdown: [
                { day: 1, reading: 'Matthew 1-4', focus: 'Birth & Preparation' },
                { day: 2, reading: 'Matthew 5-7', focus: 'Sermon on the Mount' },
                { day: 3, reading: 'Matthew 8-10', focus: 'Miracles & Mission' },
                { day: 4, reading: 'Matthew 11-13', focus: 'Parables of Kingdom' },
                { day: 5, reading: 'Matthew 14-18', focus: 'Identity & Community' },
                { day: 6, reading: 'Matthew 19-22', focus: 'Teaching & Conflict' },
                { day: 7, reading: 'Matthew 23-25', focus: 'Woes & End Times' },
                { day: 8, reading: 'Matthew 26-28', focus: 'Passion & Resurrection' },
                { day: 9, reading: 'Review Matthew', focus: 'Reflection & Application' }
            ]
        },
        { 
            days: '10-15', 
            reading: 'Mark 1-16', 
            focus: 'Jesus as Servant',
            dailyBreakdown: [
                { day: 10, reading: 'Mark 1-3', focus: 'Rapid Ministry Start' },
                { day: 11, reading: 'Mark 4-6', focus: 'Miracles & Power' },
                { day: 12, reading: 'Mark 7-9', focus: 'Teaching & Transfiguration' },
                { day: 13, reading: 'Mark 10-12', focus: 'Servant Leadership' },
                { day: 14, reading: 'Mark 13-14', focus: 'Prophecy & Betrayal' },
                { day: 15, reading: 'Mark 15-16', focus: 'Sacrifice & Victory' }
            ]
        },
        { 
            days: '16-24', 
            reading: 'Luke 1-24', 
            focus: 'Jesus as Man',
            dailyBreakdown: [
                { day: 16, reading: 'Luke 1-3', focus: 'Birth & Genealogy' },
                { day: 17, reading: 'Luke 4-6', focus: 'Temptation & Teaching' },
                { day: 18, reading: 'Luke 7-9', focus: 'Miracles & Compassion' },
                { day: 19, reading: 'Luke 10-12', focus: 'Parables & Prayer' },
                { day: 20, reading: 'Luke 13-15', focus: 'Kingdom Parables' },
                { day: 21, reading: 'Luke 16-18', focus: 'Wealth & Prayer' },
                { day: 22, reading: 'Luke 19-21', focus: 'Jerusalem Entry' },
                { day: 23, reading: 'Luke 22-24', focus: 'Last Supper to Resurrection' },
                { day: 24, reading: 'Review Luke', focus: 'Humanity of Christ' }
            ]
        }
    ];

    const discipleshipWeeks = [
        { 
            week: 1, 
            topic: 'Salvation & New Life', 
            key: 'Romans 3:21-26; Ephesians 2:1-10',
            objectives: [
                'Understand the gospel message clearly',
                'Explain what it means to be born again',
                'Share personal testimony effectively'
            ],
            activities: [
                'Write out personal salvation story',
                'Practice sharing gospel in 3 minutes',
                'Memorize key salvation verses'
            ],
            discussionQuestions: [
                'What did you understand about Jesus before becoming a Christian?',
                'How has your life changed since following Christ?',
                'What does it mean to be a new creation?'
            ],
            memoryVerse: '2 Corinthians 5:17'
        },
        { 
            week: 2, 
            topic: "God's Word", 
            key: '2 Timothy 3:14-17; Psalm 119:1-16',
            objectives: [
                'Understand the authority and reliability of Scripture',
                'Learn basic Bible study methods',
                'Develop daily Bible reading habit'
            ],
            activities: [
                'Learn SOAP method of Bible study (Scripture, Observation, Application, Prayer)',
                'Start prayer journal',
                'Practice finding verses in Bible'
            ],
            discussionQuestions: [
                'Why can we trust the Bible as God\'s Word?',
                'What has God been speaking to you through His Word this week?',
                'How does Scripture help us in daily life?'
            ],
            memoryVerse: 'Psalm 119:105'
        },
        { 
            week: 3, 
            topic: 'Prayer', 
            key: 'Matthew 6:5-15; Luke 11:1-13',
            objectives: [
                'Understand the purpose and power of prayer',
                'Learn different types of prayer',
                'Develop consistent prayer life'
            ],
            activities: [
                'Practice ACTS prayer model (Adoration, Confession, Thanksgiving, Supplication)',
                'Create prayer list for family and community',
                'Pray with partner for 15 minutes'
            ],
            discussionQuestions: [
                'What hinders you from praying regularly?',
                'How have you seen God answer prayer?',
                'What does it mean to pray in Jesus\' name?'
            ],
            memoryVerse: 'Philippians 4:6-7'
        },
        { 
            week: 4, 
            topic: 'Holy Spirit', 
            key: 'John 14:15-27; Romans 8:1-17',
            objectives: [
                'Understand the role of Holy Spirit',
                'Learn to be led by the Spirit',
                'Recognize spiritual gifts'
            ],
            activities: [
                'Study the fruits of the Spirit',
                'Practice listening prayer',
                'Identify spiritual gifts in group'
            ],
            discussionQuestions: [
                'How does the Holy Spirit help us daily?',
                'What does it mean to be filled with the Spirit?',
                'How do we distinguish God\'s voice?'
            ],
            memoryVerse: 'Galatians 5:22-23'
        }
    ];

    // Helper functions
    function toggleWeekExpand(weekId) {
        expandedWeeks[weekId] = !expandedWeeks[weekId];
        render();
    }

    function setActiveTab(tab) {
        activeTab = tab;
        render();
    }

    function setSelectedMonth(month) {
        selectedMonth = month;
        render();
    }

    function setSelectedPlan(plan) {
        selectedPlan = plan;
        render();
    }

    // Rendering functions
    function renderMonthSelector() {
        const container = document.getElementById('month-selector');
        if (!container) return;
        
        container.innerHTML = ethiopianMonths.map(month => `
            <button 
                class="month-btn ${selectedMonth === month.id ? 'active' : ''}"
                onclick="biblePlanner.setSelectedMonth('${month.id}')"
            >
                <div class="font-semibold text-sm">${month.name.split(' ')[0]}</div>
                <div class="text-xs opacity-80">${month.days} days</div>
            </button>
        `).join('');
    }

    function renderMonthDetails() {
        const container = document.getElementById('month-details');
        if (!container) return;
        
        const selectedMonthData = ethiopianMonths.find(m => m.id === selectedMonth);
        const monthHolyDays = holyDays.filter(h => h.month === selectedMonth);
        const monthMinistryEvents = ministryEvents.filter(e => e.month === selectedMonth);
        
        let content = `
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold" style="color: ${brandColors.primary}">${selectedMonthData.name}</h3>
                <div class="text-right">
                    <div class="text-sm text-gray-500">Gregorian Equivalent</div>
                    <div class="font-semibold text-gray-700">${selectedMonthData.gregorian}</div>
                </div>
            </div>
        `;
        
        if (monthHolyDays.length > 0) {
            content += `
                <div class="mb-6">
                    <h4 class="font-semibold mb-3 flex items-center gap-2" style="color: ${brandColors.primary}">
                        <i class="fas fa-sun" style="color: ${brandColors.secondary}"></i>
                        Holy Days & Festivals
                    </h4>
                    <div class="space-y-2">
                        ${monthHolyDays.map(day => `
                            <div class="holy-day">
                                <div class="font-semibold" style="color: ${brandColors.primary}">${day.name}</div>
                                <div class="text-sm text-gray-600">
                                    Day ${day.day} • ${day.date}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        if (monthMinistryEvents.length > 0) {
            content += `
                <div>
                    <h4 class="font-semibold mb-3 flex items-center gap-2" style="color: ${brandColors.primary}">
                        <i class="fas fa-map-marker-alt" style="color: ${brandColors.accent}"></i>
                        Ministry Events
                    </h4>
                    <div class="space-y-2">
                        ${monthMinistryEvents.map(event => `
                            <div class="ministry-event">
                                <div class="font-semibold" style="color: ${brandColors.primary}">${event.name}</div>
                                <div class="text-sm text-gray-600">
                                    Day ${event.day} • ${event.date}
                                </div>
                                <span class="event-badge">${event.type}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        if (monthHolyDays.length === 0 && monthMinistryEvents.length === 0) {
            content += `
                <div class="text-center py-8 text-gray-500">
                    <i class="fas fa-moon text-4xl opacity-30 mb-2"></i>
                    <p>No special events scheduled for this month</p>
                </div>
            `;
        }
        
        container.innerHTML = content;
    }

    function renderChronologicalPlan() {
        const container = document.getElementById('chronological-plan');
        if (!container) return;
        
        let content = `
            <div class="flex items-center gap-3 mb-4">
                <i class="fas fa-book text-xl" style="color: ${brandColors.primary}"></i>
                <h3 class="text-2xl font-bold" style="color: ${brandColors.primary}">One-Year Chronological Plan</h3>
            </div>
            <p class="text-gray-600 mb-6">Read through the entire Bible in Ethiopian calendar year order - 48 weeks through the Old Testament</p>
        `;
        
        Object.entries(chronologicalPlan).forEach(([monthId, plan]) => {
            const month = ethiopianMonths.find(m => m.id === monthId);
            if (!month) return;
            
            content += `
                <div class="mb-8">
                    <div class="p-4 rounded-lg mb-4 text-white" style="background-color: ${brandColors.primary}">
                        <div class="flex justify-between items-center">
                            <h4 class="font-bold text-xl">${month.name.split(' ')[0]}</h4>
                            <span class="bg-white px-3 py-1 rounded-full text-sm" style="color: ${brandColors.primary}">
                                ${plan.weeks} weeks • ${plan.theme}
                            </span>
                        </div>
                        <p class="mt-2 opacity-90">${plan.reading}</p>
                    </div>
                    
                    <div class="space-y-4">
                        ${plan.weeklyBreakdown.map(week => `
                            <div class="week-item">
                                <div class="week-header" onclick="biblePlanner.toggleWeekExpand('chrono-${monthId}-${week.week}')">
                                    <div>
                                        <span class="font-bold" style="color: ${brandColors.primary}">
                                            Week ${week.week}: ${week.focus}
                                        </span>
                                        <div class="text-sm text-gray-600 mt-1">${week.readings}</div>
                                    </div>
                                    <i class="fas fa-chevron-${expandedWeeks[`chrono-${monthId}-${week.week}`] ? 'up' : 'down'}" style="color: ${brandColors.primary}"></i>
                                </div>
                                
                                <div class="week-content ${expandedWeeks[`chrono-${monthId}-${week.week}`] ? 'expanded' : ''}">
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 class="font-semibold mb-2 flex items-center gap-2" style="color: ${brandColors.primary}">
                                                <i class="fas fa-bullseye"></i>
                                                Key Themes
                                            </h5>
                                            <p class="text-sm text-gray-700 mb-4">${week.keyThemes}</p>
                                            
                                            <h5 class="font-semibold mb-2 flex items-center gap-2" style="color: ${brandColors.primary}">
                                                <i class="fas fa-clock"></i>
                                                Memory Verse
                                            </h5>
                                            <div class="memory-verse">"${week.memoryVerse}"</div>
                                            
                                            <h5 class="font-semibold mt-4 mb-2 flex items-center gap-2" style="color: ${brandColors.primary}">
                                                <i class="fas fa-heart"></i>
                                                Practical Application
                                            </h5>
                                            <p class="text-sm text-gray-700 bg-white p-3 rounded border">${week.practicalApplication}</p>
                                        </div>
                                        
                                        <div>
                                            <h5 class="font-semibold mb-2" style="color: ${brandColors.primary}">Study Questions</h5>
                                            <div class="space-y-3">
                                                ${week.studyQuestions.map((question, idx) => `
                                                    <div class="study-question">
                                                        <div class="question-number">${idx + 1}</div>
                                                        ${question}
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = content;
    }

    function renderNT90Plan() {
        const container = document.getElementById('nt90-plan');
        if (!container) return;
        
        let content = `
            <div class="flex items-center gap-3 mb-4">
                <i class="fas fa-book text-xl" style="color: ${brandColors.primary}"></i>
                <h3 class="text-2xl font-bold" style="color: ${brandColors.primary}">90-Day New Testament Intensive</h3>
            </div>
            <p class="text-gray-600 mb-6">Complete the New Testament in 3 months • 3 chapters per day</p>
            
            <div class="space-y-4">
        `;
        
        ntIntensive.forEach((section, idx) => {
            content += `
                <div class="week-item">
                    <div class="week-header" onclick="biblePlanner.toggleWeekExpand('nt90-${idx}')">
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <span class="font-bold px-3 py-1 rounded-full text-white text-sm" style="background-color: ${brandColors.secondary}">
                                    Days ${section.days}
                                </span>
                                <span class="font-semibold" style="color: ${brandColors.primary}">
                                    ${section.focus}
                                </span>
                            </div>
                            <div class="text-sm text-gray-600">${section.reading}</div>
                        </div>
                        <i class="fas fa-chevron-${expandedWeeks[`nt90-${idx}`] ? 'up' : 'down'}" style="color: ${brandColors.primary}"></i>
                    </div>
                    
                    <div class="week-content ${expandedWeeks[`nt90-${idx}`] ? 'expanded' : ''}">
                        <h5 class="font-semibold mb-3" style="color: ${brandColors.primary}">Daily Breakdown</h5>
                        <div class="daily-breakdown">
                            ${section.dailyBreakdown.map(day => `
                                <div class="day-card">
                                    <div class="font-bold text-lg mb-1" style="color: ${brandColors.primary}">Day ${day.day}</div>
                                    <div class="text-sm text-gray-600 mb-2">${day.reading}</div>
                                    <div class="day-focus">${day.focus}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        });
        
        content += `</div>`;
        container.innerHTML = content;
    }

    function renderDiscipleshipView() {
        const container = document.getElementById('discipleship-view');
        if (!container) return;
        
        let content = `
            <div class="flex items-center gap-3 mb-4">
                <i class="fas fa-users text-xl" style="color: ${brandColors.primary}"></i>
                <h3 class="text-2xl font-bold" style="color: ${brandColors.primary}">16-Week Discipleship Program</h3>
            </div>
            <p class="text-gray-600 mb-6">"Rooted in Messiah" - Topical studies aligned with discipleship groups</p>
            
            <div class="space-y-4">
        `;
        
        discipleshipWeeks.forEach(week => {
            content += `
                <div class="week-item">
                    <div class="week-header" onclick="biblePlanner.toggleWeekExpand('disc-${week.week}')">
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <span class="font-bold px-3 py-1 rounded-full text-white text-sm" style="background-color: ${brandColors.accent}">
                                    Week ${week.week}
                                </span>
                                <span class="font-bold text-lg" style="color: ${brandColors.primary}">
                                    ${week.topic}
                                </span>
                            </div>
                            <div class="text-sm text-gray-600">Key Passages: ${week.key}</div>
                        </div>
                        <i class="fas fa-chevron-${expandedWeeks[`disc-${week.week}`] ? 'up' : 'down'}" style="color: ${brandColors.primary}"></i>
                    </div>
                    
                    <div class="week-content ${expandedWeeks[`disc-${week.week}`] ? 'expanded' : ''}">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <h5 class="font-semibold mb-3 flex items-center gap-2" style="color: ${brandColors.primary}">
                                    <i class="fas fa-bullseye"></i>
                                    Learning Objectives
                                </h5>
                                <div class="space-y-2">
                                    ${week.objectives.map((objective, idx) => `
                                        <div class="flex items-start p-2 bg-white rounded">
                                            <div class="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white mr-2 mt-0.5" style="background-color: ${brandColors.secondary}">✓</div>
                                            ${objective}
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <h5 class="font-semibold mt-4 mb-2 flex items-center gap-2" style="color: ${brandColors.primary}">
                                    <i class="fas fa-clock"></i>
                                    Memory Verse
                                </h5>
                                <div class="memory-verse">"${week.memoryVerse}"</div>
                            </div>
                            
                            <div>
                                <h5 class="font-semibold mb-2 flex items-center gap-2" style="color: ${brandColors.primary}">
                                    <i class="fas fa-heart"></i>
                                    Practical Activities
                                </h5>
                                <div class="space-y-2 mb-4">
                                    ${week.activities.map(activity => `
                                        <div class="flex items-start p-2 bg-white rounded">
                                            <div class="mr-2 mt-0.5" style="color: ${brandColors.accent}">•</div>
                                            ${activity}
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <h5 class="font-semibold mb-2" style="color: ${brandColors.primary}">Discussion Questions</h5>
                                <div class="space-y-3">
                                    ${week.discussionQuestions.map((question, idx) => `
                                        <div class="flex items-start p-3 bg-white rounded-lg border">
                                            <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white mr-3 mt-0.5 font-bold" style="background-color: ${brandColors.primary}">Q${idx + 1}</div>
                                            ${question}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        content += `</div>`;
        container.innerHTML = content;
    }

    function renderTabs() {
        // Update active tab buttons
        document.querySelectorAll('.planner-nav-btn').forEach(btn => {
            if (btn.dataset.tab === activeTab) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update active plan buttons
        document.querySelectorAll('.plan-btn').forEach(btn => {
            if (btn.dataset.plan === selectedPlan) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Show/hide views
        document.getElementById('calendar-view').classList.toggle('hidden', activeTab !== 'calendar');
        document.getElementById('reading-view').classList.toggle('hidden', activeTab !== 'reading');
        document.getElementById('discipleship-view').classList.toggle('hidden', activeTab !== 'discipleship');
        
        document.getElementById('chronological-plan').classList.toggle('hidden', selectedPlan !== 'chronological');
        document.getElementById('nt90-plan').classList.toggle('hidden', selectedPlan !== 'nt90');
    }

    function render() {
        renderTabs();
        renderMonthSelector();
        
        if (activeTab === 'calendar') {
            renderMonthDetails();
        } else if (activeTab === 'reading') {
            if (selectedPlan === 'chronological') {
                renderChronologicalPlan();
            } else if (selectedPlan === 'nt90') {
                renderNT90Plan();
            }
        } else if (activeTab === 'discipleship') {
            renderDiscipleshipView();
        }
    }

    // Event listeners
    function initializeEventListeners() {
        // Tab navigation
        document.querySelectorAll('.planner-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setActiveTab(btn.dataset.tab);
            });
        });
        
        // Plan selection
        document.querySelectorAll('.plan-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setSelectedPlan(btn.dataset.plan);
            });
        });
    }

    // Initialize the app
    function init() {
        window.biblePlanner = {
            setActiveTab,
            setSelectedMonth,
            setSelectedPlan,
            toggleWeekExpand
        };
        
        initializeEventListeners();
        render();
    }

    // Start the application
    init();
});