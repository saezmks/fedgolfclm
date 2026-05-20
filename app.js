window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
