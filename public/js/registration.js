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
