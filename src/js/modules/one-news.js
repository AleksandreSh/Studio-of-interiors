const sliderBox = document.querySelector('.last-on-section__slider-box');
const sliderOneNews = document.querySelector('.last-on-section__swiper');
function sliderWidth() { 
   if (sliderBox || sliderOneNews) {
      const widthSliderBox = sliderBox.clientWidth;
      const pageWidth = document.documentElement.scrollWidth;
      const widthSliderOneNews = widthSliderBox + ((pageWidth - widthSliderBox) / 2);
      sliderOneNews.style.width = widthSliderOneNews + "px"; 
   }  
}
sliderWidth();
window.addEventListener('resize', sliderWidth);