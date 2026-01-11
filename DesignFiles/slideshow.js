document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll(".slideshow img");
    const caption = document.querySelector(".image-caption");
    let current = 0;
  
    function showSlide(index) {
      slides[current].classList.remove("active");
      current = index;
      slides[current].classList.add("active");
  
      if (caption) {
        caption.textContent = slides[current].getAttribute("title");
      }
    }
  
    slides[current].classList.add("active");
    if (caption) {
      caption.textContent = slides[current].getAttribute("title");
    }
  
    setInterval(() => {
      showSlide((current + 1) % slides.length);
    }, 3000);
  });
  