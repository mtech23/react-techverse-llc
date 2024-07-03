import React from 'react'
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";

import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";

const HeroSection = (props ) => {
    return (
        <div>
            <section class="inner_hero">
                <div class="inner-bgColor"></div>
                <div className='width-1600 '>
{/* width-1600 */}

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inner_hero_content">
                                    <h1
                                        data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-duration="1000"
                                    >
                                        {props?.title}
                                        <span class="color-lightBlue1">  {props?.subtitle}</span>  {props?.title2}
                                    </h1>
                                    <p
                                        data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-duration="2000"
                                    >
                                        {props?.tagline}                                    </p>
                                    <div class="hero_social-icons">
                                        <a href="#" class="hero_social-icon"><img src={androidiconw} alt="" /></a>
                                        <a href="#" class="hero_social-icon"><img src={angularicon} alt="" /></a>
                                        <a href="#" class="hero_social-icon"><img src={appleicon} alt="" /></a>
                                        <a href="#" class="hero_social-icon"><img src={fluttericon} alt="" /></a>
                                        <a href="#" class="hero_social-icon"><img src={reacticon} alt="" /></a>
                                    </div>
                                    <div
                                        class="techVerse_hero_btns"
                                        data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-duration="3000"
                                    >
                                        <a href="#" class="btn_with_icon">
                                            <img
                                                class="btn_with_icon_img"
                                                src={phoneicon}
                                                alt=""
                                            />
                                            <span class="btn_with_icon_text">Call Now</span>
                                        </a>
                                        <a href="#" class="btn_with_icon btn_secondary">
                                            <img
                                                class="btn_with_icon_img"
                                                src={chaticon}
                                                alt=""
                                            />
                                            <span class="btn_with_icon_text">Chat Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 inner-hero_rightCol">
                                <div class="inner_hero_img">
                                    <img
                                        className={ props?.className} 
                                        src={props?.heroimage}
                                        data-aos="fade-left"
                                        data-aos-offset="300"
                                        data-aos-duration="3000"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default HeroSection
