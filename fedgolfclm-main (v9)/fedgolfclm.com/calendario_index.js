/**
 * calendario_index.js
 * Carga y renderiza de forma automática los próximos eventos del calendario.
 * Filtra los eventos pasados basándose en la fecha actual.
 */

(function() {
  'use strict';

  // Datos del calendario (pueden venir de un endpoint o XML en el futuro)
  const eventosData = [
    {
      fechaStr: "2026-05-08",
      cat: "Masculino",
      nombre: "XVII Campeonato Absoluto Masculino de Castilla-La Mancha",
      lugar: "📍 Club de Golf Layos, Toledo"
    },
    {
      fechaStr: "2026-05-15",
      cat: "Femenino",
      nombre: "Campeonato Autonómico Femenino de Castilla-La Mancha 2026",
      lugar: "📍 Por confirmar"
    },
    {
      fechaStr: "2026-05-22",
      cat: "Juvenil",
      nombre: "Campeonato Regional Juvenil - Circuito Sub-18 CLM",
      lugar: "📍 Club de Golf Las Pinaíllas, Albacete"
    },
    {
      fechaStr: "2026-06-01",
      cat: "Senior",
      nombre: "I Prueba Ranking Senior Castilla-La Mancha 2026",
      lugar: "📍 Club de Golf Torrijos, Toledo"
    },
    {
      fechaStr: "2026-06-14",
      cat: "Pitch & Putt",
      nombre: "Campeonato de España Pitch & Putt - Selección CLM",
      lugar: "📍 Por confirmar"
    },
    {
      fechaStr: "2026-06-20",
      cat: "Masculino",
      nombre: "Torneo Provincial Guadalajara - Open de Cifuentes",
      lugar: "📍 Golf Cifuentes, Guadalajara"
    },
    {
      fechaStr: "2026-06-28",
      cat: "Senior",
      nombre: "Torneo Clasificatorio Senior de Verano",
      lugar: "📍 Golf Albacete"
    },
    {
      fechaStr: "2026-07-10",
      cat: "Masculino y Femenino",
      nombre: "Campeonato Abierto de Castilla-La Mancha",
      lugar: "📍 Golf Cuenca"
    }
  ];

  const mesesCortos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  function buildEventoCard(evento) {
    const [year, month, day] = evento.fechaStr.split('-');
    const dia = parseInt(day, 10);
    const mes = mesesCortos[parseInt(month, 10) - 1];
    
    return `
      <a href="inscripcion.html" class="evento-card">
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

  function renderCalendario() {
    const grid = document.getElementById('calendarioIndexGrid');
    if (!grid) return;

    // Obtener la fecha actual (sin hora) para comparar
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Filtrar eventos futuros o de hoy
    const eventosFuturos = eventosData.filter(ev => {
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
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCalendario);
  } else {
    renderCalendario();
  }

})();
