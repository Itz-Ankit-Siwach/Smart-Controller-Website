// Initialize circle progress animations
document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.circle-progress');
  circles.forEach(circle => {
      const value = circle.getAttribute('data-value');
      if (value) {
          circle.style.setProperty('--value', `${value}%`);
      }
  });
});