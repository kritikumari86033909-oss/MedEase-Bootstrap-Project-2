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








const blogPrevBtn = document.querySelector('.swiper-button-prev-blog');
  const blogNextBtn = document.querySelector('.swiper-button-next-blog');

  if (document.querySelector('.blog-swiper')) {
    new Swiper('.blog-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1.1,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next-blog',
        prevEl: '.swiper-button-prev-blog',
      },
      pagination: {
        el: '.swiper-pagination-blog',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3.2, spaceBetween: 24 }
      },
      on: {
        slidePrevTransitionStart: () => {
          if (blogPrevBtn && blogNextBtn) {
            blogPrevBtn.classList.add('active');
            blogNextBtn.classList.remove('active');
          }
        },
        slideNextTransitionStart: () => {
          if (blogPrevBtn && blogNextBtn) {
            blogNextBtn.classList.add('active');
            blogPrevBtn.classList.remove('active');
          }
        },
      }
    });

    if (blogPrevBtn && blogNextBtn) {
      blogPrevBtn.addEventListener('click', () => {
        blogPrevBtn.classList.add('active');
        blogNextBtn.classList.remove('active');
      });
      blogNextBtn.addEventListener('click', () => {
        blogNextBtn.classList.add('active');
        blogPrevBtn.classList.remove('active');
      });
    }
  

};





// new Swiper(".testimonialSwiper", {
//   modules: [Navigation, Pagination],

//   loop: false,
//   speed: 700,
//   spaceBetween: 24,

//   navigation: {
//     nextEl: ".testimonial-next",
//     prevEl: ".testimonial-prev",
//   },

//   pagination: {
//     el: ".testimonial-pagination",
//     clickable: true,
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 16,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1200: {
//       slidesPerView: 3.1,
//       spaceBetween: 24,
//     }
//   }
// });

// new Swiper(".testimonialSwiper", { 
//   modules: [Navigation, Pagination],

//   loop: false,
//   speed: 700,
//   spaceBetween: 24,

//   navigation: {
//     nextEl: ".testimonial-next",
//     prevEl: ".testimonial-prev",
//   },

//   pagination: {
//     el: ".testimonial-pagination",
//     clickable: true,
//   },

// breakpoints: {
//   0: {
//     slidesPerView: 1.2,
//     spaceBetween: 16,
//   },
//   576: {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
//   992: {
//     slidesPerView: 3,
//     spaceBetween: 20,
//   },
//   1200: {
//     slidesPerView: 4,
//     spaceBetween: 24,
//   }
// })

new Swiper(".testimonialSwiper", {
  modules: [Navigation, Pagination],

  loop: false,
  speed: 700,
  spaceBetween: 24,
  grabCursor: true,
  watchOverflow: true,

  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },

  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },

  on: {
    init(swiper) {
      document.querySelector(".testimonial-prev")?.classList.remove("active");
      document.querySelector(".testimonial-next")?.classList.add("active");
    },

    slideChange(swiper) {
      const prev = document.querySelector(".testimonial-prev");
      const next = document.querySelector(".testimonial-next");

      if (swiper.isBeginning) {
        prev.classList.remove("active");
        next.classList.add("active");
      } else if (swiper.isEnd) {
        next.classList.remove("active");
        prev.classList.add("active");
      } else {
        prev.classList.add("active");
        next.classList.add("active");
      }
    },
  },
});
