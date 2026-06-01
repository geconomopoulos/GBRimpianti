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

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});
