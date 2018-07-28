import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '800px',
        transform  : 'translate(-50%, -50%)'
    }
};

class VideoPlayerModal extends Component {

    constructor(props) {
        super(props);

        Modal.setAppElement('#root');

        this.state = {
            modalIsOpen: false
        };

        // bind closeModal method to the component as it's passed as a callback
        // and loses the "this" reference
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        if (!this.props.selectedVideo) return <span></span>;
        const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}?autoplay=1`;        return (
            <div>
                <Modal isOpen={this.state.modalIsOpen}
                       style={customStyles}
                       onRequestClose={this.closeModal}
                       contentLabel="Example Modal">
                    <div className="closeButton"
                         onClick={this.closeModal}><i className="fas fa-times"></i></div>
                    <div className="video-details col-md-12">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                    title={this.props.selectedVideo.snippet.title}
                                    src={videoSrc}>
                            </iframe>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

    componentWillReceiveProps() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false})
    }
}

const mapStateToProps = state => { return {selectedVideo: state.selectVideo}};

export default connect(mapStateToProps)(VideoPlayerModal);

