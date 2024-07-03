import React from 'react'
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";

import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";
import Ctnbutton from '../../Components/ctnbutton'

const Aboutsection = (props) => {
    return (
        <div>
            <section class="techVerse_about techVerse_aboutServices1" id="particles-js1">
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
                <div class="techVerse_aboutContent techVerse_aboutContentServices1">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-6">
                                <div class="techVerse_about_content services-abbout1">
                                    <div class="sec_title">
                                        <h2
                                            class="sec_title_head color-darkBlue"
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="1000"
                                        >
                                            {props?.title}
                                            <span class="color-lightBlue2">      {props?.subtitle}</span>   {props?.title2}
                                        </h2>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="2000"
                                        >
                                            {props?.para}
                                        </p>







{/* 


                                        <div
                                            class="techVerse_hero_btns"
                                            data-aos="fade-up"
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
                                        </div> */}


                                            <Ctnbutton 
                                            phoneicon={props?.phoneicon}
                                            calltext={props?.calltext}
                                            chaticon={props?.chaticon}
                                            chatenow={props?.chatenow}

                                            />




                                        <ul
                                            class="body-bullet-list"
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="2000"
                                        >
                                            <li>{props?.WordPress}</li>
                                            <li>  {props?.PHP}</li>
                                            <li>    {props?.Shopify}</li>
                                            <li>  {props?.Joomla}</li>
                                            <li>  {props?.Magneto}</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="techVerse_about_img">
                                    <div class="techVerse_about_laptop_img">
                                        <img
                                            src={props?.image}
                                            class="about-laptopImg business-devlopmentImg"
                                            data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-duration="1000"
                                        />
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

export default Aboutsection
