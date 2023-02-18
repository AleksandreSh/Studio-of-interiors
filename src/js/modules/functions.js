/* Превірка підтримки webp, додавання класу webp або no-webp для HTML */
export function isWebp() {
	// Превірка підтримки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Додавання класу _webp або _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
//------------------------------
//Підключення  прелоудерa

export function preloaderF() {
   const preloader = document.querySelector('.preloader');
   if (preloader) {
      const mediaFiles = document.querySelectorAll('img, video');
      let i = 0;
      console.log(mediaFiles.length);
      const variableElement = document.querySelector('.preloader__variable-element');
      variableElement.textContent = `0%`;
      //Array.from(mediaFiles)
      mediaFiles.forEach((file) => {//, index
         file.onload = () => {
            console.log(file);
            i++;
            
            let percent = ((i * 100) / mediaFiles.length).toFixed(1);
            console.log(i);
            variableElement.textContent = `${percent}%`;
            if (percent == 100) {
               clearInterval(timeout);
               variableElement.classList.remove('space');
               variableElement.textContent = `LIGHT`;         
            }
            if (i === mediaFiles.length) {
               window.setTimeout(function () {
                  preloader.classList.add('loaded_hiding');
               }, 500);
               window.setTimeout(function () {
                  preloader.classList.add('loaded');
                  preloader.classList.remove('loaded_hiding');
               }, 1000);
            }
            
         }
      })
   }
}

//Приховання прелоудера
export function downloadedWindow() {
   const preloader = document.querySelector('.preloader');
   console.log(preloader);
   if (preloader) {
      
         window.setTimeout(function () {
            preloader.classList.add('loaded_hiding');
         }, 500);
         window.setTimeout(function () {
            preloader.classList.add('loaded');
            preloader.classList.remove('loaded_hiding');
         }, 1000);
      
   }
   
}

//!!Затримка по часу
//export function preloaderF() {
//   const preloader = document.querySelector('.preloader');
//   if (preloader) {
      
//   const delay = 2000; //!Затримка
//   const delayTransition = delay - 500;
//   const loadingTime = delayTransition - 500;
//   loadingIllustration(loadingTime);
   //window.setTimeout(function () {
   //   preloader.classList.add('loaded_hiding');
   //}, delayTransition);
   //window.setTimeout(function () {
   //   preloader.classList.add('loaded');
   //   preloader.classList.remove('loaded_hiding');
   //}, delay);
//}
//}

//Відсоток завантаження для прелоудера
//export 
//function loadingIllustration(loadingTime) {
//   const variableElement = document.querySelector('.preloader__variable-element');
//   let percent = 0;
//   let delayStep = (loadingTime - 500) / 5;
//   variableElement.textContent = `${percent}%`;
//   let text = variableElement.textContent;

//   let timeout;
//   timeout = setInterval(pageLoadin, delayStep);

  
//   function pageLoadin() {
//      percent = percent + 20;
//      variableElement.style.marginLeft = "5";
//      variableElement.textContent = `   ${percent}%`;
//      let text = variableElement.textContent;
      //if (percent == 100) {
      //   clearInterval(timeout);
      //   variableElement.classList.remove('space');
      //   variableElement.textContent = `LIGHT`;         
      //}
//   }
//}

//----------------------------------
//Підключення файлу з бургер-меню
export function burgerMenu() {   
   const iconMenu = document.querySelector('.menu__burger');
   if (iconMenu){
      const menuBoxList = document.querySelector('.menu__box-list');
      const headerZero = document.querySelector('.header__zero');
      //const firstSection = document.querySelector('.first-section__swiper');
      //!!  Прибрав після помилки на сторінці 'News.html'. Можливо додав помилково
      const menuBurgerIcon = document.querySelector('.menu__burger-icon');
      const menyHeading = document.querySelector('.menu__heading');
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         menuBurgerIcon.classList.toggle('_active');
         headerZero.classList.toggle('_active');
         //firstSection.classList.toggle('_active');
          //!!  Прибрав після помилки на сторінці 'News.html'. Можливо додав помилково
         menuBoxList.classList.toggle('_active');
         menyHeading.classList.toggle('_active');
      })
   }
}

//----------Зміна стилю Header

export function changeStyle() {
   const pageNews = document.querySelector('.page-news');
   const pageProjects = document.querySelector('.page-projects');
   const header = document.querySelector('header');
   const pageOneNews = document.querySelector('.page-one-news');
   const pageAbout = document.querySelector('.page-about');
   if (pageNews || pageProjects || pageOneNews || pageAbout) {
      header.classList.add("black")
   }
}