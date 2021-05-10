import gallery from './gallery-items.js';

function createImgCardMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`}).join('');
};

const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createImgCardMarkup(gallery);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


const lightboxContainer = document.querySelector('.js-lightbox');
const modal = document.querySelector('.lightbox__content');
galleryContainer.addEventListener('click', onGalleryContainerClick);



function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const bigImgEl = evt.target.alt;
  let lightboxImage;
   for (let i = 0; i < gallery.length; i++) {
    if (gallery[i].description === bigImgEl) {
      lightboxImage = gallery[i].original;
    }
  }
  
  lightboxContainer.classList.add('is-open'); 
  modal.innerHTML = `<img class="lightbox__image"
    src="${lightboxImage}"
    alt="${bigImgEl}"
  />`;
}


const btnEl = document.querySelector('button[data-action ="close-lightbox"]');
btnEl.addEventListener('click', () => {
  lightboxContainer.classList.remove('is-open');
});

function isOpen() {
  const divCloseModal = document.querySelector('.lightbox__image');
  lightboxContainer.classList.remove('is-open');
  divCloseModal.alt = '';
  divCloseModal.src = '';
}

btnEl.addEventListener('click', isOpen);

const overEl = document.querySelector('.lightbox__overlay');
overEl.addEventListener('click', isOpen);