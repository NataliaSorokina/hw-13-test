import './sass/main.scss';
import axios from 'axios';
import Notiflix from 'notiflix';
import { getRefs } from './js/refs';
import {NOTIFICATION_FAILURE, NOTIFICATION_END} from './js/constants';
import NewsApiService from './js/api-service-2';
import imgCardTemplate from './templates/img-card.hbs';


const refs = getRefs();

const API = new NewsApiService();

// const limit = per_page;

refs.loadBtn.setAttribute('hidden', true);


refs.searchForm.addEventListener('submit', searchHandler);
refs.loadBtn.addEventListener('click', fetchImages);


function searchHandler(event) {
  event.preventDefault();
  clearImgGallery();   
  API.searchQuery = refs.input.value;

  if (API.searchQuery.trim() === '') {
    return;
  }
    API.resetPage();     
    fetchImages();
    // refs.loadBtn.removeAttribute('hidden');
   
}

async function fetchImages() {

    //  refs.loadBtn.removeAttribute('hidden');
    try {
    //    
       const result = await API.fetchImages();
       const { hits, totalHits } = result;
        console.log(API.page);
        console.log(API.per_page);
        if (hits.length === 0) {
            refs.loadBtn.setAttribute('hidden', true);
            Notiflix.Notify.failure(NOTIFICATION_FAILURE);
            return;
    }
        if (hits.length > 0 && API.page === 1) {
          Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
        }
       if (totalHits < (API.page*API.per_page)) {
         Notiflix.Notify.info(NOTIFICATION_END);
         refs.loadBtn.setAttribute('hidden', true);
        } 
    
    renderImgCard(hits);
    // refs.loadBtn.removeAttribute('hidden');
  }
    catch (error) {
       console.log(error);
   } 
}

// function loadMore() {
//     // refs.loadBtn.setAttribute('hidden', true);
//     newsApiService.fetchImages().then(({ hits, totalHits }) => {
//         // console.log(newsApiService.page);
//         // console.log(newsApiService.per_page);
//         // if (hits.length > 0/*  && newsApiService.page === 1 */) {
//         //   Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
//         // }
//         // if (totalHits < (newsApiService.page*newsApiService.per_page)) {
//         //     Notiflix.Notify.info(NOTIFICATION_END);
//         // } 
//         // if (totalHits < (newsApiService.page * newsApiService.per_page)) {
//          if (totalHits < (newsApiService.page*newsApiService.per_page)) {
//          Notiflix.Notify.info(NOTIFICATION_END);
//          refs.loadBtn.setAttribute('hidden', true);
//         } 
//       renderImgCard(hits);
//     // refs.loadBtn.removeAttribute('hidden');
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.gallery.insertAdjacentHTML('beforeend', imgCardTemplate(articles));
// }

function renderImgCard(hits/* , totalHits */) {
    // refs.imgGallery.innerHTML = '';
    // const { response: { hits }, response: { totalHits } } = response;

    // if (hits.length === 0) {
    //     Notiflix.Notify.failure(NOTIFICATION_FAILURE);
    // } else {
  refs.imgGallery.insertAdjacentHTML('beforeend', imgCardTemplate(hits));
  
        API.incrementPage();
        refs.loadBtn.removeAttribute('hidden');
    // }
}

function clearImgGallery() {
  refs.imgGallery.innerHTML = '';
}



