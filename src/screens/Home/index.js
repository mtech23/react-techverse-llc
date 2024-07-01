import React from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import herophonemockupgroup  from "../../asserts/images/hero-phone-mockup-group.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import clutch from "../../asserts/images/clutch.png";
import truspilot  from "../../asserts/images/trus-pilot.png";

import laptopFrame from "../../asserts/images/laptop-Frame.png";
import laptop  from "../../asserts/images/laptop.png";
import donatorange  from "../../asserts/images/donat-orange.png";
import greencube  from "../../asserts/images/green-cube.png";
import pinkcapsol  from "../../asserts/images/pink-capsol.png";
import Pill  from "../../asserts/images/Pill.png";
import bbb  from "../../asserts/images/bbb.png";
import donatblue  from "../../asserts/images/donat-blue.png";
import chaticon  from "../../asserts/images/chat-icon.png";

import chat_icon  from "../../asserts/images/chat-icon.png";
import phone_icon  from "../../asserts/images/phone-icon.png";
import ConeBlueGlossy from "../../asserts/images/Cone-Blue-Glossy.png";
import PillBlueGlossy from "../../asserts/images/Pill-Blue-Glossy.png";
import Aos from "aos";
import 'swiper/css';
const Home = () => {


  Aos.init();




  return (
    <UserLayout>

<Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>

      <section class="techVerse_hero">
            <div class="techVerse_heroContent">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <div class="techVerse_hero_content">
                      <h1
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                      >
                        Award-Winning Mobile App
                        <span class="color-lightBlue1">Development</span>
                        Company In USA
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type
                      </p>
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
                      <div
                        class="hero_brands"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="3000"
                      >
                        <a href="#" class="hero_brands_img"
                          ><img src={clutch} alt=""
                        /></a>
                        <a href="#" class="hero_brands_img"
                          ><img src={truspilot} alt=""
                        /></a>
                        <a href="#" class="hero_brands_img"
                          ><img src={bbb} alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="techVerse_hero_img">
                      <img
                        src={donatblue}
                        class="techVerse_hero_icon1 animation11"
                        alt=""
                      />
                      <img
                        src={PillBlueGlossy}
                        class="techVerse_hero_icon2 animation22"
                        alt=""
                      />
                      <img
                        src={ConeBlueGlossy}
                        class="techVerse_hero_icon3 animation22"
                        alt=""
                      />
                      <img
                        src={herophonemockupgroup}
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





      </SwiperSlide>




      <SwiperSlide>
      <section class="techVerse_hero">
            <div class="techVerse_heroContent">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <div class="techVerse_hero_content">
                      <h1
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                      >
                        Award-Winning Mobile App
                        <span class="color-lightBlue1">Development</span>
                        Company In USA
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type
                      </p>
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
                      <div
                        class="hero_brands"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="3000"
                      >
                        <a href="#" class="hero_brands_img"
                          ><img src={clutch} alt=""
                        /></a>
                        <a href="#" class="hero_brands_img"
                          ><img src={truspilot} alt=""
                        /></a>
                        <a href="#" class="hero_brands_img"
                          ><img src={bbb} alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="techVerse_hero_img">
                      <img
                        src={donatblue}
                        class="techVerse_hero_icon1 animation11"
                        alt=""
                      />
                      <img
                        src={PillBlueGlossy}
                        class="techVerse_hero_icon2 animation22"
                        alt=""
                      />
                      <img
                        src={ConeBlueGlossy}
                        class="techVerse_hero_icon3 animation22"
                        alt=""
                      />
                      <img
                        src={herophonemockupgroup}
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


          
  

      </SwiperSlide>
      {/* <div class="swiper-pagination hero_pagination"></div> */}
    </Swiper>

    {/* 'backgroundImage: url(../../asserts/images/hero-bg.png);' */}


      {/* <div class="swiper-pagination hero_pagination"></div> */}
    

      {/* <!-- About Sec --> */}
    <section class="techVerse_about" id="particles-js1">
      <img
        class="techVerse_about_icon1 animation11"
        src={pinkcapsol}
        alt=""
      />
      <img
        class="techVerse_about_icon2 animation33"
        src={Pill}
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
      <div class="techVerse_aboutContent">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="techVerse_about_img">
                <div class="techVerse_about_laptop_img">
                  <img
                    src={laptop}
                    class="about-laptopImg"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  />
                  <img
                    src={laptopFrame}
                    class="laptop-Frame"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="techVerse_about_content">
                <div class="sec_title">
                  <h2
                    class="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  >
                    Ignite your online presence with the
                    <span class="color-lightBlue2">top rated</span> design
                    agency
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    We boast a team of dynamic and seasoned web developers
                    committed to delivering top-notch quality. Our core focus is
                    on providing exceptional services, and we take pride in
                    catering to the needs of our discerning clientele. While
                    many promise excellence, we believe in truly serving our
                    customers. Our dedication lies in crafting remarkable web
                    designs that not only establish a distinctive brand identity
                    but also ensure a prominent presence in the market. Equipped
                    with the latest tools and innovative techniques, our
                    professionals are poised to enhance your brand's visual
                    appeal. We are dedicated to elevating your communication
                    with potential clients, ensuring you always stand out in the
                    market.
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
                        src={ phone_icon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Call Now</span>
                    </a>
                    <a href="#" class="btn_with_icon btn_secondary">
                      <img
                        class="btn_with_icon_img"
                        src={chat_icon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Chat Now</span>
                    </a>
                  </div>
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
export default Home
