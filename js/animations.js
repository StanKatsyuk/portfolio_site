class AnimationManager {
    constructor() {
        this.setupIntersectionObserver();
        this.setupSpecialtyAnimations();
        this.setupSectionAnimations();
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
    }

    setupSpecialtyAnimations() {
        document.querySelectorAll('.specialty-item').forEach((item, index) => {
            item.style.setProperty('--item-index', index);
            
            this.observer.observe(item);

            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
            });
        });
    }

    setupSectionAnimations() {
        document.querySelectorAll('section').forEach(section => {
            this.observer.observe(section);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new AnimationManager());

