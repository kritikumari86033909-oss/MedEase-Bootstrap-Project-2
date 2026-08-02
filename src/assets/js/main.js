// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".expertiseSwiper", {

    modules: [Navigation, Pagination],

    loop: false,

    speed: 700,

    spaceBetween: 24,

    grabCursor: true,

    watchOverflow: true,

    navigation: {

        nextEl: ".swiper-button-next-custom",

        prevEl: ".swiper-button-prev-custom",

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        0: {

            slidesPerView: 1.15,

            spaceBetween: 16,

        },

        576: {

            slidesPerView: 1.35,

            spaceBetween: 18,

        },

        768: {

            slidesPerView: 2,

            spaceBetween: 20,

        },

        992: {

            slidesPerView: 2.4,

            spaceBetween: 22,

        },

        1200: {

            slidesPerView: 3.1,

            spaceBetween: 24,

        },

        1400: {

            slidesPerView: 3.1,

            spaceBetween: 24,

        }

    }

});




new Swiper(".testimonialSwiper", {

    modules: [Navigation, Pagination],

    loop: true,

    speed: 700,

    grabCursor: true,

    watchOverflow: true,

    centeredSlides: false,

    autoHeight: false,

    spaceBetween: 20,

    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        // Mobile
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },

        // Tablet
        576: {
            slidesPerView: 1.5,
            spaceBetween: 18,
        },

        // Tablet Landscape
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        // Laptop
        992: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },

        // Desktop
        1200: {
            slidesPerView: 3.35,
            spaceBetween: 16,
        }

    }

});
