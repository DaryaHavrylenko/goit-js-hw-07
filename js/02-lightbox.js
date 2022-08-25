import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join('');
}
const cardsGalleryMarkUp = createImgGallery(galleryItems);
list.insertAdjacentHTML('afterbegin', cardsGalleryMarkUp);

new SimpleLightbox('.gallery a', {
  nav: true,
  close: true,
  caption: true,
  captionsData: 'alt',
  captionPosition: 'buttom',
  captionDelay: 250,
  animationSlide: 250,
  overlayOpacity: 0.5,
});
