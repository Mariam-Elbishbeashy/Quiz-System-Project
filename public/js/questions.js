// Define all question sets
const questionSets = {
    // General Knowledge
    'general-knowledge-easy': {
        questions: [
            { question: "The Indian Contract Act 1872 came into force on...", options: ["Option A", "Option B", "Option C", "Option D"] },
            { question: "Who is known as the Father of the Nation in India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Dr. B.R. Ambedkar"] },
            { question: "What is the capital of France?", options: ["London", "Paris", "Rome", "Berlin"] },
            { question: "Which is the largest planet in the solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"] },
            { question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "120°C", "80°C"] },
            { question: "Who wrote the national anthem of India?", options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Sardar Patel"] },
            { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Pb", "Fe"] },
            { question: "Which organ in the human body produces insulin?", options: ["Liver", "Pancreas", "Heart", "Kidney"] },
            { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Isaac Newton"] },
            { question: "What is the square root of 64?", options: ["6", "8", "10", "12"] }
        ],
        correctAnswers: ["Option A", "Mahatma Gandhi", "Paris", "Jupiter", "100°C", 
                        "Rabindranath Tagore", "Au", "Pancreas", "Alexander Graham Bell", "8"],
        timeLimit: 600 // 10 minutes
    },
    'general-knowledge-intermediate': {
        questions: [
            { question: "Which article of the Indian Constitution deals with Fundamental Rights?", options: ["Article 12-35", "Article 36-51", "Article 52-78", "Article 79-124"] },
            { question: "Who was the first woman Prime Minister of India?", options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"] },
            { question: "Which country hosted the 2020 Summer Olympics?", options: ["Japan", "China", "Brazil", "France"] },
            { question: "What is the currency of Switzerland?", options: ["Euro", "Pound", "Franc", "Krone"] },
            { question: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Mars", "Jupiter", "Saturn"] },
            { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"] },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"] },
            { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"] },
            { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"] }
        ],
        correctAnswers: ["Article 12-35", "Indira Gandhi", "Japan", "Franc", "Mars", 
                        "Leonardo da Vinci", "Pacific", "Nitrogen", "William Shakespeare", "Ottawa"],
        timeLimit: 600
    },
    'general-knowledge-hard': {
        questions: [
            { question: "Which amendment to the Indian Constitution inserted the Fundamental Duties?", options: ["42nd", "44th", "52nd", "73rd"] },
            { question: "The 'Doctrine of Lapse' was introduced by which Governor-General?", options: ["Lord Dalhousie", "Lord Curzon", "Lord Wellesley", "Lord Canning"] },
            { question: "Which of these is NOT a noble gas?", options: ["Helium", "Neon", "Radon", "Chlorine"] },
            { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Jane Addams"] },
            { question: "Which country has the most time zones?", options: ["Russia", "USA", "China", "France"] },
            { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"] },
            { question: "Which language has the most native speakers?", options: ["English", "Hindi", "Spanish", "Mandarin"] },
            { question: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"] },
            { question: "Which blood type is the universal donor?", options: ["A", "B", "AB", "O"] },
            { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"] }
        ],
        correctAnswers: ["42nd", "Lord Dalhousie", "Chlorine", "Marie Curie", "France", 
                        "Diamond", "Mandarin", "Antarctic", "O", "Alexander Fleming"],
        timeLimit: 600 
    },
    
    // Mind-Bending Riddles
    'mind-bending-easy': {
        questions: [
            { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", options: ["Echo", "Whistle", "Shadow", "Kite"] },
            { question: "The more you take, the more you leave behind. What am I?", options: ["Footsteps", "Breath", "Memories", "Photographs"] },
            { question: "What has keys but can't open locks?", options: ["Piano", "Map", "Keyboard", "Calculator"] },
            { question: "What has to be broken before you can use it?", options: ["Egg", "Glass", "Bottle", "Promise"] },
            { question: "I'm tall when I'm young, and short when I'm old. What am I?", options: ["Tree", "Candle", "Person", "Pencil"] },
            { question: "What has a head, a tail, but no body?", options: ["Coin", "Snake", "Comet", "Arrow"] },
            { question: "What can you catch but not throw?", options: ["Cold", "Ball", "Fish", "Light"] },
            { question: "What goes up but never comes down?", options: ["Age", "Balloon", "Temperature", "Elevator"] },
            { question: "What has many teeth but can't bite?", options: ["Comb", "Shark", "Zipper", "Gear"] },
            { question: "What has hands but can't clap?", options: ["Clock", "Gloves", "Person", "Monkey"] }
        ],
        correctAnswers: ["Echo", "Footsteps", "Piano", "Egg", "Candle", 
                        "Coin", "Cold", "Age", "Comb", "Clock"],
        timeLimit: 600
    },
    'mind-bending-intermediate': {
        questions: [
            { question: "A man lives on the 10th floor of a building. Every day he takes the elevator to go down to the ground floor to go to work. When he returns, he takes the elevator to the 7th floor and walks up the stairs to reach his apartment on the 10th floor. Why?", options: ["He's too short to reach the 10th floor button", "The elevator only goes up to 7", "He's exercising", "The 10th floor button is broken"] },
            { question: "A woman shoots her husband, then holds him underwater for five minutes. Next, she hangs him. Right after, they enjoy a lovely dinner. How?", options: ["She's a photographer", "She's a hunter", "She's a murderer", "She's a chef"] },
            { question: "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?", options: ["Fire", "Plant", "Cloud", "Stone"] },
            { question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?", options: ["River", "Clock", "Tree", "Book"] },
            { question: "The more you take away from me, the bigger I become. What am I?", options: ["Hole", "Debt", "Shadow", "Mountain"] },
            { question: "What belongs to you but others use it more than you do?", options: ["Your name", "Your money", "Your clothes", "Your phone"] },
            { question: "What has cities but no houses, forests but no trees, and rivers but no water?", options: ["Map", "Dream", "Painting", "Globe"] },
            { question: "What gets wetter as it dries?", options: ["Towel", "Sponge", "Clothes", "Hair"] },
            { question: "What can you hold in your right hand but not in your left?", options: ["Your left elbow", "Your right hand", "A pencil", "A glass"] },
            { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", options: ["The letter 'M'", "The number '1'", "The letter 'E'", "The number '0'"] }
        ],
        correctAnswers: ["He's too short to reach the 10th floor button", "She's a photographer", "Fire", "River", 
                        "Hole", "Your name", "Map", "Towel", "Your left elbow", "The letter 'M'"],
        timeLimit: 600
    },
    'mind-bending-hard': {
        questions: [
            { question: "A man is found dead in a locked room with no windows. The only items are a puddle of water and a piece of rope. How did he die?", options: ["He hanged himself", "He was strangled", "He drowned", "He slipped on the water"] },
            { question: "A man walks into a bar and asks the bartender for a glass of water. The bartender pulls out a gun and points it at him. The man says 'thank you' and leaves. What happened?", options: ["The man had hiccups", "The bartender was crazy", "It was a water gun", "The man was threatening"] },
            { question: "A woman has two sons who were born at the same hour of the same day of the same year. But they are not twins. How is this possible?", options: ["They are triplets", "They were adopted", "They are brothers from different fathers", "They are two of a set of triplets"] },
            { question: "What is so fragile that saying its name breaks it?", options: ["Silence", "Glass", "Bubble", "Heart"] },
            { question: "I have seas with no water, coasts with no sand, towns without people, and mountains without land. What am I?", options: ["Map", "Desert", "Painting", "Globe"] },
            { question: "The person who makes it has no need for it. The person who buys it has no use for it. The person who uses it can neither see nor feel it. What is it?", options: ["Coffin", "Mirror", "Will", "Tombstone"] },
            { question: "What can travel around the world while staying in a corner?", options: ["Stamp", "Airplane", "Thought", "Light"] },
            { question: "What has a thumb and four fingers but is not alive?", options: ["Glove", "Hand", "Clock", "Robot"] },
            { question: "What gets broken without being held?", options: ["Promise", "Heart", "Glass", "Silence"] },
            { question: "What is always in front of you but can't be seen?", options: ["Future", "Air", "Light", "Thought"] }
        ],
        correctAnswers: ["He hanged himself", "The man had hiccups", "They are two of a set of triplets", "Silence", 
                        "Map", "Coffin", "Stamp", "Glove", "Promise", "Future"],
        timeLimit: 600
    },
    
    // Science & Innovation
    'science-easy': {
        questions: [
            { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"] },
            { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"] },
            { question: "What is the human body's largest organ?", options: ["Liver", "Brain", "Skin", "Heart"] },
            { question: "What force pulls objects toward Earth's center?", options: ["Magnetism", "Gravity", "Friction", "Inertia"] },
            { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"] },
            { question: "Which scientist developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"] },
            { question: "What is the main component of the Sun?", options: ["Liquid Lava", "Hydrogen", "Oxygen", "Rock"] },
            { question: "Which of these is NOT a primary color of light?", options: ["Red", "Green", "Blue", "Yellow"] },
            { question: "What is the study of fossils called?", options: ["Geology", "Paleontology", "Archaeology", "Meteorology"] }
        ],
        correctAnswers: ["H2O", "Mercury", "Skin", "Gravity", "Carbon Dioxide", 
                        "Diamond", "Albert Einstein", "Hydrogen", "Yellow", "Paleontology"],
        timeLimit: 600
    },
    'science-intermediate': {
        questions: [
            { question: "What is the smallest unit of matter?", options: ["Atom", "Molecule", "Cell", "Electron"] },
            { question: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"] },
            { question: "What is the speed of light in a vacuum?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"] },
            { question: "Which blood type is the universal recipient?", options: ["A", "B", "AB", "O"] },
            { question: "What is the pH value of pure water?", options: ["5", "7", "9", "12"] },
            { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Neptune", "Mars"] },
            { question: "What is the main gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"] },
            { question: "What is the largest type of 'big cat' in the world?", options: ["Lion", "Tiger", "Jaguar", "Leopard"] },
            { question: "Which organ produces bile?", options: ["Pancreas", "Stomach", "Liver", "Gallbladder"] }
        ],
        correctAnswers: ["Atom", "Hydrogen", "300,000 km/s", "AB", "7", 
                        "Jupiter", "Nitrogen", "Leaf", "Tiger", "Liver"],
        timeLimit: 600
    },
    'science-hard': {
        questions: [
            { question: "Which subatomic particle has a positive charge?", options: ["Electron", "Neutron", "Proton", "Photon"] },
            { question: "What is the chemical formula for table salt?", options: ["NaCl", "H2O", "CO2", "C6H12O6"] },
            { question: "Which scientist discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"] },
            { question: "What is the study of mushrooms called?", options: ["Botany", "Mycology", "Zoology", "Entomology"] },
            { question: "Which planet has the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Venus"] },
            { question: "What is the rarest blood type in humans?", options: ["A", "B", "AB", "AB-"] },
            { question: "Which element is liquid at room temperature?", options: ["Bromine", "Mercury", "Gallium", "All of these"] },
            { question: "What is the largest moon in the solar system?", options: ["Titan", "Ganymede", "Moon", "Europa"] },
            { question: "Which vitamin is produced when the human body is exposed to sunlight?", options: ["A", "B", "C", "D"] },
            { question: "What is the strongest muscle in the human body relative to its size?", options: ["Heart", "Gluteus Maximus", "Jaw", "Tongue"] }
        ],
        correctAnswers: ["Proton", "NaCl", "Alexander Fleming", "Mycology", "Jupiter", 
                        "AB-", "All of these", "Ganymede", "D", "Jaw"],
        timeLimit: 600
    },
    
    // Business Strategies
    'business-easy': {
        questions: [
            { question: "What does ROI stand for in business?", options: ["Return on Investment", "Rate of Interest", "Risk of Inflation", "Revenue on Income"] },
            { question: "Which of these is NOT a type of business organization?", options: ["Sole Proprietorship", "Partnership", "Corporation", "Democracy"] },
            { question: "What is the study of how people use limited resources to satisfy unlimited wants?", options: ["Finance", "Economics", "Accounting", "Marketing"] },
            { question: "Which of these is NOT a component of SWOT analysis?", options: ["Strengths", "Weaknesses", "Opportunities", "Targets"] },
            { question: "What is the process of dividing a market into distinct groups of buyers called?", options: ["Segmentation", "Targeting", "Positioning", "Branding"] },
            { question: "Which financial statement shows a company's revenues and expenses?", options: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Equity"] },
            { question: "What is the term for money invested in a business to generate income?", options: ["Loan", "Capital", "Debt", "Interest"] },
            { question: "Which of these is NOT a PESTLE analysis factor?", options: ["Political", "Economic", "Social", "Leadership"] },
            { question: "What does CRM stand for in business?", options: ["Customer Relationship Management", "Company Resource Management", "Corporate Revenue Model", "Client Retention Method"] },
            { question: "Which pricing strategy sets prices high initially then lowers them over time?", options: ["Penetration Pricing", "Skimming Pricing", "Competitive Pricing", "Cost-Plus Pricing"] }
        ],
        correctAnswers: ["Return on Investment", "Democracy", "Economics", "Targets", "Segmentation", 
                        "Income Statement", "Capital", "Leadership", "Customer Relationship Management", "Skimming Pricing"],
        timeLimit: 600
    },
    'business-intermediate': {
        questions: [
            { question: "What is the formula for calculating profit?", options: ["Revenue - Expenses", "Assets - Liabilities", "Income - Taxes", "Sales - Costs"] },
            { question: "Which of these is NOT one of Porter's Five Forces?", options: ["Threat of new entrants", "Bargaining power of suppliers", "Competitive rivalry", "Government regulations"] },
            { question: "What does EBITDA stand for?", options: ["Earnings Before Interest, Taxes, Depreciation and Amortization", "Expenses Before Income, Taxes, Dividends and Assets", "Earnings Beyond Interest, Taxes, Debt and Assets", "Expenses Before Interest, Taxes, Depreciation and Amortization"] },
            { question: "Which leadership style involves making decisions without consulting others?", options: ["Democratic", "Autocratic", "Laissez-faire", "Transformational"] },
            { question: "What is the break-even point?", options: ["When revenue equals costs", "When profits are maximized", "When market share is highest", "When all debts are paid"] },
            { question: "Which of these is NOT a type of market structure?", options: ["Monopoly", "Oligopoly", "Perfect Competition", "Capitalism"] },
            { question: "What is the purpose of a balance sheet?", options: ["Show profits and losses", "Show assets, liabilities and equity", "Show cash flows", "Show market share"] },
            { question: "Which of these is NOT a component of the marketing mix (4 Ps)?", options: ["Product", "Price", "Place", "People"] },
            { question: "What is the term for when a company buys another company?", options: ["Merger", "Acquisition", "Joint Venture", "Strategic Alliance"] },
            { question: "Which of these is NOT a common type of business risk?", options: ["Strategic Risk", "Compliance Risk", "Financial Risk", "Employee Risk"] }
        ],
        correctAnswers: ["Revenue - Expenses", "Government regulations", "Earnings Before Interest, Taxes, Depreciation and Amortization", "Autocratic", 
                        "When revenue equals costs", "Capitalism", "Show assets, liabilities and equity", "People", "Acquisition", "Employee Risk"],
        timeLimit: 600
    },
    'business-hard': {
        questions: [
            { question: "What does the BCG matrix classify business units into?", options: ["Stars, Cash Cows, Question Marks, Dogs", "Leaders, Followers, Challengers, Nichers", "High, Medium, Low, None", "Growth, Stability, Decline, Turnaround"] },
            { question: "Which financial ratio measures a company's ability to pay short-term obligations?", options: ["Debt-to-Equity", "Current Ratio", "Return on Equity", "Gross Margin"] },
            { question: "What is the term for the process of converting assets into cash?", options: ["Amortization", "Depreciation", "Liquidation", "Monetization"] },
            { question: "Which of these is NOT a stage in the product life cycle?", options: ["Introduction", "Growth", "Maturity", "Competition"] },
            { question: "What is the term for the difference between a product's perceived value and its cost?", options: ["Profit Margin", "Value Proposition", "Customer Surplus", "Economic Value Added"] },
            { question: "Which of these is NOT a type of organizational structure?", options: ["Functional", "Divisional", "Matrix", "Pyramid"] },
            { question: "What is the term for when a company sells shares to the public for the first time?", options: ["Secondary Offering", "Initial Public Offering", "Private Placement", "Stock Split"] },
            { question: "Which of these is NOT a common diversification strategy?", options: ["Horizontal", "Vertical", "Diagonal", "Conglomerate"] },
            { question: "What is the term for the process of analyzing external factors affecting a business?", options: ["SWOT Analysis", "PESTLE Analysis", "Five Forces Analysis", "Value Chain Analysis"] },
            { question: "Which of these is NOT a key performance indicator (KPI)?", options: ["Net Profit", "Customer Satisfaction", "Employee Turnover", "Office Location"] }
        ],
        correctAnswers: ["Stars, Cash Cows, Question Marks, Dogs", "Current Ratio", "Liquidation", "Competition", "Customer Surplus", 
                        "Pyramid", "Initial Public Offering", "Diagonal", "PESTLE Analysis", "Office Location"],
        timeLimit: 600
    },
    
    // Digital Marketing & Social Media
    'marketing-easy': {
        questions: [
            { question: "What does SEO stand for?", options: ["Search Engine Optimization", "Social Engagement Outreach", "Site Enhancement Operation", "Search Entry Operation"] },
            { question: "Which platform is best for professional networking?", options: ["Facebook", "Instagram", "LinkedIn", "TikTok"] },
            { question: "What is the term for content that spreads rapidly online?", options: ["Viral Content", "Trending Content", "Popular Content", "Shared Content"] },
            { question: "Which metric measures how many people see your content?", options: ["Engagement Rate", "Click-Through Rate", "Impressions", "Conversions"] },
            { question: "What is the purpose of a call-to-action (CTA)?", options: ["To entertain the audience", "To inform the audience", "To prompt a specific action", "To display products"] },
            { question: "Which of these is NOT a social media platform?", options: ["Twitter", "Pinterest", "YouTube", "Google"] },
            { question: "What does PPC stand for in digital marketing?", options: ["Pay Per Click", "Price Per Conversion", "Public Private Campaign", "Promoted Post Cost"] },
            { question: "Which platform is primarily visual content based?", options: ["Twitter", "LinkedIn", "Instagram", "Reddit"] },
            { question: "What is the term for unpaid, earned exposure?", options: ["Paid Media", "Owned Media", "Earned Media", "Shared Media"] },
            { question: "Which of these is NOT a type of online advertising?", options: ["Banner Ads", "Native Ads", "Print Ads", "Video Ads"] }
        ],
        correctAnswers: ["Search Engine Optimization", "LinkedIn", "Viral Content", "Impressions", "To prompt a specific action", 
                        "Google", "Pay Per Click", "Instagram", "Earned Media", "Print Ads"],
        timeLimit: 600
    },
    'marketing-intermediate': {
        questions: [
            { question: "What is the ideal character length for a Twitter post?", options: ["140", "280", "500", "Unlimited"] },
            { question: "Which algorithm determines Google search rankings?", options: ["PageRank", "EdgeRank", "SearchRank", "GoogleRank"] },
            { question: "What is the term for the percentage of visitors who take a desired action?", options: ["Bounce Rate", "Conversion Rate", "Click Rate", "Engagement Rate"] },
            { question: "Which platform uses 'Stories' that disappear after 24 hours?", options: ["Facebook", "Instagram", "LinkedIn", "All of these"] },
            { question: "What does CTR stand for in digital marketing?", options: ["Click-Through Rate", "Conversion Tracking Ratio", "Cost To Revenue", "Content To Read"] },
            { question: "Which of these is NOT a type of influencer?", options: ["Mega-Influencer", "Macro-Influencer", "Micro-Influencer", "Nano-Influencer", "Pico-Influencer"] },
            { question: "What is the term for optimizing a website for voice search?", options: ["VSEO", "Voice SEO", "Audio SEO", "Speech SEO"] },
            { question: "Which metric measures how long users stay on your website?", options: ["Bounce Rate", "Session Duration", "Page Views", "Traffic Sources"] },
            { question: "What is the term for creating content that ranks for multiple keywords?", options: ["Keyword Stuffing", "Content Clustering", "Pillar Content", "SEO Optimization"] },
            { question: "Which platform is best for short-form video content?", options: ["YouTube", "TikTok", "Facebook", "LinkedIn"] }
        ],
        correctAnswers: ["280", "PageRank", "Conversion Rate", "All of these", "Click-Through Rate", 
                        "Pico-Influencer", "Voice SEO", "Session Duration", "Pillar Content", "TikTok"],
        timeLimit: 600
    },
    'marketing-hard': {
        questions: [
            { question: "What does SERP stand for in SEO?", options: ["Search Engine Results Page", "Search Engine Ranking Position", "Site Engagement Rating Page", "Social Engine Response Platform"] },
            { question: "Which of these is NOT a Google ranking factor?", options: ["Page Speed", "Mobile-Friendliness", "Content Quality", "Number of Facebook Likes"] },
            { question: "What is the term for the practice of creating backlinks to improve SEO?", options: ["Link Building", "Content Marketing", "Social Sharing", "Email Outreach"] },
            { question: "Which metric measures the percentage of visitors who leave after viewing one page?", options: ["Exit Rate", "Bounce Rate", "Conversion Rate", "Abandonment Rate"] },
            { question: "What is the term for the process of improving old content?", options: ["Content Refreshing", "Content Repurposing", "Content Recycling", "Content Updating"] },
            { question: "Which of these is NOT a type of Facebook ad?", options: ["Carousel", "Collection", "Story", "Tweet"] },
            { question: "What is the term for the practice of optimizing content for featured snippets?", options: ["Position 0 Optimization", "SERP Optimization", "Answer Box Optimization", "All of these"] },
            { question: "Which platform uses 'Pins' as its primary content type?", options: ["Instagram", "Pinterest", "TikTok", "Reddit"] },
            { question: "What is the term for the practice of creating content that addresses customer pain points?", options: ["Pain Point Marketing", "Problem-Solution Content", "Customer-Centric Content", "All of these"] },
            { question: "Which of these is NOT a common social media advertising objective?", options: ["Brand Awareness", "Lead Generation", "Engagement", "Employee Satisfaction"] }
        ],
        correctAnswers: ["Search Engine Results Page", "Number of Facebook Likes", "Link Building", "Bounce Rate", "Content Refreshing", 
                        "Tweet", "All of these", "Pinterest", "All of these", "Employee Satisfaction"],
        timeLimit: 600
    },
    
    // Advanced CSS
    'css-easy': {
        questions: [
            { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"] },
            { question: "Which property is used to change the text color of an element?", options: ["font-color", "text-color", "color", "font-style"] },
            { question: "How do you select an element with id 'demo' in CSS?", options: [".demo", "#demo", "*demo", "demo"] },
            { question: "Which property is used to change the font of an element?", options: ["font-family", "font-style", "font-weight", "text-font"] },
            { question: "How do you make each word in a text start with a capital letter?", options: ["text-transform: capitalize", "text-transform: uppercase", "text-style: capital", "font-variant: small-caps"] },
            { question: "Which property is used to change the left margin of an element?", options: ["margin-left", "padding-left", "indent", "left-margin"] },
            { question: "How do you make a list that lists its items with squares?", options: ["list-style-type: square", "list-type: square", "list-style: square", "list-bullet: square"] },
            { question: "Which property is used to change the background color?", options: ["bgcolor", "background-color", "color-background", "background"] },
            { question: "How do you select all p elements inside a div element?", options: ["div.p", "div + p", "div p", "p.div"] },
            { question: "Which property is used to change the size of the text?", options: ["text-size", "font-size", "text-style", "font-style"] }
        ],
        correctAnswers: ["Cascading Style Sheets", "color", "#demo", "font-family", "text-transform: capitalize", 
                        "margin-left", "list-style-type: square", "background-color", "div p", "font-size"],
        timeLimit: 600
    },
    'css-intermediate': {
        questions: [
            { question: "Which property is used to create space between the element's border and inner content?", options: ["margin", "padding", "spacing", "border-spacing"] },
            { question: "How do you make a flexbox container?", options: ["display: flexbox", "display: flex", "display: inline-flex", "display: box"] },
            { question: "Which property is used to change the opacity of an element?", options: ["transparency", "opacity", "visibility", "filter"] },
            { question: "How do you apply a style only when the screen is less than 600px wide?", options: ["@media (max-width: 600px)", "@media screen (width < 600px)", "@media (min-width: 600px)", "@media (screen-size: small)"] },
            { question: "Which property is used to create rounded corners?", options: ["border-round", "corner-radius", "border-radius", "round-corner"] },
            { question: "How do you select the first child of an element?", options: [":first-child", ":first-of-type", ":child(1)", ":nth-child(1)"] },
            { question: "Which value of position property makes an element stay in the same place even when the page is scrolled?", options: ["static", "relative", "fixed", "absolute"] },
            { question: "How do you make a grid container?", options: ["display: grid", "display: block-grid", "display: flex-grid", "display: inline-grid"] },
            { question: "Which property is used to create a transition effect?", options: ["transition", "transform", "animation", "effect"] },
            { question: "How do you center an element horizontally using flexbox?", options: ["justify-content: center", "align-items: center", "flex-center: true", "flex-align: center"] }
        ],
        correctAnswers: ["padding", "display: flex", "opacity", "@media (max-width: 600px)", "border-radius", 
                        ":first-child", "fixed", "display: grid", "transition", "justify-content: center"],
        timeLimit: 600
    },
    'css-hard': {
        questions: [
            { question: "Which CSS property can be used to blend an element with its background?", options: ["mix-blend-mode", "background-blend", "element-blend", "blend-background"] },
            { question: "How do you create a CSS variable?", options: ["var: --name", "--name: value", "variable: name=value", "set: --name value"] },
            { question: "Which pseudo-element can be used to style the first line of a paragraph?", options: [":first-line", "::first-line", ":first-letter", "::first-letter"] },
            { question: "How do you create an animation in CSS?", options: ["@keyframes", "@animation", "@create-animation", "@animate"] },
            { question: "Which property is used to change the stacking order of elements?", options: ["z-order", "stack-order", "z-index", "layer-index"] },
            { question: "How do you select an element that has both classes 'a' and 'b'?", options: [".a .b", ".a.b", ".a, .b", ".a + .b"] },
            { question: "Which property is used to create a 3D transformation?", options: ["transform-style", "perspective", "3d-transform", "transform"] },
            { question: "How do you create a smooth scroll behavior for the whole page?", options: ["scroll-behavior: smooth", "html { smooth-scroll: true }", "body { scroll: smooth }", "document.scroll = 'smooth'"] },
            { question: "Which pseudo-class selects elements that are currently being activated by the user?", options: [":hover", ":focus", ":active", ":click"] },
            { question: "How do you create a gradient background that goes from top to bottom?", options: ["background: linear-gradient(to bottom, color1, color2)", "background: gradient(top, color1, color2)", "background: vertical-gradient(color1, color2)", "background: linear-gradient(vertical, color1, color2)"] }
        ],
        correctAnswers: ["mix-blend-mode", "--name: value", "::first-line", "@keyframes", "z-index", 
                        ".a.b", "transform", "scroll-behavior: smooth", ":active", "background: linear-gradient(to bottom, color1, color2)"],
        timeLimit: 600
    }
};
let answers =[];

document.addEventListener("DOMContentLoaded", function () {
    // Parse the quiz ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('quiz') || 'general-knowledge-easy';
    

    // Get the current question set
    const currentSet = questionSets[quizId] || questionSets['general-knowledge-easy'];
    const questions = currentSet.questions;
    const correctAnswers = currentSet.correctAnswers;
    const totalTime = currentSet.timeLimit;

    // Update the quiz title based on the selected quiz
    const quizTitleMap = {
        'mind-bending': 'Mind-Bending Riddle',
        'science': 'Science & Innovation',
        'general-knowledge': 'General Knowledge',
        'business': 'Business Strategies',
        'marketing': 'Digital Marketing',
        'css': 'Advanced CSS'
    };
    
    const quizType = quizId.split('-')[0];
    document.querySelector('.header h3').textContent = quizTitleMap[quizType] || 'General Knowledge Test';

    // Update difficulty display
    const difficulty = quizId.split('-').pop();
    document.querySelector('.session-timer span').textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    // Rest of your existing code remains the same
    let currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    let timerInterval;
    let timeLeft = totalTime;
    
    // Initialize timer
    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        document.getElementById("timer").textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSubmitTest();
        } else {
            timeLeft--;
        }
    }

    function autoSubmitTest() {
        clearInterval(timerInterval);
        saveAnswer();
        
        // Calculate score
        let correctCount = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === correctAnswers[i]) {
                correctCount++;
            }
        }
        
        // Show results
        document.getElementById("submit-popup").style.display = "flex";
        document.getElementById("popup-message").textContent = "⏰ Time's up! Your test has been automatically submitted.";
        document.getElementById("score-text").textContent = `Your score: ${correctCount}/${questions.length}`;
        document.getElementById("popup-buttons").style.display = "none";
        document.getElementById("score-section").style.display = "block";
    }

    // Select elements
    const progress = document.querySelector(".progress");
    const questionTitle = document.querySelector(".question-title");
    const questionText = document.querySelector(".question-text");
    const optionsContainer = document.querySelector(".options");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const finishBtn = document.querySelector(".finish-btn");

    // Create floating "Questions" button
    const questionNavButton = document.createElement("button");
    questionNavButton.textContent = "☰ Questions";
    questionNavButton.style.position = "absolute";
    questionNavButton.style.top = "15px";
    questionNavButton.style.right = "20px";
    questionNavButton.style.background = "#6A5ACD";
    questionNavButton.style.color = "#fff";
    questionNavButton.style.padding = "10px 15px";
    questionNavButton.style.border = "none";
    questionNavButton.style.borderRadius = "5px";
    questionNavButton.style.cursor = "pointer";
    questionNavButton.style.fontSize = "14px";
    document.body.appendChild(questionNavButton);

    // Create the popup container
    const popup = document.createElement("div");
    popup.style.position = "absolute";
    popup.style.top = "50px";
    popup.style.right = "20px";
    popup.style.background = "#fff";
    popup.style.padding = "15px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    popup.style.display = "none";

    // Add question number buttons (1-10)
    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.style.width = "40px";
        btn.style.height = "40px";
        btn.style.margin = "5px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.background = answers[i] ? "#32CD32" : "#df57e4"; // Green if answered, purple if not
        btn.style.color = "#fff";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "16px";
        btn.addEventListener("click", function () {
            loadQuestion(i);
            popup.style.display = "none";
        });
        popup.appendChild(btn);
    }

    document.body.appendChild(popup);

    // Toggle popup visibility
    questionNavButton.addEventListener("click", function () {
        popup.style.display = (popup.style.display === "block") ? "none" : "block";
    });

    // Load Question
    function loadQuestion(index) {
        currentQuestionIndex = index;
        questionTitle.textContent = `Question ${index + 1}`;
        questionText.textContent = questions[index].question;
        optionsContainer.innerHTML = "";

        questions[index].options.forEach((option, i) => {
            const optionElement = document.createElement("label");
            optionElement.classList.add("option");
            optionElement.innerHTML = `
                <input type="radio" name="question" value="${option}" ${answers[index] === option ? "checked" : ""}>
                <span>${option}</span>
            `;
            optionsContainer.appendChild(optionElement);
        });

        updateButtons();
    }

    // Save selected answer
    function saveAnswer() {
        const selectedOption = document.querySelector('input[name="question"]:checked');
        if (selectedOption) {
            answers[currentQuestionIndex] = selectedOption.value;
            // Update the question navigation button color
            const buttons = popup.querySelectorAll("button");
            buttons[currentQuestionIndex].style.background = "#32CD32";
        }
    }

    // Check if all questions are answered
    function allQuestionsAnswered() {
        return answers.every(answer => answer !== null);
    }

    // Update button visibility
    function updateButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.style.display = currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
        finishBtn.style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";

        // Update progress bar
        progress.style.width = ((currentQuestionIndex + 1) / questions.length) * 100 + "%";
    }

    // Start the timer when the page loads
    startTimer();

    // Load the first question on page load
    loadQuestion(currentQuestionIndex);

    // Event Listeners
    nextBtn.addEventListener("click", function () {
        saveAnswer();
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    });

    prevBtn.addEventListener("click", function () {
        saveAnswer();
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    finishBtn.addEventListener("click", function () {
        saveAnswer();
        if (!allQuestionsAnswered()) {
            alert("⚠️ Please answer all questions before submitting.");
            return;
        }
        clearInterval(timerInterval);
        document.getElementById("submit-popup").style.display = "flex";
        document.getElementById("popup-message").textContent = "Are you sure you want to submit the test?";
        document.getElementById("popup-buttons").style.display = "flex";
        document.getElementById("score-section").style.display = "none";
    });

    document.querySelector('#submit-popup .exit-btn').addEventListener('click', function() {
        clearInterval(timerInterval);
        saveAnswer(); 
        let correctCount = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === correctAnswers[i]) {
                correctCount++;
            }
        }
        document.getElementById("score-text").textContent = `Your score: ${correctCount}/${questions.length}`;
        document.getElementById("popup-message").textContent = "✅ Test submitted successfully!";
        document.getElementById("popup-buttons").style.display = "none";
        document.getElementById("score-section").style.display = "block";
    });
});

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Confirm exit and redirect to home.html
function confirmExit() {
    window.location.href = "home.html";
}

function closeSubmitPopup() {
    document.getElementById("submit-popup").style.display = "none";
}

function reviewAnswers() {
    closeSubmitPopup();
    
    // Get the current quiz ID
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('quiz') || 'general-knowledge-easy';
    const currentSet = questionSets[quizId];
    
    // Get user answers from the page
    const userAnswers = answers;
    
    // Remove any existing review sections
    document.querySelectorAll(".review-question").forEach(el => el.remove());
    
    // Create a review container
    const reviewContainer = document.createElement("div");
    reviewContainer.style.position = "fixed";
    reviewContainer.style.top = "0";
    reviewContainer.style.left = "0";
    reviewContainer.style.width = "100%";
    reviewContainer.style.height = "100%";
    reviewContainer.style.background = "white";
    reviewContainer.style.overflow = "auto";
    reviewContainer.style.padding = "20px";
    reviewContainer.style.zIndex = "1000";
    
    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close Review";
    closeButton.style.position = "fixed";
    closeButton.style.top = "20px";
    closeButton.style.right = "20px";
    closeButton.style.padding = "10px 15px";
    closeButton.style.background = "#6A5ACD";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.addEventListener("click", function() {
        document.body.removeChild(reviewContainer);
    });
    reviewContainer.appendChild(closeButton);
    
    // Add score display
    const scoreDisplay = document.createElement("div");
    scoreDisplay.style.textAlign = "center";
    scoreDisplay.style.marginBottom = "20px";
    scoreDisplay.style.fontSize = "20px";
    scoreDisplay.style.fontWeight = "bold";
    
    // Calculate score
    let correctCount = 0;
    for (let i = 0; i < currentSet.questions.length; i++) {
        if (userAnswers[i] === currentSet.correctAnswers[i]) {
            correctCount++;
        }
    }
    
    scoreDisplay.textContent = `Your Score: ${correctCount}/${currentSet.questions.length}`;
    reviewContainer.appendChild(scoreDisplay);
    
    // Add review content for all questions
    currentSet.questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("review-question");
        questionDiv.style.marginBottom = "30px";
        questionDiv.style.padding = "15px";
        questionDiv.style.border = "1px solid #ddd";
        questionDiv.style.borderRadius = "5px";
        
        // Add question text
        const questionText = document.createElement("h3");
        questionText.textContent = `Question ${index + 1}: ${q.question}`;
        questionText.style.marginBottom = "10px";
        questionDiv.appendChild(questionText);
        
        // Add user's answer status
        const statusDiv = document.createElement("div");
        statusDiv.style.marginBottom = "10px";
        statusDiv.style.fontWeight = "bold";
        
        if (userAnswers[index] === currentSet.correctAnswers[index]) {
            statusDiv.textContent = "✓ Correct";
            statusDiv.style.color = "green";
        } else if (userAnswers[index]) {
            statusDiv.textContent = "✗ Incorrect";
            statusDiv.style.color = "red";
        } else {
            statusDiv.textContent = "ⓘ Not answered";
            statusDiv.style.color = "orange";
        }
        
        questionDiv.appendChild(statusDiv);
        
        // Add all options with highlighting
        q.options.forEach(option => {
            const optionDiv = document.createElement("div");
            optionDiv.style.margin = "5px 0";
            optionDiv.style.padding = "8px";
            optionDiv.style.borderRadius = "4px";
            
            if (option === currentSet.correctAnswers[index]) {
                optionDiv.style.background = "#e6f7e6"; // Light green for correct answer
                optionDiv.style.borderLeft = "4px solid #4CAF50";
                optionDiv.textContent = `${option} (Correct Answer)`;
            } else if (option === userAnswers[index]) {
                optionDiv.style.background = "#ffebee"; // Light red for user's incorrect answer
                optionDiv.style.borderLeft = "4px solid #F44336";
                optionDiv.textContent = `${option} (Your Answer)`;
            } else {
                optionDiv.style.paddingLeft = "12px";
                optionDiv.textContent = option;
            }
            
            questionDiv.appendChild(optionDiv);
        });
        
        reviewContainer.appendChild(questionDiv);
    });
    
    document.body.appendChild(reviewContainer);
}

function closeReview() {
    // Remove the review container if it exists
    const reviewContainer = document.querySelector("div[style*='position: fixed; top: 0']");
    if (reviewContainer) {
        document.body.removeChild(reviewContainer);
    }
    
    // Show the exit confirmation popup
    document.getElementById("exit-confirm-popup").style.display = "flex";
}

// Add event listener for the close button in the review
document.addEventListener('click', function(e) {
    if (e.target && e.target.textContent === 'Close Review') {
        closeReview();
    }
});

// Event listeners for the exit confirmation popup buttons
document.getElementById("return-to-review-btn").addEventListener("click", function() {
    document.getElementById("exit-confirm-popup").style.display = "none";
    reviewAnswers();
});

document.getElementById("exit-to-home-btn").addEventListener("click", function() {
    window.location.href = "home.html";
});


// Add this to your DOMContentLoaded event
document.querySelector('.back-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent immediate navigation
    showBackConfirmPopup();
});

function showBackConfirmPopup() {
    document.getElementById("back-confirm-popup").style.display = "flex";
}

function hideBackConfirmPopup() {
    document.getElementById("back-confirm-popup").style.display = "none";
}

// Add event listeners for the popup buttons
document.getElementById("confirm-exit-btn").addEventListener("click", function() {
    window.location.href = "home.html";
});

document.getElementById("cancel-exit-btn").addEventListener("click", function() {
    hideBackConfirmPopup();
});