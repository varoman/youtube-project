import React from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import VideoList from './containers/video_list';
import VideoPlayerModal from './containers/video_player_modal';
import ErrorBoundary from './components/error_boundaries';

const App = () => {
    return (
        <div>
            <ErrorBoundary>
                <SearchBar/>
                <VideoList/>
                <VideoPlayerModal/>
            </ErrorBoundary>
        </div>
    );
};

export default App;
