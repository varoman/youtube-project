import YoutubeApiService from '../services/youtybe_api_service';

const youtubeApiService = new YoutubeApiService();
let term;

export function updateSearch(searchTerm, pageToken) {
    if (searchTerm) term = searchTerm;
    return {
        type: 'SEARCH_UPDATE',
        payload: youtubeApiService.makeSearch(term, pageToken)
    };
}

export function changeView(isGridView) {
    return {
        type: 'VIEW_CHANGED',
        payload: isGridView
    }
}

export function selectVideo(video) {
    return {
        type: 'VIDEO_SELECTED',
        payload: video
    }
}
