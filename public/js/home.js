document.addEventListener("DOMContentLoaded", function () {
    // Existing navigation code
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const analyticsLink = document.getElementById("analytics-link");
    const quizzesLink = document.getElementById("quizzes-link");
    const createLink = document.getElementById("create-link");

    if (analyticsLink) analyticsLink.classList.remove("active");
    if (createLink) createLink.classList.remove("active");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Quiz details modal functionality
    const quizData = {
        'mind-bending-riddle': {
            title: 'Mind-Bending Riddle',
            description: 'Challenge your cognitive abilities with logic puzzles and riddles.',
            categories: ['Puzzles', 'Logic']
        },
        'science-innovation': {
            title: 'Science & Innovation',
            description: 'Explore scientific discoveries and technological advancements.',
            categories: ['Science', 'Technology']
        },
        'general-knowledge': {
            title: 'General Knowledge',
            description: 'Test your knowledge across multiple disciplines.',
            categories: ['Science', 'Knowledge', 'History']
        },
        'business-strategies': {
            title: 'Business Strategies',
            description: 'Learn about market dynamics, financial concepts, and strategies.',
            categories: ['Business', 'Markets']
        },
        'digital-marketing': {
            title: 'Digital Marketing & Social Media',
            description: 'Master digital marketing strategies, from SEO to social media.',
            categories: ['Marketing', 'Social Media']
        },
        'advanced-css': {
            title: 'Advanced CSS Card',
            description: 'Test your expertise in CSS techniques, animations, and layouts.',
            categories: ['Design', 'CSS']
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

    let selectedQuiz = null;
    let selectedDifficulty = null;

    // Add click handlers to all explore buttons
    const exploreButtons = document.querySelectorAll('.card-button');
    
    exploreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.card');
            const title = card.querySelector('.card-title').textContent.trim();

            // Convert title to key format
            const quizKey = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

            if (quizData[quizKey]) {
                selectedQuiz = quizKey;
                showQuizDetails(quizData[quizKey]);
            }
        });
    });

    // Handle difficulty selection
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
            console.log(`Starting quiz: ${selectedQuiz} with difficulty: ${selectedDifficulty}`);

            // Redirect if it's General Knowledge and Easy difficulty
            if (selectedQuiz === 'general-knowledge' && selectedDifficulty === 'easy') {
                window.location.href = "questions.html";
            } else {
                alert(`Starting ${selectedQuiz} quiz with difficulty: ${selectedDifficulty}`);
                closeModal();
            }
        }
    });
});
