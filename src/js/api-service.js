import { BASE_URL, PERSONAL_KEY, SEARCH_PARAMS } from './constants';

function fetchImages(inputQuery) {
    const url = `${BASE_URL}/?key=${PERSONAL_KEY}&q=${inputQuery}&${SEARCH_PARAMS}`;
    console.log(url);
    return  fetch(url)
            .then(response => {
                // console.log(response);
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
}

export default { fetchImages };