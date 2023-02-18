
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let form;

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function startPopup (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
         
      })      
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   let i=0
   while (i<1) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      
      if (popupActive) {
         form = popupActive.querySelector('form');
         if (form) {
            let error = formValidate();
            if (error === 0) {
               form.reset();//Очистка форми
               prviewFileRemove();//Видалення мініатюри файла
               popupClose(popupActive, false)
            } else {
               alert('Fill in the required fields!');
               break;
            }
         } else {
            popupClose(popupActive, false)
         }           
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.close-area')) {
            popupClose(e.target.closest('.popup'));
         }  
      })      
      i = 1;
   }   
}
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnlock();
      }
   }
}

// function bodyLock() {
//    const lockPaddingVaue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
//    if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//          const el = lockPadding[index];
//          el.style.paddingRight = lockPaddingVaue;
//       }
//    }
//    body.style.paddingRight = lockPaddingVaue;
//    body.classList.add('_lock');

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    }, timeout);
// }

// function bodyUnlock() {
//    setTimeout(function () {
//       if (lockPadding.length > 0) {       
//          for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';  
//          }
//       }
//       body.style.paddingRight = '0px';
//       body.classList.remove('_lock');
//    }, timeout);

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    },timeout);
// }

document.addEventListener('keydown', function name(e) {
   //const esc = Escape;
   if (e.code == 'Escape') {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
})

function formValidate() {
   let error = 0;
   let formReq = document.querySelectorAll('._req');

   for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if(emailTest(input)){
            formAddError(input);
            error++;
        }
      } else {
         if (input.value === ""){
             formAddError(input);
             error++;
         }
     }
   }
   return error;
}

function formAddError(input) {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
}
function formRemoveError(input) {
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
}
function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//Видалення мініатюри файла
function prviewFileRemove () {
   const preview = document.querySelector('.popup__preview');
   while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
   }
}





// testWebP((function(support) {
//    let className = true === support ? "webp" : "no-webp";
//    document.documentElement.classList.add(className);
// }));

let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
};
let bodyUnlock = (delay = 500) => {
let body = document.querySelector("body");
if (bodyLockStatus) {
   let lock_padding = document.querySelectorAll("[data-lp]");
   setTimeout((() => {
       for (let index = 0; index < lock_padding.length; index++) {
           const el = lock_padding[index];
           el.style.paddingRight = "0px";
       }
       body.style.paddingRight = "0px";
       document.documentElement.classList.remove("lock");
   }), delay);
   bodyLockStatus = false;
   setTimeout((function() {
       bodyLockStatus = true;
   }), delay);
}
};
let bodyLock = (delay = 500) => {
let body = document.querySelector("body");
if (bodyLockStatus) {
   let lock_padding = document.querySelectorAll("[data-lp]");
   for (let index = 0; index < lock_padding.length; index++) 
       
       el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
   }
   body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
   document.documentElement.classList.add("lock");
   bodyLockStatus = false;
   setTimeout((function() {
       bodyLockStatus = true;
   }), delay);
}


