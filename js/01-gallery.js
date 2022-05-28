import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. 

const galleryContainer = document.querySelector('.gallery')
const cardMarkup = ceateCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforebegin', cardMarkup );

function ceateCardsMarkup(galleryItems) {
  return galleryItems
  .map(({preview, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}}"
    />
  </a>
</div>
     
    `
  })
  .join('')
  
}