document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('mobile');
        this.classList.toggle('is-active');
    });

    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    }

});
