document.addEventListener("DOMContentLoaded", function() {
    // Add 'loaded' class to the body when the page has fully loaded
    document.body.classList.add("loaded");
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      //rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)+300 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function revealOnScroll() {
    var revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(function(el) {
      if (isElementInViewport(el)) {
        el.classList.add('reveal-visible');
      } else {
        el.classList.remove('reveal-visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  