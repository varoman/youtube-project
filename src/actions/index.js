import YoutubeApiService from '../services/youtybe_api_service';

const youtubeApiService = new YoutubeApiService();

export function updateSearch(searchTerm, page) {
     return {
        type: 'SEARCH_UPDATE',
        payload: youtubeApiService.makeSearch(searchTerm)
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
