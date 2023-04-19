let isMenuToggle = false;

(function () {
  const resizeToFit = () => {
    const pageTitle = document.querySelector('#block-gallery-page-title h1');
    const pageWrapper = document.querySelector('#page-title-wrapper');

    if (!pageTitle || !pageWrapper) return;

    let fontSize = parseInt(getComputedStyle(pageTitle).fontSize);

    if (pageTitle.offsetHeight > pageWrapper.offsetHeight) {
      fontSize--;
      pageTitle.style.fontSize = `${fontSize}px`;
      pageTitle.style.lineHeight = `${fontSize}px`;

      resizeToFit();
    }
  }

  const initResize = () => {
    const pageTitle = document.querySelector('#block-gallery-page-title h1');
    if (!pageTitle) return;

    const windowWidth = window.innerWidth;
    let fontSize = `7rem`;

    if (windowWidth < 550) {
     fontSize = `4rem`;
    }

    pageTitle.style.fontSize = fontSize;
    pageTitle.style.lineHeight = fontSize;
    resizeToFit();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initResize();
  });

  window.addEventListener("resize", (event) => {
    initResize();
  });
})();

const toggleMenu = () => {
  const menu = document.querySelector('.menu-container');

  if (!isMenuToggle) {
    menu.classList.add('active');
    isMenuToggle = true;
  } else {
    menu.classList.remove('active');
    isMenuToggle = false;
  }
}
