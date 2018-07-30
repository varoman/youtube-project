import React, { Component } from 'react';
import SingleVideo from './single_video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearch, changeView } from '../actions';


class VideoList extends Component {

    componentDidMount() {
        // get initial video list when component first loaded by triggering an action
        this.props.updateSearch('pink floyd');
    }

    render() {
        // because of async task we should handle the state when the 'videos' key
        // does not exist on props object, and show a loading bar
        if (!this.props.videos) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
        if (!this.props.videos.items.length) return <div>No results!</div>;
        return(
            <div>
                <div className="container">
                    <div className="well well-sm">
                        <div className="btn-group">
                            <button id="list"
                                    onClick={() => this.props.changeView(false)}
                                    className={`btn btn-default btn-sm ${!this.props.isGrid ? 'active': ''}`}>
                                <i className="fas fa-bars"></i>
                            </button>
                            <button id="grid"
                                    onClick={() => this.props.changeView(true)}
                                    className={`btn btn-default btn-sm ${this.props.isGrid ? 'active': ''}`}>
                                <i className="fas fa-th"></i>
                            </button>
                        </div>
                    </div>
                    <div id="products"
                         className="list-group">
                        {this.props.videos.items.map(video => {
                            return <SingleVideo video={video}
                                                key={video.etag}/>
                        })}
                    </div>
                </div>
                <div className="pagination centered">
                    <button disabled={!this.props.videos.prevPageToken}
                            onClick={() => this.changePage(0)}>❮
                    </button>
                    <button disabled={!this.props.videos.nextPageToken}
                            onClick={() => this.changePage(1)}>❯
                    </button>
                </div>
            </div>
        );
    }
    
    changePage(page) {
        if (page)
            this.props.updateSearch(null, this.props.videos.nextPageToken);
        else
            this.props.updateSearch(null, this.props.videos.prevPageToken);
    }
}

const mapStateToProps = state => { return {videos: state.videos, isGrid: state.view}};

const mapDispatchToProps = dispatch => bindActionCreators({updateSearch, changeView}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);