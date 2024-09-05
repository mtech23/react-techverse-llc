import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import techLogo1 from "../../../src/asserts/images/tech-logo-1.png";
import techLogo2 from "../../../src/asserts/images/tech-logo-2.png";
import techLogo3 from "../../../src/asserts/images/tech-logo-3.png";
import techLogo4 from "../../../src/asserts/images/tech-logo-4.png";
import techLogo5 from "../../../src/asserts/images/tech-logo-5.png";
import techLogo6 from "../../../src/asserts/images/tech-logo-6.png";
import techLogo7 from "../../../src/asserts/images/tech-logo-7.png";
import techLogo8 from "../../../src/asserts/images/tech-logo-7.png";
import techLogo9 from "../../../src/asserts/images/tech-logo-9.png";
import techLogo10 from "../../../src/asserts/images/tech-logo-10.png";

const PortfoliosTech = (props) => {
  return (
    <>
      {/* Portfolio Technologies  */}

      <section className="techVerse_tech techVerse_tech_New techVerse_portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_title">
                <h2
                  className="sec_title_head color-lightBlue2"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  {props?.title}
                  <span className="color-darkBlue"> {props?.subtitle} </span>
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
            <div className="col-md-12">
              <div className="tech-line2">
                <div className="marquee-container">
                  <div className="marquee1">
                    <div className="all_logos">
                      <div className="single_logo_new">
                        <img src={techLogo1} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo2} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo3} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo4} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo5} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo1} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo2} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo3} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo4} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo5} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo1} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo2} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo3} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo4} alt="" />
                      </div>

                      <div className="single_logo_new">
                        <img src={techLogo5} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-line2">
                <div className="marquee-container">
                  <div className="marquee">
                    <div className="all_logos">
                      <div className="single_logo_new">
                        <img src={techLogo6} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo7} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo8} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo9} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo10} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo6} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo7} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo8} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo9} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo10} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo6} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo7} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo8} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo9} alt="" />
                      </div>
                      <div className="single_logo_new">
                        <img src={techLogo10} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfoliosTech;
