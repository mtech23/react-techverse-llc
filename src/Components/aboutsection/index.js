import React from "react";
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";
import Particles from "react-particles";
 
import { useCallback } from "react";
import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";
import Ctnbutton from "../../Components/ctnbutton";

const Aboutsection = (props) => {
  const { CtnbuttonComponent, ctnButtonProps } = props;

    return (
        <div>
            <section class="techVerse_about techVerse_aboutServices1"  id="particles-js1">
            
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
                    <div className=" techVerse_heroContent">
                        <div class="container-fluid">
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
                                            {/* <p
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-duration="2000"
                                        >
                                            {props?.para}
                                        </p> */}
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.para}
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.para2}
                      </p>

                      <ul
                        className="body-unorder-list"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.listItems?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                      <ul
                        className="body-bullet-list"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.bulletListItems?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                                        {CtnbuttonComponent && (
                                            <CtnbuttonComponent {...ctnButtonProps} />
                                        )}
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
                </div>
               
            </section>


        </div>
    )
}

export default Aboutsection;
