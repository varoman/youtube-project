import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { updateSearch } from '../actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component {
    render() {
        return(
            <div className="search-bar">
                <input type="text"
                       placeholder="Type here to surf the videos"
                       onChange={(e) => this.props.updateSearch(e.target.value)} />
                <i className="fas fa-search"></i>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({updateSearch}, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);