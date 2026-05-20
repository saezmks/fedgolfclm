/**
 * shared.js — Header y Footer compartido
 * Federación de Golf de Castilla-La Mancha
 */

(function () {
  "use strict";

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

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
        <li><a href="competiciones.html" data-page="competiciones.html">Calendario</a></li>
        <li><a href="https://rfegolf.es/CompetenciaPaginas/AllCompetitions.aspx">Calendario RFEG</a></li>
        <li><a href="seleccion.html" data-page="seleccion.html">Castilla-La Mancha en Cptos. España</a></li>
      </ul>
    </li>
    <li><a href="escuela.html" data-page="escuela.html">Escuela</a></li>
    <li><a href="noticias.html" data-page="noticias.html">Noticias</a></li>
  </ul>

  <div class="nav-right" style="display: flex; align-items: center; gap: 16px;">
    <div class="nav-actions">
      <a href="https://rfegolf.es/jugar/handicap" target="blank" class="btn-nav btn-nav-outline">Consultar Hándicap</a>
      <div class="dropdown-app nav-app-dropdown">
        <button class="btn-nav btn-nav-gold boton-app-nav">App Torneos ▾</button>
        <div class="dropdown-contenido dropdown-contenido-nav">
          <a href="https://apps.apple.com/es/app/fgclm-torneos/id6444149260" target="_blank" style="display: flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            iOS
          </a>
          <a href="https://play.google.com/store/apps/details?id=es.torneodegolf.fed.app&pli=1" target="_blank" style="display: flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            Android
          </a>
          <a href="https://appgallery.huawei.com/app/C107314035" target="_blank" style="display: flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
            Huawei
          </a>
        </div>
      </div>
    </div>
    
    <button class="nav-hamburger" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer class="footer-minimal">
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-logo">
        <div class="footer-logo-icon">FG</div>
        <div class="footer-logo-name">Federación de Golf<br>de Castilla-La Mancha</div>
      </div>
      <p class="footer-desc">
        Organismo rector del golf en Castilla-La Mancha, comprometido con el desarrollo, la promoción y la regulación del deporte.
      </p>
      <div class="footer-contact">
        <p>Plaza de España 1, Local 8, 19200 Azuqueca de Henares (Gu) | 949-262300 | federacion@fedgolfclm.com</p>
      </div>
    </div>
    <div>
      <div class="footer-col-title">La federación</div>
      <ul class="footer-links">
        <li><a href="presidente.html">Bienvenida del Presidente</a></li>
        <li><a href="comites.html">Comités y Delegaciones</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Legal</div>
      <ul class="footer-links">
        <li><a href="aviso-legal.html">Aviso Legal</a></li>
        <li><a href="privacidad.html">Política de Privacidad</a></li>
        <li><a href="cookies.html">Política de Cookies</a></li>
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
    const existingNav = document.querySelector("nav");
    if (existingNav) {
      existingNav.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML("afterbegin", NAV_HTML);
    }
  }

  function injectFooter() {
    const existingFooter = document.querySelector("footer");
    if (existingFooter) {
      existingFooter.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML("beforeend", FOOTER_HTML);
    }
  }

  function markActiveLink() {
    document.querySelectorAll(".nav-links a[data-page]").forEach((link) => {
      if (link.getAttribute("data-page") === currentPage) {
        link.classList.add("active");
        link.style.color = "var(--gold)";
      }
    });
  }

  function initHamburger() {
    const toggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (!toggle || !navLinks) return;

    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("nav-open");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Mobile dropdown toggle — click to expand/collapse on touch devices
    navLinks.querySelectorAll("li.dropdown > a").forEach((dropdownLink) => {
      dropdownLink.addEventListener("click", (e) => {
        // e.preventDefault(); // If we do this universally, desktop users can't navigate using parent link!
        // Instead, we only prevent default if we want it to be purely a toggle.
        // The user said "haz que todos los despleglables se puedan volver a cerrar".
        e.preventDefault(); 
        
        const parent = dropdownLink.closest("li.dropdown");
        const isVisible = parent.classList.contains("active-mobile") || parent.classList.contains("active-dropdown");
        
        // Close all other open submenus first
        navLinks.querySelectorAll("li.dropdown").forEach((m) => {
          if (m !== parent) {
            m.classList.remove("active-mobile");
            m.classList.remove("active-dropdown");
          }
        });
        
        if (!isVisible) {
          parent.classList.add("active-mobile");
          parent.classList.add("active-dropdown");
        } else {
          parent.classList.remove("active-mobile");
          parent.classList.remove("active-dropdown");
        }
      });
    });

    // Add App Torneos click handler
    const appTorneosBtn = document.querySelector(".boton-app-nav");
    if (appTorneosBtn) {
      appTorneosBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = appTorneosBtn.closest(".nav-app-dropdown");
        if (parent) {
          parent.classList.toggle("active-dropdown");
        }
      });
      // Close app torneos when clicking outside
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-app-dropdown")) {
          document.querySelectorAll(".nav-app-dropdown").forEach(d => d.classList.remove("active-dropdown"));
        }
      });
    }

    // Close menu when clicking a non-dropdown link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        const parent = link.closest("li");
        if (!parent || !parent.classList.contains("dropdown")) {
          navLinks.classList.remove("nav-open");
          toggle.classList.remove("active");
          toggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
          // Reset any open submenus
          navLinks.querySelectorAll("li.dropdown").forEach((m) => {
            m.classList.remove("active-mobile");
          });
        }
      });
    });

    // Close on submenu link click (navigate away)
    navLinks.querySelectorAll(".dropdown-menu a").forEach((subLink) => {
      subLink.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("nav") && navLinks.classList.contains("nav-open")) {
        navLinks.classList.remove("nav-open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        navLinks.querySelectorAll("li.dropdown").forEach((m) => {
          m.classList.remove("active-mobile");
        });
      }
    });
  }

  function initNavScroll() {
    const nav = document.getElementById("mainNav");
    if (!nav) return;
    window.addEventListener(
      "scroll",
      () => {
        nav.style.boxShadow =
          window.scrollY > 10
            ? "0 4px 24px rgba(0,0,0,0.35)"
            : "0 2px 20px rgba(0,0,0,0.25)";
      },
      { passive: true },
    );
  }

  function initScrollReveal() {
    // Elementos que se animan al entrar en pantalla
    const SELECTORS = [
      'section',
      '.page-hero',
      '.section-header',
      '.area-card',
      '.evento-card',
      '.noticia-card',
      '.modalidad-card',
      '.precio-card',
      '.profesor-card',
      '.doc-block',
      '.form-card',
      '.pat-featured-card',
      '.pat-logo',
      '.ranking-card',
      '.club-card',
      'article',
      '.highlight-box',
    ];

    // Selecciona todos los elementos que coincidan y aún no tengan data-reveal
    const candidates = document.querySelectorAll(SELECTORS.join(','));

    candidates.forEach(function (el) {
      if (el.hasAttribute('data-reveal')) return; // ya marcado manualmente

      // Decide si es hijo de un grid → stagger
      const parent = el.parentElement;
      const siblings = parent
        ? Array.from(parent.children).filter(function (c) {
          return c.matches(SELECTORS.join(','));
        })
        : [];
      const idx = siblings.indexOf(el);

      el.setAttribute('data-reveal', '');
      if (idx > 0 && idx <= 5) {
        el.setAttribute('data-reveal-delay', String(idx));
      }
    });

    // IntersectionObserver: añade .revealed cuando el elemento entra en pantalla
    if (!('IntersectionObserver' in window)) {
      // Fallback: muestra todo si el navegador no soporta IO
      document.querySelectorAll('[data-reveal]').forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // se anima solo una vez
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    injectNav();
    injectFooter();
    markActiveLink();
    initHamburger();
    initNavScroll();
    // Scroll reveal se lanza después de que el DOM esté completo
    // (pequeño timeout para que otros scripts como noticias_index.js puedan insertar tarjetas)
    setTimeout(initScrollReveal, 80);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
