import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Portfolios = (props) => {
  return (
    <div>
      {/* new Portfolio swipper section */}

      <section class="techVerse_portfolio">
        <div class="techVerse_portfolioContent width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="sec_title">
                  <h2
                    class="sec_title_head color-lightBlue2"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    {props?.title}
                    <span class="color-darkBlue"> {props?.subtitle} </span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    {props?.para}
                  </p>
                </div>
              </div>
              <div class="col-md-12">
                <div
                  class="portfolio_tabs nav nav-tabs"
                  id="myTab"
                  role="tablist"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <a
                    class="nav-link active"
                    id="mobile_apps"
                    data-toggle="tab"
                    href="#mobile-app"
                    role="tab"
                  >
                    Mobile Apps
                  </a>
                  <a
                    class="nav-link"
                    id="websites_tab"
                    data-toggle="tab"
                    href="#website-tab"
                    role="tab"
                  >
                    Websites
                  </a>
                  <a
                    class={props?.classcms}
                    id="cms_tab"
                    data-toggle="tab"
                    href="#cms-tab"
                    role="tab"
                  >
                    {props?.CMS}
                  </a>
                </div>
                <div class="tab-content" id="portfolioTabs">
                  <div
                    class="tab-pane fade show active"
                    id="mobile-app"
                    role="tabpanel"
                    aria-labelledby="mobile_apps"
                  >
                    <div class="mobile_app_carousel">
                      <Swiper
                        slidesPerView={2.1}
                        spaceBetween={20}
                        // speed={2}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          640: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                          },
                          // 768: {
                          //   slidesPerView: 4,
                          //   spaceBetween: 40,
                          // },
                          // 1024: {
                          //   slidesPerView: 5,
                          //   spaceBetween: 50,
                          // },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          {" "}
                          <img src={props?.image1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <img src={props?.image2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <img src={props?.image3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <img src={props?.image4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <img src={props?.image5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <img src={props?.image1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <img src={props?.image2} alt="" />
                        </SwiperSlide>
                      </Swiper>

                      <div class="our-slider-img">
                        <img src={props?.image6} alt="" />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="website-tab"
                    role="tabpanel"
                    aria-labelledby="websites_tab"
                  >
                    <div class="web_app_carousel">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        // speed={200}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                          delay: 1500,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          766: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                          },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper "
                      >
                        <SwiperSlide>
                          <img src={props?.image7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image10} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image10} alt="" />
                        </SwiperSlide>
                      </Swiper>

                      <div class="our-slider-webframe">
                        <img src={props?.image11} alt="" />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="cms-tab"
                    role="tabpanel"
                    aria-labelledby="cms_tab"
                  >
                    <div class="web_app_carousel">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        // speed={200}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                          delay: 1500,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          766: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                          },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper "
                      >
                        <SwiperSlide>
                          <img src={props?.image12} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image13} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image14} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image15} alt="" />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                          <img src={props?.image13} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={props?.image14} alt="" />
                        </SwiperSlide> */}
                      </Swiper>

                      <div class="our-slider-webframe">
                        <img src={props?.image11} alt="" />
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
  );
};

export default Portfolios;
