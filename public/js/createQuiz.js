document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const analyticsLink = document.getElementById("analytics-link");
    const quizzesLink = document.getElementById("quizzes-link");
    const createLink = document.getElementById("create-link");

    // Function to remove active class from all links
    if (quizzesLink) {
        quizzesLink.classList.remove("active");
    }
    if (analyticsLink) {
        analyticsLink.classList.remove("active");
    }
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the quiz creation form
    initQuizForm();
    
    // Handle image upload preview
    const quizImageInput = document.getElementById('quiz-image');
    const imagePreview = document.getElementById('image-preview');
    
    quizImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.style.backgroundImage = `url(${event.target.result})`;
                imagePreview.classList.add('has-image');
                imagePreview.textContent = '';
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.style.backgroundImage = '';
            imagePreview.classList.remove('has-image');
            imagePreview.textContent = 'Image preview will appear here';
        }
    });
    
    // Handle form submission
    const quizForm = document.getElementById('create-quiz-form');
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Collect form data
            const quizData = collectFormData();
            
            // In a real application, you would send this data to a server
            console.log('Quiz data:', quizData);
            
            // Show success message
            alert('Quiz created successfully!');
            
            // Redirect to quizzes page (in a real app)
            // window.location.href = 'home.html';
        }
    });
    
    // Handle preview button
    const previewBtn = document.getElementById('preview-btn');
    const previewModal = document.getElementById('preview-modal');
    const closePreviewBtn = document.getElementById('close-preview-btn');
    const closeBtn = document.querySelector('.close-btn');
    
    previewBtn.addEventListener('click', function() {
        if (validateForm()) {
            const quizData = collectFormData();
            renderPreview(quizData);
            previewModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
    
    closePreviewBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === previewModal) {
            closeModal();
        }
    });
    
    function closeModal() {
        previewModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize the quiz form with 10 questions
function initQuizForm() {
    const questionsContainer = document.getElementById('questions-container');
    const questionTemplate = document.getElementById('question-template');
    
    // Create 10 questions
    for (let i = 1; i <= 10; i++) {
        const questionNode = document.importNode(questionTemplate.content, true);
        
        // Update question number
        questionNode.querySelector('.question-number').textContent = i;
        
        // Update IDs and names
        const questionElements = questionNode.querySelectorAll('[id], [name]');
        questionElements.forEach(element => {
            if (element.id) {
                element.id = element.id.replace('{n}', i);
            }
            if (element.name) {
                element.name = element.name.replace('{n}', i);
            }
        });
        
        // Add event listeners for move up/down buttons
        const moveUpBtn = questionNode.querySelector('.move-up-btn');
        const moveDownBtn = questionNode.querySelector('.move-down-btn');
        
        moveUpBtn.addEventListener('click', function() {
            moveQuestion(i, 'up');
        });
        
        moveDownBtn.addEventListener('click', function() {
            moveQuestion(i, 'down');
        });
        
        questionsContainer.appendChild(questionNode);
    }
    
    // Update move buttons visibility
    updateMoveButtonsVisibility();
}

// Move question up or down
function moveQuestion(questionIndex, direction) {
    const questionsContainer = document.getElementById('questions-container');
    const questions = questionsContainer.querySelectorAll('.question-card');
    
    if (direction === 'up' && questionIndex > 1) {
        const currentQuestion = questions[questionIndex - 1];
        const previousQuestion = questions[questionIndex - 2];
        questionsContainer.insertBefore(currentQuestion, previousQuestion);
    } else if (direction === 'down' && questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex - 1];
        const nextQuestion = questions[questionIndex];
        if (nextQuestion.nextElementSibling) {
            questionsContainer.insertBefore(currentQuestion, nextQuestion.nextElementSibling);
        } else {
            questionsContainer.appendChild(currentQuestion);
        }
    }
    
    // Update question numbers
    updateQuestionNumbers();
    
    // Update move buttons visibility
    updateMoveButtonsVisibility();
}

// Update question numbers after reordering
function updateQuestionNumbers() {
    const questions = document.querySelectorAll('.question-card');
    questions.forEach((question, index) => {
        question.querySelector('.question-number').textContent = index + 1;
    });
}

// Update move buttons visibility
function updateMoveButtonsVisibility() {
    const questions = document.querySelectorAll('.question-card');
    
    questions.forEach((question, index) => {
        const moveUpBtn = question.querySelector('.move-up-btn');
        const moveDownBtn = question.querySelector('.move-down-btn');
        
        // First question can't move up
        if (index === 0) {
            moveUpBtn.disabled = true;
            moveUpBtn.style.opacity = 0.3;
        } else {
            moveUpBtn.disabled = false;
            moveUpBtn.style.opacity = 1;
        }
        
        // Last question can't move down
        if (index === questions.length - 1) {
            moveDownBtn.disabled = true;
            moveDownBtn.style.opacity = 0.3;
        } else {
            moveDownBtn.disabled = false;
            moveDownBtn.style.opacity = 1;
        }
    });
}

