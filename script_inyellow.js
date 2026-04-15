document.addEventListener('DOMContentLoaded', () => {

    // Burger Menu Logic (Fullscreen overlay)
    const burgerContainer = document.querySelector('.burger-container');
    const menuFullscreen = document.querySelector('.menu-fullscreen');
    
    burgerContainer.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
        menuFullscreen.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if(document.body.classList.contains('menu-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a link inside it
    const menuLinks = document.querySelectorAll('.menu-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
            menuFullscreen.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header sticky scroll effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});
