// import './style.scss';

const burgerBlock = document.querySelector('.burger-block');
const headerBurger = document.querySelector('.header__burger');
const headerBlockMobile = document.querySelector('.header-block--mobile');


burgerBlock.addEventListener("click", function () {
  headerBurger.classList.toggle('active');
  headerBlockMobile.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

