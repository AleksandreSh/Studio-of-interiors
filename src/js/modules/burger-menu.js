const iconMenu = document.querySelector('.menu__burger');
if (iconMenu){
   const menuBoxList = document.querySelector('.menu__box-list');
   const headerZero = document.querySelector('.header__zero');
   const firstSection = document.querySelector('.first-section__swiper');
   const menuBurgerIcon = document.querySelector('.menu__burger-icon');
   const menyHeading = document.querySelector('.menu__heading');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuBurgerIcon.classList.toggle('_active');
      headerZero.classList.toggle('_active');
      firstSection.classList.toggle('_active');
      menuBoxList.classList.toggle('_active');
      menyHeading.classList.toggle('_active');
   })
}
//////////////////
window.addEventListener('DOMContentLoaded', () => {
   const header = document.querySelector('.header');
   const headerLogo = document.querySelector('.header__logo a img');
   const isDarkTheme = header.classList.contains('header__dark');
   const hamburger = document.querySelector('.hamburger');
   const burger = document.querySelector('.burger');
   const sidemenuTitle = document.querySelector('.hamburger__title');
   const sidemenu = document.querySelector('.sidemenu');
   const headerBurger = document.querySelector('.header__action-burger');

   const toggleMenu = () => {
       burger.classList.toggle('burger__active');
       sidemenu.classList.toggle('show');
       sidemenuTitle.classList.toggle('hamburger__title__active');
       document.body.classList.toggle('overflow');
       headerBurger.classList.toggle('header__action-burger__active');

       if (isDarkTheme && !header.classList.contains('header__show')) {
           header.classList.toggle('header__dark');
           headerLogo.src = header.classList.contains('header__dark')
               ? 'icons/Logo-dark.svg'
               : 'icons/Logo.svg';
       } else {
           return;
       }
   };

   hamburger.addEventListener('click', toggleMenu);
   headerBurger.addEventListener('click', toggleMenu);

   // * ---------------------------------------

   let lastScroll = 0;
   const scrollPosition = () => {
       return window.pageYOffset || document.documentElement.scrollTop;
   };

   const containHide = () => {
       return header.classList.contains('header__hide');
   };

   window.addEventListener('scroll', () => {
       if (scrollPosition() > lastScroll && !containHide()) {
           header.classList.add('header__hide');
       } else if (scrollPosition() < lastScroll && containHide()) {
           header.classList.remove('header__hide');
           header.classList.add('header__dark');
           headerLogo.src = header.classList.contains('header__dark')
               ? 'icons/Logo-dark.svg'
               : 'icons/Logo.svg';
           header.classList.add('header__show');
       }

       if (scrollPosition() < 50) {
           if (!isDarkTheme) {
               header.classList.remove('header__dark');
               headerLogo.src = header.classList.contains('header__dark')
                   ? 'icons/Logo-dark.svg'
                   : 'icons/Logo.svg';
           }
           header.classList.remove('header__show');
       }

       lastScroll = scrollPosition();
   });

   //  * -------------------

   const headerLang = document.querySelector('.header__lang span');
   const headerSecondLang = document.querySelector('.header__lang-option');

   headerSecondLang.addEventListener('click', () => {
       const stk = headerLang.innerHTML;
       headerLang.innerHTML = headerSecondLang.innerHTML;
       headerSecondLang.innerHTML = stk;
   })
   
});

