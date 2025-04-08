function scrollToProjects() {
    document.getElementById("projects-page").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const minDisplayTime = 1500; 
  
    const startTime = Date.now();
  
    window.addEventListener('load', function() {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
  
      setTimeout(function() {
        preloader.classList.add('hidden');
      }, remainingTime);
    });
});


function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("fullImage");
    var img = document.querySelector(".career-img");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-hidden');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              const delay = (index + 1) * 0.01;
              setTimeout(() => {
                  entry.target.classList.add('scroll-show');
              }, delay);
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  elements.forEach((el) => observer.observe(el));
});