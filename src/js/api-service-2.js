import { BASE_URL, PERSONAL_KEY, SEARCH_PARAMS } from './constants';
import axios from 'axios';

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.per_page = 6;
    }
    
    async fetchImages() {
        //     const params = new URLSearchParams({
        //     per_page: per_page,
        //     page: page
        //   });
        const url = `${BASE_URL}/?key=${PERSONAL_KEY}&q=${this.searchQuery}&${SEARCH_PARAMS}&page=${this.page}&per_page=${this.per_page}`;
        console.log(url);
        const response = await axios.get(url);
        console.log(this.page);
        //  const newImages = await response.json();
        // this.incrementPage();
        return response.data;
    }

    incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
// export default { fetchImages };