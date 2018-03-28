import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShowImage.css';

export default class ShowImage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.imgIndex,
        };

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            index: nextProps.imgIndex,
        })
    }

    render() {
        const { images, onClose, nextImage, prevImage } = this.props;
        return (
            <div className="show-image">
                <div className="show-image__prev" onClick={prevImage} />
                <div    className="show-image__full-screen"
                        style={{
                         backgroundImage: "url(" + images[this.state.index].contentUrl + ")",
                        }}
                        onClick={nextImage} >
                </div>
                <div className="show-image__next" onClick={nextImage} />
                <div className="show-image__close" onClick={onClose}>&times;</div>
            </div>
        )
    }

};

ShowImage.propTypes = {
    index: PropTypes.array,
    images: PropTypes.array,
    onClose: PropTypes.func,
    nextImage: PropTypes.func,
    prevImage: PropTypes.func
};
