/* =============================================
   DALLAS HUB CRICKET ASSOCIATION
   Main JavaScript
   ============================================= */

// =============================================
// IMAGE LOADING
// Place your logo files in the /assets/images/ folder:
//   - dallas-hub-logo.png  (the Dallas Hub logo screenshot)
//   - usa-cricket-logo.svg (the USA Cricket logo)
// Then update the paths below to match.
// =============================================

const DH_LOGO   = 'assets/images/DallasHubLogo.png';
const USA_LOGO  = 'assets/images/usacricket-logo.svg';

function setImages(dhUrl, usaUrl) {
  if (dhUrl) {
    document.querySelectorAll(
      '#navLogo, #heroLogo, ' +
      '#fLogoHome, #fLogoAbout, #fLogoImpact, ' +
      '#fLogoPrograms, #fLogoAcademies, #fLogoTeam, #fLogoContact'
    ).forEach(el => el.src = dhUrl);
  }
  if (usaUrl) {
    document.querySelectorAll(
      '#usaHome, #usaAbout, #usaContact, ' +
      '#fUsaHome, #fUsaAbout, #fUsaImpact, ' +
      '#fUsaPrograms, #fUsaAcademies, #fUsaTeam, #fUsaContact'
    ).forEach(el => el.src = usaUrl);
  }
}

function initImages() {
  // Set image sources directly — works when opening index.html from a web server
  setImages(DH_LOGO, USA_LOGO);
}

// =============================================
// PAGE NAVIGATION (Single Page App routing)
// =============================================
function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show selected page
  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');

  // Scroll to top
  window.scrollTo(0, 0);

  // Trigger counter animation on impact page
  if (id === 'impact') {
    countersAnimated = false;
    setTimeout(animateCounters, 350);
  }
}

// =============================================
// MOBILE MENU TOGGLE
// =============================================
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (
    menu &&
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    hamburger &&
    !hamburger.contains(e.target)
  ) {
    menu.classList.remove('open');
  }
});

// =============================================
// IMPACT PAGE — COUNTER ANIMATION
// Counts numbers up rapidly using an ease-out
// cubic animation curve over 1.8 seconds.
// =============================================
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  const counters = document.querySelectorAll('#page-impact .count');
  counters.forEach(counter => {
    const target   = parseInt(counter.getAttribute('data-target'));
    const duration = 1800; // ms
    const start    = performance.now();

    function update(time) {
      const progress = Math.min((time - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', function() {
  initImages();
});
