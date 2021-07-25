import './sass/main.scss';
import axios from 'axios';
import Notiflix from 'notiflix';
import { getRefs } from './js/refs';
import {NOTIFICATION_FAILURE, NOTIFICATION_INFO} from './js/constants';
import API from './js/api-service';
import imgCardTemplate from './templates/img-card.hbs';
// import countryListTemplate from './templates/country-list.hbs';


// Повторить пагинацию, ленивую загрузку, async await, работу с axios, HTML (создать header), SASS/CSS (применить стили).

const refs = getRefs();

refs.searchForm.addEventListener('submit', searchHandler);

async function searchHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;
    console.log(form.elements);
    const inputQuery = form.elements.searchQuery.value;
    console.log(inputQuery);

    // let inputQuery = refs.input.value;
    if (inputQuery.trim() === '') {
        return;
    }

    // API.fetchImages(inputQuery)
    //     .then(renderImgCard)
    //     .catch(errorHandler)
    //     // .then((hits) => renderImgCard(hits))
    //     // .catch(errorHandler);

    try {
        const data = await API.fetchImages(inputQuery);
        console.log(data);
        const { hits } = data;
       return renderImgCard(hits);
    } catch (error) {
        console.log(error);
        errorHandler(error);
    }

}


function renderImgCard(hits) {
    refs.imgGallery.innerHTML = '';
    // const { response: { hits }, response: { totalHits } } = response;
       
    if (hits.length === 0) {
        Notiflix.Notify.failure(NOTIFICATION_FAILURE);
    } else {
        refs.imgGallery.innerHTML = imgCardTemplate(hits);
        //     const markup = { hits }
        // .map(({ webformatURL, tags, likes, views, comments, downloads}) => {
        //     return `
        //   <div class="photo-card">
        //     <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        //     <div class="info">
        //         <p class="info-item"><b>Likes</b> ${likes}</p>
        //         <p class="info-item"><b>Views</b> ${views}</p>
        //         <p class="info-item"><b>Comments</b> ${comments}</p>
        //         <p class="info-item"><b>Downloads</b> ${downloads}</p>
        //     </div>
        // </div>
        // `;
        // })
        //         .join("");
        //     refs.imgGallery.innerHTML = markup;
        // } 
    }
}


    function errorHandler(error) {
        console.log(error);
        Notiflix.Notify.failure(NOTIFICATION_FAILURE);
    }