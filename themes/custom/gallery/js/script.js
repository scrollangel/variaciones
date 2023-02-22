let isMenuToggle = false;

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

