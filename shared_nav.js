/**
 * shared.js — Header, Footer y Buscador compartido
 * Federación de Golf de Castilla-La Mancha
 */

(function () {
  'use strict';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // ── ÍNDICE DE PÁGINAS DEL SITIO ──────────────────────────────
  const SITE_INDEX = [
    { titulo: 'Inicio', url: 'index.html', desc: 'Página principal de la Federación de Golf de Castilla-La Mancha', tags: 'inicio home principal federacion' },
    { titulo: 'Bienvenida del Presidente', url: 'presidente.html', desc: 'Mensaje de bienvenida del presidente de la FGCLM', tags: 'presidente bienvenida directiva' },
    { titulo: 'Junta Directiva y Asamblea', url: 'junta.html', desc: 'Junta directiva, asamblea general y órganos de gobierno', tags: 'junta directiva asamblea gobierno organos' },
    { titulo: 'Comités y Delegaciones', url: 'comites.html', desc: 'Comités técnicos y delegaciones provinciales', tags: 'comites delegaciones provinciales albacete cuenca ciudad real guadalajara toledo' },
    { titulo: 'Licencia y Hándicap', url: 'licencia.html', desc: 'Tramitación de licencias federativas y consulta de hándicap', tags: 'licencia handicap federado tramites cuota seguro' },
    { titulo: 'Subvenciones', url: 'subvenciones.html', desc: 'Información sobre subvenciones y ayudas de la federación', tags: 'subvenciones ayudas becas financiacion' },
    { titulo: 'Transparencia', url: 'transparencia.html', desc: 'Portal de transparencia y documentación oficial', tags: 'transparencia documentos cuentas presupuesto estatutos' },
    { titulo: 'Contacto', url: 'contacto.html', desc: 'Datos de contacto y formulario de la federación', tags: 'contacto telefono email direccion azuqueca guadalajara' },
    { titulo: 'Reglas de Golf', url: 'reglas-golf.html', desc: 'Reglamento oficial de golf y reglas del juego', tags: 'reglas golf reglamento normas juego rfeg' },
    { titulo: 'Circulares RFEG y FGCLM', url: 'circulares.html', desc: 'Circulares federativas, reglas locales y comunicados oficiales', tags: 'circulares rfeg fgclm reglas locales comunicados' },
    { titulo: 'Rankings Castilla-La Mancha', url: 'rankings.html', desc: 'Rankings autonómicos masculino, femenino, senior y juvenil', tags: 'rankings clasificacion masculino femenino senior juvenil absoluto' },
    { titulo: 'Circuito 5ª Categoría', url: 'circuito-5cat.html', desc: 'Circuito y ranking de jugadores de quinta categoría', tags: 'circuito quinta 5 categoria ranking local' },
    { titulo: 'Clubes de Golf', url: 'clubes.html', desc: 'Directorio de clubes y campos de golf de Castilla-La Mancha', tags: 'clubes campos golf directorio albacete cuenca ciudad real guadalajara toledo' },
    { titulo: 'Calendario', url: 'inscripcion.html', desc: 'Calendario de torneos e inscripciones online', tags: 'torneos calendario inscripciones competiciones app' },
    { titulo: 'Escuela de Golf', url: 'escuela.html', desc: 'Escuela de golf y programas de iniciación', tags: 'escuela iniciacion aprendizaje clases jovenes benjamines' },
    { titulo: 'Noticias', url: 'noticias.html', desc: 'Últimas noticias y novedades de la federación', tags: 'noticias actualidad campeonatos resultados' },
    { titulo: 'Aviso Legal', url: 'aviso-legal.html', desc: 'Aviso legal y condiciones de uso del sitio web', tags: 'aviso legal condiciones uso terminos' },
    { titulo: 'Política de Privacidad', url: 'privacidad.html', desc: 'Política de privacidad y protección de datos', tags: 'privacidad datos personales rgpd lopd' },
    { titulo: 'Política de Cookies', url: 'cookies.html', desc: 'Información sobre el uso de cookies en el sitio web', tags: 'cookies politica navegacion' },
  ];

  // ── NAV HTML ─────────────────────────────────────────────────
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
        <li><a href="junta.html" data-page="junta.html">Junta Directiva y Asamblea</a></li>
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
        <li><a href="circulares.html#tab-rfeg" data-page="circulares.html">Circulares RFEG</a></li>
        <li><a href="circulares.html#tab-fgclm" data-page="circulares.html">Circulares FGCLM</a></li>
        <li><a href="circulares.html#tab-locales" data-page="circulares.html">Reglas Locales</a></li>
      </ul>
    </li>
    <li><a href="clubes.html" data-page="clubes.html">Clubes</a></li>
    <li class="dropdown">
      <a href="inscripcion.html">Torneos</a>
      <ul class="dropdown-menu">
        <li><a href="inscripcion.html" data-page="inscripcion.html">Calendario</a></li>
        <li><a href="https://rfegolf.es/NoticiasFederacionesPaginas/FederationMicrosite.aspx?FedId=32" target="_blank" rel="noopener">Calendario RFEG</a></li>
        <li><a href="rankings.html" data-page="rankings.html">Castilla-La Mancha en Cptos. España</a></li>
      </ul>
    </li>
    <li><a href="escuela.html" data-page="escuela.html">Escuela</a></li>
    <li><a href="noticias.html" data-page="noticias.html">Noticias</a></li>
  </ul>

  <div class="nav-actions">
    <button class="nav-search-btn" id="searchToggle" aria-label="Buscar en el sitio" title="Buscar">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <line x1="16.5" y1="16.5" x2="22" y2="22"/>
      </svg>
    </button>
  </div>
</nav>

<!-- ── BUSCADOR OVERLAY ─────────────────────────────────── -->
<div id="searchOverlay" role="dialog" aria-modal="true" aria-label="Buscador del sitio">
  <div id="searchModal">
    <div id="searchHeader">
      <div id="searchInputWrap">
        <svg id="searchIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7"/>
          <line x1="16.5" y1="16.5" x2="22" y2="22"/>
        </svg>
        <input type="search" id="searchInput" placeholder="Buscar en la web de la FGCLM…" autocomplete="off" spellcheck="false">
        <button id="searchClear" aria-label="Limpiar búsqueda">✕</button>
      </div>
      <button id="searchClose" aria-label="Cerrar buscador">Cerrar</button>
    </div>
    <div id="searchBody">
      <div id="searchResults"></div>
      <div id="searchEmpty" hidden>
        <div id="searchEmptyIcon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
          </svg>
        </div>
        <p>No se encontraron resultados para <strong id="searchEmptyTerm"></strong></p>
        <p>Prueba con otros términos o navega por el menú principal.</p>
      </div>
      <div id="searchHint">
        <span>Sugerencias:</span>
        <button class="search-chip" data-q="licencia">Licencia</button>
        <button class="search-chip" data-q="torneos">Torneos</button>
        <button class="search-chip" data-q="clubes">Clubes</button>

        <button class="search-chip" data-q="noticias">Noticias</button>
        <button class="search-chip" data-q="escuela">Escuela</button>
      </div>
    </div>
  </div>
</div>`;

  // ── FOOTER HTML ───────────────────────────────────────────────
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
        <li><a href="junta.html">Junta Directiva</a></li>
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

      </ul>
    </div>
    <div>
      <div class="footer-col-title">Legal</div>
      <ul class="footer-links">
        <li><a href="aviso-legal.html">Aviso Legal</a></li>
        <li><a href="privacidad.html">Política de Privacidad</a></li>
        <li><a href="cookies.html">Política de Cookies</a></li>
        <li><a href="reglas-golf.html">Reglas de Golf</a></li>
        <li><a href="circulares.html">Circulares FGCLM</a></li>
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

  // ── ESTILOS DEL BUSCADOR ──────────────────────────────────────
  const SEARCH_CSS = `
/* Botón lupa en el nav */
.nav-search-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255,255,255,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
  margin-right: 4px;
  flex-shrink: 0;
}
.nav-search-btn:hover {
  color: var(--gold);
  background: rgba(255,255,255,0.08);
}

/* Overlay fondo */
#searchOverlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 61, 46, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  padding-left: 1rem;
  padding-right: 1rem;
  animation: searchFadeIn 0.2s ease;
}
#searchOverlay.search-open {
  display: flex;
}
@keyframes searchFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Modal */
#searchModal {
  background: var(--white);
  width: 100%;
  max-width: 680px;
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  overflow: hidden;
  animation: searchSlideIn 0.22s ease;
  max-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
}
@keyframes searchSlideIn {
  from { transform: translateY(-16px); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
}

/* Cabecera del modal */
#searchHeader {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--gray-100);
  flex-shrink: 0;
}
#searchInputWrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--gray-50);
  border: 1.5px solid var(--gray-100);
  border-radius: 3px;
  padding: 10px 14px;
  transition: border-color 0.2s;
}
#searchInputWrap:focus-within {
  border-color: var(--green-accent);
}
#searchIcon {
  color: var(--gray-300);
  flex-shrink: 0;
}
#searchInput {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--gray-900);
  outline: none;
  min-width: 0;
}
#searchInput::placeholder { color: var(--gray-300); }
#searchClear {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-300);
  font-size: 14px;
  padding: 2px 4px;
  line-height: 1;
  display: none;
  transition: color 0.15s;
}
#searchClear:hover { color: var(--gray-900); }
#searchClear.visible { display: block; }
#searchClose {
  background: none;
  border: 1.5px solid var(--gray-100);
  cursor: pointer;
  color: var(--gray-600);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 8px 14px;
  border-radius: 3px;
  white-space: nowrap;
  transition: all 0.15s;
  flex-shrink: 0;
}
#searchClose:hover {
  border-color: var(--gold);
  color: var(--green-dark);
}

