import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector('.gallery')

function createGalleryMarkup(items) {
	return items
		.map(
			item => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
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

	const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`)
	instance.show()

	gallery.addEventListener('keydown', e => {
		if (basicLightbox.visible() && e.code === 'Escape') {
			instance.close()
		}
	})
}
