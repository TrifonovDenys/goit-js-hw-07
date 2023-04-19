import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')

const a = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item"><img class="gallery__image" src='${preview}' alt='${description}'></li>`).join('')
  
galleryBox.insertAdjacentHTML("beforeend", a)
