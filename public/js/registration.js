/* public\js\registration.js */

// Show Login Form when "Login here" is clicked
document.getElementById('showLoginForm').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Show Signup Form when "Register" is clicked
document.getElementById('showSignupForm').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

// Show Forgot Password Form when "Forgot Password?" is clicked
document.getElementById('showForgotPasswordForm').addEventListener('click', function (e) {
    e.preventDefault();
    showForm('forgotPasswordForm');
});

// Show Login Form from Forgot Password screen
document.getElementById('showLoginFromForgot').addEventListener('click', function (e) {
    e.preventDefault();
    showForm('loginForm');
});

// Function to toggle between forms
function showForm(formId) {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

// Show email sent popup for password reset
document.querySelector("#forgotPasswordForm form").addEventListener("submit", function (e) {
    e.preventDefault();

    let popup = document.getElementById("emailSentPopup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
});

/* Link index.html buttons with registration.html forms */
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    function showForm(formToShow) {
        signupForm.style.display = "none";
        loginForm.style.display = "none";
        forgotPasswordForm.style.display = "none";
        formToShow.style.display = "block";
    }

    if (window.location.hash === "#login") {
        showForm(loginForm);
    } else {
        showForm(signupForm); 
    }
});

/* Admin Login */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginFormElement").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var email = document.getElementById("emailInputLogin").value;
        var password = document.getElementById("passwordInputLogin").value;

        if (email === "admin@gmail.com" && password === "admin_123") {
            window.location.href = "/public/admin.html"; 
        }
        else
        {
            window.location.href = "/public/home.html";

        }
    });
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "/public/home.html";
});
