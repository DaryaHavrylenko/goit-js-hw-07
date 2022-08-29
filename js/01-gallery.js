import { galleryItems } from './gallery-items.js';
// Change code below this line


const allGallery = document.querySelector('.gallery');

function createImgGallery(galleryItems) {
 return  galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
createImgGallery(galleryItems);

const cardsGalleryMarkUp = createImgGallery(galleryItems);
allGallery.insertAdjacentHTML('beforeend', cardsGalleryMarkUp);


allGallery.addEventListener('click', createModal);


function createModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;
  const currentImageUrl = event.target.dataset.source;
  
  const instance = basicLightbox.create(`<img class="modal__image" src="${currentImageUrl}" />`, {
    onShow: () => {
      window.addEventListener('keydown', onKeyPress);
   
    },   onClose: () => {
          
          window.removeEventListener('keydown', onKeyPress);
          
      }
  }
  );

  instance.show();
   
  
  function onKeyPress(event) {
 
    const isKeyCode = event.code === `Escape`;
    if (isKeyCode) {
 instance.close();
    } 
    }
  
}
