import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const imgGalleryEl = document.querySelector('.gallery');


function createGalleryItems(items) {

  
 return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join('');
}

const addGalleryMarkup = createGalleryItems(galleryItems);
imgGalleryEl.innerHTML = addGalleryMarkup;

imgGalleryEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.open({ src: e.target.dataset.source });
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    lightbox.close();
  }
});
console.log(galleryItems)

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 100,
});