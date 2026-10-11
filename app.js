/* ==========================================================================
   BANDHAN RESORT - CLIENT SCRIPT (APP.JS)
   Interactive logic for glass navbar, space switcher, photo archive renderer,
   enhanced accessible lightbox with prev/next navigation, enquiry modal,
   and direct WhatsApp enquiry generator.
   ========================================================================== */

// Authentic curated resort photo database (28 real images)
const RESORT_PHOTOS = [
  {
    id: "palace-entrance",
    title: "Grand Palace Facade & Royal Entrance",
    category: "exterior",
    catLabel: "Exterior Architecture",
    desc: "Illuminated arches, jharokha pavilions, and grand welcoming portal at night.",
    src: "assets/images/real/palace-entrance.jpg"
  },
  {
    id: "banquet-ballroom-wide",
    title: "Grand Royal Banquet Ballroom",
    category: "banquet",
    catLabel: "AC Banquet Ballroom",
    desc: "Cathedral draping, chandelier illumination, red carpet aisle, and royal stage.",
    src: "assets/images/real/banquet-ballroom-wide.jpg"
  },
  {
    id: "stage-throne-setup",
    title: "Bridal Stage & Chandelier Hall",
    category: "stage",
    catLabel: "Reception & Stage",
    desc: "Intricate floral backdrop, royal sofa seating, and polished vitrified marble flooring.",
    src: "assets/images/real/stage-throne-setup.jpg"
  },
  {
    id: "wedding-mandap",
    title: "Sacred Wedding Mandap Decor",
    category: "stage",
    catLabel: "Ceremonial Mandap",
    desc: "Traditional floral pillars, sacred havan altar, and ceremonial canopy.",
    src: "assets/images/real/wedding-mandap.jpg"
  },
  {
    id: "restaurant-courtyard",
    title: "On-Premise Restaurant & Courtyard",
    category: "dining",
    catLabel: "Dining & Courtyard",
    desc: "Paved banquet courtyard, garden planters, and family dining facilities.",
    src: "assets/images/real/restaurant-courtyard.jpg"
  },
  {
    id: "cottage-stay-block",
    title: "Resort Cottage Rooms & Veranda",
    category: "rooms",
    catLabel: "Guest Stays",
    desc: "Spacious guest accommodation wing with landscaped walkway and lush lawns.",
    src: "assets/images/real/cottage-stay-block.jpg"
  },
  {
    id: "peach-canopy-hall",
    title: "Grand Celebration Hall with Ceiling Rings",
    category: "banquet",
    catLabel: "AC Banquet Hall",
    desc: "Draped silk ceiling with circular lighting rings and audience banquet seating.",
    src: "assets/images/real/peach-canopy-hall.jpg"
  },
  {
    id: "banquet-decor-stage",
    title: "Evening Reception Stage Decor",
    category: "stage",
    catLabel: "Floral Stage",
    desc: "Festive lighting and flower work for engagement and sangeet celebrations.",
    src: "assets/images/real/banquet-decor-stage.jpg"
  },
  {
    id: "reception-foyer",
    title: "Guest Welcome Gallery & Foyer",
    category: "banquet",
    catLabel: "Reception Foyer",
    desc: "Spacious hall entrance designed for welcoming baraat and receiving guests.",
    src: "assets/images/real/reception-foyer.jpg"
  },
  {
    id: "dining-hall-evening",
    title: "Banquet Dining Hall Setup",
    category: "dining",
    catLabel: "Catering & Dining",
    desc: "Arranged dining section for wedding feasts and catered celebrations.",
    src: "assets/images/real/dining-hall-evening.jpg"
  },
  {
    id: "lawn-night-view",
    title: "Lawn Lighting & Open Grounds",
    category: "exterior",
    catLabel: "Wedding Lawn",
    desc: "Night ambiance across the open celebration grounds.",
    src: "assets/images/real/lawn-night-view.jpg"
  },
  {
    id: "stage-canopy-view",
    title: "Festive Mandap Canopy",
    category: "stage",
    catLabel: "Mandap Canopy",
    desc: "Detailed view of traditional ceremony pavilion.",
    src: "assets/images/real/stage-canopy-view.jpg"
  },
  {
    id: "hall-seating-overview",
    title: "AC Hall Guest Seating Arrangement",
    category: "banquet",
    catLabel: "Banquet Seating",
    desc: "Spacious seating alignment accommodating large wedding parties.",
    src: "assets/images/real/hall-seating-overview.jpg"
  },
  {
    id: "mandap-front",
    title: "Ceremonial Stage Front View",
    category: "stage",
    catLabel: "Ritual Dais",
    desc: "Focal view of stage decorated for wedding rituals.",
    src: "assets/images/real/mandap-front.jpg"
  },
  {
    id: "stage-side-perspective",
    title: "Celebration Stage Side Perspective",
    category: "stage",
    catLabel: "Stage Decor",
    desc: "Side angle of floral stage and elevated dais.",
    src: "assets/images/real/stage-side-perspective.jpg"
  },
  {
    id: "hall-pillars-drape",
    title: "Hall Pillars & Fabric Decor",
    category: "banquet",
    catLabel: "Hall Draping",
    desc: "Pillar decoration and festive fabric draping.",
    src: "assets/images/real/hall-pillars-drape.jpg"
  },
  {
    id: "ceiling-chandelier-ring",
    title: "Ceiling Chandelier Lighting",
    category: "banquet",
    catLabel: "Chandelier Ambiance",
    desc: "Warm chandeliers and illuminated false ceiling.",
    src: "assets/images/real/ceiling-chandelier-ring.jpg"
  },
  {
    id: "stage-curtain-lights",
    title: "Stage Backlight & Fairy Strings",
    category: "stage",
    catLabel: "Stage Lighting",
    desc: "Warm fairy lights and curtain decor.",
    src: "assets/images/real/stage-curtain-lights.jpg"
  },
  {
    id: "flower-garland-setup",
    title: "Fresh Flower Garland Work",
    category: "stage",
    catLabel: "Floral Setup",
    desc: "Floral decoration for entrance gate and stage.",
    src: "assets/images/real/flower-garland-setup.jpg"
  },
  {
    id: "buffet-counter-area",
    title: "Buffet Counter & Food Service",
    category: "dining",
    catLabel: "Buffet Area",
    desc: "Arranged dining and buffet counters for guest catering.",
    src: "assets/images/real/buffet-counter-area.jpg"
  },
  {
    id: "lawn-garden-boundary",
    title: "Garden Pathway & Lawn Boundary",
    category: "exterior",
    catLabel: "Garden & Lawns",
    desc: "Green lawn perimeter and pathway lighting.",
    src: "assets/images/real/lawn-garden-boundary.jpg"
  },
  {
    id: "evening-outdoor-view",
    title: "Evening Outdoor Celebration Ambiance",
    category: "exterior",
    catLabel: "Evening Grounds",
    desc: "Dusk atmosphere across Bandhan Resort.",
    src: "assets/images/real/evening-outdoor-view.jpg"
  },
  {
    id: "resort-facade-angle",
    title: "Exterior Facade Architecture",
    category: "exterior",
    catLabel: "Architecture",
    desc: "Architectural styling of resort buildings.",
    src: "assets/images/real/resort-facade-angle.jpg"
  },
  {
    id: "entrance-pathway",
    title: "Resort Entrance Pathway",
    category: "exterior",
    catLabel: "Arrival Pathway",
    desc: "Arrival driveway and parking access area.",
    src: "assets/images/real/entrance-pathway.jpg"
  },
  {
    id: "guest-room-interior",
    title: "Guest Room Accommodation",
    category: "rooms",
    catLabel: "Guest Suite",
    desc: "Clean and comfortable room setup for host families.",
    src: "assets/images/real/guest-room-interior.jpg"
  },
  {
    id: "cottage-wing-angle",
    title: "Cottage Wing & Veranda View",
    category: "rooms",
    catLabel: "Cottage Veranda",
    desc: "Side view of guest stay rooms and corridor.",
    src: "assets/images/real/cottage-wing-angle.jpg"
  },
  {
    id: "lawn-greenery",
    title: "Manicured Green Lawn",
    category: "exterior",
    catLabel: "Lush Lawns",
    desc: "Daytime green grounds suitable for afternoon ceremonies.",
    src: "assets/images/real/lawn-greenery.jpg"
  },
  {
    id: "entrance-arch-day",
    title: "Daytime Entrance Arch",
    category: "exterior",
    catLabel: "Grand Arch",
    desc: "Grand gateway welcoming guests from Bijauli Road.",
    src: "assets/images/real/entrance-arch-day.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEls = document.querySelectorAll('#currentYear');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Floating Navbar Scroll Effect
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('navbar-scrolled');
      } else {
        header.classList.remove('navbar-scrolled');
      }
    }, { passive: true });
  }

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

  // 4. Feature Grid: Interactive Space & Amenity Switcher (on index.html)
  const amenityCards = document.querySelectorAll('.amenity-card');
  const spaceDisplayImg = document.getElementById('spaceDisplayImg');
  const spaceBadgeText = document.getElementById('spaceBadgeText');

  amenityCards.forEach(card => {
    card.addEventListener('click', () => {
      amenityCards.forEach(c => c.classList.remove('is-active'));
      card.classList.add('is-active');

      const newImg = card.getAttribute('data-img');
      const newTitle = card.getAttribute('data-title');
      const newBadge = card.getAttribute('data-badge');

      if (spaceDisplayImg && newImg) {
        spaceDisplayImg.style.opacity = '0.35';
        setTimeout(() => {
          spaceDisplayImg.src = newImg;
          spaceDisplayImg.alt = newTitle || 'Bandhan Resort Space';
          spaceDisplayImg.style.opacity = '1';
        }, 180);
      }

      if (spaceBadgeText && newBadge) {
        spaceBadgeText.textContent = newBadge;
      }
    });
  });

  // 5. Dedicated Photo Gallery Archive Renderer (on gallery.html)
  const archiveGrid = document.getElementById('archiveGrid');
  const archiveFilterGroup = document.getElementById('archiveFilterGroup');

  if (archiveGrid) {
    // Render all 28 photo cards
    const renderArchive = (filter = 'all') => {
      archiveGrid.innerHTML = '';
      const filteredPhotos = filter === 'all' 
        ? RESORT_PHOTOS 
        : RESORT_PHOTOS.filter(p => p.category === filter);

      filteredPhotos.forEach((photo, idx) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.setAttribute('data-category', photo.category);
        card.setAttribute('data-index', idx);
        card.setAttribute('data-full', photo.src);
        card.setAttribute('data-caption', `${photo.title} — ${photo.desc}`);

        card.innerHTML = `
          <img src="${photo.src}" alt="${photo.title}" class="photo-card-img" loading="lazy">
          <div class="photo-card-overlay">
            <span class="photo-badge-cat">${photo.catLabel || photo.category}</span>
            <h3 class="photo-card-title">${photo.title}</h3>
            <p class="photo-card-desc">${photo.desc}</p>
          </div>
        `;

        card.addEventListener('click', () => {
          openLightbox(filteredPhotos, idx);
        });

        archiveGrid.appendChild(card);
      });
    };

    renderArchive('all');

    if (archiveFilterGroup) {
      const filterBtns = archiveFilterGroup.querySelectorAll('.gallery-filter-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const filter = btn.getAttribute('data-filter') || 'all';
          renderArchive(filter);
        });
      });
    }
  }

  // 6. Landing Page Gallery Filter Group (on index.html)
  const landingFilterGroup = document.getElementById('galleryFilterGroup');
  const landingGalleryItems = document.querySelectorAll('#galleryGrid .gallery-item');

  if (landingFilterGroup && landingGalleryItems.length > 0) {
    const filterBtns = landingFilterGroup.querySelectorAll('.gallery-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.getAttribute('data-filter');

        landingGalleryItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (filter === 'all' || itemCat === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 7. Accessible Lightbox Modal with Prev/Next Navigation
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  let currentPhotoList = [];
  let currentPhotoIndex = 0;

  const updateLightboxContent = (index) => {
    if (!currentPhotoList || currentPhotoList.length === 0) return;
    currentPhotoIndex = (index + currentPhotoList.length) % currentPhotoList.length;
    const item = currentPhotoList[currentPhotoIndex];

    if (lightboxImg) {
      lightboxImg.style.opacity = '0.3';
      setTimeout(() => {
        lightboxImg.src = item.src;
        lightboxImg.alt = item.title || 'Bandhan Resort Photo';
        lightboxImg.style.opacity = '1';
      }, 150);
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = item.caption || item.title || '';
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `Photo ${currentPhotoIndex + 1} of ${currentPhotoList.length}`;
    }
  };

  const openLightbox = (photoList, initialIndex = 0) => {
    if (!lightboxModal || !photoList || photoList.length === 0) return;
    currentPhotoList = photoList;
    currentPhotoIndex = initialIndex;

    updateLightboxContent(currentPhotoIndex);
    lightboxModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  const nextPhoto = () => {
    if (currentPhotoList.length > 1) {
      updateLightboxContent(currentPhotoIndex + 1);
    }
  };

  const prevPhoto = () => {
    if (currentPhotoList.length > 1) {
      updateLightboxContent(currentPhotoIndex - 1);
    }
  };

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextPhoto(); });
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevPhoto(); });

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Hook landing page gallery items into the lightbox with prev/next
  if (landingGalleryItems.length > 0) {
    const landingList = Array.from(landingGalleryItems).map(el => ({
      src: el.getAttribute('data-full'),
      title: el.getAttribute('data-caption') || el.querySelector('.gallery-item-title')?.textContent || 'Bandhan Resort',
      caption: el.getAttribute('data-caption') || ''
    }));

    landingGalleryItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        openLightbox(landingList, idx);
      });
    });
  }

  // 8. Interactive Enquiry Modal & WhatsApp Form
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

      const name = document.getElementById('guestName')?.value.trim() || '';
      const phone = document.getElementById('guestPhone')?.value.trim() || '';
      const occasion = document.getElementById('eventType')?.value || '';
      const date = document.getElementById('preferredDate')?.value || 'Flexible';
      const guests = document.getElementById('guestCount')?.value || 'Not specified';
      const notes = document.getElementById('specialMessage')?.value.trim() || 'None';

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

  // 9. Keyboard Accessibility: Escape to close modals, Arrow keys for lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeModal();
    } else if (lightboxModal && lightboxModal.classList.contains('is-active')) {
      if (e.key === 'ArrowRight') {
        nextPhoto();
      } else if (e.key === 'ArrowLeft') {
        prevPhoto();
      }
    }
  });
});
