const containerSection = document.querySelector('.second-about-section__container');
const gridItemSliderBoxAbout = document.querySelector('.second-about-section__swiper-box');
const sliderBoxAbout = document.querySelector('.second-about-section__swiper');
function sliderBoxWidth() { 
   if (sliderBoxAbout && containerSection && gridItemSliderBoxAbout) {
      const widthContainerSection = containerSection.clientWidth;
      const widthGridItemSliderBoxAbout = gridItemSliderBoxAbout.clientWidth;
      const pageWidth = document.documentElement.scrollWidth;
      const prTextContainerSection = window.getComputedStyle(containerSection).getPropertyValue('padding-right');
      let prContainerSection = prTextContainerSection.slice(0, -2);
      prContainerSection = Number(prContainerSection);
      const widthSliderOneNews = widthGridItemSliderBoxAbout + ((pageWidth - widthContainerSection) / 2) + prContainerSection;
      sliderBoxAbout.style.width = widthSliderOneNews + "px"; 
   }  
}
sliderBoxWidth();
window.addEventListener('resize', sliderBoxWidth);