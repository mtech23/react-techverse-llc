import React from 'react'
import pinkcapsol from "../../asserts/images/pink-capsol.png";

import drivingsecsecreen from '../../asserts/images/driving-sec-secreen.png'
import reicon1 from '../../asserts/images/re-icon1.png'
import reicon2 from '../../asserts/images/re-icon2.png'
import reicon3 from '../../asserts/images/re-icon3.png'
import reicon4 from '../../asserts/images/re-icon4.png'
import reicon5 from '../../asserts/images/re-icon5.png'
import reicon6 from '../../asserts/images/re-icon6.png'
import reicon7 from '../../asserts/images/re-icon7.png'
import reicon8 from '../../asserts/images/re-icon8.png'
import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";
const Driving_Exprience = (props) => {
    return (
        <div>
            <section
                className={`techVerse_about techVerse_aboutServices2 ${props?.classheroimage}`}
            >
                <div class={props?.class_innerBG}>

                </div>
                <img class="techVerse_about_icon1 animation11"
                    src={pinkcapsol} alt="" />
                {/* <!-- <img
                class="techVerse_about_icon2 animation33"
                src="images/Pill.png"
                alt=""
                /> --> */}
                <img class="techVerse_about_icon3 animation11"
                    src={greencube} alt="" />
                <img class="techVerse_about_icon4 animation11"
                    src={donatorange} alt="" />
                <div class="techVerse_aboutContent techVerse_aboutContentServices2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="sec_title buildStore_sec_title">
                                    <h2 class="sec_title_head color-lightBlue2" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
                                        <span class={props?.titleclass}>{props?.title}</span> {props?.subtitle} <span class={props?.titleclass2}> {props?.title2}    </span>
                                    </h2>


                                    <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="2000">
                                 {props?.para}
            </p>
                                                        </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="techVerse_about_img">
                                    <div class="techVerse_about_laptop_img driving-2screen">
                                        <img src={props?.image}
                                            class="about-laptopImg mobileApp_devSec_img"
                                            data-aos="fade-right" data-aos-offset="0" data-aos-duration="1000" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="techVerse_about_content services-abbout2">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon1} alt="" />
                                                </div>
                                                <h4>Expert UI/UX Design</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon2} alt="" />
                                                </div>
                                                <h4>Customized Solutions</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon3} alt="" /></div>
                                                <h4>Real-Time Property Listings</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon4} alt="" /></div>
                                                <h4>Secure Payment Integration</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon5} alt="" /></div>
                                                <h4>Virtual Property Tours</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon6} alt="" /></div>
                                                <h4>24/7 Customer Support</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon7} alt="" />
                                                </div>
                                                <h4>Competitive Pricing</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="icon_box" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="box_icon">
                                                    <img src={reicon8} alt="" />
                                                </div>
                                                <h4>Latest Technologies</h4>
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

export default Driving_Exprience
