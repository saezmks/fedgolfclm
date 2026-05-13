/**
 * shared.js — Header y Footer compartido
 * Federación de Golf de Castilla-La Mancha
 *
 * Inyecta el nav y el footer en todas las páginas secundarias
 * y gestiona el menú hamburguesa para móvil.
 */

(function () {
  'use strict';

  /* ── Detectar página activa para resaltar enlace ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── HTML del NAV ── */
  const NAV_HTML = `
<nav id="mainNav">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">
      <img src="img/favicon_pagina.png" alt="Logo FGCLM">
    </div>
    <div class="nav-logo-text">
      <span>Federación de Golf</span>
      <span>Castilla-La Mancha</span>
    </div>
  </a>

  <button class="nav-hamburger" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>

  <ul class="nav-links" id="navLinks">
    <li class="dropdown">
      <a href="index.html#sobre">Federación</a>
      <ul class="dropdown-menu">
        <li><a href="#">Bienvenida del Presidente</a></li>
        <li><a href="#">Junta Directiva y Asamblea</a></li>
        <li><a href="#">Comités y Delegaciones</a></li>
        <li><a href="#">Licencia y Hándicap</a></li>
        <li><a href="#">Subvenciones</a></li>
        <li><a href="#">Transparencia</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="#">Reglamentos</a>
      <ul class="dropdown-menu">
        <li><a href="#">Reglas de Golf</a></li>
        <li><a href="#">Circulares RFEG</a></li>
        <li><a href="#">Circulares FGCLM</a></li>
        <li><a href="#">Reglas Locales</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="#">Rankings</a>
      <ul class="dropdown-menu">
        <li><a href="#">Rankings Castilla-La Mancha</a></li>
        <li><a href="#">Circuito 5ª Categoría</a></li>
      </ul>
    </li>
    <li><a href="clubes.html" data-page="clubes.html">Clubes</a></li>
    <li class="dropdown">
      <a href="#">Torneos</a>
      <ul class="dropdown-menu">
        <li><a href="#">Calendario e Inscripciones</a></li>
        <li><a href="#">Calendario RFEG</a></li>
        <li><a href="#">Castilla-La Mancha en Cptos. España</a></li>
      </ul>
    </li>
    <li><a href="escuela.html" data-page="escuela.html">Escuela</a></li>
    <li><a href="noticias.html" data-page="noticias.html">Noticias</a></li>
  </ul>

  <div class="nav-actions">
    <a href="#" class="btn-nav btn-nav-outline">Consultar Hándicap</a>
    <a href="#" class="btn-nav btn-nav-gold">Área Federados</a>
  </div>
</nav>`;

  /* ── HTML del FOOTER ── */
  const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-logo">
        <div class="footer-logo-icon">FG</div>
        <div class="footer-logo-name">Federación de Golf<br>de Castilla-La Mancha</div>
      </div>
      <p class="footer-desc">
        Organismo rector del golf en Castilla-La Mancha, comprometido con el desarrollo, la promoción y la regulación del deporte del golf en las cinco provincias de la región.
      </p>
      <div class="footer-contact">
        <p>Plaza de España 1, Primera Planta, Local 8</p>
        <p>19200 Azuqueca de Henares (Guadalajara)</p>
        <p>Teléfono: 949-262300</p>
        <p>federacion@fedgolfclm.com</p>
      </div>
    </div>

    <div>
      <div class="footer-col-title">La federación</div>
      <ul class="footer-links">
        <li><a href="#">Bienvenida del Presidente</a></li>
        <li><a href="#">Junta Directiva</a></li>
        <li><a href="#">Comités y Delegaciones</a></li>
        <li><a href="#">Transparencia</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>

    <div>
      <div class="footer-col-title">Servicios</div>
      <ul class="footer-links">
        <li><a href="#">Licencia y Hándicap</a></li>
        <li><a href="#">Trámites y Cuotas</a></li>
        <li><a href="#">Seguro de Accidente</a></li>
        <li><a href="#">Subvenciones</a></li>
        <li><a href="#">APP FGCLM</a></li>
      </ul>
    </div>

    <div>
      <div class="footer-col-title">Legal</div>
      <ul class="footer-links">
        <li><a href="#">Aviso Legal</a></li>
        <li><a href="#">Política de Privacidad</a></li>
        <li><a href="#">Política de Cookies</a></li>
        <li><a href="#">Reglas de Golf</a></li>
        <li><a href="#">Circulares FGCLM</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2026 Federación de Golf de Castilla-La Mancha · Todos los derechos reservados</p>
    <div class="footer-social">
      <a href="https://www.facebook.com/fedgolfclm/" target="_blank" rel="noopener" title="Facebook">f</a>
      <a href="https://www.instagram.com/fedgolfclm" target="_blank" rel="noopener" title="Instagram">ig</a>
    </div>
  </div>
</footer>`;

  /* ── Inyectar NAV al inicio del body ── */
  function injectNav() {
    const existingNav = document.querySelector('nav');
    if (existingNav) {
      existingNav.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
  }

  /* ── Inyectar FOOTER al final del body ── */
  function injectFooter() {
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
      existingFooter.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
  }

  /* ── Marcar enlace activo ── */
  function markActiveLink() {
    document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
        link.style.color = 'var(--gold)';
      }
    });
  }

  /* ── Menú hamburguesa ── */
  function initHamburger() {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar al hacer click en enlace (no dropdown)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        const parent = link.closest('li');
        // Si no es dropdown, cerramos
        if (!parent || !parent.classList.contains('dropdown')) {
          navLinks.classList.remove('nav-open');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Sombra del nav al hacer scroll ── */
  function initNavScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10
        ? '0 4px 24px rgba(0,0,0,0.35)'
        : '0 2px 20px rgba(0,0,0,0.25)';
    }, { passive: true });
  }

  /* ── Inicializar todo ── */
  function init() {
    injectNav();
    injectFooter();
    markActiveLink();
    initHamburger();
    initNavScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
