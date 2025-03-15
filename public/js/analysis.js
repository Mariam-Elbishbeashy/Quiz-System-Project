document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const analyticsLink = document.getElementById("analytics-link");
    const quizzesLink = document.getElementById("quizzes-link");

    // Function to remove active class from all links
    if (quizzesLink) {
        quizzesLink.classList.remove("active");
    }
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    }

    let performanceChartInstance;
    let categoryChartInstance;

    function createPerformanceChart() {
        const performanceChart = document.getElementById('performanceChart');
        if (performanceChart) {
            if (performanceChartInstance) {
                performanceChartInstance.destroy(); // Destroy existing chart before recreating
            }
            const performanceCtx = performanceChart.getContext('2d');
            performanceChartInstance = new Chart(performanceCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Average Score',
                        data: [65, 78, 72, 85, 82, 88],
                        borderColor: '#64B5F6',
                        backgroundColor: 'rgba(100, 181, 246, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { display: true, color: '#E2E8F0' },
                            ticks: { callback: value => value + '%' }
                        },
                        x: { grid: { display: false } }
                    },
                    elements: { point: { radius: 4, backgroundColor: '#64B5F6' } }
                }
            });
        }
    }

    function createCategoryChart() {
        const categoryChart = document.getElementById('categoryChart');
        if (categoryChart) {
            if (categoryChartInstance) {
                categoryChartInstance.destroy(); // Destroy existing chart before recreating
            }
            const categoryCtx = categoryChart.getContext('2d');
            categoryChartInstance = new Chart(categoryCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Science', 'History', 'Art', 'HTML/CSS', 'Other'],
                    datasets: [{
                        data: [35, 25, 20, 15, 5],
                        backgroundColor: ['#4DD0E1', '#64B5F6', '#F06292', '#B39DDB', '#FFB74D'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { usePointStyle: true, padding: 20, font: { size: 12 } }
                        }
                    },
                    cutout: '75%'
                }
            });
        }
    }

    createPerformanceChart();
    createCategoryChart();

    function observeChartResize(chartContainer, createChartFunction) {
        const resizeObserver = new ResizeObserver(() => {
            createChartFunction(); // Destroy and recreate chart on resize
        });
        resizeObserver.observe(chartContainer);
    }

    const performanceContainer = document.getElementById('performanceChart')?.parentElement;
    const categoryContainer = document.getElementById('categoryChart')?.parentElement;

    if (performanceContainer) observeChartResize(performanceContainer, createPerformanceChart);
    if (categoryContainer) observeChartResize(categoryContainer, createCategoryChart);
});
