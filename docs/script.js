function projects() {
    console.log("Projects button clicked");
    // window.location.href = "Assets/projects.html";
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    if (menuToggle && menuLinks) {
        menuToggle.addEventListener('click', function() {
            menuLinks.classList.toggle('active');
        });
    }
});

