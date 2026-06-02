// ===== SHARED COMPONENTS =====
// Header and footer are centralized here so every page uses the same navigation, logo and footer.

(() => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const siteHeader = document.getElementById('site-header');
    if (siteHeader) {
        siteHeader.innerHTML = `<nav id="navbar">
    <a href="index.html" class="brand" aria-label="BGR Impianti — home">
        <svg class="brand-mark" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="2" width="116" height="116" rx="26" fill="#1A2B4A"></rect>
            <path d="M 38 86 L 64 86 L 64 34 L 92 34" stroke="#16A35A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"></path>
            <circle cx="38" cy="86" r="11" fill="#16A35A"></circle>
            <circle cx="92" cy="34" r="11" fill="#16A35A"></circle>
        </svg>
        <span class="brand-text"><strong>BGR</strong><em>Impianti</em></span>
    </a>
    <button class="nav-toggle" type="button" aria-label="Apri menu" aria-controls="primary-navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <ul class="nav-links" id="primary-navigation">
        <li><a href="index.html" data-page="index.html">Home</a></li>
        <li><a href="servizi.html" data-page="servizi.html">Servizi</a></li>
        <li><a href="settori.html" data-page="settori.html">Settori</a></li>
        <li><a href="chi-siamo.html" data-page="chi-siamo.html">Chi siamo</a></li>
        <li><a href="contatti.html" data-page="contatti.html">Contatti</a></li>
    </ul>
</nav>`;

        siteHeader.querySelectorAll('.nav-links a').forEach(link => {
            const page = link.dataset.page || link.getAttribute('href');
            if (page === currentPage || (currentPage === '' && page === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    const siteFooter = document.getElementById('site-footer');
    if (siteFooter) {
        siteFooter.innerHTML = `<footer>
    <div class="footer-brand">
        <a href="index.html" class="brand" aria-label="BGR Impianti — home">
            <svg class="brand-mark" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="116" height="116" rx="26" fill="#1A2B4A"></rect>
                <path d="M 38 86 L 64 86 L 64 34 L 92 34" stroke="#16A35A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle cx="38" cy="86" r="11" fill="#16A35A"></circle>
                <circle cx="92" cy="34" r="11" fill="#16A35A"></circle>
            </svg>
            <span class="brand-text"><strong>BGR</strong><em>Impianti</em></span>
        </a>
        <p>B.G.R. Impianti di Boiardi Riccardo &amp; C. S.n.c.<br>
        Via Sassi Neri, 5 — 29023 Farini (PC)<br>
        P.IVA 01450360332 · REA PC-163432</p>
    </div>
    <div class="footer-col">
        <h4>Navigazione</h4>
        <ul>
            <li><a href="servizi.html">Servizi</a></li>
            <li><a href="settori.html">Settori</a></li>
            <li><a href="chi-siamo.html">Chi siamo</a></li>
            <li><a href="contatti.html">Contatti</a></li>
        </ul>
    </div>
    <div class="footer-col">
        <h4>Contatti</h4>
        <p>
            Tel: <a href="tel:+393497610523" class="orange">349 761 0523</a><br>
            PEC: bgrsnc@pec.it<br><br>
            Via Sassi Neri, 5<br>
            29023 Farini (PC)
        </p>
    </div>
</footer>
<div class="footer-bottom">
    <span>© 2025 B.G.R. Impianti di Boiardi Riccardo &amp; C. S.n.c. — Tutti i diritti riservati</span>
    <span>Farini (PC) · Italia</span>
</div>`;
    }
})();
