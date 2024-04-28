/**
 * sliders.js
 * 
 * Copyright (c) 2023 Moiseev Evgeny
 * 
 * Скрипты инициализации и обработки слайдеров.
 */


/**
 * Инициализация слайдеров по атрибуту data-swiper.
 * 
 * Используется библиотека swiper.js: assets/js/libs/swiper.min.js
 * Документация: https://swiperjs.com/swiper-api
 * Примеры: https://swiperjs.com/demos
 * 
 * Требуется подключение стилей: assets/scss/_swiper.scss
 * 
 * Данный скрипт необходим для того, чтобы не привязываться к стандартным классам свипер-слайдера. На сайте слайдера в документации предоставляется HTML разметка c определёнными классами, без которых он не буедет функционировать. Скрипт же просто расставляет эти обязательные классы и поэтому нет необходимости о них думать. Структура HTML разметки слайдера должна быть такой же, как и указано в документации, но классы могут быть какими угодно. Необходимые поставятся автоматически.
 */
document.querySelectorAll('[data-swiper]').forEach(slider => {
	slider.classList.add('swiper');

	if (slider.classList.contains('swiper-bild')) return;

	const sliderWrapper = slider.firstElementChild;
	const sliderItems = Array.from(sliderWrapper.children);

	sliderWrapper.classList.add('swiper-wrapper');

	sliderItems.forEach(slide => slide.classList.add('swiper-slide'));

	slider.classList.add('swiper-bild');
});


/**
 * Инициализация главного слайдера
 */
const mainSlider = new Swiper('.main-slider', {
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 8000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	speed: 1500,
	spaceBetween: 0,
	slidesPerView: 1,
	pagination: {
		el: '.main-slider__pagination',
		bulletClass: 'main-slider__bullet',
		bulletActiveClass: '_active',
		clickable: true,
	},
});


/**
 * Инициализация слайдера партнеров
 */
const partnersSlider = new Swiper('.partners-slider', {
	speed: 1500,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.partners-slider__arrow_prev',
		nextEl: '.partners-slider__arrow_next',
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: { spaceBetween: 20 },
		480: { spaceBetween: 30 },
		768: { spaceBetween: 40 },
		992: { spaceBetween: 50 },
    1300: { spaceBetween: 60 },
    1550: { spaceBetween: 70 }
	}
});
