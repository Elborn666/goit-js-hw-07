import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulRef = document.querySelector('.gallery')
const galleryCardsSet = createGallery(galleryItems);


function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
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

ulRef.insertAdjacentHTML('beforeend', galleryCardsSet)

let lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});

