import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. 

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


galleryContainer.addEventListener('click', onCardContainerClick);


function onCardContainerClick(e) {
  e.preventDefault();

 
    const instance = basicLightbox.create (`
        <img src = "${e.target.dataset.source}">
      `)

    instance.show()

    const isEscKey = instance.visible();

    if(isEscKey) {
      document.addEventListener('keydown', onEscKeyPress );
    } else{
      document.removeEventListener('keydown', onEscKeyPress );
    }
      
    

    




function onEscKeyPress(e) {
  
  if(e.code === 'Escape'){
    instance.close();

    
     document.removeEventListener('keydown', onEscKeyPress );
    
    }
    
  }
}
