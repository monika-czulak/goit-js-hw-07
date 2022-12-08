import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector('.gallery')

galleryItems.forEach(item => {
	const galleryItem = document.createElement('div')
	const galleryLink = document.createElement('a')
	const galleryImage = document.createElement('img')

	gallery.append(galleryItem)
	galleryItem.classList.add('gallery__item')

	galleryItem.append(galleryLink)
	galleryLink.classList.add('gallery__link')
	galleryLink.href = item.original
	// blokujemy domyślne działanie kliknięcia w link:
	galleryLink.addEventListener('click', e => {
		e.preventDefault()
	})

	galleryLink.append(galleryImage)
	galleryImage.classList.add('gallery__image')
	galleryImage.src = item.preview
	galleryImage.dataset.source = item.original
	galleryImage.alt = item.description
})
