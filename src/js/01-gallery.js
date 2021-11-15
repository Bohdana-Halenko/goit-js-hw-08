// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// выводим gallery
const galeryComponentRef = document.querySelector(".gallery");
const addedGalleryCard = galleryCardsCreator(galleryItems);

// functionCreator - создаем список изображений с элементами, полученных из galleryItems
function galleryCardsCreator(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
// выводим галлерею на страницу

galeryComponentRef.insertAdjacentHTML("beforeend", addedGalleryCard);

// открытие лайтбокса
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function(){});

