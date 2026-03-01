// BIGSTAXXSX - Main JavaScript
// Mobile Menu Toggle

document.addEventListener('DOMContentLoaded', function() {
  
  // Create mobile menu toggle button
  const nav = document.querySelector('.nav');
  const topbarInner = document.querySelector('.topbar-inner');
  
  // Create toggle button
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  
  // Insert toggle button before nav
  topbarInner.insertBefore(menuToggle, nav);
  
  // Toggle menu on click
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.classList.toggle('active');
  });
  
  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
  
});
