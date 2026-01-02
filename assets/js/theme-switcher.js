// Theme Switcher
document.addEventListener('DOMContentLoaded', () => {
  const themeDots = document.querySelectorAll('.theme-dot');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Set active dot
  function setActiveDot(theme) {
    themeDots.forEach(dot => {
      if (dot.dataset.theme === theme) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Initialize
  setActiveDot(currentTheme);

  // Add click handlers
  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.dataset.theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      setActiveDot(theme);
    });
  });
});
