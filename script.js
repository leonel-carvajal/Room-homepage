const navbar = document.getElementById('navbar')
const ham = document.getElementById('ham')
const slider = document.getElementById('slider')
const modal = document.getElementById('modal')
ham.addEventListener('click', () => {
  navbar.classList.toggle('show')
  modal.classList.toggle('show-modal')
  if (navbar.classList.contains('navbar') && navbar.classList.contains('show')) {
    ham.children[0].src = '/images/icon-close.svg'
  } else {
    ham.children[0].src = '/images/icon-hamburger.svg'
  }
})

const slide = () => {
  new Splide('.splide',
    {
      type: 'loop',
      focus: 'center',
      perPage: 1,
      perMove: 1,
      keyboard: true,
      speed: 1000
    }
  ).mount(
  );
}
window.addEventListener('DOMContentLoaded',slide)