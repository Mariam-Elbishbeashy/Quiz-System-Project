 document.addEventListener("DOMContentLoaded", function () {
    const questions = [
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
    ];

    const correctAnswers = [
        "Option A", "Mahatma Gandhi", "Paris", "Jupiter", "100°C",
        "Rabindranath Tagore", "Au", "Pancreas", "Alexander Graham Bell", "8"
    ];

    let currentQuestionIndex = 0;
    let answers = new Array(questions.length).fill(null); // Stores user answers

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
        btn.style.background = "#df57e4";
        btn.style.color = "#fff";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "16px";
        btn.addEventListener("click", function () {
            loadQuestion(i); // Load the selected question
            popup.style.display = "none"; // Hide popup
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
        document.getElementById("submit-popup").style.display = "flex";
        document.getElementById("popup-message").textContent = "Are you sure you want to submit the test?";
        document.getElementById("popup-buttons").style.display = "flex";
        document.getElementById("score-section").style.display = "none";
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

function confirmSubmission() {
    // Calculate the score based on correct answers
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    let correctCount = 0;
    const correctAnswers = [
        "Option A", "Mahatma Gandhi", "Paris", "Jupiter", "100°C",
        "Rabindranath Tagore", "Au", "Pancreas", "Alexander Graham Bell", "8"
    ];
    
    answers.forEach((answer, index) => {
        if (answer.value === correctAnswers[index]) {
            correctCount++;
        }
    });

    // Display the score in the popup
    document.getElementById("score-text").textContent = `Your score: ${correctCount}/10`;
    document.getElementById("popup-message").textContent = "✅ Test submitted successfully!";

    // Hide the initial buttons (Yes/No)
    document.getElementById("popup-buttons").style.display = "none";

    // Show the review/close buttons
    document.getElementById("score-section").style.display = "block";
}

function reviewAnswers() {
    closeSubmitPopup();
    
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
    
    // Add review content
    const questions = [
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
    ];
    
    const correctAnswers = [
        "Option A", "Mahatma Gandhi", "Paris", "Jupiter", "100°C",
        "Rabindranath Tagore", "Au", "Pancreas", "Alexander Graham Bell", "8"
    ];
    
    const answers = [];
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        answers.push(input.value);
    });
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("review-question");
        questionDiv.style.marginBottom = "30px";
        
        const questionText = document.createElement("h3");
        questionText.textContent = `Question ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionText);
        
        q.options.forEach(option => {
            const optionDiv = document.createElement("div");
            optionDiv.style.margin = "5px 0";
            optionDiv.style.padding = "5px";
            
            if (option === correctAnswers[index]) {
                optionDiv.style.color = "green";
                optionDiv.textContent = `${option} (Correct Answer)`;
            } else if (option === answers[index]) {
                optionDiv.style.color = "red";
                optionDiv.textContent = `${option} (Your Answer)`;
            } else {
                optionDiv.textContent = option;
            }
            
            questionDiv.appendChild(optionDiv);
        });
        
        reviewContainer.appendChild(questionDiv);
    });
    
    document.body.appendChild(reviewContainer);
}