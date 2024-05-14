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
	navigation: {
		prevEl: '.main-slider__arrow_prev',
		nextEl: '.main-slider__arrow_next',
		disabledClass: "_disabled",
	},
});



/**
 * Инициализация слайдера партнеров
 */
const partnersSlider = new Swiper('.partners-slider', {
	speed: 1500,
	spaceBetween: 70,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.partners-slider__arrow_prev',
		nextEl: '.partners-slider__arrow_next',
		disabledClass: "_disabled",
	},
});


/**
 * Инициализация слайдера
 */
const productGallerySmall = new Swiper('.product-gallery-small', {
	speed: 1500,
	spaceBetween: 12,
	slidesPerView: 'auto',
	direction: "vertical",
	navigation: {
		prevEl: '.product-gallery-small__arrow_prev',
		nextEl: '.product-gallery-small__arrow_next',
		disabledClass: "_disabled",
	},
});


/**
 * Инициализация слайдера
 */
const productGalleryBig = new Swiper('.product-gallery-big', {
	speed: 1500,
	spaceBetween: 12,
	slidesPerView: 1,
	thumbs: {
		swiper: productGallerySmall,
	},
});


/**
 * Инициализация слайдера
 */
const seealsoSlider = new Swiper('.seealso-slider', {
	speed: 1500,
	spaceBetween: 12,
	navigation: {
		prevEl: '.seealso__arrow_prev',
		nextEl: '.seealso__arrow_next',
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		480: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		992: { slidesPerView: 3 },
    1201: { slidesPerView: 3 },
		1401: { slidesPerView: 4 }
	}
});


/**
 * Инициализация слайдера
 */
const projectSlider = new Swiper('.project-slider', {
	speed: 1500,
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 8000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
	}
});