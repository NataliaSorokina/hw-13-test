export const BASE_URL = 'https://pixabay.com/api';
export const PERSONAL_KEY = '22624965-297697bc75a5089bebc4e5f11';
export const SEARCH_PARAMS = new URLSearchParams({
    page: 1,
    per_page: 40,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',  
});
export const NOTIFICATION_INFO = "We're sorry, but you've reached the end of search results.";
export const NOTIFICATION_FAILURE = 'Sorry, there are no images matching your search query. Please try again.';

// `Hooray! We found ${totalHits} images.`;


// ${searchParams}
// https://pixabay.com/api/?key=22624965-297697bc75a5089bebc4e5f11&q=yellow+flowers&image_type=photo
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