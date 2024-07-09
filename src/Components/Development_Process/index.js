import React from 'react'
import pinkcapsol from "../../asserts/images/pink-capsol.png";

import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import devandmaintenenceicon from '../../asserts/images/dev-and-maintenence-icon.png'
import qualityicon from '../../asserts/images/quality-icon.png'
import designanddevicon from '../../asserts/images/design-and-dev-icon.png'
import businessanalysisicon from '../../asserts/images/business-analysis-icon.png'
import realestateimg2 from '../../asserts/images/real-estate-img2.gif'

import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";
const Development_Process = (props) => {
    return (
        <div>
            <section class="techVerse_about techVerse_aboutServices2 ">
                <img
                    class="techVerse_about_icon1 animation11"
                    src={pinkcapsol}
                    alt=""
                />

                <img
                    class="techVerse_about_icon3 animation11"
                    src={greencube}
                    alt=""
                />
                <img
                    class="techVerse_about_icon4 animation11"
                    src={donatorange}
                    alt=""
                />
                <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="techVerse_about_img">
                                    <div class="techVerse_about_laptop_img realEstate-gif">
                                        <img
                                            src={props?.image}
                                            class="about-laptopImg"
                                            data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-duration="1000"
                                        />
                                    </div>
                                    <div class="techVerse_hero_btns re_appDev_btns" data-aos="fade-up" data-aos-offset="300" data-aos-duration="3000">
                                        <a href="#" class="btn_with_icon">
                                            <img class="btn_with_icon_img" src={phoneicon} alt="" />
                                            <span class="btn_with_icon_text">Call Now</span>
                                        </a>
                                        <a href="#" class="btn_with_icon btn_secondary">
                                            <img class="btn_with_icon_img" src={chaticon} alt="" />
                                            <span class="btn_with_icon_text">Chat Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="techVerse_about_content services-abbout2">
                                    <div class="sec_title realEstate-appSec_title">
                                        <h2
                                            class="sec_title_head color-darkBlue"
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="1000"
                                        >{props?.title}
                                            <span class="color-lightBlue2">   {props?.subtitle}</span> {props?.title2}
                                        </h2>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="2000"
                                        >
                                            {props?.para}
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="1000">
                                            <div class="reApp_box_icon"><img src={businessanalysisicon} alt="" /></div>
                                            <h4>Business Analysis</h4>
                                            <p>We kick off every project with a detailed business analysis phase. This involves understanding your business objectives, target audience, and market landscape. Through collaborative workshops and in-depth research, we define the project scope, requirements, and technical specifications to ensure alignment with your goals.

                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="1000">
                                            <div class="reApp_box_icon"><img src={designanddevicon} alt="" /></div>
                                            <h4>Design & Development</h4>
                                            <p>With insights gathered from the analysis phase, our skilled team of designers and developers begins crafting your app. We focus on creating intuitive user interfaces (UI) and engaging user experiences (UX) that resonate with your audience. Leveraging the latest technologies and agile methodologies, we build scalable, robust solutions that meet industry standards and exceed user expectations.

                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="2000">
                                            <div class="reApp_box_icon"><img src={qualityicon} alt="" /></div>
                                            <h4>Quality Assurance</h4>
                                            <p>Quality is paramount in our development process. Before deployment, our QA specialists conduct rigorous testing across multiple devices and environments. We perform comprehensive functional testing, usability testing, performance testing, and security testing to identify and rectify any issues early on. This ensures your app is stable, secure, and ready to deliver a seamless user experience.

                                                .</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="2000">
                                            <div class="reApp_box_icon"><img src={devandmaintenenceicon} alt="" /></div>
                                            <h4>Deployment and Maintenance</h4>
                                            <p>Launching your app is just the beginning of our partnership. We handle the complexities of deploying your app across platforms, managing app store submissions, and ensuring a smooth rollout. Post-launch, we provide ongoing maintenance and support services to keep your app optimized, secure, and up-to-date with evolving technologies and user needs.

                                            </p>
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

export default Development_Process
