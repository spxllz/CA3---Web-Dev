// Scrollwheel JS
window.addEventListener('scroll', function() {
    var scrollIcon = document.getElementById('scroll-icon');
    if (window.scrollY === 0) {
        scrollIcon.style.opacity = '1'; // Show the scroll icon when at the top of the page
    } else {
        scrollIcon.style.opacity = '0'; // Hide the scroll icon when scrolled down
    }
});

// Rotate of the dropdown icon JS
document.addEventListener('DOMContentLoaded', function () {
    var dropdownMenuButton = document.getElementById('dropdownMenuButton');
    var dropdownIcon = document.getElementById('dropdownIcon');

    dropdownMenuButton.addEventListener('click', function () {
        // Toggle the rotation of the dropdown icon
        dropdownIcon.classList.toggle('rotate-icon');
    });
});