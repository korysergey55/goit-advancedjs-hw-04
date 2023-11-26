import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './api'
import { per_page } from './api'

const formReff = document.querySelector('#search-form')
const galeryReff = document.querySelector('.gallery')
const loadMoreBtnReff = document.querySelector('.load-more')

let lightbox = new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250 });

let formItems = {}
let page = 1

formReff.addEventListener('submit', handleSubmit)
loadMoreBtnReff.addEventListener('click', handleLoadMore)

async function handleSubmit(evt) {
  galeryReff.innerHTML = ''
  evt.preventDefault()
  const formData = new FormData(evt.currentTarget)
  formData.forEach((value, key) => {
    formItems[key] = value
  })

  const images = await fetchImages(formItems.searchQuery, page)
  createMarcup(images)
  lightbox.refresh()
  formReff.reset()
}

async function createMarcup(data) {
  const { hits, total } = data
  console.log(data)
  if (!hits.length) {
    iziToast.show({
      title: '',
      color: 'red',
      position: 'topRight',
      message: "Sorry, there are no images matching your search query. Please try again."
    });
    // loadMoreBtnReff.classList.add('visually-hidden')
    return
  }
  if (hits.length >= per_page) {
    iziToast.show({
      title: '',
      color: 'green',
      position: 'topCenter',
      message: `Hooray! We found totalHits images ${total}`
    });
  }

  const marcup = hits.map(({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads
  }) => (
    `
    <li class='gallery__item'>
      <div class="gallery__card">
        <a class="gallery__link" href='${largeImageURL}'>
          <img
            class="gallery__image"
            src=${webformatURL} 
            alt=${tags} 
            data-source="${webformatURL}" 
            loading="lazy" />
        </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${likes}
            </p>
            <p class="info-item">
               <b>Views</b>
                ${views}
            </p>
            <p class="info-item">
               <b>Comments</b>
                ${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
               ${downloads}
            </p>
          </div>
      </div>
    </li>
  `
  )).join('')
  // galeryReff.innerHTML = marcup
  galeryReff.insertAdjacentHTML('beforeend', marcup)
  loadMoreBtnReff.classList.remove('visually-hidden')
}

async function handleLoadMore() {
  page += 1
  const images = await fetchImages(formItems.searchQuery, page)
  createMarcup(images)
  lightbox.refresh()
  if (images.hits.length < per_page) {
    loadMoreBtnReff.classList.add('visually-hidden')
    iziToast.show({
      title: '',
      color: 'red',
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results."
    });
  }

  const { height: cardHeight } = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}
