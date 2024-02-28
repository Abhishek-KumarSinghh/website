import React from "react";
import "./style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Rating from "@mui/material/Rating";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      //   style={{
      //     ...style,
      //     display: "block",
      //     background: "green",
      //   }}
      onClick={onClick}
    >
      <ArrowBackIcon style={{ color: "white" }} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      //   style={{
      //     ...style,
      //     display: "block",
      //     background: "red",
      //   }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ color: "white" }} />
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 837,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
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
    <>
      <div className="card-slider-main-section">
        <div className="feedback-card-slider-main-section">
          <div className="title-area text-center">
            <div className="icon-masking sub-title">
              <img
                src={
                  "https://html.themeholy.com/webteck/demo/assets/img/theme-img/title_shape_2.svg"
                }
                alt="shape"
              />
              NEWS &amp; ARTICLES
            </div>
            <h2 className="sec-title">
              What Happy Clients Says
              <br />
              <span className="text-theme">About Us?</span>
            </h2>
          </div>
          <div className="feedback-card-slider">
            <Slider {...settings}>
              <div className="feedback-card">
                <div className="feedback-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/testimonial/testi_2_1.jpg"
                    }
                    alt="Avater"
                  />
                </div>
                <div className="feedback-card-content">
                  <div className="feedback-card-content-top">
                    <p>
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration.
                    </p>
                  </div>
                  <div className="feedback-card-content-bottom">
                    <div className="feedback-card-content-bottom-name">
                      <h3>Jackline Techie</h3>
                    </div>
                    <div className="feedback-card-content-bottom-rating">
                      <Rating
                        name="half-rating"
                        defaultValue={3.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                  <div className="feedback-card-content-bottom-last">
                    <p>CEO at Kormola</p>
                  </div>
                </div>
              </div>
              <div className="feedback-card">
                <div className="feedback-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/testimonial/testi_2_2.jpg"
                    }
                    alt="Avater"
                  />
                </div>
                <div className="feedback-card-content">
                  <div className="feedback-card-content-top">
                    <p>
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration.
                    </p>
                  </div>
                  <div className="feedback-card-content-bottom">
                    <div className="feedback-card-content-bottom-name">
                      <h3>Jackline Techie</h3>
                    </div>
                    <div className="feedback-card-content-bottom-rating">
                      <Rating
                        name="half-rating"
                        defaultValue={3.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                  <div className="feedback-card-content-bottom-last">
                    <p>CEO at Kormola</p>
                  </div>
                </div>
              </div>
              <div className="feedback-card">
                <div className="feedback-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/testimonial/testi_2_3.jpg"
                    }
                    alt="Avater"
                  />
                </div>
                <div className="feedback-card-content">
                  <div className="feedback-card-content-top">
                    <p>
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration.
                    </p>
                  </div>
                  <div className="feedback-card-content-bottom">
                    <div className="feedback-card-content-bottom-name">
                      <h3>Jackline Techie</h3>
                    </div>
                    <div className="feedback-card-content-bottom-rating">
                      <Rating
                        name="half-rating"
                        defaultValue={3.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                  <div className="feedback-card-content-bottom-last">
                    <p>CEO at Kormola</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
