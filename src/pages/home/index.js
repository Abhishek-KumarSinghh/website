import React from "react";

import ImageClipPath from "../../components/dunamicPic/index";
import Parent from "../../components/accordion/parent";
import Service from "../../components/service/index";
import TeamSlider from "../../components/teamSlider/index";
import FeedbackSlider from "../../components/feedbackSlider/index";
import Brand from "../../components/brand/index";
import Questions from "../../components/questions/index";
import CardSlider from "../../components/cardSlider/index";
import Footer from "../../components/footer/index";
import FooterBottom from "../../components/footerBottom/index";

const Index = () => {
  return (
    <>
      <ImageClipPath />
      {/* <Parent /> */}
      <Service />
      <TeamSlider />
      <FeedbackSlider />
      <Brand />
      <Questions />
      <CardSlider />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Index;
