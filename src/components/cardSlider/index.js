import React from "react";
import "./style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 2,
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
            Get Every Single Update
            <span className="text-theme">Blog</span>
          </h2>
        </div>
        <div className="card-carousel-main-section">
          <div className="card-slider">
            <Slider {...settings}>
              {/* <div className="card-slider-carousel-main-section"> */}
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/blog/blog_1_2.jpg"
                    }
                    alt="blog image"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html" className="author">
                      <CalendarMonthIcon />
                      19 Jan, 2024
                    </a>
                    <a href="blog.html" className="author">
                      <ForumIcon />4 Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a
                      href="blog-details.html"
                      className="hover-underline-animation underline-on-hover"
                    >
                      Latin derived from Cicero's 1st-century BC
                    </a>
                  </h3>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog.html" className="author">
                      <img
                        src={
                          "https://html.themeholy.com/webteck/demo/assets/img/blog/author-1-1.png"
                        }
                        alt="avater"
                      />
                      <span> By Themeholy</span>
                    </a>
                    <a href="blog-details.html" className="line-btn">
                      Read More
                      <i
                        className="fas fa-arrow-right"
                        style={{ paddingLeft: "7px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/blog/blog_1_3.jpg"
                    }
                    alt="blog image"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html" className="author">
                      <CalendarMonthIcon />
                      19 Jan, 2024
                    </a>
                    <a href="blog.html" className="author">
                      <ForumIcon />4 Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a
                      href="blog-details.html"
                      className="hover-underline-animation underline-on-hover"
                    >
                      Latin derived from Cicero's 1st-century BC
                    </a>
                  </h3>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog.html" className="author">
                      <img
                        src={
                          "https://html.themeholy.com/webteck/demo/assets/img/blog/author-1-1.png"
                        }
                        alt="avater"
                      />
                      <span> By Themeholy</span>
                    </a>
                    <a href="blog-details.html" className="line-btn">
                      Read More
                      <i
                        className="fas fa-arrow-right"
                        style={{ paddingLeft: "7px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/blog/blog_1_4.jpg"
                    }
                    alt="blog image"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html" className="author">
                      <CalendarMonthIcon />
                      19 Jan, 2024
                    </a>
                    <a href="blog.html" className="author">
                      <ForumIcon />4 Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    className="underline-on-hover">
                      Latin derived from Cicero's 1st-century BC
                    </a>
                  </h3>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog.html" className="author">
                      <img
                        src={
                          "https://html.themeholy.com/webteck/demo/assets/img/blog/author-1-1.png"
                        }
                        alt="avater"
                      />
                      <span> By Themeholy</span>
                    </a>
                    <a href="blog-details.html" className="line-btn">
                      Read More
                      <i
                        className="fas fa-arrow-right"
                        style={{ paddingLeft: "7px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/blog/blog_1_1.jpg"
                    }
                    alt="blog image"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html" className="author">
                      <CalendarMonthIcon />
                      19 Jan, 2024
                    </a>
                    <a href="blog.html" className="author">
                      <ForumIcon />4 Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html" className="underline-on-hover">
                      Latin derived from Cicero's 1st-century BC
                    </a>
                  </h3>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog.html" className="author">
                      <img
                        src={
                          "https://html.themeholy.com/webteck/demo/assets/img/blog/author-1-1.png"
                        }
                        alt="avater"
                      />
                      <span> By Themeholy</span>
                    </a>
                    <a href="blog-details.html" className="line-btn">
                      Read More
                      <i
                        className="fas fa-arrow-right"
                        style={{ paddingLeft: "7px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
