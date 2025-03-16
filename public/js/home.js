document.addEventListener("DOMContentLoaded", function () {
    // Existing navigation code
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const analyticsLink = document.getElementById("analytics-link");
    const quizzesLink = document.getElementById("quizzes-link");
    const createLink = document.getElementById("create-link");

    if (analyticsLink) {
        analyticsLink.classList.remove("active");
    }
    if (createLink) {
        createLink.classList.remove("active");
    }

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Quiz details modal functionality
    const quizData = {
        'mind-bending-riddle': {
            title: 'Mind-Bending Riddle',
            description: 'Challenge your cognitive abilities with our carefully curated collection of logic puzzles and riddles. Perfect for developing problem-solving skills and critical thinking.',
            categories: ['Puzzles', 'Logic', 'Entertainment']
        },
        'science-innovation': {
            title: 'Science & Innovation',
            description: 'Explore the fascinating world of scientific discoveries and technological advancements. From quantum physics to artificial intelligence, test your knowledge of cutting-edge innovations.',
            categories: ['Science', 'Technology']
        },
        'general-knowledge': {
            title: 'General Knowledge',
            description: 'A comprehensive quiz covering various topics from history and science to current affairs. Perfect for expanding your knowledge across multiple disciplines.',
            categories: ['Science', 'Knowledge', 'History']
        },
        'business-strategies': {
            title: 'Business Strategies',
            description: 'Dive into the world of business and economics. Test your understanding of market dynamics, financial concepts, and entrepreneurial strategies.',
            categories: ['Business', 'Markets']
        },
        'digital-marketing': {
            title: 'Digital Marketing & Social Media',
            description: 'Master the essentials of digital marketing, from SEO and content strategy to social media management and analytics.',
            categories: ['Social Media', 'SEO', 'Marketing']
        },
        'advanced-css': {
            title: 'Advanced CSS Card',
            description: 'Test your expertise in modern CSS techniques, including animations, layouts, and responsive design patterns.',
            categories: ['Design', 'CSS', 'HTML']
        }
    };

    // Create and append modal HTML
    const modalHTML = `
        <div class="modal-overlay">
            <div class="quiz-details-modal">
                <div class="modal-header">
                    <h2 class="quiz-title"></h2>
                    <button class="modal-close">&times;</button>
                </div>
                <p class="quiz-description"></p>
                <div class="difficulty-section">
                    <h3>Select Difficulty</h3>
                    <div class="difficulty-options">
                        <button class="difficulty-btn" data-difficulty="easy">Easy</button>
                        <button class="difficulty-btn" data-difficulty="intermediate">Intermediate</button>
                        <button class="difficulty-btn" data-difficulty="hard">Hard</button>
                    </div>
                </div>
                <button class="start-quiz-btn" disabled>Start Quiz</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get modal elements
    const modal = document.querySelector('.quiz-details-modal');
    const overlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.modal-close');
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    const startQuizBtn = document.querySelector('.start-quiz-btn');

    // Add click handlers to all explore buttons
    const exploreButtons = document.querySelectorAll('.card-button');
    
    exploreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Explore button clicked");
            
            const card = this.closest('.card');
            const title = card.querySelector('.card-title').textContent.trim();
            console.log("Quiz title:", title);
            
            // Convert title to key format
            const quizKey = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
            console.log("Quiz key:", quizKey);
            
            if (quizData[quizKey]) {
                showQuizDetails(quizData[quizKey]);
            } else {
                // Fallback if exact match not found
                const closestMatch = findClosestMatch(title);
                if (closestMatch) {
                    showQuizDetails(quizData[closestMatch]);
                } else {
                    console.error("No quiz data found for:", title);
                }
            }
        });
    });

    // Find closest match in case the exact key isn't found
    function findClosestMatch(title) {
        const lowerTitle = title.toLowerCase();
        for (const key in quizData) {
            if (key.includes(lowerTitle) || lowerTitle.includes(key)) {
                return key;
            }
        }
        // If no match found, return the first key as fallback
        return Object.keys(quizData)[0];
    }

    // Handle difficulty selection
    let selectedDifficulty = null;
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            difficultyBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedDifficulty = btn.dataset.difficulty;
            startQuizBtn.disabled = false;
        });
    });

    // Show quiz details
    function showQuizDetails(quiz) {
        console.log("Showing quiz details:", quiz);
        
        modal.querySelector('.quiz-title').textContent = quiz.title;
        modal.querySelector('.quiz-description').textContent = quiz.description;
        
        // Reset difficulty selection
        difficultyBtns.forEach(btn => btn.classList.remove('selected'));
        startQuizBtn.disabled = true;
        selectedDifficulty = null;

        // Show modal and overlay
        overlay.classList.add('show');
        modal.classList.add('show');
    }

    // Close modal function
    function closeModal() {
        console.log("Closing modal");
        modal.classList.remove('show');
        overlay.classList.remove('show');
    }

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // Handle start quiz
    startQuizBtn.addEventListener('click', () => {
        if (selectedDifficulty) {
            // Here you would typically redirect to the quiz page with the selected difficulty
            console.log(`Starting quiz with difficulty: ${selectedDifficulty}`);
            alert(`Starting quiz with difficulty: ${selectedDifficulty}`);
            closeModal();
        }
    });
});