/* Cuerpo de resultados */
#searchBody {
  overflow-y: auto;
  flex: 1;
}

/* Pista inicial con chips */
#searchHint {
  padding: 20px 20px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
#searchHint span {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  color: var(--gray-300);
  margin-right: 4px;
}
.search-chip {
  background: var(--green-light);
  border: 1.5px solid transparent;
  color: var(--green-mid);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  padding: 5px 13px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.15s;
}
.search-chip:hover {
  background: var(--green-mid);
  color: var(--white);
}

/* Resultados */
#searchResults {
  padding: 0 8px;
}
.search-section-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--gray-300);
  padding: 16px 12px 6px;
}
.search-result-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 11px 12px;
  border-radius: 3px;
  text-decoration: none;
  color: var(--gray-900);
  transition: background 0.15s;
  cursor: pointer;
}
.search-result-item:hover {
  background: var(--gray-50);
}
.search-result-item:hover .search-result-title {
  color: var(--green-accent);
}
.search-result-icon {
  width: 34px;
  height: 34px;
  background: var(--green-light);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--green-mid);
}
.search-result-icon.noticia-icon {
  background: var(--gold-light);
  color: #856404;
}
.search-result-content { flex: 1; min-width: 0; }
.search-result-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
  transition: color 0.15s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-result-desc {
  font-size: 12px;
  color: var(--gray-600);
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
mark {
  background: var(--gold-light);
  color: var(--gray-900);
  border-radius: 2px;
  padding: 0 1px;
}

/* Estado vacío */
#searchEmpty {
  padding: 48px 20px;
  text-align: center;
}
#searchEmptyIcon {
  width: 60px;
  height: 60px;
  background: var(--gray-50);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: var(--gray-300);
}
#searchEmpty p {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 6px;
}

