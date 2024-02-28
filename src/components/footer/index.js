import "./style.css";
import Grid from "@mui/material/Grid";

//mui icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Index = () => {
  return (
    <>
      <div className="footer">
        <Grid container spacing={8}>
          {/* footer social login section */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div>
              <div className="footer-heading">
                <a href="index.html">
                  <img
                    src={
                      "https://html.themeholy.com/webteck/demo/assets/img/logo-small.svg"
                    }
                  ></img>
                </a>
              </div>
              <p className="footer-text">
                Professionally redefine transparent ROI through low-risk
                high-yield imperatives. Progressively create empowered. cost
                effective users via team driven.
              </p>

              <div className="footer-social-login">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </Grid>

          {/* footer quick link section */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="footer-quick-ink-section">
              <div>
                <h3 className="footer-heading">Quick Links</h3>
              </div>
              <div>
                <ul className="footer-links">
                  <li className="footer-link-sub-section">
                    <span>
                      <KeyboardArrowRightIcon />
                    </span>
                    <span>
                      <a href="about.html">About Us</a>
                    </span>
                  </li>
                  <li className="footer-link-sub-section">
                    <span>
                      <KeyboardArrowRightIcon />
                    </span>
                    <a href="team.html">Meet Our Team</a>
                  </li>
                  <li className="footer-link-sub-section">
                    <span>
                      <KeyboardArrowRightIcon />
                    </span>
                    <a href="project.html">Our Projects</a>
                  </li>
                  <li className="footer-link-sub-section">
                    <span>
                      <KeyboardArrowRightIcon />
                    </span>
                    <a href="faq.html">Help &amp; FAQs</a>
                  </li>
                  <li className="footer-link-sub-section">
                    <span>
                      <KeyboardArrowRightIcon />
                    </span>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>

          {/* footer contact section */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="footer-contact-main-section">
              <div className="footer-heading">
                <h3>Contact Us</h3>
              </div>
              <div className="footer-contact-section">
                <div className="footer-contact-sub-section contact-feature">
                  <div className="footer-contact-left footer-contact-section-icon">
                    <LocalPhoneIcon />
                  </div>
                  <div className="footer-contact-right">
                    <div className="footer-contact-section-label">
                      <p>Phone Number</p>
                    </div>
                    <div className="footer-contact-section-link">
                      <a href="tel:+19088000393">+190-8800-0393</a>
                    </div>
                  </div>
                </div>
                <div className="footer-contact-sub-section contact-feature">
                  <div className="footer-contact-left footer-contact-section-icon">
                    <EmailIcon />
                  </div>
                  <div className="footer-contact-right">
                    <div className="footer-contact-section-label">
                      <p>Email address</p>
                    </div>
                    <div className="footer-contact-section-link">
                      <a href="mailto:info@webteck.com">info@webteck.com</a>
                    </div>
                  </div>
                </div>
                <div className="footer-contact-sub-section contact-feature">
                  <div className="footer-contact-left footer-contact-section-icon">
                    <LocationOnIcon />
                  </div>
                  <div className="footer-contact-right">
                    <div className="footer-contact-section-label">
                      <p>office location</p>
                    </div>
                    <div className="footer-contact-section-link">
                      <a href="https://www.google.com/maps">
                        54 Flemington, USA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          {/* footer search section */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div>
              <div>
                <h3 className="footer-heading">Get in touch!</h3>
              </div>
              <div>
                <p className="footer-text">
                  Subsrcibe to our upcoming latest article and news resources.
                  Sign up today for hints. tips and the latest product news.
                </p>
                <div className="footer-search-section">
                  <span>
                    <input
                      className="footer-search"
                      type="email"
                      placeholder="Enter email address"
                      required=""
                    />
                  </span>
                  <button className="footer-send-icon">
                    <SendIcon />
                  </button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Index;
