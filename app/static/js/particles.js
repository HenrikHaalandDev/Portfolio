document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("particle-container");
  
    function createParticle() {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      
      let size = Math.random() * 6 + 4; // Random size between 4px and 10px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
  
      let leftPosition = Math.random() * window.innerWidth;
      particle.style.left = `${leftPosition}px`;
  
      let animationDuration = Math.random() * 4 + 2; // Between 2s and 6s
      particle.style.animationDuration = `${animationDuration}s`;
  
      container.appendChild(particle);

  
      setTimeout(() => {
        particle.remove();
      }, animationDuration * 1000);
    }
  
    setInterval(createParticle, 75); // Generate a new particle every 200ms
  });
  