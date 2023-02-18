document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('popup-form');

   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();
      //new FormData(form);
      //let data = e.formData;
      //const request = new XMLHttpRequest();

      //request.open("POST", "multipart/form-data");
      
      //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      //request.send(data);
      //request.onreadystatechange = function(){
      //  if(request.readyState==4 && request.status==200){
      //   console.log(request.readyState);
      //   console.log(request.status);
      //   //Вікриває насупне модальне вікно
      //   const curentPopup = document.getElementById('popup2');
      //   startPopup ();

      //   } else {
      //   alert( 'Sending error');

      //   }
      //}

   }

})