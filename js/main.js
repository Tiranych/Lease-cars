const chooseCar = document.querySelectorAll(".choose-cars__item-btn");
const carList = document.querySelectorAll(".cars__list");

chooseCar.forEach(function(element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;

    chooseCar.forEach(function(item) {
        item.classList.remove("choose-cars__item-btn--active");
    });

    target.classList.add("choose-cars__item-btn--active");

    carList.forEach(function(item) {
        item.classList.remove("cars__list--active")
    })

    document.querySelector(`#${button}`).classList.add("cars__list--active");

};

const navBtn = document.querySelector('.header__nav-btn');
const nav = document.querySelector('.header__nav-list');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('header__nav-list--active');
});

const swiper = new Swiper('.slider', {
    autoplay: {
        delay: 4000,
    },
    effect: "fade",
    pagination: {
        el: '.swiper-pagination',
    },
});