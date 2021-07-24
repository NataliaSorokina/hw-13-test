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


function renderImgCard(hits) {
    refs.imgGallery.innerHTML = '';
    // const { response: { hits }, response: { totalHits } } = response;
       
    if (hits.length === 0) {
         Notiflix.Notify.failure(NOTIFICATION_FAILURE);
    } else {
       refs.imgGallery.innerHTML = imgCardTemplate(hits);
    } 
}


function errorHandler(error) {
    console.log(error);
    Notiflix.Notify.failure(NOTIFICATION_FAILURE);
}

function searchHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;
    console.log(form.elements);
    const inputQuery = form.elements.searchQuery.value;
    console.log(inputQuery);

    // let inputQuery = refs.input.value;
    if (inputQuery.trim() === '') {
        return;
    }

    API.fetchImages(inputQuery)
        .then(renderImgCard)
        .catch(errorHandler)
}
