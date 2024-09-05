import React from "react";

import donateWhite from "../../../src/asserts/images/donate-white.webp";
import peramidicon from "../../../src/asserts/images/peramid-icon.webp";
import phoneicongreen from "../../../src/asserts/images/phone-icon-green.webp";
import chaticonblue from "../../../src/asserts/images/chat-icon-blue.webp";

const Website = (props) => {
  return (
    <div>
      <section className="techVerse_webSolution">
        <img
          className="techVerse_webSolution_icon1 animation11"
          src={donateWhite}
          alt=""
        />
        <img
          className="techVerse_webSolution_icon2 animation22"
          src={peramidicon}
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="techVerse_webSolution_content">
                <div className="sec_title">
                  <h2
                    className="sec_title_head color-lightBlue1"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Revolutionize Your Business Presence
                    <span className="color-lightBlue2">Website </span>A Custom
                    Website Design
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Our expert team combines cutting-edge technology with
                    creative finesse to craft custom websites that not only
                    enhance user experience but also drive tangible results.
                  </p>
                  <div
                    className="techVerse_hero_btns"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                      <img
                        className="btn_with_icon_img"
                        src={phoneicongreen}
                        alt=""
                      />
                      <span className="btn_with_icon_text">
                        +(1) 23456-7890
                      </span>
                    </a>
                    <a href="#" className="btn_with_icon btn_secondary">
                      <img
                        className="btn_with_icon_img"
                        src={chaticonblue}
                        alt=""
                      />
                      <span className="btn_with_icon_text">
                        Start A Live Chat
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Website;
