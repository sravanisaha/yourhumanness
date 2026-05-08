// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Active nav link highlighting
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Work With Us — show org field when team selected
  const reachingAs = document.getElementById('reaching-as');
  const orgField = document.getElementById('org-field');
  if (reachingAs && orgField) {
    const update = () => {
      orgField.style.display = reachingAs.value === 'Team or Organization' ? 'block' : 'none';
    };
    reachingAs.addEventListener('change', update);
    update();
  }
});
