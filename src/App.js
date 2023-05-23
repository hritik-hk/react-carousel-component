import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./app.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";
import sliderData from "./components/sliderData";

export default function ImageSlider() {

  function NextArrow(props) {
    //destructuring
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <IoIosArrowDroprightCircle className="right-arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
    <IoIosArrowDropleftCircle className="left-arrow" />
    </div>
  );
}

 
    const settings = {
      //for dots
      dots: true,
      //infinite sliding
      infinite: true,
      //slide transition speed
      speed: 500,
      //slides to be shown at on a time
      slidesToShow: 1,
      //how mant slides to scroll at one arrowclick
      slidesToScroll: 1,
      //for autoplay of slides
      autoplay: true,
      //speed of auto-play
      autoplaySpeed: 2000,
      //custom next and prev arrow.. passing prop(specially onClick) to nextArrow function
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />

    };

    return (
      <div className="container">
        <h2 className="heading"> THE SLIDE SHOW</h2>
        <Slider {...settings}>
        {sliderData.map( (slide,index) => {
          return (<div key={index}>
             <img src={slide.image} alt="slide" />
          </div>)
        })}
        </Slider>
      </div>
    );
  
}

