// Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Map initialization
    function initMap() {
      const caMau = { lat: 9.1768, lng: 105.1524 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: caMau,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [{"weight": "2.00"}]
          },
          {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#9c9c9c"}]
          }
        ]
      });
      new google.maps.Marker({ 
        position: caMau, 
        map: map,
        title: "Cà Mau - Quê quán"
      });
    }

    // Add staggered animation to skills
    document.addEventListener('DOMContentLoaded', function() {
      const skillTags = document.querySelectorAll('.skill-tag');
      skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          tag.style.transition = 'all 0.6s ease-out';
          tag.style.opacity = '1';
          tag.style.transform = 'translateY(0)';
        }, index * 100);
      });

      // Animate info cards on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      document.querySelectorAll('.info-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
      });

      // Add parallax effect to hero elements
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent && heroImage) {
          heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
          heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
      });

      // Create dynamic floating particles
      function createFloatingParticle() {
        const particle = document.createElement('div');
        const particles = ['🌸', '🦋', '🌺', '🌻', '🌷'];
        const randomParticle = particles[Math.floor(Math.random() * particles.length)];
        
        particle.innerHTML = randomParticle;
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100vh';
        particle.style.fontSize = Math.random() * 20 + 15 + 'px';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.animation = `floatUp ${Math.random() * 10 + 8}s linear forwards`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 18000);
      }

      // Create floating particles periodically
      setInterval(createFloatingParticle, 2000);

      // Add CSS for dynamic particles
      const style = document.createElement('style');
      style.textContent = `
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    });