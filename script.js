"use strict";

const iconMenu = document.querySelector('.header__burger');
if (iconMenu){
   const menuBody = document.querySelector('.menu__body');
   const headerZero = document.querySelector('.header__zero');
   const menyHeading = document.querySelector('.menu__heading');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      menyHeading.classList.toggle('_active');
   })
}

const swiper = new Swiper('.top-nft__swiper', {
   slidesPerView: 'auto',
   spaceBetween: '35.37',
   centeredSlides: true,
 });

 
// ------------ T A B 's -----------------
 let tab;
 let tabContent;
 
 //Для section top-selers. Зміна колоьору
 const valueGrowth = document.getElementsByClassName('seler-card__growth');
 
 
 //Для T A B 's
 window.onload = function tabS() {
   tab = document.getElementsByClassName('colection-section__tab');
   tabContent = document.getElementsByClassName('colection-section__example');
   hideTabContents(1);

   //Для section top-selers. Зміна колоьору
   for (let i = 0; i < valueGrowth.length; i++) {
      let x = valueGrowth[i].innerHTML;
      let y = x.slice(0,-1);
      if (y>0) {
         valueGrowth[i].classList.add("_green");
      } else {
         valueGrowth[i].classList.add("_red")
      }      
   }
};

function hideTabContents(a) {
   for (let i = a; i < tabContent.length; i++) {
      tab[i].classList.remove('_active-bottom');
      tabContent[i].style.display = "none"; 
   }   
}
let tabs = document.querySelector('.colection-section__tabs');
let tabs1 = document.getElementById('colection-section__tabs1');
tabs.onclick = function (event) {
   let target = event.target;
   if (target.className == 'colection-section__tab') {
      for (let i = 0; i < tab.length; i++) {    
         if (target == tab[i]) {
            showTabContent(i);
            break;
         }    
         
      }
   }
   
};
function showTabContent(b) {
      hideTabContents(0);
      tab[b].classList.add('_active-bottom');
      tabContent[b].style.display = 'block';
   //   if (tab[b].classList.contains('_active-bottom') = false) {
   //}
}

const swiperArtWorkers = new Swiper('.art-workers__swiper', {
   slidesPerView: 'auto',
   spaceBetween: '35.37',
   centeredSlides: true,
 });

// ------------Для footer. Випадаючий список--------------

//При зміні розширення екрана потріно перезавантаження сторінки. 
//Тож швидше за все при повертанні телефону буде працювати не коректно.
//Краще зробити все через класи або продумати іншу логіку.
//Вирішив проблему через медіазапит

//Для footer. Випадаючий список
const openList = document.getElementsByClassName('footer__item__open');
const openListLeft = document.getElementsByClassName('footer__opener-left');
const openListRight = document.getElementsByClassName('footer__opener-right');
const openListTitle = document.getElementsByClassName('footer__title');
const footerList = document.getElementsByClassName('footer__list');
const footerOpenerRight = document.getElementsByClassName('footer__opener-right');
const footerOpenerLeft = document.getElementsByClassName('footer__opener-left');


let dropdown = document.querySelector('.footer__dropdown'); 
//let tabs1 = document.getElementById('colection-section__tabs1');
dropdown.onclick = function (e) {
   if (window.matchMedia("(max-width: 1024px)").matches) {
      let target = e.target;
      if (target.className == 'footer__title' || 'footer__item__open') {
         for (let i = 0; i < openList.length; i++) {    
            if (target == openListTitle[i]) {
               showFooterList(i);
               break;
            }  else if (target == openList[i]) {
               showFooterList(i);
               break;
            } else if (target == openListLeft[i]) {
               showFooterList(i);
               break;
            }  else if (target == openListRight[i]) {
               showFooterList(i);
               break;
            }               
         }
      }   
   }
};
function showFooterList(open) {
   let styleFooterList = window.getComputedStyle(footerList[open]);
   let display = styleFooterList.getPropertyValue('display');
   if (display == "none") {
      for (let i = 0; i < footerList.length; i++) { 
         footerList[i].style.display = "none";
         footerOpenerRight[i].classList.remove('_open');
         footerOpenerLeft[i].classList.remove('_open');
      };
      footerList[open].style.display = "block";
      footerOpenerRight[open].classList.add('_open');
      footerOpenerLeft[open].classList.add('_open');
   } else {
      footerList[open].style.display = "none";
      footerOpenerRight[open].classList.remove('_open');
      footerOpenerLeft[open].classList.remove('_open');
   }   
}
const mql = window.matchMedia('(min-width: 1025px)');
function screenTest(e) {
   if (e.matches) {
      for (let i = 0; i < footerList.length; i++) { 
         footerList[i].style.display = "block";
      };
   }
      else {
         for (let i = 0; i < footerList.length; i++) { 
            footerList[i].style.display = "none";
         };
      }
}

mql.addEventListener('change', screenTest);