// Validate the form
function validateForm() {
    const quizTitle = document.getElementById('quiz-title').value.trim();
    const quizCategory = document.getElementById('quiz-category').value;
    
    if (!quizTitle) {
        alert('Please enter a quiz title');
        return false;
    }
    
    if (!quizCategory) {
        alert('Please select a quiz category');
        return false;
    }
    
    // Validate each question
    const questions = document.querySelectorAll('.question-card');
    for (let i = 0; i < questions.length; i++) {
        const questionNumber = i + 1;
        const questionText = document.getElementById(`question-text-${questionNumber}`).value.trim();
        
        if (!questionText) {
            alert(`Please enter text for question ${questionNumber}`);
            return false;
        }
        
        // Check if all options have text
        for (let j = 1; j <= 4; j++) {
            const optionText = document.querySelector(`[name="option-${questionNumber}-${j}"]`).value.trim();
            if (!optionText) {
                alert(`Please enter text for option ${j} in question ${questionNumber}`);
                return false;
            }
        }
        
        // Check if a correct answer is selected
        const correctAnswer = document.querySelector(`input[name="correct-answer-${questionNumber}"]:checked`);
        if (!correctAnswer) {
            alert(`Please select the correct answer for question ${questionNumber}`);
            return false;
        }
    }
    
    return true;
}

// Collect form data
function collectFormData() {
    const quizData = {
        title: document.getElementById('quiz-title').value.trim(),
        description: document.getElementById('quiz-description').value.trim(),
        category: document.getElementById('quiz-category').value,
        timeLimit: document.getElementById('quiz-time').value,
        questions: []
    };
    
    // Collect questions data
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach((card, index) => {
        const questionNumber = index + 1;
        const questionText = document.getElementById(`question-text-${questionNumber}`).value.trim();
        const correctAnswer = document.querySelector(`input[name="correct-answer-${questionNumber}"]:checked`).value;
        
        const options = [];
        for (let i = 1; i <= 4; i++) {
            const optionText = document.querySelector(`[name="option-${questionNumber}-${i}"]`).value.trim();
            options.push({
                text: optionText,
                isCorrect: i.toString() === correctAnswer
            });
        }
        
        quizData.questions.push({
            text: questionText,
            options: options
        });
    });
    
    return quizData;
}

// Render quiz preview
function renderPreview(quizData) {
    const previewContent = document.getElementById('preview-content');
    
    let html = `
        <div class="preview-quiz">
            <h1 class="preview-title">${quizData.title}</h1>
            <p class="preview-description">${quizData.description || 'No description provided.'}</p>
            <div class="preview-meta">
                <span class="preview-category">Category: ${quizData.category}</span>
                <span class="preview-time">Time Limit: ${quizData.timeLimit} minutes</span>
                <span class="preview-questions">Questions: ${quizData.questions.length}</span>
            </div>
            
            <div class="preview-questions">
    `;
    
    quizData.questions.forEach((question, index) => {
        html += `
            <div class="preview-question">
                <h3>Question ${index + 1}</h3>
                <p>${question.text}</p>
                
                <div class="preview-options">
        `;
        
        question.options.forEach((option, optIndex) => {
            html += `
                <div class="preview-option ${option.isCorrect ? 'preview-correct' : ''}">
                    <span class="preview-option-letter">${String.fromCharCode(65 + optIndex)}</span>
                    <span class="preview-option-text">${option.text}</span>
                    ${option.isCorrect ? '<span class="preview-correct-badge">Correct</span>' : ''}
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    previewContent.innerHTML = html;
    
    // Add styles for preview
    const style = document.createElement('style');
    style.textContent = `
        .preview-quiz {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .preview-title {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .preview-description {
            color: var(--text-light);
            margin-bottom: 1.5rem;
        }
        
        .preview-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
            font-size: 0.9rem;
        }
        
        .preview-meta span {
            background-color: var(--secondary-color);
            padding: 0.5rem 1rem;
            border-radius: 20px;
        }
        
        .preview-question {
            background-color: var(--secondary-color);
            border-radius: var(--card-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .preview-question h3 {
            color: var(--primary-dark);
            margin-bottom: 0.75rem;
        }
        
        .preview-options {
            margin-top: 1rem;
        }
        
        .preview-option {
            display: flex;
            align-items: center;
            padding: 0.75rem;
            border-radius: 8px;
            margin-bottom: 0.75rem;
            background-color: white;
            position: relative;
        }
        
        .preview-option-letter {
            width: 30px;
            height: 30px;
            background-color: var(--secondary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            font-weight: bold;
        }
        
        .preview-correct {
            border: 2px solid var(--success-color);
        }
        
        .preview-correct .preview-option-letter {
            background-color: var(--success-color);
            color: white;
        }
        
        .preview-correct-badge {
            position: absolute;
            right: 1rem;
            background-color: var(--success-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
        }
    `;
    
    previewContent.appendChild(style);
}