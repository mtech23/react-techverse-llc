import React from 'react'
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";
import donateWhite from "../../../src/asserts/images/donate-white.png";
import peramidicon from "../../../src/asserts/images/peramid-icon.png";
import phoneicongreen from "../../../src/asserts/images/phone-icon-green.png";
import chaticonblue from "../../../src/asserts/images/phone-icon-green.png";
import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";

const Website = (props) => {
    return (
        <div>
            <section class="techVerse_webSolution">
                <img
                    class="techVerse_webSolution_icon1 animation11"
                    src={donateWhite}
                    alt=""
                />
                <img
                    class="techVerse_webSolution_icon2 animation22"
                    src={peramidicon}
                    alt=""
                />
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="techVerse_webSolution_content">
                                <div class="sec_title">
                                    <h2
                                        class="sec_title_head color-lightBlue1"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                        data-aos-duration="1000"
                                    >
                                        Elevate your business presence with a customized
                                        <span class="color-lightBlue2">Website Solution</span>
                                    </h2>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                        data-aos-duration="2000"
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s,
                                    </p>
                                    <div
                                        class="techVerse_hero_btns"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
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
                                            <span class="btn_with_icon_text">Start A Live Chat</span>
                                        </a>
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

export default Website