/* Mobile */
@media (max-width: 640px) {
  #searchOverlay { padding-top: 70px; padding-left: 0; padding-right: 0; align-items: flex-start; }
  #searchModal { max-width: 100%; border-radius: 0 0 4px 4px; max-height: calc(100vh - 70px); }
  .btn-nav { display: none; }
}
@media (max-width: 480px) {
  #searchHeader { padding: 12px 14px; gap: 8px; }
  #searchInputWrap { padding: 9px 11px; }
  #searchClose { font-size: 11px; padding: 7px 10px; }
}
`;

  // ── LÓGICA DE BÚSQUEDA ────────────────────────────────────────
  function normalize(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, ' ');
  }

  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  function searchPages(q) {
    const terms = normalize(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return SITE_INDEX.filter(page => {
      const haystack = normalize(page.titulo + ' ' + page.desc + ' ' + page.tags);
      return terms.every(t => haystack.includes(t));
    });
  }

  function searchNoticias(q, noticias) {
    const terms = normalize(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return noticias.filter(n => {
      const haystack = normalize((n.titulo || '') + ' ' + (n.resumen || '') + ' ' + (n.contenido_html || '').replace(/<[^>]+>/g, ' '));
      return terms.every(t => haystack.includes(t));
    }).slice(0, 5);
  }

  let noticiasCache = null;
  function loadNoticias(cb) {
    if (noticiasCache) { cb(noticiasCache); return; }
    fetch('noticias_data.json')
      .then(r => r.json())
      .then(data => {
        noticiasCache = Array.isArray(data) ? data : (data.noticias || []);
        cb(noticiasCache);
      })
      .catch(() => cb([]));
  }

  function renderResults(q, pageResults, noticiaResults) {
    const container = document.getElementById('searchResults');
    const empty = document.getElementById('searchEmpty');
    const hint = document.getElementById('searchHint');
    if (!container) return;

    const total = pageResults.length + noticiaResults.length;
    hint.style.display = 'none';

    if (total === 0) {
      container.innerHTML = '';
      empty.hidden = false;
      document.getElementById('searchEmptyTerm').textContent = '"' + q + '"';
      return;
    }

    empty.hidden = true;
    let html = '';

    // Páginas del sitio
    if (pageResults.length > 0) {
      html += '<div class="search-section-label">Páginas del sitio</div>';
      pageResults.forEach(p => {
        const titleHL = highlight(p.titulo, q);
        const descHL  = highlight(p.desc, q);
        html += `
          <a class="search-result-item" href="${p.url}">
            <div class="search-result-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div class="search-result-content">
              <div class="search-result-title">${titleHL}</div>
              <div class="search-result-desc">${descHL}</div>
            </div>
          </a>`;
      });
    }

    // Noticias
    if (noticiaResults.length > 0) {
      html += '<div class="search-section-label">Noticias</div>';
      noticiaResults.forEach(n => {
        const titleHL = highlight(n.titulo || 'Noticia', q);
        const desc = (n.resumen || (n.contenido_html || '').replace(/<[^>]+>/g, ' ').trim().slice(0, 100)) + '…';
        html += `
          <a class="search-result-item" href="noticia.html?id=${n.id || ''}">
            <div class="search-result-icon noticia-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div class="search-result-content">
              <div class="search-result-title">${titleHL}</div>
              <div class="search-result-desc">${desc}</div>
            </div>
          </a>`;
      });
    }

    container.innerHTML = html;
  }

  let searchDebounce = null;
  function runSearch(q) {
    clearTimeout(searchDebounce);
    const hint = document.getElementById('searchHint');
    const empty = document.getElementById('searchEmpty');
    const results = document.getElementById('searchResults');

    if (!q.trim()) {
      if (hint) hint.style.display = '';
      if (empty) empty.hidden = true;
      if (results) results.innerHTML = '';
      return;
    }

    searchDebounce = setTimeout(() => {
      const pageResults = searchPages(q);
      loadNoticias(noticias => {
        const noticiaResults = searchNoticias(q, noticias);
        renderResults(q, pageResults, noticiaResults);
      });
    }, 180);
  }

  // ── INYECCIÓN Y EVENTOS ───────────────────────────────────────
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = SEARCH_CSS;
    document.head.appendChild(style);
  }

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

  function initSearch() {
    const overlay   = document.getElementById('searchOverlay');
    const input     = document.getElementById('searchInput');
    const clearBtn  = document.getElementById('searchClear');
    const closeBtn  = document.getElementById('searchClose');
    const toggleBtn = document.getElementById('searchToggle');
    const hint      = document.getElementById('searchHint');

    if (!overlay || !input) return;

    function openSearch() {
      overlay.classList.add('search-open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input.focus(), 50);
    }
    function closeSearch() {
      overlay.classList.remove('search-open');
      document.body.style.overflow = '';
      input.value = '';
      clearBtn.classList.remove('visible');
      document.getElementById('searchResults').innerHTML = '';
      document.getElementById('searchEmpty').hidden = true;
      hint.style.display = '';
    }

    toggleBtn && toggleBtn.addEventListener('click', openSearch);
    closeBtn  && closeBtn.addEventListener('click', closeSearch);

    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('search-open')) closeSearch();
      // Ctrl+K / Cmd+K para abrir
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        overlay.classList.contains('search-open') ? closeSearch() : openSearch();
      }
    });

    input.addEventListener('input', () => {
      const val = input.value;
      clearBtn.classList.toggle('visible', val.length > 0);
      runSearch(val);
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.remove('visible');
      document.getElementById('searchResults').innerHTML = '';
      document.getElementById('searchEmpty').hidden = true;
      hint.style.display = '';
      input.focus();
    });

    // Chips de sugerencias
    document.querySelectorAll('.search-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        input.value = chip.dataset.q;
        clearBtn.classList.add('visible');
        runSearch(chip.dataset.q);
        input.focus();
      });
    });
  }

  function initHamburger() {
    const toggle   = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (!toggle || !navLinks) return;

    function closeMenu() {
      navLinks.classList.remove('nav-open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      navLinks.querySelectorAll("li.dropdown").forEach((m) => {
        m.classList.remove("active-mobile");
      });
    }

    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Mobile dropdown toggle via click
    navLinks.querySelectorAll('li.dropdown > a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Always prevent navigation on mobile for dropdown parents
        
        const parent = link.closest("li.dropdown");
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
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        const parent = link.closest('li');
        if (!parent || !parent.classList.contains('dropdown')) {
          closeMenu();
        }
      });
    });

    // Close menu on clicking a dropdown submenu link
    navLinks.querySelectorAll('.dropdown-menu a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && navLinks.classList.contains('nav-open')) {
        closeMenu();
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
    injectStyles();
    injectNav();
    injectFooter();
    markActiveLink();
    initSearch();
    initHamburger();
    initNavScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
