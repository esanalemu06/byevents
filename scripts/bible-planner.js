class EthiopianBiblePlanner {
    constructor() {
        this.state = {
            activeTab: 'calendar',
            selectedMonth: 'meskerem',
            selectedPlan: 'chronological',
            expandedWeeks: {},
            completedReadings: JSON.parse(localStorage.getItem('completedReadings')) || {},
            showStats: false
        };

        this.brandColors = {
            primary: '#205782',
            secondary: '#f2842f',
            accent: '#2e8b57',
            light: '#e6f2ff',
            warm: '#fff5eb',
            success: '#10b981'
        };

        this.ethiopianMonths = [
            { id: 'meskerem', name: 'Meskerem (መስከረም)', days: 30, gregorian: 'Sep 11 - Oct 10, 2024', season: 'Spring' },
            { id: 'tikimt', name: 'Tikimt (ጥቅምት)', days: 30, gregorian: 'Oct 11 - Nov 9, 2024', season: 'Spring' },
            { id: 'hidar', name: 'Hidar (ኅዳር)', days: 30, gregorian: 'Nov 10 - Dec 9, 2024', season: 'Spring' },
            { id: 'tahsas', name: 'Tahsas (ታኅሣሥ)', days: 30, gregorian: 'Dec 10, 2024 - Jan 8, 2025', season: 'Winter' },
            { id: 'tir', name: 'Tir (ጥር)', days: 30, gregorian: 'Jan 9 - Feb 7, 2025', season: 'Winter' },
            { id: 'yekatit', name: 'Yekatit (የካቲት)', days: 30, gregorian: 'Feb 8 - Mar 9, 2025', season: 'Winter' },
            { id: 'megabit', name: 'Megabit (መጋቢት)', days: 30, gregorian: 'Mar 10 - Apr 8, 2025', season: 'Summer' },
            { id: 'miazia', name: 'Miazia (ሚያዝያ)', days: 30, gregorian: 'Apr 9 - May 8, 2025', season: 'Summer' },
            { id: 'ginbot', name: 'Ginbot (ግንቦት)', days: 30, gregorian: 'May 9 - Jun 7, 2025', season: 'Summer' },
            { id: 'sene', name: 'Sene (ሰኔ)', days: 30, gregorian: 'Jun 8 - Jul 7, 2025', season: 'Rainy' },
            { id: 'hamle', name: 'Hamle (ሐምሌ)', days: 30, gregorian: 'Jul 8 - Aug 6, 2025', season: 'Rainy' },
            { id: 'nehase', name: 'Nehase (ነሐሴ)', days: 30, gregorian: 'Aug 7 - Sep 5, 2025', season: 'Rainy' },
            { id: 'pagume', name: 'Pagume (ጳጉሜን)', days: 5, gregorian: 'Sep 6-10, 2025', season: 'Special' }
        ];

        this.holyDays = [
            { month: 'meskerem', day: 1, name: 'Ethiopian New Year (እንቁጣጣሽ)', date: 'Sep 11, 2025', description: 'New Year celebration' },
            { month: 'meskerem', day: 17, name: 'Finding of True Cross (መስቀል)', date: 'Sep 27, 2025', description: 'Meskel festival' },
            { month: 'tahsas', day: 29, name: 'Ethiopian Christmas (ገና/ልደት)', date: 'Jan 7, 2026', description: 'Birth of Christ' },
            { month: 'tir', day: 11, name: 'Epiphany/Timkat (ጥምቀት)', date: 'Jan 19, 2026', description: 'Baptism of Jesus' },
            { month: 'nehase', day: 16, name: 'Assumption of Mary (ፍልሰታ)', date: 'Aug 22, 2026', description: 'Filseta celebration' }
        ];

        this.ministryEvents = [
            { month: 'tir', day: 4, name: 'Ministry Establishment', date: 'Jan 12, 2025', type: 'milestone', description: 'Foundation of ministry work' },
            { month: 'meskerem', day: 1, name: 'Phase 1 Launch (Arsi & Bale)', date: 'Sep 11, 2025', type: 'launch', description: 'Beginning outreach in Arsi and Bale regions' },
            { month: 'megabit', day: 1, name: 'Mid-Year Evaluation', date: 'Mar 10, 2026', type: 'evaluation', description: 'Review progress and adjust strategies' },
            { month: 'nehase', day: 30, name: 'Phase 1 Completion', date: 'Sep 5, 2026', type: 'milestone', description: 'Celebrate first year achievements' }
        ];

        // COMPLETE CHRONOLOGICAL PLAN - ALL 48 WEEKS
        this.chronologicalPlan = {
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
                        memoryVerse: 'Genesis 1:1 - "In the beginning God created the heavens and the earth."',
                        practicalApplication: 'Reflect on God as Creator in your daily life. Take time each day to notice His creation around you.'
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
                        memoryVerse: 'Genesis 15:6 - "Abram believed the LORD, and he credited it to him as righteousness."',
                        practicalApplication: 'Step out in faith in one area this week. Trust God with something that seems impossible.'
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
                        memoryVerse: 'Genesis 50:20 - "You intended to harm me, but God intended it for good."',
                        practicalApplication: 'Practice forgiveness in a relationship. Choose to see God\'s purpose in difficulties.'
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
                        memoryVerse: 'Exodus 14:14 - "The LORD will fight for you; you need only to be still."',
                        practicalApplication: 'Trust God with an impossible situation. Stand still and watch Him work.'
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
                        memoryVerse: 'Exodus 15:2 - "The LORD is my strength and my defense."',
                        practicalApplication: 'Thank God for His daily provision. List three ways He has provided for you this week.'
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
                        memoryVerse: 'Exodus 20:1-3 - "I am the LORD your God... You shall have no other gods before me."',
                        practicalApplication: 'Apply one commandment specifically this week. Choose one and live it intentionally.'
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
                        memoryVerse: 'Exodus 25:8 - "Have them make a sanctuary for me, and I will dwell among them."',
                        practicalApplication: 'Create a dedicated space for prayer in your home. Make worship a priority.'
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
                        memoryVerse: 'Leviticus 19:2 - "Be holy because I, the LORD your God, am holy."',
                        practicalApplication: 'Practice holiness in your thoughts. Guard your mind against impurity.'
                    }
                ]
            },
            hidar: {
                weeks: 4,
                reading: 'Numbers 1-36; Deuteronomy 1-34',
                theme: 'Wilderness Wanderings & Law Review',
                weeklyBreakdown: [
                    {
                        week: 9,
                        focus: 'Census & Organization',
                        readings: 'Numbers 1-10',
                        keyThemes: 'Order, Preparation, Guidance',
                        studyQuestions: [
                            'Why was numbering the people important?',
                            'How did God organize His people for the journey?',
                            'What can we learn about God\'s guidance from the cloud and fire?'
                        ],
                        memoryVerse: 'Numbers 9:17 - "Whenever the cloud lifted from above the tent, the Israelites set out."',
                        practicalApplication: 'Seek God\'s guidance in your decisions this week. Wait for His direction before moving forward.'
                    },
                    {
                        week: 10,
                        focus: 'Rebellion & Consequences',
                        readings: 'Numbers 11-21',
                        keyThemes: 'Complaining, Judgment, Faithfulness',
                        studyQuestions: [
                            'What were the consequences of Israel\'s complaining?',
                            'How did Moses handle the people\'s rebellion?',
                            'What does the bronze snake teach about salvation?'
                        ],
                        memoryVerse: 'Numbers 14:18 - "The LORD is slow to anger, abounding in love and forgiving sin and rebellion."',
                        practicalApplication: 'Guard against complaining. Practice gratitude daily for God\'s provisions.'
                    },
                    {
                        week: 11,
                        focus: 'Balaam & Preparation',
                        readings: 'Numbers 22-36',
                        keyThemes: 'Obedience, Blessing, Inheritance',
                        studyQuestions: [
                            'What can we learn from Balaam\'s story?',
                            'How did God turn intended curses into blessings?',
                            'What principles govern inheritance in Israel?'
                        ],
                        memoryVerse: 'Numbers 23:19 - "God is not human, that he should lie, not a human being, that he should change his mind."',
                        practicalApplication: 'Trust that God can turn your difficulties into blessings this week.'
                    },
                    {
                        week: 12,
                        focus: 'Moses\' Final Sermons',
                        readings: 'Deuteronomy 1-34',
                        keyThemes: 'Covenant Renewal, Obedience, Choice',
                        studyQuestions: [
                            'What was Moses\' main message to the new generation?',
                            'How does Deuteronomy summarize God\'s relationship with Israel?',
                            'What does it mean to love God with all your heart?'
                        ],
                        memoryVerse: 'Deuteronomy 6:4-5 - "Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart."',
                        practicalApplication: 'Choose to love God wholeheartedly in one specific area of your life this week.'
                    }
                ]
            },
            tahsas: {
                weeks: 4,
                reading: 'Joshua 1-24; Judges 1-21; Ruth 1-4',
                theme: 'Conquest & Judges Period',
                weeklyBreakdown: [
                    {
                        week: 13,
                        focus: 'Conquest of Canaan',
                        readings: 'Joshua 1-12',
                        keyThemes: 'Courage, Obedience, Victory',
                        studyQuestions: [
                            'What was Joshua\'s key to success?',
                            'How did God demonstrate His power at Jericho?',
                            'What consequences came from Achan\'s sin?'
                        ],
                        memoryVerse: 'Joshua 1:9 - "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you."',
                        practicalApplication: 'Face a fear or challenge with courage, trusting God is with you.'
                    },
                    {
                        week: 14,
                        focus: 'Land Division & Covenant',
                        readings: 'Joshua 13-24',
                        keyThemes: 'Inheritance, Faithfulness, Service',
                        studyQuestions: [
                            'How was the land divided among the tribes?',
                            'What was Joshua\'s final challenge to the people?',
                            'What does "as for me and my household" mean practically?'
                        ],
                        memoryVerse: 'Joshua 24:15 - "But as for me and my household, we will serve the LORD."',
                        practicalApplication: 'Make a conscious decision to serve God in your family life this week.'
                    },
                    {
                        week: 15,
                        focus: 'Cycle of Judges',
                        readings: 'Judges 1-16',
                        keyThemes: 'Disobedience, Oppression, Deliverance',
                        studyQuestions: [
                            'What pattern repeats throughout Judges?',
                            'How did God use flawed leaders?',
                            'What can we learn from Samson\'s strengths and weaknesses?'
                        ],
                        memoryVerse: 'Judges 21:25 - "In those days Israel had no king; everyone did as they saw fit."',
                        practicalApplication: 'Examine areas where you might be doing "what is right in your own eyes" instead of God\'s will.'
                    },
                    {
                        week: 16,
                        focus: 'Ruth & Hope',
                        readings: 'Judges 17-21; Ruth 1-4',
                        keyThemes: 'Loyalty, Redemption, Providence',
                        studyQuestions: [
                            'How does Ruth demonstrate faithful love?',
                            'What does Boaz as redeemer teach us about Christ?',
                            'How does God work through ordinary people?'
                        ],
                        memoryVerse: 'Ruth 1:16 - "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."',
                        practicalApplication: 'Show loyal love to someone in need this week, as Ruth did for Naomi.'
                    }
                ]
            },
            tir: {
                weeks: 4,
                reading: '1 Samuel 1-31; 2 Samuel 1-24',
                theme: 'United Kingdom Begins',
                weeklyBreakdown: [
                    {
                        week: 17,
                        focus: 'Samuel & Saul',
                        readings: '1 Samuel 1-15',
                        keyThemes: 'Prayer, Leadership, Obedience',
                        studyQuestions: [
                            'What can we learn from Hannah\'s prayer?',
                            'Why did the people want a king?',
                            'What was Saul\'s fatal mistake?'
                        ],
                        memoryVerse: '1 Samuel 15:22 - "To obey is better than sacrifice, and to heed is better than the fat of rams."',
                        practicalApplication: 'Choose obedience over outward religious activities in one area this week.'
                    },
                    {
                        week: 18,
                        focus: 'David\'s Rise',
                        readings: '1 Samuel 16-31',
                        keyThemes: 'Anointing, Friendship, Patience',
                        studyQuestions: [
                            'Why was David chosen as king?',
                            'What made Jonathan and David\'s friendship special?',
                            'How did David handle opportunities to kill Saul?'
                        ],
                        memoryVerse: '1 Samuel 16:7 - "The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart."',
                        practicalApplication: 'Value people for their heart character rather than outward appearance.'
                    },
                    {
                        week: 19,
                        focus: 'David\'s Reign',
                        readings: '2 Samuel 1-12',
                        keyThemes: 'Kingship, Covenant, Sin',
                        studyQuestions: [
                            'How did David establish his kingdom?',
                            'What was God\'s covenant with David?',
                            'What were the consequences of David\'s sin with Bathsheba?'
                        ],
                        memoryVerse: '2 Samuel 7:16 - "Your house and your kingdom will endure forever before me; your throne will be established forever."',
                        practicalApplication: 'Remember that all your actions have consequences, both good and bad.'
                    },
                    {
                        week: 20,
                        focus: 'Family Troubles',
                        readings: '2 Samuel 13-24',
                        keyThemes: 'Consequences, Repentance, Grace',
                        studyQuestions: [
                            'How did David\'s sin affect his family?',
                            'What can we learn from Absalom\'s rebellion?',
                            'How did David respond to God\'s discipline?'
                        ],
                        memoryVerse: '2 Samuel 22:2-3 - "The LORD is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge."',
                        practicalApplication: 'When you face consequences for mistakes, run to God as your refuge rather than away from Him.'
                    }
                ]
            },
            yekatit: {
                weeks: 4,
                reading: '1 Kings 1-22; 2 Kings 1-25; 1 Chronicles 1-29',
                theme: 'Divided Kingdom & Exile',
                weeklyBreakdown: [
                    {
                        week: 21,
                        focus: 'Solomon\'s Reign',
                        readings: '1 Kings 1-11; 1 Chronicles 1-9',
                        keyThemes: 'Wisdom, Temple, Compromise',
                        studyQuestions: [
                            'What made Solomon\'s wisdom unique?',
                            'What was significant about the temple?',
                            'How did Solomon\'s foreign wives lead him astray?'
                        ],
                        memoryVerse: '1 Kings 3:9 - "So give your servant a discerning heart to govern your people and to distinguish between right and wrong."',
                        practicalApplication: 'Ask God for wisdom in a specific decision you\'re facing this week.'
                    },
                    {
                        week: 22,
                        focus: 'Kingdom Divides',
                        readings: '1 Kings 12-22; 1 Chronicles 10-21',
                        keyThemes: 'Division, Prophets, Idolatry',
                        studyQuestions: [
                            'Why did the kingdom split?',
                            'How did prophets like Elijah confront idolatry?',
                            'What can we learn from Ahab and Jezebel\'s reign?'
                        ],
                        memoryVerse: '1 Kings 18:21 - "How long will you waver between two opinions? If the LORD is God, follow him."',
                        practicalApplication: 'Eliminate any "idols" or distractions that compete for your devotion to God.'
                    },
                    {
                        week: 23,
                        focus: 'Elisha & Decline',
                        readings: '2 Kings 1-17; 1 Chronicles 22-29',
                        keyThemes: 'Miracles, Faithfulness, Judgment',
                        studyQuestions: [
                            'How did Elisha\'s ministry differ from Elijah\'s?',
                            'Why was Israel taken into Assyrian captivity?',
                            'What reforms did Hezekiah implement?'
                        ],
                        memoryVerse: '2 Kings 17:13-14 - "The LORD warned Israel and Judah through all his prophets... But they would not listen."',
                        practicalApplication: 'Listen carefully to godly counsel and warnings in your life.'
                    },
                    {
                        week: 24,
                        focus: 'Judah\'s Fall',
                        readings: '2 Kings 18-25; 2 Chronicles 1-36',
                        keyThemes: 'Reform, Judgment, Hope',
                        studyQuestions: [
                            'What made Josiah\'s reforms significant?',
                            'Why did Judah go into Babylonian exile?',
                            'What hope remained despite the destruction?'
                        ],
                        memoryVerse: '2 Kings 23:25 - "Neither before nor after Josiah was there a king like him who turned to the LORD as he did."',
                        practicalApplication: 'Be a person of spiritual reform in your sphere of influence.'
                    }
                ]
            },
            megabit: {
                weeks: 4,
                reading: 'Ezra 1-10; Nehemiah 1-13; Esther 1-10; Job 1-42',
                theme: 'Return & Restoration',
                weeklyBreakdown: [
                    {
                        week: 25,
                        focus: 'Return from Exile',
                        readings: 'Ezra 1-10; Nehemiah 1-7',
                        keyThemes: 'Restoration, Worship, Opposition',
                        studyQuestions: [
                            'How did God move Cyrus to allow the return?',
                            'What challenges did the returning exiles face?',
                            'How did Nehemiah lead the rebuilding?'
                        ],
                        memoryVerse: 'Ezra 1:1 - "The LORD moved the heart of Cyrus king of Persia."',
                        practicalApplication: 'Trust that God can move the hearts of leaders and authorities for His purposes.'
                    },
                    {
                        week: 26,
                        focus: 'Spiritual Renewal',
                        readings: 'Nehemiah 8-13; Esther 1-10',
                        keyThemes: 'Word of God, Covenant, Providence',
                        studyQuestions: [
                            'How did Ezra\'s reading of the Law impact the people?',
                            'What was significant about the covenant renewal?',
                            'How did God use Esther to save His people?'
                        ],
                        memoryVerse: 'Nehemiah 8:8 - "They read from the Book of the Law of God, making it clear and giving the meaning so that the people understood what was being read."',
                        practicalApplication: 'Commit to understanding God\'s Word better through study and meditation.'
                    },
                    {
                        week: 27,
                        focus: 'Job: Suffering & Sovereignty',
                        readings: 'Job 1-21',
                        keyThemes: 'Suffering, Justice, Mystery',
                        studyQuestions: [
                            'What do we learn about spiritual warfare from Job 1-2?',
                            'How did Job\'s friends misunderstand his suffering?',
                            'What questions did Job raise about God\'s justice?'
                        ],
                        memoryVerse: 'Job 1:21 - "The LORD gave and the LORD has taken away; may the name of the LORD be praised."',
                        practicalApplication: 'Praise God even in difficult circumstances, trusting His sovereignty.'
                    },
                    {
                        week: 28,
                        focus: 'God Answers Job',
                        readings: 'Job 22-42',
                        keyThemes: 'Wisdom, Repentance, Restoration',
                        studyQuestions: [
                            'How did God answer Job\'s questions?',
                            'What was God\'s main point in His speeches?',
                            'How did Job\'s perspective change?'
                        ],
                        memoryVerse: 'Job 42:5-6 - "My ears had heard of you but now my eyes have seen you. Therefore I despise myself and repent in dust and ashes."',
                        practicalApplication: 'Humble yourself before God\'s majesty and wisdom when you don\'t understand His ways.'
                    }
                ]
            },
            miazia: {
                weeks: 4,
                reading: 'Psalms 1-150; Proverbs 1-31',
                theme: 'Wisdom & Worship',
                weeklyBreakdown: [
                    {
                        week: 29,
                        focus: 'Psalms of David',
                        readings: 'Psalms 1-41',
                        keyThemes: 'Worship, Lament, Trust',
                        studyQuestions: [
                            'What makes the Psalms unique as prayer and worship?',
                            'How do the Psalms express honest emotions?',
                            'What do we learn about God\'s character from these psalms?'
                        ],
                        memoryVerse: 'Psalm 1:1-2 - "Blessed is the one who does not walk in step with the wicked... but whose delight is in the law of the LORD."',
                        practicalApplication: 'Use the Psalms as a model for your own prayers this week.'
                    },
                    {
                        week: 30,
                        focus: 'Worship & Wisdom',
                        readings: 'Psalms 42-89; Proverbs 1-9',
                        keyThemes: 'Refuge, Wisdom, Fear of God',
                        studyQuestions: [
                            'How do the Psalms portray God as our refuge?',
                            'What is the beginning of wisdom?',
                            'How does wisdom protect us?'
                        ],
                        memoryVerse: 'Psalm 46:1 - "God is our refuge and strength, an ever-present help in trouble."',
                        practicalApplication: 'Memorize one Psalm to use as a prayer during times of trouble.'
                    },
                    {
                        week: 31,
                        focus: 'Songs of Ascent',
                        readings: 'Psalms 90-118; Proverbs 10-20',
                        keyThemes: 'Pilgrimage, Thanksgiving, Practical Wisdom',
                        studyQuestions: [
                            'What were the Songs of Ascent used for?',
                            'How do these psalms express thanksgiving?',
                            'What practical wisdom do Proverbs 10-20 offer?'
                        ],
                        memoryVerse: 'Psalm 100:4-5 - "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."',
                        practicalApplication: 'Practice entering God\'s presence with thanksgiving each day this week.'
                    },
                    {
                        week: 32,
                        focus: 'Praise & Wisdom Conclusion',
                        readings: 'Psalms 119-150; Proverbs 21-31',
                        keyThemes: 'Word of God, Praise, Final Wisdom',
                        studyQuestions: [
                            'What does Psalm 119 teach about God\'s Word?',
                            'How do the final psalms call us to praise?',
                            'What wisdom does the "wife of noble character" exemplify?'
                        ],
                        memoryVerse: 'Psalm 119:105 - "Your word is a lamp for my feet, a light on my path."',
                        practicalApplication: 'Let God\'s Word guide your decisions and illuminate your path daily.'
                    }
                ]
            },
            ginbot: {
                weeks: 4,
                reading: 'Ecclesiastes 1-12; Song of Songs 1-8; Isaiah 1-39',
                theme: 'Prophets Begin',
                weeklyBreakdown: [
                    {
                        week: 33,
                        focus: 'Ecclesiastes & Song of Songs',
                        readings: 'Ecclesiastes 1-12; Song of Songs 1-8',
                        keyThemes: 'Meaning, Love, Joy',
                        studyQuestions: [
                            'What is the "meaning of life" according to Ecclesiastes?',
                            'How does Song of Songs portray godly love?',
                            'What place do pleasure and work have in the Christian life?'
                        ],
                        memoryVerse: 'Ecclesiastes 12:13 - "Fear God and keep his commandments, for this is the duty of all mankind."',
                        practicalApplication: 'Find your ultimate satisfaction in God rather than earthly pursuits.'
                    },
                    {
                        week: 34,
                        focus: 'Isaiah: Judgment & Hope',
                        readings: 'Isaiah 1-23',
                        keyThemes: 'Sin, Judgment, Holiness',
                        studyQuestions: [
                            'What sins was Judah committing?',
                            'How does Isaiah describe God\'s holiness?',
                            'What judgments did Isaiah pronounce on nations?'
                        ],
                        memoryVerse: 'Isaiah 6:3 - "Holy, holy, holy is the LORD Almighty; the whole earth is full of his glory."',
                        practicalApplication: 'Worship God for His holiness and examine areas where you need cleansing.'
                    },
                    {
                        week: 35,
                        focus: 'Isaiah: Trust & Messiah',
                        readings: 'Isaiah 24-39',
                        keyThemes: 'Trust, Salvation, Hezekiah',
                        studyQuestions: [
                            'Why did God tell Judah not to trust in alliances?',
                            'What messianic prophecies appear in these chapters?',
                            'How did Hezekiah demonstrate both faith and weakness?'
                        ],
                        memoryVerse: 'Isaiah 26:3 - "You will keep in perfect peace those whose minds are steadfast, because they trust in you."',
                        practicalApplication: 'Trust God completely rather than human solutions for your challenges.'
                    },
                    {
                        week: 36,
                        focus: 'Isaiah: Comfort & Restoration',
                        readings: 'Isaiah 40-66',
                        keyThemes: 'Comfort, Servant, New Creation',
                        studyQuestions: [
                            'How does Isaiah 40 comfort God\'s people?',
                            'What do the Servant Songs reveal about Jesus?',
                            'How does Isaiah describe the new creation?'
                        ],
                        memoryVerse: 'Isaiah 40:31 - "But those who hope in the LORD will renew their strength. They will soar on wings like eagles."',
                        practicalApplication: 'Wait on the Lord for renewed strength when you feel weary.'
                    }
                ]
            },
            sene: {
                weeks: 4,
                reading: 'Jeremiah 1-52; Lamentations 1-5',
                theme: 'Weeping Prophet',
                weeklyBreakdown: [
                    {
                        week: 37,
                        focus: 'Jeremiah\'s Call & Early Ministry',
                        readings: 'Jeremiah 1-20',
                        keyThemes: 'Calling, Opposition, Lament',
                        studyQuestions: [
                            'How was Jeremiah called and equipped?',
                            'Why was Jeremiah called the "weeping prophet"?',
                            'How did people respond to his messages?'
                        ],
                        memoryVerse: 'Jeremiah 1:7-8 - "Do not say, \'I am too young.\' You must go to everyone I send you to and say whatever I command you."',
                        practicalApplication: 'Be obedient to God\'s calling even when it\'s difficult or unpopular.'
                    },
                    {
                        week: 38,
                        focus: 'Prophecies & False Prophets',
                        readings: 'Jeremiah 21-36',
                        keyThemes: 'True vs False Prophecy, Covenant, Hope',
                        studyQuestions: [
                            'How can we distinguish true from false prophecy?',
                            'What was the new covenant Jeremiah prophesied?',
                            'How did Jeremiah demonstrate hope during judgment?'
                        ],
                        memoryVerse: 'Jeremiah 29:11 - "\'For I know the plans I have for you,\' declares the LORD, \'plans to prosper you and not to harm you.\'"',
                        practicalApplication: 'Trust God\'s good plans for your life even during difficult times.'
                    },
                    {
                        week: 39,
                        focus: 'Fall of Jerusalem',
                        readings: 'Jeremiah 37-52; Lamentations 1-5',
                        keyThemes: 'Destruction, Grief, Faithfulness',
                        studyQuestions: [
                            'How did Jerusalem finally fall?',
                            'What can we learn from Lamentations about grief?',
                            'How did God remain faithful in judgment?'
                        ],
                        memoryVerse: 'Lamentations 3:22-23 - "Because of the LORD\'s great love we are not consumed, for his compassions never fail. They are new every morning."',
                        practicalApplication: 'Remember God\'s faithfulness and new mercies each morning.'
                    }
                ]
            },
            hamle: {
                weeks: 4,
                reading: 'Ezekiel 1-48; Daniel 1-12',
                theme: 'Exile Prophets',
                weeklyBreakdown: [
                    {
                        week: 40,
                        focus: 'Ezekiel: Visions & Judgment',
                        readings: 'Ezekiel 1-24',
                        keyThemes: 'Glory, Responsibility, Hope',
                        studyQuestions: [
                            'What was significant about Ezekiel\'s visions?',
                            'What does "watchman" mean for spiritual responsibility?',
                            'How did Ezekiel communicate God\'s messages dramatically?'
                        ],
                        memoryVerse: 'Ezekiel 36:26 - "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh."',
                        practicalApplication: 'Ask God to give you a soft, responsive heart toward Him.'
                    },
                    {
                        week: 41,
                        focus: 'Ezekiel: Restoration',
                        readings: 'Ezekiel 25-48',
                        keyThemes: 'Judgment on Nations, New Temple, River of Life',
                        studyQuestions: [
                            'Why did God judge surrounding nations?',
                            'What was the vision of the valley of dry bones?',
                            'What does the new temple vision represent?'
                        ],
                        memoryVerse: 'Ezekiel 37:5 - "This is what the Sovereign LORD says to these bones: I will make breath enter you, and you will come to life."',
                        practicalApplication: 'Believe God can bring life to dead areas of your spiritual life.'
                    },
                    {
                        week: 42,
                        focus: 'Daniel: Faith in Exile',
                        readings: 'Daniel 1-6',
                        keyThemes: 'Faithfulness, Sovereignty, Deliverance',
                        studyQuestions: [
                            'How did Daniel maintain his faith in a foreign culture?',
                            'What can we learn from the fiery furnace and lions\' den?',
                            'How did God demonstrate His sovereignty to pagan kings?'
                        ],
                        memoryVerse: 'Daniel 3:17-18 - "The God we serve is able to deliver us... But even if he does not... we will not serve your gods."',
                        practicalApplication: 'Determine to be faithful to God regardless of the consequences.'
                    },
                    {
                        week: 43,
                        focus: 'Daniel: Visions of Future',
                        readings: 'Daniel 7-12',
                        keyThemes: 'Prophecy, Kingdom, End Times',
                        studyQuestions: [
                            'What kingdoms do Daniel\'s visions represent?',
                            'What is the "abomination that causes desolation"?',
                            'How does Daniel point to the ultimate kingdom of God?'
                        ],
                        memoryVerse: 'Daniel 2:44 - "In the time of those kings, the God of heaven will set up a kingdom that will never be destroyed."',
                        practicalApplication: 'Live with confidence in God\'s ultimate victory and eternal kingdom.'
                    }
                ]
            },
            nehase: {
                weeks: 4,
                reading: 'Minor Prophets & Gospels Beginnings',
                theme: 'Prophecy Fulfilled',
                weeklyBreakdown: [
                    {
                        week: 44,
                        focus: 'Minor Prophets I',
                        readings: 'Hosea, Joel, Amos, Obadiah, Jonah, Micah',
                        keyThemes: 'Love, Justice, Mercy, Mission',
                        studyQuestions: [
                            'How did Hosea\'s marriage illustrate God\'s love?',
                            'What does Jonah teach about God\'s heart for all people?',
                            'How did Micah summarize what God requires?'
                        ],
                        memoryVerse: 'Micah 6:8 - "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God."',
                        practicalApplication: 'Practice justice, mercy, and humility in your relationships this week.'
                    },
                    {
                        week: 45,
                        focus: 'Minor Prophets II',
                        readings: 'Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi',
                        keyThemes: 'Trust, Restoration, Preparation',
                        studyQuestions: [
                            'How did Habakkuk learn to trust God?',
                            'What messages of hope did the post-exilic prophets bring?',
                            'How does Malachi prepare for the coming Messiah?'
                        ],
                        memoryVerse: 'Habakkuk 3:17-18 - "Though the fig tree does not bud... yet I will rejoice in the LORD, I will be joyful in God my Savior."',
                        practicalApplication: 'Choose joy in God regardless of your circumstances.'
                    },
                    {
                        week: 46,
                        focus: 'Gospels: Birth & Early Ministry',
                        readings: 'Matthew 1-12; Mark 1-6; Luke 1-8; John 1-8',
                        keyThemes: 'Incarnation, Kingdom, Discipleship',
                        studyQuestions: [
                            'How do the Gospels introduce Jesus?',
                            'What does the kingdom of God mean?',
                            'How did Jesus call and train disciples?'
                        ],
                        memoryVerse: 'John 1:14 - "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son."',
                        practicalApplication: 'Welcome Jesus to "dwell" in every area of your life.'
                    },
                    {
                        week: 47,
                        focus: 'Jesus\' Ministry & Teaching',
                        readings: 'Matthew 13-25; Mark 7-13; Luke 9-20; John 9-17',
                        keyThemes: 'Parables, Miracles, Opposition',
                        studyQuestions: [
                            'What do Jesus\' parables teach about the kingdom?',
                            'How did Jesus demonstrate His authority?',
                            'Why did religious leaders oppose Jesus?'
                        ],
                        memoryVerse: 'John 14:6 - "Jesus answered, \'I am the way and the truth and the life. No one comes to the Father except through me.\'"',
                        practicalApplication: 'Follow Jesus as the only way to the Father in your spiritual journey.'
                    }
                ]
            },
            pagume: {
                weeks: 1,
                reading: 'Passion Week to Revelation',
                theme: 'Completion & New Beginning',
                weeklyBreakdown: [
                    {
                        week: 48,
                        focus: 'Cross, Resurrection & New Creation',
                        readings: 'Matthew 26-28; Mark 14-16; Luke 22-24; John 18-21; Acts 1-28; Revelation 1-22',
                        keyThemes: 'Atonement, Victory, Mission, Hope',
                        studyQuestions: [
                            'What does Jesus\' death accomplish for us?',
                            'How does the resurrection change everything?',
                            'What is our mission as Jesus\' followers?',
                            'What hope does Revelation give us?'
                        ],
                        memoryVerse: 'Revelation 21:5 - "He who was seated on the throne said, \'I am making everything new!\'"',
                        practicalApplication: 'Live in the power of the resurrection and the hope of Christ\'s return.'
                    }
                ]
            }
        };

        // COMPLETE 90-DAY NEW TESTAMENT PLAN
        this.ntIntensive = [
            { 
                days: '1-9', 
                reading: 'Matthew 1-28', 
                focus: 'Jesus as King',
                dailyBreakdown: [
                    { day: 1, reading: 'Matthew 1-4', focus: 'Birth & Preparation', chapters: 4 },
                    { day: 2, reading: 'Matthew 5-7', focus: 'Sermon on the Mount', chapters: 3 },
                    { day: 3, reading: 'Matthew 8-10', focus: 'Miracles & Mission', chapters: 3 },
                    { day: 4, reading: 'Matthew 11-13', focus: 'Parables of Kingdom', chapters: 3 },
                    { day: 5, reading: 'Matthew 14-18', focus: 'Identity & Community', chapters: 5 },
                    { day: 6, reading: 'Matthew 19-22', focus: 'Teaching & Conflict', chapters: 4 },
                    { day: 7, reading: 'Matthew 23-25', focus: 'Woes & End Times', chapters: 3 },
                    { day: 8, reading: 'Matthew 26-28', focus: 'Passion & Resurrection', chapters: 3 },
                    { day: 9, reading: 'Review Matthew', focus: 'Reflection & Application', chapters: 0 }
                ]
            },
            { 
                days: '10-15', 
                reading: 'Mark 1-16', 
                focus: 'Jesus as Servant',
                dailyBreakdown: [
                    { day: 10, reading: 'Mark 1-3', focus: 'Rapid Ministry Start', chapters: 3 },
                    { day: 11, reading: 'Mark 4-6', focus: 'Miracles & Power', chapters: 3 },
                    { day: 12, reading: 'Mark 7-9', focus: 'Teaching & Transfiguration', chapters: 3 },
                    { day: 13, reading: 'Mark 10-12', focus: 'Servant Leadership', chapters: 3 },
                    { day: 14, reading: 'Mark 13-14', focus: 'Prophecy & Betrayal', chapters: 2 },
                    { day: 15, reading: 'Mark 15-16', focus: 'Sacrifice & Victory', chapters: 2 }
                ]
            },
            { 
                days: '16-23', 
                reading: 'Luke 1-24', 
                focus: 'Jesus as Savior',
                dailyBreakdown: [
                    { day: 16, reading: 'Luke 1-3', focus: 'Birth & Genealogy', chapters: 3 },
                    { day: 17, reading: 'Luke 4-6', focus: 'Ministry Begins', chapters: 3 },
                    { day: 18, reading: 'Luke 7-9', focus: 'Miracles & Disciples', chapters: 3 },
                    { day: 19, reading: 'Luke 10-12', focus: 'Teaching & Parables', chapters: 3 },
                    { day: 20, reading: 'Luke 13-15', focus: 'Kingdom Parables', chapters: 3 },
                    { day: 21, reading: 'Luke 16-18', focus: 'Wealth & Prayer', chapters: 3 },
                    { day: 22, reading: 'Luke 19-21', focus: 'Jerusalem Entry', chapters: 3 },
                    { day: 23, reading: 'Luke 22-24', focus: 'Passion & Resurrection', chapters: 3 }
                ]
            },
            { 
                days: '24-30', 
                reading: 'John 1-21', 
                focus: 'Jesus as God',
                dailyBreakdown: [
                    { day: 24, reading: 'John 1-3', focus: 'Divine Identity', chapters: 3 },
                    { day: 25, reading: 'John 4-6', focus: 'Living Water & Bread', chapters: 3 },
                    { day: 26, reading: 'John 7-9', focus: 'Light of the World', chapters: 3 },
                    { day: 27, reading: 'John 10-12', focus: 'Good Shepherd', chapters: 3 },
                    { day: 28, reading: 'John 13-15', focus: 'Last Supper', chapters: 3 },
                    { day: 29, reading: 'John 16-18', focus: 'Holy Spirit & Arrest', chapters: 3 },
                    { day: 30, reading: 'John 19-21', focus: 'Crucifixion & Commission', chapters: 3 }
                ]
            },
            { 
                days: '31-45', 
                reading: 'Acts 1-28', 
                focus: 'Early Church',
                dailyBreakdown: [
                    { day: 31, reading: 'Acts 1-3', focus: 'Pentecost & Power', chapters: 3 },
                    { day: 32, reading: 'Acts 4-6', focus: 'Church Growth', chapters: 3 },
                    { day: 33, reading: 'Acts 7-8', focus: 'Stephen & Persecution', chapters: 2 },
                    { day: 34, reading: 'Acts 9-10', focus: 'Paul\'s Conversion', chapters: 2 },
                    { day: 35, reading: 'Acts 11-13', focus: 'Gentile Inclusion', chapters: 3 },
                    { day: 36, reading: 'Acts 14-16', focus: 'First Mission Journey', chapters: 3 },
                    { day: 37, reading: 'Acts 17-19', focus: 'Second Journey', chapters: 3 },
                    { day: 38, reading: 'Acts 20-22', focus: 'Third Journey & Arrest', chapters: 3 },
                    { day: 39, reading: 'Acts 23-25', focus: 'Trials & Defense', chapters: 3 },
                    { day: 40, reading: 'Acts 26-28', focus: 'Appeal to Caesar', chapters: 3 }
                ]
            },
            { 
                days: '46-60', 
                reading: 'Romans & Corinthians', 
                focus: 'Paul\'s Theology',
                dailyBreakdown: [
                    { day: 46, reading: 'Romans 1-3', focus: 'Sin & Righteousness', chapters: 3 },
                    { day: 47, reading: 'Romans 4-6', focus: 'Faith & Grace', chapters: 3 },
                    { day: 48, reading: 'Romans 7-8', focus: 'Spirit & Freedom', chapters: 2 },
                    { day: 49, reading: 'Romans 9-11', focus: 'Israel & Mercy', chapters: 3 },
                    { day: 50, reading: 'Romans 12-16', focus: 'Practical Living', chapters: 5 },
                    { day: 51, reading: '1 Corinthians 1-4', focus: 'Church Divisions', chapters: 4 },
                    { day: 52, reading: '1 Corinthians 5-8', focus: 'Morality & Freedom', chapters: 4 },
                    { day: 53, reading: '1 Corinthians 9-11', focus: 'Rights & Worship', chapters: 3 },
                    { day: 54, reading: '1 Corinthians 12-14', focus: 'Spiritual Gifts', chapters: 3 },
                    { day: 55, reading: '1 Corinthians 15-16', focus: 'Resurrection', chapters: 2 },
                    { day: 56, reading: '2 Corinthians 1-4', focus: 'Comfort & Ministry', chapters: 4 },
                    { day: 57, reading: '2 Corinthians 5-8', focus: 'Reconciliation & Giving', chapters: 4 },
                    { day: 58, reading: '2 Corinthians 9-13', focus: 'Generosity & Authority', chapters: 5 }
                ]
            },
            { 
                days: '61-75', 
                reading: 'Paul\'s Letters', 
                focus: 'Church Life',
                dailyBreakdown: [
                    { day: 61, reading: 'Galatians 1-3', focus: 'Grace vs Law', chapters: 3 },
                    { day: 62, reading: 'Galatians 4-6', focus: 'Freedom & Spirit', chapters: 3 },
                    { day: 63, reading: 'Ephesians 1-3', focus: 'Spiritual Blessings', chapters: 3 },
                    { day: 64, reading: 'Ephesians 4-6', focus: 'Unity & Armor', chapters: 3 },
                    { day: 65, reading: 'Philippians 1-2', focus: 'Joy & Humility', chapters: 2 },
                    { day: 66, reading: 'Philippians 3-4', focus: 'Righteousness & Peace', chapters: 2 },
                    { day: 67, reading: 'Colossians 1-2', focus: 'Supremacy of Christ', chapters: 2 },
                    { day: 68, reading: 'Colossians 3-4', focus: 'New Life', chapters: 2 },
                    { day: 69, reading: '1 Thessalonians 1-3', focus: 'Faith & Love', chapters: 3 },
                    { day: 70, reading: '1 Thessalonians 4-5', focus: 'Coming & Living', chapters: 2 },
                    { day: 71, reading: '2 Thessalonians 1-3', focus: 'End Times & Work', chapters: 3 },
                    { day: 72, reading: '1 Timothy 1-3', focus: 'Church Order', chapters: 3 },
                    { day: 73, reading: '1 Timothy 4-6', focus: 'Godliness & Contentment', chapters: 3 },
                    { day: 74, reading: '2 Timothy 1-2', focus: 'Guard the Gospel', chapters: 2 },
                    { day: 75, reading: '2 Timothy 3-4', focus: 'Scripture & Finish', chapters: 2 }
                ]
            },
            { 
                days: '76-90', 
                reading: 'General Letters & Revelation', 
                focus: 'Faith & Hope',
                dailyBreakdown: [
                    { day: 76, reading: 'Titus 1-3', focus: 'Sound Doctrine', chapters: 3 },
                    { day: 77, reading: 'Philemon', focus: 'Forgiveness', chapters: 1 },
                    { day: 78, reading: 'Hebrews 1-4', focus: 'Superiority of Christ', chapters: 4 },
                    { day: 79, reading: 'Hebrews 5-7', focus: 'Priesthood', chapters: 3 },
                    { day: 80, reading: 'Hebrews 8-10', focus: 'New Covenant', chapters: 3 },
                    { day: 81, reading: 'Hebrews 11-13', focus: 'Faith & Endurance', chapters: 3 },
                    { day: 82, reading: 'James 1-3', focus: 'Faith & Works', chapters: 3 },
                    { day: 83, reading: 'James 4-5', focus: 'Wisdom & Prayer', chapters: 2 },
                    { day: 84, reading: '1 Peter 1-3', focus: 'Living Hope', chapters: 3 },
                    { day: 85, reading: '1 Peter 4-5', focus: 'Suffering & Leadership', chapters: 2 },
                    { day: 86, reading: '2 Peter 1-3', focus: 'Knowledge & Return', chapters: 3 },
                    { day: 87, reading: '1 John 1-3', focus: 'Light & Love', chapters: 3 },
                    { day: 88, reading: '1 John 4-5', focus: 'God is Love', chapters: 2 },
                    { day: 89, reading: '2 John, 3 John, Jude', focus: 'Truth & Contend', chapters: 4 },
                    { day: 90, reading: 'Revelation 1-3', focus: 'Letters to Churches', chapters: 3 }
                ]
            }
        ];

        // COMPLETE 16-WEEK DISCIPLESHIP PROGRAM
        this.discipleshipWeeks = [
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
                memoryVerse: '2 Corinthians 5:17 - "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"'
            },
            { 
                week: 2, 
                topic: 'The Word of God', 
                key: '2 Timothy 3:16-17; Hebrews 4:12',
                objectives: [
                    'Understand the Bible\'s authority and purpose',
                    'Develop a consistent Bible reading habit',
                    'Learn basic Bible study methods'
                ],
                activities: [
                    'Set up a daily Bible reading plan',
                    'Practice the SOAP method (Scripture, Observation, Application, Prayer)',
                    'Share one truth learned from Scripture'
                ],
                discussionQuestions: [
                    'Why is the Bible important for Christian growth?',
                    'How can we hear God\'s voice through Scripture?',
                    'What obstacles prevent regular Bible reading?'
                ],
                memoryVerse: '2 Timothy 3:16 - "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."'
            },
            { 
                week: 3, 
                topic: 'Prayer & Communion with God', 
                key: 'Matthew 6:5-15; Philippians 4:6-7',
                objectives: [
                    'Understand the purpose and power of prayer',
                    'Learn different types of prayer',
                    'Develop a consistent prayer life'
                ],
                activities: [
                    'Create a prayer journal',
                    'Practice the ACTS prayer model (Adoration, Confession, Thanksgiving, Supplication)',
                    'Pray with a partner this week'
                ],
                discussionQuestions: [
                    'What hinders you from praying regularly?',
                    'How has God answered your prayers in the past?',
                    'What does it mean to pray "in Jesus\' name"?'
                ],
                memoryVerse: 'Philippians 4:6-7 - "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."'
            },
            { 
                week: 4, 
                topic: 'The Holy Spirit', 
                key: 'John 14:15-26; Galatians 5:16-25',
                objectives: [
                    'Understand the Holy Spirit\'s role in the Trinity',
                    'Learn about the gifts of the Spirit',
                    'Understand how to be filled with the Spirit'
                ],
                activities: [
                    'Identify spiritual gifts in yourself and others',
                    'Practice listening to the Holy Spirit\'s guidance',
                    'Memorize the fruit of the Spirit'
                ],
                discussionQuestions: [
                    'How have you experienced the Holy Spirit\'s work in your life?',
                    'What is the difference between gifts and fruit of the Spirit?',
                    'How can we cooperate with the Holy Spirit\'s work?'
                ],
                memoryVerse: 'Galatians 5:22-23 - "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control."'
            },
            { 
                week: 5, 
                topic: 'The Church & Community', 
                key: 'Acts 2:42-47; 1 Corinthians 12:12-27',
                objectives: [
                    'Understand the biblical purpose of the church',
                    'Learn about spiritual gifts in community',
                    'Develop commitment to local church body'
                ],
                activities: [
                    'Identify your role in the church body',
                    'Serve in a ministry area this week',
                    'Build relationship with another believer'
                ],
                discussionQuestions: [
                    'What does it mean to be the "body of Christ"?',
                    'How can we maintain unity in the church?',
                    'What is your responsibility to other believers?'
                ],
                memoryVerse: 'Hebrews 10:24-25 - "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together."'
            },
            { 
                week: 6, 
                topic: 'Spiritual Warfare', 
                key: 'Ephesians 6:10-18; James 4:7-8',
                objectives: [
                    'Understand the reality of spiritual battle',
                    'Learn to use the armor of God',
                    'Develop strategies for spiritual victory'
                ],
                activities: [
                    'Memorize the armor of God',
                    'Identify areas of spiritual attack in your life',
                    'Practice spiritual warfare prayers'
                ],
                discussionQuestions: [
                    'How do we recognize spiritual attacks?',
                    'What is our authority in Christ over evil forces?',
                    'How can we stand firm in spiritual battles?'
                ],
                memoryVerse: 'Ephesians 6:11 - "Put on the full armor of God, so that you can take your stand against the devil\'s schemes."'
            },
            { 
                week: 7, 
                topic: 'Evangelism & Witnessing', 
                key: 'Matthew 28:18-20; 1 Peter 3:15-16',
                objectives: [
                    'Overcome fear of sharing faith',
                    'Learn simple evangelism methods',
                    'Develop a heart for the lost'
                ],
                activities: [
                    'Share your testimony with someone',
                    'Pray for 3 non-believers by name',
                    'Practice answering common questions about faith'
                ],
                discussionQuestions: [
                    'What fears prevent us from sharing our faith?',
                    'How can we build relationships with non-believers?',
                    'What is the role of the Holy Spirit in evangelism?'
                ],
                memoryVerse: '1 Peter 3:15 - "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have."'
            },
            { 
                week: 8, 
                topic: 'Stewardship & Generosity', 
                key: '2 Corinthians 9:6-15; 1 Timothy 6:17-19',
                objectives: [
                    'Understand biblical view of money and possessions',
                    'Learn principles of generous giving',
                    'Develop habits of good stewardship'
                ],
                activities: [
                    'Create a simple budget',
                    'Give generously to God\'s work this week',
                    'Evaluate your use of time, talents, and treasure'
                ],
                discussionQuestions: [
                    'What does it mean that God owns everything?',
                    'How can we develop contentment?',
                    'What is the relationship between faith and finances?'
                ],
                memoryVerse: '2 Corinthians 9:7 - "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."'
            },
            { 
                week: 9, 
                topic: 'God\'s Will & Decision Making', 
                key: 'Romans 12:1-2; Proverbs 3:5-6',
                objectives: [
                    'Understand how to discern God\'s will',
                    'Learn biblical decision-making principles',
                    'Trust God with uncertain outcomes'
                ],
                activities: [
                    'Make a decision using biblical principles this week',
                    'Practice listening for God\'s guidance',
                    'Surrender an area of your life to God\'s will'
                ],
                discussionQuestions: [
                    'How do we know if a decision honors God?',
                    'What role does peace play in decision making?',
                    'How do we handle decisions when God seems silent?'
                ],
                memoryVerse: 'Proverbs 3:5-6 - "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."'
            },
            { 
                week: 10, 
                topic: 'Relationships & Marriage', 
                key: 'Ephesians 5:21-33; 1 Corinthians 13:4-7',
                objectives: [
                    'Understand biblical principles for relationships',
                    'Learn godly conflict resolution',
                    'Develop healthy relationship patterns'
                ],
                activities: [
                    'Practice forgiveness in a relationship',
                    'Express appreciation to important people in your life',
                    'Memorize 1 Corinthians 13'
                ],
                discussionQuestions: [
                    'What makes relationships God-honoring?',
                    'How do we set healthy boundaries?',
                    'What is biblical love versus worldly love?'
                ],
                memoryVerse: 'Ephesians 4:32 - "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."'
            },
            { 
                week: 11, 
                topic: 'Parenting & Family', 
                key: 'Deuteronomy 6:4-9; Proverbs 22:6',
                objectives: [
                    'Understand biblical parenting principles',
                    'Learn to create a godly home environment',
                    'Develop family worship habits'
                ],
                activities: [
                    'Start or enhance family devotions',
                    'Pray specifically for each family member',
                    'Create a family mission statement'
                ],
                discussionQuestions: [
                    'How can we spiritually lead our families?',
                    'What does it mean to train up a child?',
                    'How do we balance grace and discipline?'
                ],
                memoryVerse: 'Joshua 24:15 - "But as for me and my household, we will serve the LORD."'
            },
            { 
                week: 12, 
                topic: 'Work & Vocation', 
                key: 'Colossians 3:23-24; Ephesians 6:5-9',
                objectives: [
                    'Understand biblical view of work',
                    'Learn to be a Christian witness in workplace',
                    'Develop excellence in work as worship'
                ],
                activities: [
                    'Pray for colleagues and workplace',
                    'Look for opportunities to serve at work',
                    'Evaluate your work ethic from biblical perspective'
                ],
                discussionQuestions: [
                    'How can we honor God in our daily work?',
                    'What does it mean to work "as for the Lord"?',
                    'How do we handle workplace conflicts biblically?'
                ],
                memoryVerse: 'Colossians 3:23-24 - "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters... It is the Lord Christ you are serving."'
            },
            { 
                week: 13, 
                topic: 'Suffering & Trials', 
                key: 'James 1:2-4; Romans 5:3-5',
                objectives: [
                    'Understand God\'s purpose in suffering',
                    'Learn to trust God in difficult times',
                    'Develop perseverance and character'
                ],
                activities: [
                    'Journal about a current trial and what God might be teaching',
                    'Memorize comforting Scriptures',
                    'Encourage someone else who is suffering'
                ],
                discussionQuestions: [
                    'Why does God allow suffering?',
                    'How can trials produce spiritual growth?',
                    'What comfort can we offer others in pain?'
                ],
                memoryVerse: 'Romans 8:28 - "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."'
            },
            { 
                week: 14, 
                topic: 'Forgiveness & Reconciliation', 
                key: 'Matthew 18:21-35; Colossians 3:12-14',
                objectives: [
                    'Understand biblical command to forgive',
                    'Learn steps to reconciliation',
                    'Overcome barriers to forgiveness'
                ],
                activities: [
                    'Forgive someone who has hurt you',
                    'Seek forgiveness if needed',
                    'Write a letter of forgiveness (even if not sent)'
                ],
                discussionQuestions: [
                    'What is the difference between forgiveness and reconciliation?',
                    'How do we forgive when it\'s difficult?',
                    'What if the other person doesn\'t apologize?'
                ],
                memoryVerse: 'Colossians 3:13 - "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."'
            },
            { 
                week: 15, 
                topic: 'Wisdom & Discernment', 
                key: 'Proverbs 2:1-11; James 1:5-8',
                objectives: [
                    'Understand difference between knowledge and wisdom',
                    'Learn to make wise decisions',
                    'Develop discernment in complex situations'
                ],
                activities: [
                    'Seek wisdom for a specific decision',
                    'Study Proverbs for practical wisdom',
                    'Ask a wise person for counsel'
                ],
                discussionQuestions: [
                    'How do we acquire wisdom according to Scripture?',
                    'What is the role of the Holy Spirit in discernment?',
                    'How can we avoid foolish decisions?'
                ],
                memoryVerse: 'James 1:5 - "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."'
            },
            { 
                week: 16, 
                topic: 'Eternal Perspective', 
                key: 'Matthew 6:19-21; 2 Corinthians 4:16-18',
                objectives: [
                    'Develop heavenly mindset',
                    'Understand biblical teaching on eternity',
                    'Live with purpose and eternal impact'
                ],
                activities: [
                    'Evaluate your priorities from eternal perspective',
                    'Share the gospel with someone this week',
                    'Write a personal mission statement'
                ],
                discussionQuestions: [
                    'How does eternal perspective change how we live today?',
                    'What does it mean to store up treasures in heaven?',
                    'How can we keep from being consumed by temporary things?'
                ],
                memoryVerse: 'Matthew 6:33 - "But seek first his kingdom and his righteousness, and all these things will be given to you as well."'
            }
        ];

        this.init();
    }

    init() {
        this.initializeLucideIcons();
        this.renderMonthSelector();
        this.renderMonthDetails();
        this.renderChronologicalPlan();
        this.renderNT90Plan();
        this.renderDiscipleship();
        this.setupEventListeners();
        this.updateProgress();
    }

    initializeLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.saveToLocalStorage();
        this.updateUI();
    }

    saveToLocalStorage() {
        localStorage.setItem('completedReadings', JSON.stringify(this.state.completedReadings));
    }

    updateUI() {
        this.updateTabView();
        this.updateMonthButtons();
        this.updatePlanButtons();
        this.renderMonthDetails();
        this.updateProgress();
        
        if (this.state.activeTab === 'reading') {
            if (this.state.selectedPlan === 'chronological') {
                this.renderChronologicalPlan();
            } else {
                this.renderNT90Plan();
            }
        } else if (this.state.activeTab === 'discipleship') {
            this.renderDiscipleship();
        }
    }

    updateTabView() {
        document.getElementById('calendar-view').classList.toggle('hidden', this.state.activeTab !== 'calendar');
        document.getElementById('reading-view').classList.toggle('hidden', this.state.activeTab !== 'reading');
        document.getElementById('discipleship-view').classList.toggle('hidden', this.state.activeTab !== 'discipleship');

        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(button => {
            const isActive = button.dataset.tab === this.state.activeTab;
            button.classList.toggle('text-white', isActive);
            button.classList.toggle('shadow-md', isActive);
            button.classList.toggle('scale-105', isActive);
            button.classList.toggle('text-gray-600', !isActive);
            button.classList.toggle('hover:bg-gray-50', !isActive);
            
            if (isActive) {
                button.style.backgroundColor = this.getTabColor(button.dataset.tab);
            } else {
                button.style.backgroundColor = '';
            }
        });
    }

    getTabColor(tabId) {
        const colors = {
            calendar: this.brandColors.primary,
            reading: this.brandColors.secondary,
            discipleship: this.brandColors.accent
        };
        return colors[tabId];
    }

    updateMonthButtons() {
        document.querySelectorAll('.month-button').forEach(button => {
            const isActive = button.dataset.month === this.state.selectedMonth;
            button.classList.toggle('text-white', isActive);
            button.classList.toggle('shadow-lg', isActive);
            button.classList.toggle('scale-105', isActive);
            button.classList.toggle('border-transparent', isActive);
            button.classList.toggle('bg-gray-50', !isActive);
            button.classList.toggle('text-gray-700', !isActive);
            button.classList.toggle('hover:bg-gray-100', !isActive);
            button.classList.toggle('border-gray-200', !isActive);
            button.classList.toggle('hover:border-gray-300', !isActive);

            if (isActive) {
                button.style.backgroundColor = this.brandColors.secondary;
                button.style.boxShadow = `0 10px 25px ${this.brandColors.secondary}40`;
            } else {
                button.style.backgroundColor = '';
                button.style.boxShadow = '';
            }
        });
    }

    updatePlanButtons() {
        document.querySelectorAll('.plan-button').forEach(button => {
            const isActive = button.dataset.plan === this.state.selectedPlan;
            button.classList.toggle('text-white', isActive);
            button.classList.toggle('shadow-lg', isActive);
            button.classList.toggle('scale-105', isActive);
            button.classList.toggle('border-transparent', isActive);
            button.classList.toggle('bg-gray-50', !isActive);
            button.classList.toggle('text-gray-700', !isActive);
            button.classList.toggle('hover:bg-gray-100', !isActive);
            button.classList.toggle('border-gray-200', !isActive);

            if (isActive) {
                button.style.backgroundColor = this.brandColors.primary;
                button.style.boxShadow = `0 10px 25px ${this.brandColors.primary}40`;
            } else {
                button.style.backgroundColor = '';
                button.style.boxShadow = '';
            }
        });

        document.getElementById('chronological-plan').classList.toggle('hidden', this.state.selectedPlan !== 'chronological');
        document.getElementById('nt90-plan').classList.toggle('hidden', this.state.selectedPlan !== 'nt90');
    }

    renderMonthSelector() {
        const container = document.getElementById('month-selector');
        container.innerHTML = this.ethiopianMonths.map(month => `
            <button data-month="${month.id}" class="month-button p-4 rounded-xl text-left transition-all border-2 ${
                this.state.selectedMonth === month.id 
                    ? 'text-white shadow-lg scale-105 border-transparent' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200 hover:border-gray-300'
            }" style="${
                this.state.selectedMonth === month.id 
                    ? `background-color: ${this.brandColors.secondary}; box-shadow: 0 10px 25px ${this.brandColors.secondary}40` 
                    : ''
            }">
                <div class="font-semibold text-sm mb-1">${month.name.split(' ')[0]}</div>
                <div class="text-xs ${this.state.selectedMonth === month.id ? 'opacity-90' : 'text-gray-500'}">
                    ${month.days} days • ${month.season}
                </div>
            </button>
        `).join('');
    }

    renderMonthDetails() {
        const container = document.getElementById('month-details');
        const monthData = this.ethiopianMonths.find(m => m.id === this.state.selectedMonth);
        const monthHolyDays = this.holyDays.filter(h => h.month === this.state.selectedMonth);
        const monthMinistryEvents = this.ministryEvents.filter(e => e.month === this.state.selectedMonth);

        container.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                    <h3 class="text-3xl font-bold mb-1 text-primary">${monthData.name}</h3>
                    <p class="text-gray-600">${monthData.season} Season</p>
                </div>
                <div class="text-left md:text-right bg-gray-50 px-4 py-3 rounded-lg">
                    <div class="text-sm text-gray-500 mb-1">Gregorian Equivalent</div>
                    <div class="font-semibold text-gray-700">${monthData.gregorian}</div>
                </div>
            </div>

            ${monthHolyDays.length > 0 ? `
                <div class="mb-6">
                    <h4 class="font-semibold mb-4 flex items-center gap-2 text-lg text-primary">
                        <i data-lucide="sun" class="w-6 h-6" style="color: ${this.brandColors.secondary}"></i>
                        Holy Days & Festivals
                    </h4>
                    <div class="space-y-3">
                        ${monthHolyDays.map(day => `
                            <div class="p-4 rounded-lg border-l-4 hover:shadow-md transition-shadow" style="background-color: ${this.brandColors.light}; border-color: ${this.brandColors.secondary}">
                                <div class="flex items-start justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="font-bold text-lg mb-1 text-primary">${day.name}</div>
                                        <p class="text-sm text-gray-600 mb-2">${day.description}</p>
                                        <div class="text-sm text-gray-500">Day ${day.day} • ${day.date}</div>
                                    </div>
                                    <i data-lucide="sun" class="w-8 h-8 flex-shrink-0 opacity-30" style="color: ${this.brandColors.secondary}"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${monthMinistryEvents.length > 0 ? `
                <div>
                    <h4 class="font-semibold mb-4 flex items-center gap-2 text-lg text-primary">
                        <i data-lucide="map-pin" class="w-6 h-6" style="color: ${this.brandColors.accent}"></i>
                        Ministry Events
                    </h4>
                    <div class="space-y-3">
                        ${monthMinistryEvents.map(event => `
                            <div class="p-4 rounded-lg border-l-4 hover:shadow-md transition-shadow" style="background-color: #f0f9ff; border-color: ${this.brandColors.accent}">
                                <div class="flex items-start justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="font-bold text-lg mb-1 text-primary">${event.name}</div>
                                        <p class="text-sm text-gray-600 mb-2">${event.description}</p>
                                        <div class="flex items-center gap-3">
                                            <span class="text-sm text-gray-500">Day ${event.day} • ${event.date}</span>
                                            <span class="inline-block px-3 py-1 text-xs rounded-full font-medium" style="background-color: ${this.brandColors.accent}; color: white">${event.type}</span>
                                        </div>
                                    </div>
                                    <i data-lucide="map-pin" class="w-8 h-8 flex-shrink-0 opacity-30" style="color: ${this.brandColors.accent}"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${monthHolyDays.length === 0 && monthMinistryEvents.length === 0 ? `
                <div class="text-center py-12 text-gray-400">
                    <i data-lucide="moon" class="w-16 h-16 mx-auto mb-3 opacity-20"></i>
                    <p class="text-lg">No special events scheduled for this month</p>
                    <p class="text-sm mt-1">Enjoy regular study and worship</p>
                </div>
            ` : ''}
        `;

        this.initializeLucideIcons();
    }

    renderChronologicalPlan() {
        const container = document.getElementById('chronological-plan');
        container.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <i data-lucide="book" class="w-7 h-7" style="color: ${this.brandColors.primary}"></i>
                <div>
                    <h3 class="text-2xl font-bold text-primary">One-Year Chronological Plan</h3>
                    <p class="text-gray-600 text-sm">Read through the entire Bible in Ethiopian calendar year order</p>
                </div>
            </div>
            
            ${Object.entries(this.chronologicalPlan).map(([monthId, plan]) => {
                const month = this.ethiopianMonths.find(m => m.id === monthId);
                if (!month) return '';
                
                return `
                    <div class="mb-8">
                        <div class="p-5 rounded-xl mb-4 text-white shadow-md" style="background-color: ${this.brandColors.primary}">
                            <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                <div>
                                    <h4 class="font-bold text-xl mb-1">${month.name.split(' ')[0]}</h4>
                                    <p class="opacity-90">${plan.reading}</p>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    <span class="bg-white px-4 py-2 rounded-full text-sm font-medium" style="color: ${this.brandColors.primary}">${plan.weeks} weeks</span>
                                    <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">${plan.theme}</span>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-3">
                            ${plan.weeklyBreakdown.map(week => {
                                const weekId = `chrono-${monthId}-${week.week}`;
                                const isCompleted = this.state.completedReadings[weekId];
                                const isExpanded = this.state.expandedWeeks[weekId];
                                
                                return `
                                    <div class="border-2 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                                        <button data-week="${weekId}" class="week-toggle w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors" style="background-color: ${isCompleted ? this.brandColors.light : this.brandColors.warm}">
                                            <div class="flex items-center gap-4 flex-1">
                                                <button data-reading="${weekId}" class="complete-toggle flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                                                    isCompleted ? 'border-transparent' : 'border-gray-300 hover:border-gray-400'
                                                }" style="${isCompleted ? `background-color: ${this.brandColors.success}` : ''}">
                                                    ${isCompleted ? '<i data-lucide="check-circle" class="w-5 h-5 text-white"></i>' : ''}
                                                </button>
                                                <div class="flex-1">
                                                    <div class="flex items-center gap-3 mb-1">
                                                        <span class="font-bold text-lg text-primary">Week ${week.week}: ${week.focus}</span>
                                                        ${isCompleted ? `<span class="text-xs px-2 py-1 rounded-full" style="background-color: ${this.brandColors.success}; color: white">Completed</span>` : ''}
                                                    </div>
                                                    <div class="text-sm text-gray-600">${week.readings}</div>
                                                </div>
                                            </div>
                                            ${isExpanded ? 
                                                '<i data-lucide="chevron-up" class="w-6 h-6 flex-shrink-0" style="color: ' + this.brandColors.primary + '"></i>' : 
                                                '<i data-lucide="chevron-down" class="w-6 h-6 flex-shrink-0" style="color: ' + this.brandColors.primary + '"></i>'
                                            }
                                        </button>
                                        
                                        ${isExpanded ? `
                                            <div class="p-6 border-t-2" style="background-color: ${this.brandColors.light}">
                                                <div class="grid md:grid-cols-2 gap-6">
                                                    <div class="space-y-4">
                                                        <div>
                                                            <h5 class="font-semibold mb-3 flex items-center gap-2 text-lg text-primary">
                                                                <i data-lucide="target" class="w-5 h-5"></i>
                                                                Key Themes
                                                            </h5>
                                                            <p class="text-sm text-gray-700 bg-white p-4 rounded-lg border">${week.keyThemes}</p>
                                                        </div>
                                                        
                                                        <div>
                                                            <h5 class="font-semibold mb-3 flex items-center gap-2 text-lg text-primary">
                                                                <i data-lucide="clock" class="w-5 h-5"></i>
                                                                Memory Verse
                                                            </h5>
                                                            <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2" style="border-color: ${this.brandColors.secondary}">
                                                                <p class="text-sm font-medium text-primary">${week.memoryVerse}</p>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h5 class="font-semibold mb-3 flex items-center gap-2 text-lg text-primary">
                                                                <i data-lucide="heart" class="w-5 h-5"></i>
                                                                Practical Application
                                                            </h5>
                                                            <div class="bg-white p-4 rounded-lg border-2" style="border-color: ${this.brandColors.accent}">
                                                                <p class="text-sm text-gray-700">${week.practicalApplication}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <h5 class="font-semibold mb-3 text-lg text-primary">Study Questions</h5>
                                                        <div class="space-y-3">
                                                            ${week.studyQuestions.map((question, idx) => `
                                                                <div class="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors">
                                                                    <span class="mr-3 mt-0.5 flex-shrink-0 font-bold w-7 h-7 rounded-full flex items-center justify-center text-sm" style="background-color: ${this.brandColors.secondary}; color: white">${idx + 1}</span>
                                                                    <p class="text-sm text-gray-700">${question}</p>
                                                                </div>
                                                            `).join('')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        `;

        this.initializeLucideIcons();
    }

    renderNT90Plan() {
        const container = document.getElementById('nt90-plan');
        container.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <i data-lucide="book" class="w-7 h-7" style="color: ${this.brandColors.primary}"></i>
                <div>
                    <h3 class="text-2xl font-bold text-primary">90-Day New Testament Intensive</h3>
                    <p class="text-gray-600 text-sm">Complete the New Testament in 3 months • 3 chapters per day</p>
                </div>
            </div>
            
            <div class="space-y-4">
                ${this.ntIntensive.map((section, idx) => {
                    const sectionId = `nt90-${idx}`;
                    const isExpanded = this.state.expandedWeeks[sectionId];
                    
                    return `
                        <div class="border-2 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                            <button data-week="${sectionId}" class="week-toggle w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors" style="background-color: ${this.brandColors.warm}">
                                <div class="flex-1">
                                    <div class="flex flex-wrap items-center gap-3 mb-2">
                                        <span class="font-bold px-4 py-2 rounded-full text-white text-sm shadow-md" style="background-color: ${this.brandColors.secondary}">Days ${section.days}</span>
                                        <span class="font-bold text-xl text-primary">${section.focus}</span>
                                    </div>
                                    <div class="text-sm text-gray-600 font-medium">${section.reading}</div>
                                </div>
                                ${isExpanded ? 
                                    '<i data-lucide="chevron-up" class="w-6 h-6 flex-shrink-0" style="color: ' + this.brandColors.primary + '"></i>' : 
                                    '<i data-lucide="chevron-down" class="w-6 h-6 flex-shrink-0" style="color: ' + this.brandColors.primary + '"></i>'
                                }
                            </button>
                            
                            ${isExpanded ? `
                                <div class="p-6 border-t-2" style="background-color: ${this.brandColors.light}">
                                    <h5 class="font-semibold mb-4 text-lg text-primary">Daily Breakdown</h5>
                                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        ${section.dailyBreakdown.map(day => {
                                            const dayId = `${sectionId}-day-${day.day}`;
                                            const isCompleted = this.state.completedReadings[dayId];
                                            
                                            return `
                                                <div class="bg-white p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                                                    isCompleted ? 'border-transparent' : 'border-gray-200'
                                                }" style="${isCompleted ? `border-color: ${this.brandColors.success}; background-color: #f0fdf4` : ''}">
                                                    <div class="flex items-center justify-between mb-3">
                                                        <div class="font-bold text-xl text-primary">Day ${day.day}</div>
                                                        <button data-reading="${dayId}" class="complete-toggle w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                                                            isCompleted ? 'border-transparent' : 'border-gray-300 hover:border-gray-400'
                                                        }" style="${isCompleted ? `background-color: ${this.brandColors.success}` : ''}">
                                                            ${isCompleted ? '<i data-lucide="check-circle" class="w-5 h-5 text-white"></i>' : ''}
                                                        </button>
                                                    </div>
                                                    <div class="text-sm text-gray-700 font-medium mb-2">${day.reading}</div>
                                                    ${day.chapters > 0 ? `<div class="text-xs text-gray-500 mb-3">${day.chapters} chapters</div>` : ''}
                                                    <div class="text-xs px-3 py-1.5 rounded-full inline-block font-medium" style="background-color: ${this.brandColors.secondary}; color: white">${day.focus}</div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        this.initializeLucideIcons();
    }

    renderDiscipleship() {
        const container = document.getElementById('discipleship-content');
        container.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <i data-lucide="users" class="w-7 h-7" style="color: ${this.brandColors.primary}"></i>
                <div>
                    <h3 class="text-2xl font-bold text-primary">16-Week Discipleship Program</h3>
                    <p class="text-gray-600 text-sm">"Rooted in Messiah" - Topical studies aligned with discipleship groups</p>
                </div>
            </div>
            
            <div class="space-y-4">
                ${this.discipleshipWeeks.map((week) => {
                    const weekId = `disc-${week.week}`;
                    const isCompleted = this.state.completedReadings[weekId];
                    const isExpanded = this.state.expandedWeeks[weekId];
                    
                    return `
                        <div class="border-2 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                            <button data-week="${weekId}" class="week-toggle w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors" style="background-color: ${isCompleted ? '#f0fdf4' : this.brandColors.warm}">
                                <div class="flex items-center gap-4 flex-1">
                                    <button data-reading="${weekId}" class="complete-toggle flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                                        isCompleted ? 'border-transparent' : 'border-gray-300 hover:border-gray-400'
                                    }" style="${isCompleted ? `background-color: ${this.brandColors.success}` : ''}">
                                        ${isCompleted ? '<i data-lucide="check-circle" class="w-5 h-5 text-white"></i>' : ''}
                                    </button>
                                    <div class="flex-1">
                                        <div class="flex flex-wrap items-center gap-3 mb-2">
                                            <span class="font-bold px-4 py-2 rounded-full text-white text-sm shadow-md" style="background-color: ${this.brandColors.accent}">Week ${week.week}</span>
                                            <span class="font-bold text-xl text-primary">${week.topic}</span>
                                        </div>
                                        <div class="text-sm text-gray-600">Key Passages: ${week.key}</div>
                                    </div>
                                </div>
                                ${isExpanded ? 
                                    '<i data-lucide="chevron-up" class="w-6 h-6 flex-shrink-0" style="color: ' + this.brandColors.primary + '"></i>' : 
                                    '<i data-lucide="chevron-down" class="w-6 h-6 flex-shrink-0" style="color: ' + this.brandColors.primary + '"></i>'
                                }
                            </button>
                            
                            ${isExpanded ? `
                                <div class="p-6 border-t-2" style="background-color: ${this.brandColors.light}">
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div class="space-y-4">
                                            <div>
                                                <h5 class="font-semibold mb-3 flex items-center gap-2 text-lg text-primary">
                                                    <i data-lucide="target" class="w-5 h-5"></i>
                                                    Learning Objectives
                                                </h5>
                                                <div class="space-y-2">
                                                    ${week.objectives.map((objective, idx) => `
                                                        <div class="flex items-start p-3 bg-white rounded-lg border">
                                                            <span class="mr-3 mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style="background-color: ${this.brandColors.secondary}; color: white">✓</span>
                                                            <p class="text-sm text-gray-700">${objective}</p>
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h5 class="font-semibold mb-3 flex items-center gap-2 text-lg text-primary">
                                                    <i data-lucide="clock" class="w-5 h-5"></i>
                                                    Memory Verse
                                                </h5>
                                                <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2" style="border-color: ${this.brandColors.secondary}">
                                                    <p class="text-sm font-medium text-primary">${week.memoryVerse}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="space-y-4">
                                            <div>
                                                <h5 class="font-semibold mb-3 flex items-center gap-2 text-lg text-primary">
                                                    <i data-lucide="heart" class="w-5 h-5"></i>
                                                    Practical Activities
                                                </h5>
                                                <div class="space-y-2">
                                                    ${week.activities.map((activity, idx) => `
                                                        <div class="flex items-start p-3 bg-white rounded-lg border">
                                                            <span class="mr-3 mt-1 flex-shrink-0 w-2 h-2 rounded-full" style="background-color: ${this.brandColors.accent}"></span>
                                                            <p class="text-sm text-gray-700">${activity}</p>
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            </div>

                                            <div>
                                                <h5 class="font-semibold mb-3 text-lg text-primary">Discussion Questions</h5>
                                                <div class="space-y-3">
                                                    ${week.discussionQuestions.map((question, idx) => `
                                                        <div class="flex items-start p-3 bg-white rounded-lg border-2 border-gray-200">
                                                            <span class="mr-3 mt-0.5 flex-shrink-0 font-bold w-7 h-7 rounded-full flex items-center justify-center text-sm" style="background-color: ${this.brandColors.primary}; color: white">Q${idx + 1}</span>
                                                            <p class="text-sm text-gray-700">${question}</p>
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p class="text-sm text-gray-700">
                    <strong class="text-blue-900">Note:</strong> This is a complete 16-week discipleship program covering fundamental Christian doctrines including Prayer, Church, Spiritual Gifts, Evangelism, and more.
                </p>
            </div>
        `;

        this.initializeLucideIcons();
    }

    updateProgress() {
        const totalWeeks = Object.values(this.chronologicalPlan).reduce((sum, plan) => sum + plan.weeks, 0);
        const completedCount = Object.values(this.state.completedReadings).filter(Boolean).length;
        const progressPercentage = totalWeeks > 0 ? Math.round((completedCount / totalWeeks) * 100) : 0;

        document.getElementById('progress-text').textContent = `Progress: ${progressPercentage}%`;
        document.getElementById('progress-count').textContent = `${completedCount} / ${totalWeeks} weeks`;
        document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
        document.getElementById('progress-bar').style.backgroundColor = this.brandColors.success;
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                this.setState({ activeTab: button.dataset.tab });
            });
        });

        // Month selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.month-button')) {
                const button = e.target.closest('.month-button');
                this.setState({ selectedMonth: button.dataset.month });
            }
        });

        // Plan selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.plan-button')) {
                const button = e.target.closest('.plan-button');
                this.setState({ selectedPlan: button.dataset.plan });
            }
        });

        // Stats toggle
        document.getElementById('stats-toggle').addEventListener('click', () => {
            this.setState({ showStats: !this.state.showStats });
            document.getElementById('stats-container').classList.toggle('hidden', !this.state.showStats);
        });

        // Week expansion toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('.week-toggle')) {
                const button = e.target.closest('.week-toggle');
                const weekId = button.dataset.week;
                const newExpandedWeeks = { ...this.state.expandedWeeks };
                newExpandedWeeks[weekId] = !newExpandedWeeks[weekId];
                this.setState({ expandedWeeks: newExpandedWeeks });
            }
        });

        // Reading completion toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('.complete-toggle')) {
                e.stopPropagation();
                const button = e.target.closest('.complete-toggle');
                const readingId = button.dataset.reading;
                const newCompletedReadings = { ...this.state.completedReadings };
                newCompletedReadings[readingId] = !newCompletedReadings[readingId];
                this.setState({ completedReadings: newCompletedReadings });
            }
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EthiopianBiblePlanner();
});