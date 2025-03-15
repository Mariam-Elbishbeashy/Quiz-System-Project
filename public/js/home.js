document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const analyticsLink = document.getElementById("analytics-link");
    const quizzesLink = document.getElementById("quizzes-link");

    // Function to remove active class from all links
    analyticsLink.classList.remove("active");
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});
