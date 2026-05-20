/**
 * noticias_index.js
 * Carga las últimas 5 noticias reales desde noticias_data.json
 * y las muestra en la sección "Últimas noticias" del index.
 * No altera ningún otro elemento de la página.
 */
(function () {
  'use strict';

  const CAT_GRADIENT = {
    'Masculino':            'linear-gradient(135deg,#0a3d2e,#2d9e6b)',
    'Femenino':             'linear-gradient(135deg,#3d0a1a,#9e2d5a)',
    'Masculino y Femenino': 'linear-gradient(135deg,#0a2a3d,#2d7a9e)',
    'Senior':               'linear-gradient(135deg,#3d2a0a,#9e7a2d)',
    'Juvenil':              'linear-gradient(135deg,#1a3d0a,#5a9e2d)',
    'Profesional':          'linear-gradient(135deg,#1a0a3d,#5a2d9e)',
    'Pitch & Putt':         'linear-gradient(135deg,#2a1a0a,#7a5a2d)',
    'Federativas':          'linear-gradient(135deg,#0a1a3d,#2d4a9e)',
    'Golf Adaptado':        'linear-gradient(135deg,#0a3d3d,#2d9e9e)',
    'Reglas y Campos':      'linear-gradient(135deg,#2a2a0a,#7a7a2d)',
    'default':              'linear-gradient(135deg,#0a3d2e,#1a6645)'
  };
  const CAT_EMOJI = {
    'Masculino':'🏌️','Femenino':'⛳','Masculino y Femenino':'🏆',
    'Senior':'🎖️','Juvenil':'👶','Profesional':'🏅',
    'Pitch & Putt':'🏌️','Federativas':'📋','Golf Adaptado':'♿',
    'Reglas y Campos':'📖','default':'⛳'
  };

  function getBg(n) {
    const cat = (n.categorias && n.categorias[0]) || 'default';
    return CAT_GRADIENT[cat] || CAT_GRADIENT['default'];
  }
  function getEmoji(n) {
    const cat = (n.categorias && n.categorias[0]) || 'default';
    return CAT_EMOJI[cat] || CAT_EMOJI['default'];
  }

  function buildThumb(n, isFeatured) {
    const bg = getBg(n);
    if (n.imagen) {
      return `
        <div class="noticia-thumb" style="background:${bg};">
          <img src="${n.imagen}" alt="${(n.titulo||'').replace(/"/g,'&quot;')}"
               loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;"
               onerror="this.style.display='none'">
        </div>`;
    }
    const emoji = getEmoji(n);
    const fs = isFeatured ? '56px' : '36px';
    return `
      <div class="noticia-thumb">
        <div class="noticia-thumb-placeholder" style="background:${bg};font-size:${fs};">
          ${emoji}
        </div>
      </div>`;
  }

  function buildCard(n, index) {
    const isFeatured = index === 0;
    const cat = (n.categorias && n.categorias[0]) || '';
    const href = 'noticia.html?id=' + n.id;
    const target = '';
    const excerpt = n.excerpt
      ? `<p class="noticia-excerpt">${n.excerpt.substring(0, 140)}${n.excerpt.length > 140 ? '…' : ''}</p>`
      : '';

    return `
      <a href="${href}"${target} class="noticia-card">
        ${buildThumb(n, false)}
        <div class="noticia-body">
          ${cat ? `<span class="noticia-cat">${cat}</span>` : ''}
          <div class="noticia-fecha">${n.fecha || ''}</div>
          <h3 class="noticia-titulo">${n.titulo || ''}</h3>
          ${excerpt}
        </div>
      </a>`;
  }

  function renderIndexNews(data) {
    // Take the 7 most recent posts
    const latest = data.slice(0, 7);
    const skeleton = document.getElementById('noticiasIndexSkeleton');
    const wrapper = document.getElementById('noticiasCarouselWrapper');
    const track = document.getElementById('noticiasCarouselTrack');
    if (!track || !wrapper) return;

    // Create 3 copies for infinite loop (left clones, real, right clones)
    const carouselItems = [...latest, ...latest, ...latest];
    track.innerHTML = carouselItems.map((n, i) => buildCard(n, i)).join('');

    // Swap skeleton → real carousel
    if (skeleton) skeleton.style.display = 'none';
    wrapper.style.display = 'flex';

    initCarousel(latest.length);
  }

  function initCarousel(numItems) {
    const track = document.getElementById('noticiasCarouselTrack');
    const btnPrev = document.getElementById('btnPrevNews');
    const btnNext = document.getElementById('btnNextNews');
    
    // Start at the real items (middle set)
    let currentIndex = numItems; 
    let isTransitioning = false;
    
    function updateCarousel(instant = false) {
      const containerWidth = track.parentElement.offsetWidth;
      const itemWidth = track.children[0].offsetWidth;
      const gap = parseInt(window.getComputedStyle(track).gap) || 0;
      
      // Calculate center offset so the active slide is centered
      const centerOffset = (containerWidth - itemWidth) / 2;
      const moveDistance = (currentIndex * (itemWidth + gap)) - centerOffset;
      
      if (instant) {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${moveDistance}px)`;
        track.offsetHeight; // Force reflow
      } else {
        track.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
        track.style.transform = `translateX(-${moveDistance}px)`;
      }

      // Update active class
      Array.from(track.children).forEach((child, index) => {
        if (index === currentIndex) {
          child.classList.add('active-slide');
        } else {
          child.classList.remove('active-slide');
        }
      });
    }

    function handleTransitionEnd() {
      isTransitioning = false;
      // If we moved to the left clone zone, jump to real zone
      if (currentIndex < numItems) {
        currentIndex += numItems;
        updateCarousel(true);
      } 
      // If we moved to the right clone zone, jump back to real zone
      else if (currentIndex >= numItems * 2) {
        currentIndex -= numItems;
        updateCarousel(true);
      }
    }

    track.addEventListener('transitionend', handleTransitionEnd);

    function nextSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      updateCarousel();
    }

    function prevSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      updateCarousel();
    }

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);

    // Auto slide every 5.5 seconds
    let autoSlideInterval = setInterval(nextSlide, 5500);

    // Pause on hover
    const wrapper = document.getElementById('noticiasCarouselWrapper');
    wrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    wrapper.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(nextSlide, 5500);
    });

    window.addEventListener('resize', () => {
      updateCarousel(true);
    });
    
    // Initial setup (instant so no animation on load)
    updateCarousel(true);
  }

  // Load JSON — path relative to index.html
  fetch('noticias_data.json')
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(renderIndexNews)
    .catch(function (err) {
      // On error leave the skeleton and log; doesn't break the rest of the page
      console.warn('[noticias_index.js] No se pudo cargar noticias_data.json:', err.message);
      const skeleton = document.getElementById('noticiasIndexSkeleton');
      if (skeleton) {
        skeleton.innerHTML = '<div style="padding:40px;text-align:center;color:var(--gray-300);font-size:13px;grid-column:1/-1;">No se pudieron cargar las noticias.</div>';
      }
    });

})();
