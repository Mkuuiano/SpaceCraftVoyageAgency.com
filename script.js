document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const slidingMenu = document.getElementById('slidingMenu');

  menuIcon.addEventListener('click', function() {
    slidingMenu.style.top = '0'; // Slide down the menu
  });

  closeIcon.addEventListener('click', function() {
    slidingMenu.style.top = '-100%'; // Slide up to hide the menu
  });

  // Optional: Close menu if user clicks outside of it
  document.addEventListener('click', function(event) {
    if (!slidingMenu.contains(event.target) && event.target !== menuIcon) {
      slidingMenu.style.top = '-100%';
    }
  });
});
