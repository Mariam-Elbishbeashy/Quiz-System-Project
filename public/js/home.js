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
    // Update the quizData object in home.js to include all quizzes and difficulties
    const quizData = {
        'mind-bending-riddle': {
            title: 'Mind-Bending Riddle',
            description: 'Challenge your cognitive abilities with logic puzzles and riddles.',
            categories: ['Puzzles', 'Logic'],
            difficulties: {
                easy: 'mind-bending-easy',
                intermediate: 'mind-bending-intermediate',
                hard: 'mind-bending-hard'
            }
        },
        'science-innovation': {
            title: 'Science & Innovation',
            description: 'Explore scientific discoveries and technological advancements.',
            categories: ['Science', 'Technology'],
            difficulties: {
                easy: 'science-easy',
                intermediate: 'science-intermediate',
                hard: 'science-hard'
            }
        },
        'general-knowledge': {
            title: 'General Knowledge',
            description: 'Test your knowledge across multiple disciplines.',
            categories: ['Science', 'Knowledge', 'History'],
            difficulties: {
                easy: 'general-knowledge-easy',
                intermediate: 'general-knowledge-intermediate',
                hard: 'general-knowledge-hard'
            }
        },
        'business-strategies': {
            title: 'Business Strategies',
            description: 'Learn about market dynamics, financial concepts, and strategies.',
            categories: ['Business', 'Markets'],
            difficulties: {
                easy: 'business-easy',
                intermediate: 'business-intermediate',
                hard: 'business-hard'
            }
        },
        'digital-marketing-social-media': {
            title: 'Digital Marketing & Social Media',
            description: 'Master digital marketing strategies, from SEO to social media.',
            categories: ['Marketing', 'Social Media'],
            difficulties: {
                easy: 'marketing-easy',
                intermediate: 'marketing-intermediate',
                hard: 'marketing-hard'
            }
        },
        'advanced-css-card': {
            title: 'Advanced CSS Card',
            description: 'Test your expertise in CSS techniques, animations, and layouts.',
            categories: ['Design', 'CSS'],
            difficulties: {
                easy: 'css-easy',
                intermediate: 'css-intermediate',
                hard: 'css-hard'
            }
        }
    };

    // Create and append modal HTML with improved accessibility
    const modalHTML = `
        <div class="modal-overlay" aria-hidden="true">
            <div class="quiz-details-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div class="modal-header">
                    <h2 id="modal-title" class="quiz-title"></h2>
                    <button class="modal-close" aria-label="Close modal">&times;</button>
                </div>
                <p class="quiz-description"></p>
                <div class="difficulty-section">
                    <h3>Select Difficulty</h3>
                    <div class="difficulty-options" role="radiogroup" aria-labelledby="difficulty-label">
                        <button class="difficulty-btn" data-difficulty="easy" role="radio" aria-checked="false">
                            <span class="difficulty-icon">🌱</span>
                            <span class="difficulty-text">Easy</span>
                        </button>
                        <button class="difficulty-btn" data-difficulty="intermediate" role="radio" aria-checked="false">
                            <span class="difficulty-icon">🏋️</span>
                            <span class="difficulty-text">Intermediate</span>
                        </button>
                        <button class="difficulty-btn" data-difficulty="hard" role="radio" aria-checked="false">
                            <span class="difficulty-icon">🚀</span>
                            <span class="difficulty-text">Hard</span>
                        </button>
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
    let lastFocusedElement = null;

    // Add click handlers to all explore buttons
    const exploreButtons = document.querySelectorAll('.card-button');
    
    exploreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.card');
            const title = card.querySelector('.card-title').textContent.trim();

            // Store the last focused element for better keyboard navigation
            lastFocusedElement = this;

            // Convert title to key format
            const quizKey = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

            if (quizData[quizKey]) {
                selectedQuiz = quizKey;
                showQuizDetails(quizData[quizKey]);
            }
        });
    });

    // Handle difficulty selection with improved accessibility
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectDifficulty(btn);
        });

        // Add keyboard support
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectDifficulty(btn);
            }
        });
    });

    function selectDifficulty(btn) {
        difficultyBtns.forEach(b => {
            b.classList.remove('selected');
            b.setAttribute('aria-checked', 'false');
        });
        
        btn.classList.add('selected');
        btn.setAttribute('aria-checked', 'true');
        selectedDifficulty = btn.dataset.difficulty;
        startQuizBtn.disabled = false;
        
        // Focus the start button for better mobile flow
        startQuizBtn.focus();
    }

    // Show quiz details with accessibility improvements
    function showQuizDetails(quiz) {
        modal.querySelector('.quiz-title').textContent = quiz.title;
        modal.querySelector('.quiz-description').textContent = quiz.description;

        // Reset difficulty selection
        difficultyBtns.forEach(btn => {
            btn.classList.remove('selected');
            btn.setAttribute('aria-checked', 'false');
        });
        startQuizBtn.disabled = true;
        selectedDifficulty = null;

        // Show modal and overlay
        overlay.classList.add('show');
        overlay.setAttribute('aria-hidden', 'false');
        modal.classList.add('show');
        
        // Focus the first interactive element for screen readers
        setTimeout(() => {
            difficultyBtns[0].focus();
        }, 100);
        
        // Trap focus within modal
        trapFocus(modal);
    }

    // Close modal function with accessibility improvements
    function closeModal() {
        modal.classList.remove('show');
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
        
        // Return focus to the element that opened the modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // Handle keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') {
                closeModal();
            }
            
            // Tab key navigation trap
            if (e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });

    // Handle start quiz with mobile considerations
    startQuizBtn.addEventListener('click', () => {
        if (selectedDifficulty) {
            const quizId = quizData[selectedQuiz].difficulties[selectedDifficulty];
            window.location.href = `questions.html?quiz=${quizId}`;
        }
    });

    // Function to trap focus within modal
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
});

// In your showQuizDetails function, add mobile detection if needed
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
    
    // Add mobile-specific class if needed
    if (window.innerWidth <= 768) {
        modal.classList.add('mobile-view');
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    if (modal.classList.contains('show')) {
        if (window.innerWidth <= 768) {
            modal.classList.add('mobile-view');
        } else {
            modal.classList.remove('mobile-view');
        }
    }
});

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('quiz-search');
    const cards = document.querySelectorAll('.card');

    function performSearch() {
        const searchTerm = searchInput.value.trim();

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent;
            const description = card.querySelector('.card-description').textContent;
            const tags = Array.from(card.querySelectorAll('.card-tag')).map(tag => tag.textContent);

            let isMatch = false;

            if (searchTerm) {
                try {
                    const regex = new RegExp(searchTerm, 'i');
                    isMatch = regex.test(title) || 
                             regex.test(description) || 
                             tags.some(tag => regex.test(tag));
                } catch (e) {
                    // If regex is invalid, show no matches
                    isMatch = false;
                }
            } else {
                // Empty search shows all
                isMatch = true;
            }

            card.style.display = isMatch ? 'block' : 'none';
        });
    }

    // Search as you type with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 300);
    });

    // Initial search to show all quizzes
    performSearch();
}

// Call this function in your DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    setupSearch();
    // ... rest of your existing code
});