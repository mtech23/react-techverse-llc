import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Process from "../../Components/Process";
import TrustedPartners from "../../Components/TrustedPartners";
import Portfolio from "../../Components/Portfolio";

import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import digitalmarketinghero from "../../asserts/images/digital-marketing-hero.webp";
import digitalmarketing01 from "../../asserts/images/digital-marketing-01.webp";
import digitalmarketing02 from "../../asserts/images/digital-marketing-02.webp";

import digitalmarketing0111 from "../../asserts/images/digital-marketing-0111.png";
import digitalmarketing0222 from "../../asserts/images/digital-marketing-0222.png";
import Helmet from "../../Components/Helmet";
import Packages from "../../Components/Packages";

import chaticons from "../../../src/asserts/images/chat-icon-blue.webp";
import phoneicongreen from "../../../src/asserts/images/phone-icon-green.webp";

import mobileAppimg from "../../../src/asserts/images/mobileAppimg.webp";
import ElevateyourbusinessImg from "../../../src/asserts/images/ElevateyourbusinessImg.png";

import chaticonblue from "../../asserts/images/phone-icon-green.webp";
import donateWhite from "../../asserts/images/donate-white.webp";
import peramidicon from "../../asserts/images/peramid-icon.webp";

import seoIconTop from "../../asserts/images/seo-icon-top.png";
import seoIconBottom from "../../asserts/images/seo-icon-bottom.png";
import ServiceParticle from "../../Components/ServiceParticle/ServiceParticle";
import orangecircle from "../../asserts/images/orange-circle.webp";

import donatewhitesmall from "../../asserts/images/donate-white-small.webp";
import orangehalfcircle from "../../asserts/images/orange-half-circle.webp";
import bluecube from "../../asserts/images/blue-cube.webp";

import youtubeMarketingIcon from "../../asserts/images/youtube-icon.png";
import socialMarketingIcon from "../../asserts/images/social-media-icon.png";
import amazonMarketingIcon from "../../asserts/images/amazon-icon.png";
import emailMarketingIcon from "../../asserts/images/email-marketing-icon.png";
import smsMarketingIcon from "../../asserts/images/sms-marketing.png";
import crossplatform from "../../asserts/images/cross-platform.webp";

gsap.registerPlugin(MotionPathPlugin);

const DigitalMarketing = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="#1 Digital Marketing Services in California, USA | Techverse LLC"
        description="Techverse LLC provides professional digital marketing services in California, USA. Boost your sales, Take your brand to the next level with our proven strategies"
        keywords="Digital Marketing Services"
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Innovative Digital Marketing Strategies"}
        subtitle={"  For "}
        title2={"  Modern Success    "}
        tagline={
          "In today's rapidly evolving digital landscape, harnessing the power of innovative marketing strategies is crucial for achieving sustained business growth and market success. At Techverse LLC, we specialize in making tailored digital marketing solutions that propel brands forward in the digital sphere."
        }
        className={"digital-marketing-hero"}
        heroimage={digitalmarketinghero}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",

          // playstore: playstore,
          // appstore: appstore
        }}
      />
      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      {/* <!-- About Sec --> */}

      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title2={"Visibility With Our Dynamic Digital Solutions!"}
        title="Drive Growth"
        subtitle="  And  "
        para="Discover top-tier digital marketing solutions tailored to raise your brand's online presence with Techverse LLC. Our expert team crafts comprehensive strategies encompassing SEO optimization, targeted PPC campaigns, engaging social media management, and compelling content marketing. Whether you're aiming to boost conversions, enhance brand visibility, or drive traffic, our innovative approach ensures measurable results. Trust Techverse LLC to navigate the digital landscape and push your business to sustained growth and success.

