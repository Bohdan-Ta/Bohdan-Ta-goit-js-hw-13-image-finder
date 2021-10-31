const BASE_URL = 'https://pixabay.com/api'
const KEY = 'key=24045276-2d1f958b632c915d7d2587282'

export default class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

 fetchImages() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&${KEY}`;
    return fetch(url)
    .then(r => r.json())
    .then(({hits}) => {
        this.incrementPage();
        return hits
    })
}

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }   

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}