function menuInit() {
if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
   if (bodyLockStatus && e.target.closest(".icon-menu")) {
       bodyLockToggle();
       document.documentElement.classList.toggle("menu-open");
   }
}));
}
function functions_FLS(message) {
setTimeout((() => {
   if (window.FLS) console.log(message);
}), 0);
}
class Popup {
constructor(options) {
   let config = {
       logging: true,
       init: true,
       attributeOpenButton: "data-popup",
       attributeCloseButton: "data-close",
       fixElementSelector: "[data-lp]",
       youtubeAttribute: "data-popup-youtube",
       youtubePlaceAttribute: "data-popup-youtube-place",
       setAutoplayYoutube: true,
       classes: {
           popup: "popup",
           popupContent: "popup__content",
           popupActive: "popup_show",
           bodyActive: "popup-show"
       },
       focusCatch: true,
       closeEsc: true,
       bodyLock: true,
       hashSettings: {
           location: true,
           goHash: true
       },
       on: {
           beforeOpen: function() {},
           afterOpen: function() {},
           beforeClose: function() {},
           afterClose: function() {}
       }
   };
   this.youTubeCode;
   this.isOpen = false;
   this.targetOpen = {
       selector: false,
       element: false
   };
   this.previousOpen = {
       selector: false,
       element: false
   };
   this.lastClosed = {
       selector: false,
       element: false
   };
   this._dataValue = false;
   this.hash = false;
   this._reopen = false;
   this._selectorOpen = false;
   this.lastFocusEl = false;
   this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
   this.options = {
       ...config,
       ...options,
       classes: {
           ...config.classes,
           ...options?.classes
       },
       hashSettings: {
           ...config.hashSettings,
           ...options?.hashSettings
       },
       on: {
           ...config.on,
           ...options?.on
       }
   };
   this.bodyLock = false;
   this.options.init ? this.initPopups() : null;
}
initPopups() {
   this.popupLogging(`Проснулся`);
   this.eventsPopup();
}
eventsPopup() {
   document.addEventListener("click", function(e) {
       const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
       if (buttonOpen) {
           e.preventDefault();
           this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
           this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
           if ("error" !== this._dataValue) {
               if (!this.isOpen) this.lastFocusEl = buttonOpen;
               this.targetOpen.selector = `${this._dataValue}`;
               this._selectorOpen = true;
               this.open();
               return;
           } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
           return;
       }
       const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
       if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
           e.preventDefault();
           this.close();
           return;
       }
   }.bind(this));
   document.addEventListener("keydown", function(e) {
       if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
           e.preventDefault();
           this.close();
           return;
       }
       if (this.options.focusCatch && 9 == e.which && this.isOpen) {
           this._focusCatch(e);
           return;
       }
   }.bind(this));
   if (this.options.hashSettings.goHash) {
       window.addEventListener("hashchange", function() {
           if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
       }.bind(this));
       window.addEventListener("load", function() {
           if (window.location.hash) this._openToHash();
       }.bind(this));
   }
}
open(selectorValue) {
   if (bodyLockStatus) {
       this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
       if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
           this.targetOpen.selector = selectorValue;
           this._selectorOpen = true;
       }
       if (this.isOpen) {
           this._reopen = true;
           this.close();
       }
       if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
       if (!this._reopen) this.previousActiveElement = document.activeElement;
       this.targetOpen.element = document.querySelector(this.targetOpen.selector);
       if (this.targetOpen.element) {
           if (this.youTubeCode) {
               const codeVideo = this.youTubeCode;
               const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
               const iframe = document.createElement("iframe");
               iframe.setAttribute("allowfullscreen", "");
               const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
               iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
               iframe.setAttribute("src", urlVideo);
               if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                   this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
               }
               this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
           }
           if (this.options.hashSettings.location) {
               this._getHash();
               this._setHash();
           }
           this.options.on.beforeOpen(this);
           document.dispatchEvent(new CustomEvent("beforePopupOpen", {
               detail: {
                   popup: this
               }
           }));
           this.targetOpen.element.classList.add(this.options.classes.popupActive);
           document.documentElement.classList.add(this.options.classes.bodyActive);
           if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
           this.targetOpen.element.setAttribute("aria-hidden", "false");
           this.previousOpen.selector = this.targetOpen.selector;
           this.previousOpen.element = this.targetOpen.element;
           this._selectorOpen = false;
           this.isOpen = true;
           setTimeout((() => {
               this._focusTrap();
           }), 50);
           this.options.on.afterOpen(this);
           document.dispatchEvent(new CustomEvent("afterPopupOpen", {
               detail: {
                   popup: this
               }
           }));
           this.popupLogging(`Открыл попап`);
       } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
   }
}
close(selectorValue) {
   if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
   if (!this.isOpen || !bodyLockStatus) return;
   this.options.on.beforeClose(this);
   document.dispatchEvent(new CustomEvent("beforePopupClose", {
       detail: {
           popup: this
       }
   }));
   if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
   this.previousOpen.element.classList.remove(this.options.classes.popupActive);
   this.previousOpen.element.setAttribute("aria-hidden", "true");
   if (!this._reopen) {
       document.documentElement.classList.remove(this.options.classes.bodyActive);
       !this.bodyLock ? bodyUnlock() : null;
       this.isOpen = false;
   }
   this._removeHash();
   if (this._selectorOpen) {
       this.lastClosed.selector = this.previousOpen.selector;
       this.lastClosed.element = this.previousOpen.element;
   }
   this.options.on.afterClose(this);
   document.dispatchEvent(new CustomEvent("afterPopupClose", {
       detail: {
           popup: this
       }
   }));
   setTimeout((() => {
       this._focusTrap();
   }), 50);
   
}
_getHash() {
   if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
}
_openToHash() {
   let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
   const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
   if (buttons && classInHash) this.open(classInHash);
}
_setHash() {
   history.pushState("", "", this.hash);
}
_removeHash() {
   history.pushState("", "", window.location.href.split("#")[0]);
}
_focusCatch(e) {
   const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
   const focusArray = Array.prototype.slice.call(focusable);
   const focusedIndex = focusArray.indexOf(document.activeElement);
   if (e.shiftKey && 0 === focusedIndex) {
       focusArray[focusArray.length - 1].focus();
       e.preventDefault();
   }
   if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
       focusArray[0].focus();
       e.preventDefault();
   }
}
_focusTrap() {
   const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
   if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
}
}
