import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector('.gallery')

function createGalleryMarkup(items) {
	return items
		.map(
			item => `<a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`
		)
		.join('')
}

const addGalleryMarkup = createGalleryMarkup(galleryItems)
gallery.innerHTML = addGalleryMarkup

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 })
