document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slideshow').forEach(slideshow => {
      const slides = slideshow.querySelectorAll('img');
      const caption = slideshow.querySelector('.image-caption');
      let current = 0;

      function showSlide(index) {
          slides[current].classList.remove('active');
          current = index;
          slides[current].classList.add('active');
          if (caption) caption.textContent = slides[current].getAttribute('title');
      }

      slides[current].classList.add('active');
      if (caption) caption.textContent = slides[current].getAttribute('title');

      setInterval(() => {
          showSlide((current + 1) % slides.length);
      }, 3000);
  });
});