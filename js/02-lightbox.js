import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
    })
    .join('');
}
const cardsGalleryMarkUp = createImgGallery(galleryItems);
list.insertAdjacentHTML('afterbegin', cardsGalleryMarkUp);

new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});
