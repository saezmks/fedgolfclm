/**
 * calendario_index.js
 * Carga y renderiza de forma automática los próximos eventos del calendario
 * extrayéndolos directamente de competiciones.html.
 * Filtra los eventos pasados basándose en la fecha actual.
 */

(function() {
  'use strict';

  const mesesCortos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const mesesMap = {ene:1, feb:2, mar:3, abr:4, may:5, jun:6, jul:7, ago:8, sep:9, oct:10, nov:11, dic:12};

  function buildEventoCard(evento) {
    const [year, month, day] = evento.fechaStr.split('-');
    const dia = parseInt(day, 10);
    const mes = mesesCortos[parseInt(month, 10) - 1];
    
    return `
      <a href="${evento.link}" class="evento-card">
        <div class="evento-fecha">
          <div class="evento-dia">${dia}</div>
          <div class="evento-mes-info">
            <span class="evento-mes">${mes}</span>
            <span class="evento-anyo">${year}</span>
          </div>
        </div>
        <span class="evento-cat">${evento.cat}</span>
        <div class="evento-nombre">${evento.nombre}</div>
        <div class="evento-lugar">${evento.lugar}</div>
      </a>
    `;
  }

  async function renderCalendario() {
    const grid = document.getElementById('calendarioIndexGrid');
    if (!grid) return;

    try {
      const response = await fetch('competiciones.html');
      if (!response.ok) throw new Error("No se pudo cargar competiciones.html");
      const html = await response.text();
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const items = Array.from(doc.querySelectorAll('.torneo-item'));
      
      const eventosData = [];
      const currentYear = 2026; // Se puede extraer dinámicamente si se desea

      items.forEach(item => {
        const fechaText = item.querySelector('.fecha')?.textContent.trim() || '';
        const aTag = item.querySelector('a.nombre-torneo');
        const nombreRaw = aTag ? aTag.textContent : item.textContent;
        const nombre = nombreRaw.replace(/\s+/g, ' ').trim();
        const link = aTag && aTag.getAttribute('href') !== '#' ? aTag.getAttribute('href') : 'inscripcion.html';
        const lugarText = item.querySelector('.lugar')?.textContent.replace('—', '').trim() || 'Por confirmar';
        
        const match = fechaText.match(/(\d+)[^\d]*?\s+(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i);
        if (match) {
          const dia = parseInt(match[1]);
          const mes = mesesMap[match[2].toLowerCase()];
          
          let cat = "Torneo";
          const nombreLower = nombre.toLowerCase();
          if (nombreLower.includes('femenino')) cat = 'Femenino';
          else if (nombreLower.includes('masculino')) cat = 'Masculino';
          else if (nombreLower.includes('juvenil') || nombreLower.includes('sub 18')) cat = 'Juvenil';
          else if (nombreLower.includes('senior')) cat = 'Senior';
          else if (nombreLower.includes('pitch & putt') || nombreLower.includes('pitch')) cat = 'Pitch & Putt';

          const mm = String(mes).padStart(2, '0');
          const dd = String(dia).padStart(2, '0');
          const fechaStr = `${currentYear}-${mm}-${dd}`;

          eventosData.push({
            fechaStr,
            cat,
            nombre,
            lugar: `📍 ${lugarText}`,
            link
          });
        }
      });

      // Eliminar duplicados (ya que competiciones.html puede listar el mismo torneo en diferentes secciones)
      const eventosUnicosMap = new Map();
      eventosData.forEach(ev => {
        // Usamos el nombre del torneo como clave para evitar duplicados exactos
        eventosUnicosMap.set(ev.nombre.trim(), ev);
      });
      const eventosUnicos = Array.from(eventosUnicosMap.values());

      // Obtener la fecha actual (sin hora) para comparar
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);

      // Filtrar eventos futuros o de hoy
      const eventosFuturos = eventosUnicos.filter(ev => {
        const fechaEv = new Date(ev.fechaStr);
        fechaEv.setHours(0, 0, 0, 0);
        return fechaEv.getTime() >= hoy.getTime();
      });

      // Ordenar por fecha (el más próximo primero)
      eventosFuturos.sort((a, b) => {
        return new Date(a.fechaStr).getTime() - new Date(b.fechaStr).getTime();
      });

      // Tomar los próximos 6 eventos
      const proximos = eventosFuturos.slice(0, 6);

      if (proximos.length > 0) {
        grid.innerHTML = proximos.map(ev => buildEventoCard(ev)).join('');
      } else {
        grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: var(--gray-600); padding: 40px;">No hay torneos próximos confirmados.</div>';
      }

    } catch (error) {
      console.error("Error cargando eventos:", error);
      grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: var(--gray-600); padding: 40px;">No se pudieron cargar los torneos.</div>';
    }
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCalendario);
  } else {
    renderCalendario();
  }

})();
