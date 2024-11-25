class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.initTheme();
        this.setupEventListeners();
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setTheme(savedTheme === 'dark');
        } else {
            this.setTheme(this.prefersDark.matches);
        }
    }

    setTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        this.themeIcon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.animateThemeTransition();
    }

    animateThemeTransition() {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        requestAnimationFrame(() => {
            document.body.style.transition = '';
        });
    }

    setupEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'light';
            this.setTheme(isDark);
        });

        this.prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new ThemeManager());

