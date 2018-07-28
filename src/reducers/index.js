import { combineReducers } from 'redux';
import videosReducer from './videos';
import viewReducer from './view';
import selectVideoReducer from './selectVideo';

const rootReducer = combineReducers({
    videos: videosReducer,
    view: viewReducer,
    selectVideo: selectVideoReducer
});

export default rootReducer;
