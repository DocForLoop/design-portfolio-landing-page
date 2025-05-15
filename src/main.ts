import './scss/style.scss';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Splide from '@splidejs/splide';

const splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  gap: '2rem',
  start: 2,
  focus: 'center',
  arrows: false,
  speed: 1200,
  breakpoints: {
    767: {
      perPage: 1,
      gap: '1rem',
      start: 2,
    },
  },
});

splide.mount();

const btnPrev = document.querySelector('.splide__btn--prev');
const btnNext = document.querySelector('.splide__btn--next');

const goToPrevSlide = () => splide.go('<');
const goToNextSlide = () => splide.go('>');

btnPrev!.addEventListener('click', goToPrevSlide);
btnNext!.addEventListener('click', goToNextSlide);