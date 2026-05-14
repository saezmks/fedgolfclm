/**
 * shared.js — Header y Footer compartido
 * Federación de Golf de Castilla-La Mancha
 */

(function () {
  'use strict';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

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
      <a href="presidente.html">Federación</a>
      <ul class="dropdown-menu">
        <li><a href="presidente.html" data-page="presidente.html">Bienvenida del Presidente</a></li>
        <li><a href="junta-directiva.html" data-page="junta-directiva.html">Junta Directiva y Asamblea</a></li>
        <li><a href="comites.html" data-page="comites.html">Comités y Delegaciones</a></li>
        <li><a href="licencia.html" data-page="licencia.html">Licencia y Hándicap</a></li>
        <li><a href="subvenciones.html" data-page="subvenciones.html">Subvenciones</a></li>
        <li><a href="transparencia.html" data-page="transparencia.html">Transparencia</a></li>
        <li><a href="contacto.html" data-page="contacto.html">Contacto</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="reglas-golf.html">Reglamentos</a>
      <ul class="dropdown-menu">
        <li><a href="reglas-golf.html" data-page="reglas-golf.html">Reglas de Golf</a></li>
        <li><a href="circulares-rfeg.html" data-page="circulares-rfeg.html">Circulares RFEG</a></li>
        <li><a href="circulares-fgclm.html" data-page="circulares-fgclm.html">Circulares FGCLM</a></li>
        <li><a href="reglas-locales.html" data-page="reglas-locales.html">Reglas Locales</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="rankings.html">Rankings</a>
      <ul class="dropdown-menu">
        <li><a href="rankings.html" data-page="rankings.html">Rankings Castilla-La Mancha</a></li>
        <li><a href="circuito-5categoria.html" data-page="circuito-5categoria.html">Circuito 5ª Categoría</a></li>
      </ul>
    </li>
    <li><a href="clubes.html" data-page="clubes.html">Clubes</a></li>
    <li class="dropdown">
      <a href="competiciones.html">Torneos</a>
      <ul class="dropdown-menu">
        <li><a href="competiciones.html" data-page="competiciones.html">Calendario e Inscripciones</a></li>
        <li><a href="calendario-rfeg.html" data-page="calendario-rfeg.html">Calendario RFEG</a></li>
        <li><a href="seleccion.html" data-page="seleccion.html">Castilla-La Mancha en Cptos. España</a></li>
      </ul>
    </li>
    <li><a href="escuela.html" data-page="escuela.html">Escuela</a></li>
    <li><a href="noticias.html" data-page="noticias.html">Noticias</a></li>
  </ul>

  <div class="nav-actions">
    <a href="https://rfegolf.es/PaginasServicios/Servicios.aspx" class="btn-nav btn-nav-outline">Consultar Hándicap</a>
    <a href="licencia.html" class="btn-nav btn-nav-gold">Área Federados</a>
  </div>
</nav>`;

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
        <li><a href="presidente.html">Bienvenida del Presidente</a></li>
        <li><a href="junta-directiva.html">Junta Directiva</a></li>
        <li><a href="comites.html">Comités y Delegaciones</a></li>
        <li><a href="transparencia.html">Transparencia</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Servicios</div>
      <ul class="footer-links">
        <li><a href="licencia.html">Licencia y Hándicap</a></li>
        <li><a href="licencia.html">Trámites y Cuotas</a></li>
        <li><a href="licencia.html">Seguro de Accidente</a></li>
        <li><a href="subvenciones.html">Subvenciones</a></li>
        <li><a href="competiciones.html">APP Torneos FGCLM</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Legal</div>
      <ul class="footer-links">
        <li><a href="aviso-legal.html">Aviso Legal</a></li>
        <li><a href="privacidad.html">Política de Privacidad</a></li>
        <li><a href="cookies.html">Política de Cookies</a></li>
        <li><a href="reglamentos.html">Reglas de Golf</a></li>
        <li><a href="circulares-fgclm.html">Circulares FGCLM</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Federación de Golf de Castilla-La Mancha · Todos los derechos reservados</p>
    <div class="footer-social">
      <a href="https://www.facebook.com/fedgolfclm/" target="_blank" rel="noopener" title="Facebook"><img src="img/facebook_logo.png" alt="Facebook"></a>
      <a href="https://www.instagram.com/fedgolfclm" target="_blank" rel="noopener" title="Instagram"><img src="img/instagram_logo.png" alt="Instagram"></a>
    </div>
  </div>
</footer>`;

  function injectNav() {
    const existingNav = document.querySelector('nav');
    if (existingNav) {
      existingNav.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
  }

  function injectFooter() {
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
      existingFooter.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
  }

  function markActiveLink() {
    document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
        link.style.color = 'var(--gold)';
      }
    });
  }

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

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        const parent = link.closest('li');
        if (!parent || !parent.classList.contains('dropdown')) {
          navLinks.classList.remove('nav-open');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  function initNavScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10
        ? '0 4px 24px rgba(0,0,0,0.35)'
        : '0 2px 20px rgba(0,0,0,0.25)';
    }, { passive: true });
  }

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
