document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // --- Theme Toggle Logic ---
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.setAttribute('aria-label', 'Toggle Dark Mode');
    themeBtn.innerHTML = '🌙'; // Default icon for Light Mode (action goes to Dark)
    document.body.appendChild(themeBtn);

    // Check localStorage or System Preference
    const currentTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeBtn.innerHTML = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeBtn.innerHTML = '☀️';
        }
    });

    // --- Smooth Scrolling (Lenis) ---
    // Dynamically load Lenis script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/lenis@1.1.18/dist/lenis.min.js";
    script.onload = () => {
        // Initialize Lenis once script is loaded
        const lenis = new Lenis({
            autoRaf: true,
        });
    };
    document.head.appendChild(script);
});
