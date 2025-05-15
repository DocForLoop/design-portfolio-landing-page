import './scss/style.scss';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
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

btnPrev!.addEventListener('click', () => {
  splide.go('<');
});

btnNext!.addEventListener('click', () => {
  splide.go('>');
})
});