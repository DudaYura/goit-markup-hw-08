(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__menu-open"),
    closeMenuBtn: document.querySelector(".navigation__btn-close"),
    menu: document.querySelector(".navigation__mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
