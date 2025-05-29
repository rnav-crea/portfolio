function projects() {
    console.log("Projects button clicked");
    // window.location.href = "Assets/projects.html";
}
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    const menuLinkItems = document.querySelectorAll('.menu-links li a');
    if (menuToggle && menuLinks) {
        menuToggle.addEventListener('click', function () {
            menuLinks.classList.toggle('active');
        });
    }
    menuLinkItems.forEach(link => {
        link.addEventListener('click', function () {
            if (menuLinks.classList.contains('active')) {
                menuLinks.classList.remove('active');
            }
        });
    })

});