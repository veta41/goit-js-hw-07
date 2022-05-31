import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery')
const cardMarkup = ceateCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkup );

function ceateCardsMarkup(galleryItems) {
  return galleryItems
  .map(({preview, description, original}) => {
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
</div>
     
    `
  })
  .join('')
  
}
