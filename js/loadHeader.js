// Define initializeDateTime function
function initializeDateTime() {
    function updateDateTime() {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        document.getElementById('dateTime').textContent = formattedDateTime;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
}

// Load header dynamically
document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;

                // Add the menu toggle functionality
                const menuToggle = document.querySelector('.menu-toggle');
                const mainNav = document.querySelector('.main-nav');

                if (menuToggle && mainNav) {
                    menuToggle.addEventListener('click', function () {
                        mainNav.classList.toggle('active');
                    });
                }

                // Now that the header is loaded, initialize the date and time script
                initializeDateTime();
            })
            .catch(error => console.error('Error loading header:', error));
    }
});
