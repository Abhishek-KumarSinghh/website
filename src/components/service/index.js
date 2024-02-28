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

export default function SimpleSlider() {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
        <div className="team-card-slider-main-section">
          <div className="title-area text-center">
            <div className="icon-masking sub-title">
              <img
                src={
                  "https://html.themeholy.com/webteck/demo/assets/img/theme-img/title_shape_2.svg"
                }
                alt="shape"
              />
              WHAT WE DO
            </div>
            <h2 className="sec-title">
              We Provide Exclusive Service For
              <span className="text-theme">Your Business</span>
            </h2>
          </div>
          <div className="feedback-card-slider">
            <Slider {...settings}>
              <div className="team-card service-card">
                <div className="team-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/service/service_box_1.jpg"
                    }
                  />
                </div>
                <div className="team-card-content">
                  <div className="team-card-name">
                    <h3>Rayan Athels</h3>
                  </div>
                  <div className="service-card-para">
                    <p>
                      Intrinsicly redefine competitive e-business before
                      adaptive.
                    </p>
                  </div>
                  <div className="team-card-designation">
                    <p>Read More</p>
                    {/* <a href="service-details.html" class="link-btn">Read More<i class="fas fa-arrow-right ms-2"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="team-card service-card">
                <div className="team-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/service/service_box_2.jpg"
                    }
                  />
                  
                </div>
                <div className="team-card-content">
                  <div className="team-card-name">
                    <h3>Rayan Athels</h3>
                  </div>
                  <div className="service-card-para">
                    <p>
                      Intrinsicly redefine competitive e-business before
                      adaptive.
                    </p>
                  </div>
                  <div className="team-card-designation">
                    <p>Read More</p>
                  </div>
                </div>
              </div>
              <div className="team-card service-card">
                <div className="team-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/service/service_box_3.jpg"
                    }
                  />
                </div>
                <div className="team-card-content">
                  <div className="team-card-name">
                    <h3>Rayan Athels</h3>
                  </div>
                  <div className="service-card-para">
                    <p>
                      Intrinsicly redefine competitive e-business before
                      adaptive.
                    </p>
                  </div>
                  <div className="team-card-designation">
                    <p>Read More</p>
                  </div>
                </div>
              </div>
              <div className="team-card service-card">
                <div className="team-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/service/service_box_4.jpg"
                    }
                  />
                </div>
                <div className="team-card-content">
                  <div className="team-card-name">
                    <h3>Rayan Athels</h3>
                  </div>
                  <div className="service-card-para">
                    <p>
                      Intrinsicly redefine competitive e-business before
                      adaptive.
                    </p>
                  </div>
                  <div className="team-card-designation">
                    <p>Read More</p>
                  </div>
                </div>
              </div>
              <div className="team-card service-card">
                <div className="team-card-image">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/service/service_box_5.jpg"
                    }
                  />
                </div>
                <div className="team-card-content">
                  <div className="team-card-name">
                    <h3>Rayan Athels</h3>
                  </div>
                  <div className="service-card-para">
                    <p>
                      Intrinsicly redefine competitive e-business before
                      adaptive.
                    </p>
                  </div>
                  <div className="team-card-designation">
                    <p>Read More</p>
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
