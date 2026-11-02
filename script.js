/**
 * SHIVAM RESIDENCY — Interactive Logic
 * WordPress & Elementor friendly vanilla JavaScript
 * Focused strictly on Brochure Specifications & High Conversion
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initMobileMenu();
  initLocationFilter();
  initModals();
  initForms();
  initScrollEffects();
  initScrollAnimations();
});

/* ========================================================
   1. MOBILE MENU DRAWER
   ======================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });
}

/* ========================================================
   2. LOCATION PROXIMITY FILTER (Brochure Page 8)
   ======================================================== */
function initLocationFilter() {
  const pills = document.querySelectorAll('.loc-pill-btn');
  const items = document.querySelectorAll('.loc-item-card');

  if (!pills.length || !items.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const group = pill.getAttribute('data-loc');

      items.forEach(item => {
        const itemGroup = item.getAttribute('data-group');
        if (group === 'all' || itemGroup === group) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ========================================================
   3. MODALS (Single Unified "Get Price & Floor Plan" Modal)
   ======================================================== */
function initModals() {
  const leadModal = document.getElementById('leadModal');
  const openModalBtns = document.querySelectorAll('.open-lead-modal');
  const closeLeadBtn = document.getElementById('closeLeadModal');
  const modalConfigSelect = document.getElementById('modalConfigSelect');

  // Open Modal Triggers
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pref = btn.getAttribute('data-pref');

      if (pref && modalConfigSelect) {
        for (let i = 0; i < modalConfigSelect.options.length; i++) {
          if (modalConfigSelect.options[i].value.toLowerCase().includes(pref.toLowerCase().split(' ')[0])) {
            modalConfigSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (leadModal) {
        leadModal.classList.add('active');
        leadModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // Close Modal
  if (closeLeadBtn && leadModal) {
    closeLeadBtn.addEventListener('click', () => {
      leadModal.classList.remove('active');
      leadModal.setAttribute('aria-hidden', 'true');
    });
  }

  // Close on Backdrop Click
  if (leadModal) {
    leadModal.addEventListener('click', (e) => {
      if (e.target === leadModal) {
        leadModal.classList.remove('active');
        leadModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && leadModal) {
      leadModal.classList.remove('active');
      leadModal.setAttribute('aria-hidden', 'true');
    }
  });
}

/* ========================================================
   4. FORM HANDLING & TOAST NOTIFICATION
   ======================================================== */
function initForms() {
  const forms = [
    document.getElementById('popupLeadForm'),
    document.getElementById('finalBookingForm')
  ];

  forms.forEach(form => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('full_name') || 'Valued Visitor';
      const phone = formData.get('phone') || '';

      // Close modal if open
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) {
        activeModal.classList.remove('active');
      }

      // Show realistic, honest toast notification
      showToast(
        `Thank you, ${name}!`,
        `We have received your request for Shivam Residency (+91 ${phone}). Our sales team will contact you shortly with full details.`
      );

      // Reset form fields
      form.reset();
    });
  });
}

function showToast(title, message) {
  const toast = document.getElementById('toastNotice');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMsg');

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = message;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

/* ========================================================
   5. SCROLL & NAVBAR SHADOW EFFECTS
   ======================================================== */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ========================================================
   6. INTERSECTION OBSERVER SCROLL REVEALS
   ======================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -15px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ========================================================
   7. HERO FULL-SIZE BACKGROUND CAROUSEL SLIDER
   Auto-play (5.5s), Ken-Burns Zoom, Touch Swipes & Indicators
   ======================================================== */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.slide-indicator');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const captionText = document.getElementById('heroSlideCaptionText');
  const carouselSection = document.getElementById('hero');

  if (!slides.length) return;

  let currentIndex = 0;
  const slideCount = slides.length;
  const slideInterval = 5500;
  let autoPlayTimer = null;
  let isHovered = false;

  const captions = [
    { text: 'Architectural Elevation &bull; Modern G+7 Landmark', icon: 'fa-building' },
    { text: 'Rooftop Terrace Garden &bull; Panoramic Sky Sanctuary', icon: 'fa-leaf' },
    { text: 'Spacious 2 BHK Living &bull; Refined Interiors', icon: 'fa-couch' }
  ];

  function showSlide(index) {
    if (index >= slideCount) currentIndex = 0;
    else if (index < 0) currentIndex = slideCount - 1;
    else currentIndex = index;

    // Toggle active slide
    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Toggle active indicator & restart CSS animation
    indicators.forEach((ind, i) => {
      if (i === currentIndex) {
        ind.classList.add('active');
        const prog = ind.querySelector('.ind-progress-bar');
        if (prog) {
          prog.style.animation = 'none';
          void prog.offsetWidth;
          prog.style.animation = '';
        }
      } else {
        ind.classList.remove('active');
      }
    });

    // Update caption badge smoothly
    if (captionText && captions[currentIndex]) {
      const badge = document.getElementById('heroSlideCaptionBadge');
      if (badge) badge.style.opacity = '0.4';
      setTimeout(() => {
        if (badge) {
          const iconEl = badge.querySelector('i');
          if (iconEl) iconEl.className = `fa-solid ${captions[currentIndex].icon}`;
          captionText.innerHTML = captions[currentIndex].text;
          badge.style.opacity = '1';
        }
      }, 200);
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, slideInterval);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoPlay();
    });
  }

  indicators.forEach(ind => {
    ind.addEventListener('click', () => {
      const targetIndex = parseInt(ind.getAttribute('data-slide-to'), 10);
      if (!isNaN(targetIndex)) {
        showSlide(targetIndex);
        startAutoPlay();
      }
    });
  });

  if (carouselSection) {
    carouselSection.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    carouselSection.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    // Mobile touch swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;

    carouselSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance > 45) {
        prevSlide();
        startAutoPlay();
      } else if (swipeDistance < -45) {
        nextSlide();
        startAutoPlay();
      }
    }, { passive: true });
  }

  // Keyboard navigation when user is looking at hero
  document.addEventListener('keydown', (e) => {
    if (!carouselSection) return;
    const rect = carouselSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (!isVisible) return;

    if (e.key === 'ArrowLeft') {
      prevSlide();
      startAutoPlay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      startAutoPlay();
    }
  });

  // Start initial slide
  showSlide(0);
  startAutoPlay();
}
