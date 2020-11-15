import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projects from '../../data/projects';
import './carousel.styles.scss';

class ImageCarousel extends Component {
    onChange = () => {
        console.log("change");
    }
    onClickItem = () => {
        console.log("click");
    }
    onClickThumb = () => {
        console.log("Thumb");
    }

    render() {

        return (
            <div className="slider-container">
                <Carousel className="carousel-style" infiniteLoop={true} autoPlay={true} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>                    
                    {projects.map((item, key) => (
                        <div key={key}>
                            <img alt="display art images" src={item.image}></img>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
};

export default ImageCarousel;