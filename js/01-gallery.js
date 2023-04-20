import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery')

const createGalleryTable = () => {

  const galleryTable = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}'></a></li>`).join('')
  
  return galleryTable
} 

galleryBox.insertAdjacentHTML("beforeend", createGalleryTable())

galleryBox.addEventListener('click', galleryImgShow)
  
function galleryImgShow(event) {

  event.preventDefault()
  // console.log(event.target.dataset.source);
  // console.log(event.currentTarget);
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" >`)
  if (event.target.dataset.source !== undefined) {
    instance.show()
  }
}
