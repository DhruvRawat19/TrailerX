// In script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu');
  const navCollapse = document.querySelector('.nav-collapse');

  if (menuIcon && navCollapse) {
    menuIcon.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      navCollapse.classList.toggle('active');
    });
  }

  // Your Swiper initialization
  const swiper = new Swiper('.swiper', {
    loop: true, // Optional
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Consider adding 'grabCursor: true' for better UX
    grabCursor: true,
  });
});