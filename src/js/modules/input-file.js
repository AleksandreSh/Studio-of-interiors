const input = document.querySelector('.popup__input-foto');

const preview = document.querySelector('.popup__preview');
if (input !== null) {
   input.addEventListener('change', updateImageDisplay);
}
function updateImageDisplay() {
   while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
   }

   const curFiles = input.files;
   if (curFiles.length !== 0) {
      const list = document.createElement('ul');
      preview.appendChild(list);

      for (const file of curFiles) {
         const listItem = document.createElement('li');
         const para = document.createElement('p');
         const btn = document.getElementById('btn');
         let fileName = file.name;
         fileName = (fileName.slice(0, 30)) + `...`;
         if (file.size > 1048577) {
            para.textContent = `File name ${fileName}: Not a valid file size. Update your selection.`;
            para.style.color = "red";
            btn.disabled = true;
         } else {
            if (validFileType(file)) {            
               para.textContent = `File name ${fileName}, file size ${returnFileSize(file.size)}.`;
               const image = document.createElement('img');
               image.src = URL.createObjectURL(file);
               listItem.appendChild(image);
            } else {
               para.textContent = `File name ${fileName}: Not a valid file type. Update your selection.`;
               para.style.color = "red";
               btn.disabled = true;
            }
         }
         listItem.appendChild(para);
         list.appendChild(listItem);

      }
   }
}

const fileTypes = [
"image/apng",
"image/bmp",
"image/gif",
"image/jpeg",
"image/pjpeg",
"image/png",
"image/svg+xml",
"image/tiff",
"image/webp",
"image/x-icon"];

function validFileType(file) {
   return fileTypes.includes(file.type);
}

function returnFileSize(number) {
   if (number < 1024) {
     return `${number} bytes`;
   } else if (number >= 1024 && number < 1048576) {
     return `${(number / 1024).toFixed(1)} KB`;
   } else if (number >= 1048576) {
     return `${(number / 1048576).toFixed(1)} MB`;
   }
 }