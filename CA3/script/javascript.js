window.addEventListener('scroll', function() {
    var scrollIcon = document.getElementById('scroll-icon');
    if (window.scrollY === 0) {
        scrollIcon.style.opacity = '1'; // Show the scroll icon when at the top of the page
    } else {
        scrollIcon.style.opacity = '0'; // Hide the scroll icon when scrolled down
    }
});