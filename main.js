document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    const loaderLine = document.querySelector('.loader-line');

    // Simulate loading line
    setTimeout(() => {
        if (loaderLine) loaderLine.style.width = '100px';
    }, 100);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
            document.body.style.overflow = 'auto';
        }, 1000);
    });

    // 2. Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 4. Smooth Scroll
    document.querySelectorAll('nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 5. Hero Parallax Removed (Fixed movement)
    /* 
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
    */

    // 6. Magnetic Buttons & Interactive Elements
    const magnetics = document.querySelectorAll('.btn, .project-card');
    magnetics.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            if (el.classList.contains('btn')) {
                el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            } else if (el.classList.contains('project-card')) {
                const img = el.querySelector('.project-img');
                img.style.transform = `scale(1.1) translate(${x * 0.05}px, ${y * 0.05}px)`;
            }
        });

        el.addEventListener('mouseleave', () => {
            if (el.classList.contains('btn')) {
                el.style.transform = `translate(0, 0)`;
            } else if (el.classList.contains('project-card')) {
                const img = el.querySelector('.project-img');
                img.style.transform = 'scale(1) translate(0, 0)';
            }
        });
    });
    // 7. Expertise Background Switcher
    const expertiseItems = document.querySelectorAll('.expertise-item');
    const dynamicBg = document.getElementById('dynamic-bg');

    expertiseItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const newBg = item.getAttribute('data-bg');
            if (newBg && dynamicBg) {
                dynamicBg.style.backgroundImage = `url('${newBg}')`;
                dynamicBg.style.opacity = '0.7'; // Stronger visibility on hover
                dynamicBg.style.filter = 'grayscale(0) brightness(0.9)'; // Full color on hover
            }
        });

        item.addEventListener('mouseleave', () => {
            if (dynamicBg) {
                dynamicBg.style.opacity = '0.25'; // Base opacity
                dynamicBg.style.filter = 'grayscale(0.4) brightness(0.7) contrast(1.1)'; // Return to base state
            }
        });
    });
});
