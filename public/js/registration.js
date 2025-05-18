/* public\js\registration.js */

// Toggle forms
function showForm(formId) {
    ['signupForm', 'loginForm', 'forgotPasswordForm'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';
}

// Navigation between forms
document.getElementById('showLoginForm').addEventListener('click', e => {
    e.preventDefault();
    showForm('loginForm');
});
document.getElementById('showSignupForm').addEventListener('click', e => {
    e.preventDefault();
    showForm('signupForm');
});
document.getElementById('showForgotPasswordForm').addEventListener('click', e => {
    e.preventDefault();
    showForm('forgotPasswordForm');
});
document.getElementById('showLoginFromForgot').addEventListener('click', e => {
    e.preventDefault();
    showForm('loginForm');
});

// Forgot Password popup
document.querySelector("#forgotPasswordForm form").addEventListener("submit", function (e) {
    e.preventDefault();
    const popup = document.getElementById("emailSentPopup");
    popup.style.display = "block";
    setTimeout(() => popup.style.display = "none", 3000);
});

// Show correct form on load
document.addEventListener("DOMContentLoaded", function () {
    showForm(window.location.hash === "#login" ? "loginForm" : "signupForm");
});

function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains('input-error')) {
        error = document.createElement('div');
        error.className = 'input-error text-danger mt-1';
        input.parentNode.appendChild(error);
    }
    error.textContent = message;
    input.classList.add('is-invalid');
}
function clearError(input) {
    let error = input.nextElementSibling;
    if (error && error.classList.contains('input-error')) error.remove();
    input.classList.remove('is-invalid');
}

function validateInput(input, type) {
    const value = input.value.trim();
    if (value === '') {
        showError(input, 'This field is required.');
        return false;
    }
    if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(input, 'Format: name@example.com');
            return false;
        }
    }
    if (type === 'password' && value.length < 6) {
        showError(input, 'Password must be at least 6 characters.');
        return false;
    }
    if (type === 'confirmPassword') {
        const password = document.getElementById("passwordInputSignup").value.trim();
        if (value !== password) {
            showError(input, 'Passwords do not match.');
            return false;
        }
    }
    clearError(input);
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    // Signup fields 
    const signupFields = [
        { id: "nameInput", type: "text" },
        { id: "emailInputSignup", type: "email" },
        { id: "passwordInputSignup", type: "password" },
        { id: "confirmPasswordInput", type: "confirmPassword" }
    ];
    const signupCheckbox = document.getElementById("termsCheckbox");

    // Login fields
    const loginFields = [
        { id: "emailInputLogin", type: "email" },
        { id: "passwordInputLogin", type: "password" }
    ];

    [...signupFields, ...loginFields].forEach(({ id, type }) => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener("focus", () => validateInput(input, type));
            input.addEventListener("input", () => validateInput(input, type));
        }
    });

    if (signupCheckbox) {
        signupCheckbox.addEventListener("change", () => {
            if (signupCheckbox.checked) signupCheckbox.classList.remove("is-invalid-checkbox");
        });
    }

    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let allValid = true;

            signupFields.forEach(({ id, type }) => {
                const input = document.getElementById(id);
                if (!validateInput(input, type)) allValid = false;
            });

            if (!signupCheckbox.checked) {
                signupCheckbox.classList.add("is-invalid-checkbox");
                allValid = false;
            }

            if (allValid) {
                window.location.href = "home.html";
            }
        });
    }

    const loginForm = document.getElementById("loginFormElement");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let allValid = true;

            loginFields.forEach(({ id, type }) => {
                const input = document.getElementById(id);
                if (!validateInput(input, type)) allValid = false;
            });

            if (!allValid) return;

            const email = document.getElementById("emailInputLogin").value.trim();
            const password = document.getElementById("passwordInputLogin").value.trim();

            if (email === "admin@gmail.com" && password === "admin_123") {
                window.location.href = "admin.html";
            } else {
                window.location.href = "home.html";
            }
        });
    }
});
