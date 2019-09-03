import React from 'react';
import Slider from "react-slick";

const sliderImg={
    width: "100%",
    height: "auto",
};
const sliderBlock={
    width: "100%",
    maxHeight: "600px",
    overflow: 'hidden',
};

export default function SliderItem(props) {
	return(
		<div>
            <div style={sliderBlock}>
                <img src={window.location.origin + props.slides.img} style={sliderImg} alt="#"/>
            </div>
        </div>
	)
}
