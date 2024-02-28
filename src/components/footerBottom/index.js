import React from "react";
import "./style.css";

const Index = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="footer-bottom-section">
          {/* footer bottom left section */}
          <div className="footer-bottom-left-section">
            <p className="copyright-text">
              Copyright &copy;2024{" "}
              <a href="https://themeforest.net/user/themeholy">Themeholy</a>.
              All Rights Reserved.
            </p>
          </div>

          {/* footer bottom right section */}
          <div className="footer-bottom-right-section">
            <ul>
              <li>
                <a href="about.html">Terms &amp; Condition |</a>
              </li>
              <li style={{ padding: "0 10px" }}>
                <a href="about.html">Careers |</a>
              </li>
              <li>
                <a href="about.html">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