"
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",
        }}
        image={digitalmarketing0111}
        bulletListItems={[
          "10+ Years of Experience",
          "A Team of 50+ Digital Marketing Experts",
          "2k+ Satisfied Clients",
          "150+ Ongoing Projects",
          "Up to 43% Increase in ROI  ",
        ]}
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="Excellent Digital Solutions "
        title2="Your Brand's Growth."
        subtitle=" For "
        para="We excel in crafting compelling digital marketing strategies that resonate with your audience and lift your brand's online presence. Through expert SEO techniques, targeted social media campaigns, and innovative content strategies, we ensure that your brand not only stands out but thrives in the digital landscape. Whether you're looking to boost your website's visibility, engage with your community on social platforms, or drive conversions through effective digital advertising, our team is dedicated to building your brand's success story. 
        Trust Techverse LLC to navigate the complexities of digital marketing so you can focus on what you do best – delivering exceptional value to your customers."
        image={digitalmarketing0222}
        chaticon={chaticon}
        phoneicon={phoneicon}
      />

      {/* MOBILE APP */}

      {/* <Elevateyourbusiness /> */}
      <section className="techVerse_mobileApp">
        <div className="techVerse_mobileAppContent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6">
                <div className="techVerse_mobileApp_content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Elevate your business presence with a our
                      <span className="color-lightBlue2">
                        {" "}
                        Digital Marketing{" "}
                      </span>
                      services
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, we specialize in crafting customized
                      mobile applications tailored to amplify your brand's
                      visibility and functionality.
                    </p>
                    <div
                      className="techVerse_hero_btns"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                        <img
                          className="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          +(1) 23456-7890
                        </span>
                      </a>
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={chaticons}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          {" "}
                          Start A Live Chat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 px-0">
                <div className="techVerse_mobileApp_img">
                  <img
                    src={ElevateyourbusinessImg}
                    alt=""
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services --> */}
      {/* <section ref={sec2} className="techVerse_services" id="particles-js2"> */}
      <section className="techVerse_services" id="particles-js2">
        <ServiceParticle />
        <div className="sevices_hover">
          <div className="services_inner_images">
            <img
              className="techVerse_services_icon1 animation11"
              src={pinkcapsol}
              alt=""
            />
            <img
              className="techVerse_services_icon2 animation11"
              src={greencube}
              alt=""
            />
            <img
              className="techVerse_services_icon3 animation33"
              src={orangecircle}
              alt=""
            />
            <img
              className="techVerse_services_icon4 animation22"
              src={donatewhitesmall}
              alt=""
            />
            <img
              className="techVerse_services_icon5 animation33"
              src={orangehalfcircle}
              alt=""
            />
          </div>
          <div className="container services_offerContainer">
            <div className="row">
              <div className="sec_title">
                <h2
                  className="sec_title_head color-lightBlue2"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Marketing Services
                  <span className="color-darkBlue"> We Offer </span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  Techverse does not provide services only; we become a partner
                  with our clients to scale up their businesses with our wide
                  range of digital marketing services. We have helped hundreds
                  of large enterprises in the US to get new wings to fly higher
                  on the digital landscapes globally. Get a unique digital
                  marketing experience with the amalgamation of our proven
                  strategies, professional team, and the use of modern
                  technology.
                </p>
              </div>
              <div className="techVerse_services_content techVerse_services_content_digitalMarketing">
                <img src={bluecube} className="blue-cube1 animation11" alt="" />
                <img src={bluecube} className="blue-cube2 animation11" alt="" />
                <img src={bluecube} className="blue-cube3 animation11" alt="" />
                <img src={bluecube} className="blue-cube4 animation11" alt="" />
                <div className="service_box_1"></div>
                <div className="service_box_4"></div>
                <div className="service_box_2"></div>
                <div className="service_box_3"></div>

                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={youtubeMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Youtube Marketing</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Youtube Marketing</h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={socialMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Social Media Marketing
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Social Media Marketing
                    </h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={amazonMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Amazon Marketing</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Amazon Marketing</h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>

                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={emailMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Email Marketing</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Email Marketing</h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={smsMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">SMS Marketing</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">SMS Marketing</h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={crossplatform} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Search Enging Marketing
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Search Enging Marketing
                    </h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>

                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={youtubeMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Youtube Marketing</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Youtube Marketing</h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={socialMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Social Media Marketing
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Social Media Marketing
                    </h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={amazonMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Amazon Marketing</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Amazon Marketing</h3>
                    <p className="service_box_p">
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus
                      is on providing exceptional services, and we take pride
                      in.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center mt-5">
                <a
                  href="#"
                  className="btn_with_icon"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <span className="btn_with_icon_text">
                    START YOUR PROJECT NOW!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Website --> */}
      {/* <div ref={website}> */}
      <section className="techVerse_webSolution techVerse_webSolution_digital_M">
        <div className="techVerse_webSolution_hover">
          <img
            className="techVerse_webSolution_icon1 animation11"
            src={donateWhite}
            alt=""
          />
          <img
            className="techVerse_webSolution_icon2 animation22"
            src={peramidicon}
            alt=""
          />
          <img className="seo-icon-top animation22" src={seoIconTop} alt="" />
          <img
            className="seo-icon-bottom animation22"
            src={seoIconBottom}
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="techVerse_webSolution_content">
                <div className="sec_title">
                  <h2
                    className="sec_title_head color-lightBlue1"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Elevate your business digital presence with our
                    <span className="color-lightBlue2"> SEO </span>services
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Our expert team combines cutting-edge technology with
                    creative finesse to craft custom websites that not only
                    enhance user experience but also drive tangible results.
                  </p>
                  <div
                    className="techVerse_hero_btns"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                      <img
                        className="btn_with_icon_img"
                        src={phoneicongreen}
                        alt=""
                      />
                      <span className="btn_with_icon_text">
                        +(1) 23456-7890
                      </span>
                    </a>
                    <a href="#" className="btn_with_icon btn_secondary">
                      <img
                        className="btn_with_icon_img"
                        src={chaticonblue}
                        alt=""
                      />
                      <span className="btn_with_icon_text">
                        Start A Live Chat
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      {/* process we use */}
      <Process para="Our service is designed to propel your business forward through strategic online campaigns personalized to your unique goals. We begin by conducting a comprehensive analysis of your current digital footprint and market landscape, identifying key opportunities and challenges" />

      <Packages />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default DigitalMarketing;
