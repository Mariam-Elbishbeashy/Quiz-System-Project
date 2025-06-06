const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});


// Mobile menu toggle
const initMobileMenu = function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Intersection Observer for persistent scroll animations
    const initScrollAnimations = function() {
        const animateElements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                } else {
                    entry.target.classList.remove('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        animateElements.forEach(element => {
            observer.observe(element);
        });
    };

    // Carousel functionality with auto-scroll
    const initCarousel = function() {
        const carousel = document.querySelector('.carousel');
        const cards = document.querySelectorAll('.card');
        const leftBtn = document.querySelector('.left-btn');
        const rightBtn = document.querySelector('.right-btn');
        let currentIndex = 0;
        const cardWidth = cards[0].offsetWidth + 25; // width + gap

        function updateCarousel() {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }

        rightBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 3) { // Show 3 cards at a time
                currentIndex++;
                updateCarousel();
            }
        });

        leftBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        // Auto-scroll every 5 seconds
        setInterval(() => {
            if (currentIndex < cards.length - 3) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000);
    };
    
    // Smooth scrolling for anchor links
    const initSmoothScrolling = function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all nav links
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to clicked link
                const targetId = this.getAttribute('href');
                const targetLink = document.querySelector(`.nav-links a[href="${targetId}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
                
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    // Highlight active nav link based on scroll position
    const initActiveNavLink = function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to corresponding link
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50% 0px'
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    // Mobile menu toggle
    const initMobileMenu = function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
            
            // Close menu when a link is clicked (for mobile)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            });
        }
    };

    // Initialize all functions
    initScrollAnimations();
    initCarousel();
    initMobileMenu();
    initSmoothScrolling();
    initActiveNavLink();
});