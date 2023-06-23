//Nav-links
const shopLink = document.querySelector('#shop-link');
const aboutLink = document.querySelector('#about-link');
const journalLink = document.querySelector('#journal-link');
const shopLinkMobile = document.querySelector('#shop-link-mobile');
const aboutLinkMobile = document.querySelector('#about-link-mobile');
const journalLinkMobile = document.querySelector('#journal-link-mobile');
const shop = document.querySelector('#shop');
const about = document.querySelector('#about');
const journal = document.querySelector('#journal');

shopLink.addEventListener('click', () => scrollToSection(event, shop));
aboutLink.addEventListener('click', () => scrollToSection(event, about));
journalLink.addEventListener('click', () => scrollToSection(event, journal));
shopLinkMobile.addEventListener('click', () => scrollToSection(event, shop));
aboutLinkMobile.addEventListener('click', () => scrollToSection(event, about));
journalLinkMobile.addEventListener('click', () =>
   scrollToSection(event, journal)
);

function scrollToSection(event, section) {
   event.preventDefault();
   let navHeight = 90;
   let sectionPosition = section.getBoundingClientRect().top;
   let offsetPosition = sectionPosition + window.scrollY - navHeight;
   window.scrollTo({ top: offsetPosition });
   if (nav.classList.contains('mobile-nav_open')) {
      hideMobileNav();
   }
}

function hideMobileNav() {
   nav.classList.remove('mobile-nav_open');
   fade.classList.remove('mobile-nav-fade_open');
   menuIcon.classList.remove('nav-icon_active');
   document.body.classList.remove('no-scroll');
}
