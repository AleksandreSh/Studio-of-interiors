import * as flsFunctions from "./modules/functions.js";
//import {preloaderF} from "./modules/preloader.js";

flsFunctions.isWebp();


//Слайдер  домашньої сторінки

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export const swiper = new Swiper('.first-section__swiper', {
   modules: [Navigation, Pagination, Scrollbar],

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
      dragSize: 38,
      scaleX: 1,
   },
  
   slidesPerView: 'auto',
   spaceBetween: 0,
});

// jQuery(document).ready(function($){
	
// 	let autoPlayDelay = 1500;
	
// 	let options = {
// 		init: true,
// 		// Optional parameters
// 		loop: false,
	
// 		autoplay: {
// 			delay: autoPlayDelay
// 		},

// 		// If we need pagination
// 		/*pagination: {
// 			el: '.swiper-pagination',
// 			type: 'progressbar'
// 		},*/

//     	// Navigation arrows
//     	navigation: {
// 			nextEl: '.swiper-button-next',
// 			prevEl: '.swiper-button-prev',
//     	},
//   	};
	
// 	let mySwiper = new Swiper ('.swiper-container', options);
	
// 	let slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
// 	let widthParts = 100 / slidersCount;
	
// 	$('.swiper-counter .total').html(slidersCount);
// 	for(let i=0; i<slidersCount; i++){
// 		$('.swiper-progress-bar .progress-sections').append('<span></span>');
// 	}
	
// 	function initProgressBar(){
// 		let calcProgress = (slidersCount-1) * (autoPlayDelay + mySwiper.params.speed);
//         calcProgress += autoPlayDelay;
// 		$('.swiper-progress-bar .progress').animate({
// 			width: '100%'
// 		}, calcProgress, 'linear');
// 	}
	
// 	initProgressBar();
	
// 	mySwiper.on('slideChange', function () {
// 		let progress = $('.swiper-progress-bar .progress');
		
// 		$('.swiper-counter .current').html(this.activeIndex + 1);
		
// 		if( 
// 			( 
// 				this.progress == -0 || (this.progress == 1 && this.params.loop) 
// 			) && !progress.parent().is('.stopped')
// 		){
// 			progress.css('width', '0');
// 			if(this.activeIndex == 0){
//             	initProgressBar();
//             }
// 		}
		
// 		if(progress.parent().is('.stopped')){		   
// 			progress.animate({
// 				'width': Math.round(widthParts * (this.activeIndex + 1)) + '%'
// 			}, this.params.speed, 'linear');
// 		}
// 	});
	
// 	mySwiper.on('touchMove', function () {
// 		$('.swiper-progress-bar .progress').stop().parent().addClass('stopped');
// 	});
	
	
// });

//!!Підключення файлу з бургер-меню
//import "./modules/burger-menu.js";
flsFunctions.burgerMenu();

//Підключення файлу з динамічної зміни падінгів контейнера
//import "./files/pdng-text-conteiner.js";

//Підключення файлу створення мініатюри попередньогоперегляду завантаженого фалу
import "./modules/input-file.js";

//Підключення файлу застосування модального вікна
import "./modules/pop-up.js";


//Підключення файлу відправки форми без перезавантаження вікна
// import "./modules/sending-data.js";

//Підключення файлу one-news
import "./modules/one-news.js";

//Підключення файлу about
import "./modules/about.js";

//Підключення файлу створення мініатюри попередньогоперегляду завантаженого фалу
import "./modules/news.js";

//Підключення слайдера для сторінки one-news 

const swiperOneNews = new Swiper('.last-on-section__swiper', {  
   slidesPerView: 'auto',
});

const nextEl = document.querySelector('.swiper-button-next');
const prevEl = document.querySelector('.swiper-button-prev');
const swiperAbout = new Swiper('.second-about-section__swiper', {
   modules: [Navigation, Pagination, Scrollbar],

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
   //  document.addEventListener('DOMContentLoaded', flsFunctions.preloaderF());
   //

window.onload = function () {

   //Приховання прелоудера
   // flsFunctions.downloadedWindow()
   // console.log('go');

   //----------Зміна стилю Header-------------

   flsFunctions.changeStyle();

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