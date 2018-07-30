import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions';
import {connect} from 'react-redux';

class SingleVideo extends Component {

    render() {
        return (
            <div className={`item  col-xs-4 col-lg-4 ${!this.props.isGrid ?  'list-group-item' : ''}`}
                 onClick={() => {this.props.selectVideo(this.props.video)}}>
                <div className="list-group">
                    <div className="video-list-media">
                        <div className="media-left">
                            <img className="media-object"
                                 src={this.props.video.snippet.thumbnails.default.url}
                                 alt="thumbnail" />
                        </div>
                        <div className="media-body ">
                            <div className="media-heading">
                                <p>{ this.props.video.snippet.title }</p>
                                <span>{this.props.video.snippet.channelTitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => { return {isGrid: state.view}};

const mapDispatchToProps = dispatch => bindActionCreators({selectVideo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo);
