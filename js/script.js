// Fungsi untuk memicu animasi saat scroll (Reveal)
const revealElements = () => {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 100; // Elemen muncul saat 100px terlihat

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
};

// Navigasi: Tambahkan efek bayangan saat scroll
const handleNavbar = () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 20) {
    nav.classList.add("shadow-lg", "border-blue-100");
  } else {
    nav.classList.remove("shadow-lg", "border-blue-100");
  }
};

// Jalankan saat scroll
window.addEventListener("scroll", () => {
  revealElements();
  handleNavbar();
});

// Jalankan saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Delay sedikit agar transisi terasa halus saat pertama buka
  setTimeout(revealElements, 100);
});


// Tunggu sampai semua DOM terload
document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS
    const menuToggle = document.getElementById('menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const line1 = document.querySelector('.line-1');
    const line2 = document.querySelector('.line-2');
    const line3 = document.querySelector('.line-3');

    // 2. TOGGLE MOBILE MENU & ANIMATION
    if (menuToggle && mobileOverlay) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileOverlay.classList.contains('opacity-100');

            if (!isOpen) {
                // Open Menu
                mobileOverlay.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-full');
                mobileOverlay.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                
                // Hamburger to X
                line1.classList.add('rotate-45', 'translate-y-[8px]');
                line2.classList.add('opacity-0');
                line3.classList.add('-rotate-45', '-translate-y-[8px]');
            } else {
                // Close Menu
                mobileOverlay.classList.add('opacity-0', 'pointer-events-none', '-translate-y-full');
                mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                
                // X to Hamburger
                line1.classList.remove('rotate-45', 'translate-y-[8px]');
                line2.classList.remove('opacity-0');
                line3.classList.remove('-rotate-45', '-translate-y-[8px]');
            }
        });
    }

    // 3. AUTO-ACTIVE LINK COLOR & UNDERLINE
    const currentUrl = window.location.pathname.split("/").pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-item');

    allLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});
