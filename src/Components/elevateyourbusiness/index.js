import React from "react";
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";

import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";
import phoneicongreen from "../../../src/asserts/images/phone-icon-green.png";
import mobileAppimg from "../../../src/asserts/images/mobileAppimg.png";
import chaticonblue from "../../../src/asserts/images/phone-icon-green.png";

const Elevateyourbusiness = (props) => {
  return (
    <div>
      <section class="techVerse_mobileApp">
        <div class="techVerse_mobileAppContent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-6">
                <div class="techVerse_mobileApp_content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                    Amplify Your Brand's Reach
                      <span class="color-lightBlue2"> With </span>
                      Techverse LLC Mobile Innovation
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, we specialize in crafting customized mobile applications tailored to amplify your brand's visibility and functionality.
                    </p>
                    <div
                      class="techVerse_hero_btns"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" class="btn_with_icon">
                        <img
                          class="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span class="btn_with_icon_text">+(1) 23456-7890</span>
                      </a>
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={chaticonblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">
                          {" "}
                          Start A Live Chat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 px-0">
                <div class="techVerse_mobileApp_img">
                  <img
                    src={mobileAppimg}
                    alt=""
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elevateyourbusiness;
