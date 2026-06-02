// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// ===== HERO PARALLAX + LOAD ANIMATION =====
const heroBg = document.getElementById('heroBg');
if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
    window.addEventListener('scroll', () => {
        heroBg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    });
}

// ===== FADE-IN ON SCROLL =====
const fadeEls = document.querySelectorAll(
    '.servizio-card, .settore-card, .stat-item, .strip-text, .page-section'
);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity  = '1';
                entry.target.style.transform = 'translateY(0)';
            }, (i % 4) * 90);
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease, background 0.3s ease';
    fadeObserver.observe(el);
});

// ===== MOBILE MENU =====
const navToggle = document.querySelector('.nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');

if (navbar && navToggle && primaryNavigation) {
    const closeMobileMenu = () => {
        navbar.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Apri menu');
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('menu-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navToggle.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');
    });

    primaryNavigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

