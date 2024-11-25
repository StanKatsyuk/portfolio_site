class Utils {
    constructor() {
        this.setupSmoothScroll();
        this.updateCopyrightYear();
        this.setupScrollProgress();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }

    updateCopyrightYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    setupScrollProgress() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrolled / maxHeight) * 100;
            
            document.documentElement.style.setProperty('--scroll-percent', `${scrollPercent}%`);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new Utils());

