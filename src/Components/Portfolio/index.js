import React from 'react'
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";

import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";

const Portfolio = (props) => {
    return (
        <div>

            <section class={`techVerse_about techVerse_aboutServices2 ${props?.newClass}`}>
                <img
                    class="techVerse_about_icon1 animation11"
                    src={props?.pinkcapsol}
                    alt=""
                />

                <img
                    class="techVerse_about_icon3 animation11"
                    src={props?.greencube}
                    alt=""
                />
                <img
                    class="techVerse_about_icon4 animation11"
                    src={props?.donatorange}
                    alt=""
                />
                <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="techVerse_about_img">
                                    <div class="techVerse_about_laptop_img">
                                        <img
                                            src={props?.image}
                                            // class="about-laptopImg"
                                            class={`about-laptopImg ${props?.eduHR}`}
                                            data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-duration="1000"
                                        />
                                          <img src={props?.travelimg}
                                            class={ props?.laptopFrame}
                                            data-aos="fade-left"
                                            data-aos-offset="0"
                                            data-aos-duration="1000" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="techVerse_about_content services-abbout2">
                                    <div class="sec_title">
                                        <h2 
                                            class={` sec_title_head ${props?.classtitle} aos-init aos-animate`}
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="1000"
                                        >
                                            {props?.title}
                                            <span class="color-lightBlue2"> {props?.subtitle} </span>
                                            {props?.title2}
                                        </h2>
                                        <p className={`${props?.classpara} aos-init aos-animate`}
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="2000"
                                        >
                                            {props?.para}
                                        </p>

                                        <div
                                            class="techVerse_hero_btns"
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="3000"
                                        >
                                            <a href="#" class="btn_with_icon">
                                                <img
                                                    class="btn_with_icon_img"
                                                    src={props?.phoneicon}
                                                    alt=""
                                                />
                                                <span class="btn_with_icon_text">Call Now</span>
                                            </a>
                                            <a href="#" class="btn_with_icon btn_secondary">
                                                <img
                                                    class="btn_with_icon_img"
                                                    src={props?.chaticon}
                                                    alt=""
                                                />
                                                <span class="btn_with_icon_text">Chat Now</span>
                                            </a>
                                        </div>
                                        <div>
                                            <div class="techVerse_store_links aos-init aos-animate" data-aos="fade-right" data-aos-offset="0" data-aos-duration="3000">
                                                <a href="#" class="techVerse_store_link">
                                                    <img src={props?.playstore}
                                                        alt="" />
                                                </a>
                                                <a href="#" class="techVerse_store_link">
                                                    <img src={props?.appstore}
                                                        alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
