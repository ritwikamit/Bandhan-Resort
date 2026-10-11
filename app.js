/* ==========================================================================
   BANDHAN RESORT - CLIENT SCRIPT (APP.JS)
   Interactive logic for glass navbar, space switcher, lightbox gallery,
   enquiry modal, and WhatsApp message builder.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Floating Navbar Scroll Effect
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('navbar-scrolled');
    } else {
      header.classList.remove('navbar-scrolled');
    }
  }, { passive: true });

  // 3. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('is-active');
      const isExpanded = mobileDrawer.classList.contains('is-active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Feature Grid: Interactive Space & Amenity Switcher
  const amenityCards = document.querySelectorAll('.amenity-card');
  const spaceDisplayImg = document.getElementById('spaceDisplayImg');
  const spaceBadgeText = document.getElementById('spaceBadgeText');

  amenityCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active class from all
      amenityCards.forEach(c => c.classList.remove('is-active'));
      card.classList.add('is-active');

      const newImg = card.getAttribute('data-img');
      const newTitle = card.getAttribute('data-title');
      const newBadge = card.getAttribute('data-badge');

      if (spaceDisplayImg && newImg) {
        spaceDisplayImg.style.opacity = '0.4';
        setTimeout(() => {
          spaceDisplayImg.src = newImg;
          spaceDisplayImg.alt = newTitle;
          spaceDisplayImg.style.opacity = '1';
        }, 200);
      }

      if (spaceBadgeText && newBadge) {
        spaceBadgeText.textContent = newBadge;
      }
    });
  });

  // 5. Gallery Filter Group
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 6. Accessible Gallery Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullSrc = item.getAttribute('data-full');
      const caption = item.getAttribute('data-caption');

      if (lightboxModal && lightboxImg) {
        lightboxImg.src = fullSrc;
        lightboxImg.alt = caption || 'Bandhan Resort Photo';
        if (lightboxCaption) {
          lightboxCaption.textContent = caption || '';
        }
        lightboxModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // 7. Interactive Enquiry Modal & WhatsApp Form
  const enquiryModal = document.getElementById('enquiryModal');
  const openEnquiryBtn = document.getElementById('openEnquiryModalBtn');
  const closeEnquiryBtn = document.getElementById('closeEnquiryModalBtn');
  const enquiryForm = document.getElementById('enquiryForm');
  const eventTypeSelect = document.getElementById('eventType');

  const openModal = () => {
    if (enquiryModal) {
      enquiryModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (enquiryModal) {
      enquiryModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (openEnquiryBtn) {
    openEnquiryBtn.addEventListener('click', openModal);
  }

  if (closeEnquiryBtn) {
    closeEnquiryBtn.addEventListener('click', closeModal);
  }

  if (enquiryModal) {
    enquiryModal.addEventListener('click', (e) => {
      if (e.target === enquiryModal) {
        closeModal();
      }
    });
  }

  // Global helper to prefill package from bento cards
  window.prefillAndOpenModal = (packageName) => {
    if (eventTypeSelect && packageName) {
      for (let i = 0; i < eventTypeSelect.options.length; i++) {
        if (eventTypeSelect.options[i].value === packageName) {
          eventTypeSelect.selectedIndex = i;
          break;
        }
      }
    }
    openModal();
  };

  // Form submission: build verified WhatsApp inquiry message
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('guestName')?.value || '';
      const phone = document.getElementById('guestPhone')?.value || '';
      const occasion = document.getElementById('eventType')?.value || '';
      const date = document.getElementById('preferredDate')?.value || 'To be decided';
      const guests = document.getElementById('guestCount')?.value || 'Not specified';
      const notes = document.getElementById('specialMessage')?.value || 'None';

      const whatsappMessage = `*New Event Enquiry for Bandhan Resort*
--------------------------------
• *Name:* ${name}
• *Phone:* ${phone}
• *Occasion:* ${occasion}
• *Preferred Date:* ${date}
• *Estimated Guests:* ${guests}
• *Notes:* ${notes}
--------------------------------
Sent via Bandhan Resort Website`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919470273100?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      closeModal();
    });
  }

  // Keyboard accessibility (Escape key closes modals)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeModal();
    }
  });
});
