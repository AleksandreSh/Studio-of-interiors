const tabs = document.getElementsByClassName('tabs__tab');
const cards = document.getElementsByClassName('card');
const tabsBox = document.querySelector('.tabs');
const tabsList = document.querySelector('.tabs__list');
const openingBox = document.querySelector('.tabs__opening-box');
const selectTab = document.querySelector('.tabs__select-tab');

if (tabs.length > 0) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.addEventListener("click", showCard);
    }
   // tabsBox.addEventListener("click", showTabs);
    openingBox.addEventListener("click", showTabs);
}

function showCard(e) {
   let valueDisplay = window.getComputedStyle(openingBox).getPropertyValue('display');
   if (valueDisplay != "none") {
      tabsList.style.display = "none";      
   } 
   let target = e.target;
   for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');      
   }
   target.classList.add('active-tab'); 
   let innerTarget = target.innerHTML;
   selectTab.innerHTML = innerTarget;
   const whichCard = target.getAttribute('id');
   for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('not-active'); 
   }
   if (whichCard != "all") {
      for (let i = 0; i < cards.length; i++) {
         let cardClass = cards[i].classList;
         let namberOfClasses = 0;
         for (let index = 0; index < cardClass.length; index++) {
            if (cardClass[index] != whichCard) {
               namberOfClasses = namberOfClasses + 1;
            }
         }
         if (namberOfClasses == cardClass.length) {
            cards[i].classList.add('not-active'); 
         }
      }      
   } 
}

function showTabs() {
   let valueDisplay = window.getComputedStyle(tabsList).getPropertyValue('display');
   if (valueDisplay == "none") {
      tabsList.style.display = "flex";
   } 
}

//Після взаємодії з випадаючим списком tabs та поверненні до ширини вікна де пропадає випадаючий список, tabs не відображаються. Для цього використовую спостерігач подій на відповідність медіазапиту
const mql = window.matchMedia('(min-width: 601px)');
function screenTest(e) {
   if (e.matches) {
      
      tabsList.style.display = "flex"; 
   }
      else {
         tabsList.style.display = "none"; 
      }
}

mql.addEventListener('change', screenTest);