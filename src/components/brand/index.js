import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIcon style={{ color: "white" }} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIcon style={{ color: "white" }} />
    </div>
  );
}

function SimpleSlider() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          //   dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 837,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <div className="card-slider-main-section">
      <div className="brand-section">
        {/* <div className="triangle-right"></div>
        <div className="triangle-left"></div> */}
        <Slider {...settings}>
          <div className="brand">
            <img
              src={
                "https://html.themeholy.com/webteck/demo/assets/img/brand/brand_2_3.png"
              }
            />
          </div>
          <div className="brand">
            <img
              src={
                "https://html.themeholy.com/webteck/demo/assets/img/brand/brand_2_4.png"
              }
            />
          </div>
          <div className="brand">
            <img
              src={
                "https://html.themeholy.com/webteck/demo/assets/img/brand/brand_2_5.png"
              }
            />
          </div>
          <div className="brand">
            <img
              src={
                "https://html.themeholy.com/webteck/demo/assets/img/brand/brand_2_6.png"
              }
            />
          </div>
          <div className="brand">
            <img
              src={
                "https://html.themeholy.com/webteck/demo/assets/img/brand/brand_2_1.png"
              }
            />
          </div>
          <div className="brand">
            <img
              src={
                "https://html.themeholy.com/webteck/demo/assets/img/brand/brand_2_2.png"
              }
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
