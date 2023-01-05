__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swiper": () => (/* binding */ swiper)
/* harmony export */ });
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ "./src/js/modules/functions.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _modules_input_file_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/input-file.js */ "./src/js/modules/input-file.js");
/* harmony import */ var _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pop-up.js */ "./src/js/modules/pop-up.js");
/* harmony import */ var _modules_one_news_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/one-news.js */ "./src/js/modules/one-news.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/about.js */ "./src/js/modules/about.js");
/* harmony import */ var _modules_news_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/news.js */ "./src/js/modules/news.js");

//import {preloaderF} from "./modules/preloader.js";

_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


//Слайдер  домашньої сторінки



const swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.first-section__swiper', {
   modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 37.22,
   },
   slidesPerView: 'auto',
   spaceBetween: 0,
});






//!!Підключення файлу з бургер-меню
//import "./modules/burger-menu.js";
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu();

//Підключення файлу з динамічної зміни падінгів контейнера
//import "./files/pdng-text-conteiner.js";

//Підключення файлу створення мініатюри попередньогоперегляду завантаженого фалу


//Підключення файлу застосування модального вікна


//Підключення файлу відправки форми без перезавантаження вікна
//import "./modules/sending-data.js";

//Підключення файлу one-news


//Підключення файлу about


//Підключення файлу створення мініатюри попередньогоперегляду завантаженого фалу


//Підключення слайдера для сторінки one-news 

const swiperOneNews = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.last-on-section__swiper', {  
   slidesPerView: 'auto',
});

const nextEl = document.querySelector('.swiper-button-next');
const prevEl = document.querySelector('.swiper-button-prev');
const swiperAbout = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.second-about-section__swiper', {
   modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: nextEl,//'.swiper-button-next'
      prevEl: prevEl,//'.swiper-button-prev'
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 37.22,
   },
   slidesPerView: 'auto',
   spaceBetween: 12,
});

// Нумерація навігації Swiper
const firstSlider = document.querySelector('.first-section__swiper');
const sliderAbout = document.querySelector('.second-about-section__swiper');
const titleBox = document.querySelector('.second-about-section__title-box'); // there is navigation elements
let prevNomberSlide;
let nextNomberSlide;
if (firstSlider ) {
    prevNomberSlide = firstSlider.querySelector('.swiper-button-prev');
    nextNomberSlide = firstSlider.querySelector('.swiper-button-next');
}
if (sliderAbout) {
    prevNomberSlide = titleBox.querySelector('.swiper-button-prev');
    nextNomberSlide = titleBox.querySelector('.swiper-button-next');
}

let nomberSlide;
let prev;
let next;

   //------Підключення  прелоудерa---------
   //flsFunctions.preloaderF();
   document.addEventListener('DOMContentLoaded', _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.preloaderF());
   //

window.onload = function () {

   //Приховання прелоудера
   _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.downloadedWindow()
   console.log('go');

   //----------Зміна стилю Header-------------

   _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.changeStyle();

   //--------------------------------------
   let slider = document.querySelector('.first-section__swiper');
   //let sliderAbout = document.querySelector('.second-about-section__swiper');

   if (slider || sliderAbout) {
      nomberSlide = swiper.activeIndex;
      console.log(nomberSlide);
      prev = nomberSlide;
      if (prev < 10) {
         prevNomberSlide.textContent = "0" + prev;
      } else {
         prevNomberSlide.textContent = prev;
      };

      next = nomberSlide + 2;
      if (next < 10) {
         nextNomberSlide.textContent = "0" + next;
      } else {
         nextNomberSlide.textContent = next;
      }
   }
};

swiper.on('slideChange', function () {
   nomberSlide = swiper.activeIndex;
   prev = nomberSlide;
   if (prev < 10) {
      prevNomberSlide.textContent = "0" + prev;
   } else {
      prevNomberSlide.textContent = prev;
   };

   next = nomberSlide + 2;
   if (next < 10) {
      nextNomberSlide.textContent = "0" + next;
   } else {
      nextNomberSlide.textContent = next;
   }
});

swiperAbout.on('slideChange', function () {
   nomberSlide = swiperAbout.activeIndex;
   prev = nomberSlide;
   if (prev < 10) {
      prevNomberSlide.textContent = "0" + prev;
   } else {
      prevNomberSlide.textContent = prev;
   };

   next = nomberSlide + 2;
   if (next < 10) {
      nextNomberSlide.textContent = "0" + next;
   } else {
      nextNomberSlide.textContent = next;
   }
});

//# sourceURL=webpack://gulp-2022/./src/js/app.js?