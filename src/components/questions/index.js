import React from "react";
import "./style.css";

import CustomAccordion from "../accordion/parent";

import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Index = () => {
  return (
    <>
      <div className="question-section">
        <Grid container spacing={12}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className="question-section-content">
              <div className="question-section-content-heading">
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
              </div>
              <div className="question-section-content-accordion">
                <CustomAccordion />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className="question-section-image">
              <img
                src={
                  "https://html.themeholy.com/webteck/demo/assets/img/normal/faq_1_1.png"
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Index;
