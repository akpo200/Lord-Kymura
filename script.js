// script.js

// Disparition du loader après scan
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
  });
  
  // Effet vortex et entrée dans le site
  const enterBtn = document.getElementById("enter-btn");
  const nopeBtn = document.getElementById("nope-btn");
  const intro = document.getElementById("intro");
  const mainSite = document.getElementById("main-site");
  
  enterBtn.addEventListener("click", () => {
    gsap.to(intro, {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      rotateY: 360,
      ease: "power2.inOut",
      onComplete: () => {
        intro.style.display = "none";
        mainSite.style.display = "block";
        gsap.from("#hero", {
          duration: 1.2,
          y: 50,
          opacity: 0,
          ease: "power2.out"
        });
        playMusic();
        initGalleryTilt();
        animateSectionsOnScroll();
        animateFavoritesCards();
      }
    });
  });
  
  nopeBtn.addEventListener("click", () => {
    alert("Trop tard... tu es déjà entrée dans son monde 😈");
  });
  
  // Musique de fond
  const bgMusic = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");
  
  function playMusic() {
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {
      console.warn("Lecture automatique bloquée. Nécessite une interaction utilisateur.");
    });
  }
  
  toggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      toggleBtn.innerText = "🔊";
    } else {
      bgMusic.pause();
      toggleBtn.innerText = "🔇";
    }
  });
  
  // Message tapé animé
  const messageText = "🌸 Joyeux anniversaire Annael 🌸\n\nOn adore ta passion et ton amour pour les univers magiques d'où ce site Xd.\n\nQue cette année soit pleine de joie, de réussite et de partage. N'oublie pas que tu pourras toujours compter sur nous.";
  const messageDiv = document.getElementById("birthday-message");
  
  function typeText(text, i = 0) {
    if (i < text.length) {
      messageDiv.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      setTimeout(() => typeText(text, i + 1), 35);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => typeText(messageText), 4000);
  });
  
  // Galerie immersive : effet 3D tilt
  function initGalleryTilt() {
    const images = document.querySelectorAll(".gallery-grid img");
  
    images.forEach((img) => {
      img.style.transition = "transform 0.3s ease";
  
      img.addEventListener("mousemove", (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
  
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
  
      img.addEventListener("mouseleave", () => {
        img.style.transform = "rotateX(0) rotateY(0) scale(1)";
      });
    });
  }
  
  // Animation des sections au scroll
  function animateSectionsOnScroll() {
    const sections = document.querySelectorAll("section");
  
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out"
      });
    });
  }
  
  // Animation des cartes favorites
  function animateFavoritesCards() {
    const cards = document.querySelectorAll(".fav-card");
  
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.8,
        y: 30,
        delay: index * 0.1,
        duration: 0.6,
        ease: "back.out(1.7)"
      });
    });
  }
  
  // Activer ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);  


// 🌸 Génération de pétales
const petalContainer = document.querySelector(".petal-container");
for (let i = 0; i < 30; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  petal.style.animationDelay = Math.random() * 5 + "s";
  petalContainer.appendChild(petal);
}

// 🌀 Portail final — retour en haut
document.getElementById("return-top").addEventListener("click", () => {
  // Animation rapide de vortex
  gsap.to("body", {
    duration: 0.8,
    opacity: 0,
    scale: 0.9,
    ease: "power2.inOut",
    onComplete: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      location.reload(); // Recharge la page pour relancer l'entrée
    }
  });
});
