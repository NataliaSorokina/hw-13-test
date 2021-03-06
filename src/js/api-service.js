import { BASE_URL, PERSONAL_KEY, SEARCH_PARAMS } from './constants';
import axios from 'axios';

// function fetchImages(inputQuery) {
//     const url = `${BASE_URL}/?key=${PERSONAL_KEY}&q=${inputQuery}&${SEARCH_PARAMS}`;
//     console.log(url);
//     return  fetch(url)
//             .then(response => {
//                 // console.log(response);
//                 if (!response.ok) {
//                     throw new Error(response.status);
//                 }
//                 return response.json();
//             })
// }


//  async function fetchImages(inputQuery) {
//     const url = `${BASE_URL}/?key=${PERSONAL_KEY}&q=${inputQuery}&${SEARCH_PARAMS}`;
//     console.log(url);
//      const response = await fetch(url);
//      const newImages = await response.json();

//      return newImages;
// }

async function fetchImages(inputQuery) {
    const params = new URLSearchParams({
    // per_page: per_page,
    page: page
  });
    const url = `${BASE_URL}/?key=${PERSONAL_KEY}&q=${inputQuery}&${SEARCH_PARAMS}&${params}`;
    console.log(url);
     const response = await axios.get(url);
    //  const newImages = await response.json();

     return response.data;
}

export default { fetchImages };