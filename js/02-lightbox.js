import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector('.gallery')

function createGalleryMarkup(items) {
	return items
		.map(
			item => `<li><a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a></li>`
		)
		.join('')
}

const addGalleryMarkup = createGalleryMarkup(galleryItems)
gallery.innerHTML = addGalleryMarkup

gallery.addEventListener('click', onImageClick)

function onImageClick(e) {
	e.preventDefault()

	if (e.target.nodeName !== 'IMG') {
		return
	}

	const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 })
}
