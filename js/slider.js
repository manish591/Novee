let moveSliderLeft = document.querySelector('.move-left');
let moveSliderRight = document.querySelector('.move-right');
let carousel = document.querySelector('.carousel');

let value = 0;

const moveCarouselLeft = e => {
    value === 0 ? value = 80 : value -= 20;
    console.log(value)
    carousel.style.transform = `translateX(-${value}%)`;
}

const moveCarouselRight = e => {
    value === 80 ? value = 0 : value += 20;
    console.log(value)
    carousel.style.transform = `translateX(-${value}%)`;
}

moveSliderRight.addEventListener('click', moveCarouselRight);
moveSliderLeft.addEventListener('click', moveCarouselLeft);