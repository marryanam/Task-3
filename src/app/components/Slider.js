import React, {Component} from 'react';
import Slider from "react-slick";
import SliderItem from './Sliderbase';

const sliderCover={
    margin: "20px auto 100px",
    width: "90%",
};

class Sliders extends React.Component {
    state = {
        slides :[
            { 
                img: '/img/61.jpg',
            },
            { 
                img: '/img/126.jpg',
            },
            {
                img: '/img/12910.jpg',
            },
            {
                img: '/img/13390.jpg',
            },
            {
                img: '/img/20488.jpg',
            },
            {
                img: '/img/31214.jpg',
            }

        ]
    };
    render() {
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div style={sliderCover}>
                    <Slider {...settings}>
                        {this.state.slides.map(x => {
                            return(
                                 <SliderItem slides={x}/>
                            )
                        })}
                    </Slider>
            </div>
        );
    }
}
export default Sliders;