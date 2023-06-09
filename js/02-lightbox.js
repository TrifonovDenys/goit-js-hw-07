import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const createGalleryTable = () => {
  const galleryTable = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`
    )
    .join('');
  return galleryTable;
};

galleryBox.insertAdjacentHTML('beforeend', createGalleryTable());

galleryBox.addEventListener('click', galleryImgShow);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function galleryImgShow(event) {
  event.preventDefault();
  lightbox;
}
