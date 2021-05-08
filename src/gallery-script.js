import gallery from './gallery-items.js';

function createImgCardMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`}).join('');
};

const galleryContainer = document.querySelector('.gallery.js-gallery');
const galleryMarkup = createImgCardMarkup(gallery);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const galleryEl = evt.target;
  
  console.log(galleryEl)
  const parentGalleryEl = galleryEl.closest('.lightbox.js-lightbox');

  parentGalleryEl.classList.add('.is-open');
}