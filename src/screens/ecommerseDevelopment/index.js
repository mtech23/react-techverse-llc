import React from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

import clutch from "../../asserts/images/clutch.png";
import truspilot from "../../asserts/images/trus-pilot.png";

import donatorange from "../../asserts/images/donat-orange.png";
import greencube from "../../asserts/images/green-cube.png";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import Pill from "../../asserts/images/Pill.png";
import bbb from "../../asserts/images/bbb.png";
import donatblue from "../../asserts/images/donat-blue.png";

import ConeBlueGlossy from "../../asserts/images/Cone-Blue-Glossy.png";
import PillBlueGlossy from "../../asserts/images/Pill-Blue-Glossy.png";
import greenCube from "../../asserts/images/green-cube.png";
import pinkCapsol from "../../asserts/images/pink-capsol.png";
// import donatorange from "../../asserts/images/donat-orange.png";
import ecommerceimg01 from "../../asserts/images/ecommerce-img-01.png";
import androidiconw from "../../asserts/images/android-icon-w.png";
import angularicon from "../../asserts/images/angular-icon.png";
import appleicon from "../../asserts/images/apple-icon.png";
import ecommersedevhero from "../../asserts/images/ecommersedevhero.png";
import HeroSection from '../../Components/herosection/index'
import fluttericon from "../../asserts/images/flutter-icon.png";
import reacticon from "../../asserts/images/react-icon.png";


import Aos from "aos";
import 'swiper/css';
const EcommerseDevelopment = () => {


  Aos.init();




  return (
    <UserLayout>


      {/* <!-- Inner Hero --> */}
      <section class="inner_hero">
        <div class="inner-bgColor"></div>
        <div className=' width-1600'>


          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="inner_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  >
                    Custom Ecommerce Website
                    <span class="color-lightBlue1">Development</span> Company
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    Top-notch eCommerce web solutions that grow retail businesses and amplify sales.
                  </p>
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
                    className='ecommerceDev_hero_img'
                    src={ecommersedevhero}
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
      <HeroSection
        title={"Custom Ecommerce Website"}
        subtitle={"Development"}

        title2={"Company"}
        tagline={"Top - notch eCommerce web solutions that grow retail businesses and amplify sales."}
        heroimage={ecommersedevhero}

      />

      {/* ecommerce section */}

      <section class="techVerse_about techVerse_aboutServices2">
        <img
          class="techVerse_about_icon1 animation11"
          src={pinkCapsol}
          alt=""
        />
        {/* <!-- <img
          class="techVerse_about_icon2 animation33"
          src="images/Pill.png"
          alt=""
        /> --> */}
        <img
          class="techVerse_about_icon3 animation11"
          src={greenCube}
          alt=""
        />
        <img
          class="techVerse_about_icon4 animation11"
          src={donatorange}
          alt=""
        />
        <div class="techVerse_aboutContent techVerse_aboutContentServices2">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="sec_title buildStore_sec_title">
                  <h2
                    class="sec_title_head color-lightBlue2"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  >
                    Build Your e-Store with Us and Skyrocket the
                    <span class="color-darkBlue">Success!</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    Do you want to improve the sales of your business by promoting it digitally? If yes, then Techverse has got you covered. We are a leading eCommerce store development agency, and we offer a comprehensive range of e-store solutions that help businesses grow online and reach out to prospects. We create e-commerce website stores for our clients using the following platforms:
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img">
                    <img
                      src={ecommerceimg01}
                      class="about-laptopImg"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="techVerse_about_content services-abbout2">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">Shopify</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      The most commonly used eCommerce platform is ideal for businesses of all sizes.
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">WooCommerce</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      An easy-to-use and management WordPress eCommerce plugin that allows e-store creation.
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">Magento</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      For enterprises, we create large-scale responsive and functional website stores using Magento.
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </UserLayout>
  )
}
export default EcommerseDevelopment
