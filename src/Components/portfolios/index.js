import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
const Portfolios = (props) => {
    return (
        <div>
            {/* <!-- Portfolio --> */}
            <section class="techVerse_portfolio">
                <div class="techVerse_portfolioContent">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="sec_title">
                                    <h2
                                        class="sec_title_head color-lightBlue2"
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                        data-aos-duration="1000"
                                    >
                                        {props?.title}
                                        <span class="color-darkBlue"> {props?.subtitle} </span>
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
                            <div class="col-md-12">
                                <div
                                    class="portfolio_tabs nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-duration="3000"
                                >
                                    <a
                                     className={`${props?.classmobileapp} active`}
                                        // class=`${props?.class } active` "nav-link active"
                                        id="mobile_apps"
                                        data-toggle="tab"
                                        href="#mobile-app"
                                        role="tab"
                                    >{props?.Mobile_Apps}  </a  >
                                    <a
                                        class={props?.classwebsite}
                                        id="websites_tab"
                                        data-toggle="tab"
                                        href="#website-tab"
                                        role="tab"
                                    >  {props?.Websites}</a
                                    >
                                    <a
                                        class={props?.classcms}
                                        id="cms_tab"
                                        data-toggle="tab"
                                        href="#cms-tab"
                                        role="tab"
                                    >{props?.CMS}  </a >
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

                                                slidesPerView={5}
                                                spaceBetween={30}
                                                pagination={{
                                                    clickable: true,

                                                }}
                                                modules={[Parallax, Pagination, Navigation]}
                                                className="mySwiper"

                                            >

                                                <SwiperSlide>

                                                    <img src={props?.image1} alt="" />
                                                </SwiperSlide>

                                                <SwiperSlide>

                                                    <img src={props?.image2} alt="" />
                                                </SwiperSlide>
                                                <SwiperSlide>

                                                    <img src={props?.image3} alt="" />
                                                </SwiperSlide>

                                                <SwiperSlide>

                                                    <img src={props?.image4} alt="" />
                                                </SwiperSlide>

                                                <SwiperSlide>

                                                    <img src={props?.image5} alt="" />
                                                </SwiperSlide>
                                                <SwiperSlide>

                                                    <img src={props?.image1} alt="" />
                                                </SwiperSlide>
                                                <SwiperSlide>

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

                                                slidesPerView={5}
                                                spaceBetween={30}
                                                pagination={{
                                                    clickable: true,
                                                }}

                                                modules={[Parallax, Pagination, Navigation]}
                                                className="mySwiper">






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

                                                slidesPerView={5}
                                                spaceBetween={30}
                                                pagination={{
                                                    clickable: true,
                                                }}

                                                modules={[Parallax, Pagination, Navigation]}
                                                className="mySwiper">



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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolios