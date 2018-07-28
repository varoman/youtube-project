import youtubeSearch from 'youtube-api-v3-search';

const API_KEY = 'AIzaSyBeVRZOrxGVM1KUoJKRHe2EXmazbSfzqDA';
const ITEMS_PER_PAGE = 10;

export default class YoutubeApiService {

    makeSearch = (term, pageToken) => {
        const options = {
            q: term,
            type: 'video',
            part: 'snippet',
            maxResults: ITEMS_PER_PAGE
        };
        return youtubeSearch(API_KEY, options);
    }
}