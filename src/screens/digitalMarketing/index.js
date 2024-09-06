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
import Testimonials from "../../Components/Testimonials";

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
        title={"Boost Your Brand With Results-Driven "}
        subtitle={"  Digital Marketing Solutions "}
        // title2={""}
        tagline={
          "Boost your brand with Techverse LLC's digital marketing solutions. Our results-driven strategies harness the power of SEO, social media, and targeted campaigns to amplify your online presence and drive growth. Partner with us to transform your digital footprint and achieve measurable results."
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
        title="Maximize Your  "
        subtitle="  Digital Presence  "
        title2={"With Techverse LLC’s Expertise  "}
        para="Boost your online impact with Techverse LLC’s digital marketing expertise. We provide customized solutions in SEO, PPC, social media, and content marketing to enhance your brand’s visibility and engagement. Let us help you attract more traffic and achieve your digital goals effectively."
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
        title="Engage Your   "
        subtitle=" Audience "
        title2="Like Never Before With Techverse LLC"
        para="Our expert team leverages the latest technologies and strategies to craft compelling digital campaigns that captivate and convert. From targeted social media ads to innovative content marketing, we create tailored approaches designed to resonate with your audience and drive measurable results. Whether you're looking to enhance your online presence or boost your brand’s visibility, our comprehensive digital marketing services ensure that your message reaches the right people at the right time."
        para1="At Techverse LLC, we understand that every brand is unique, and so are the strategies needed to boost it. Our data-driven methods and creative insights empower your business to engage with customers more effectively than ever before. We analyze market trends and consumer behavior to optimize campaigns and maximize your ROI. By choosing Techverse LLC, you're not just investing in digital marketing; you're partnering with a team dedicated to transforming your vision into a dynamic and engaging reality."
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
                  At Techverse LLC, we provide a suite of marketing services
                  designed to raise your brand’s presence and drive growth
                  across various digital channels. Our approach is strategic,
                  data-driven, and tailored to meet the unique needs of your
                  business. Explore the marketing services we offer to help you
                  achieve your goals:
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
                      At Techverse LLC, our YouTube marketing service is
                      designed to amplify your brand's presence on one of the
                      most powerful video platforms available. We craft
                      compelling video content that captures your target
                      audience’s attention and drives engagement. From
                      developing captivating video scripts to optimizing video
                      titles, descriptions, and tags, we ensure your videos
                      reach their maximum potential. Our strategies include
                      targeted ad campaigns, influencer collaborations, and
                      detailed performance analytics, all aimed at boosting your
                      brand’s visibility and driving measurable results.
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
                      Social media marketing with Techverse LLC helps you
                      connect with your audience on platforms where they spend
                      most of their time. We create and manage engaging content
                      across popular networks such as Facebook, Instagram,
                      Twitter, and LinkedIn. Our approach includes crafting
                      tailored content strategies, running targeted ad
                      campaigns, and leveraging data-driven insights to enhance
                      your social media presence. By focusing on community
                      engagement, brand storytelling, and strategic promotions,
                      we aim to foster meaningful connections and drive traffic
                      to your business.
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
                      Our Amazon marketing service at Techverse LLC is tailored
                      to boost your product visibility and sales on the world’s
                      largest e-commerce platform. We optimize your product
                      listings with targeted keywords, high-quality images, and
                      compelling descriptions to improve search rankings and
                      conversion rates. Our team also manages Amazon PPC
                      campaigns to drive targeted traffic and maximize ROI. By
                      analyzing performance metrics and staying up-to-date with
                      Amazon’s evolving algorithms, we ensure your products
                      stand out in a competitive marketplace.
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
                      Techverse LLC’s email marketing service is designed to
                      nurture your leads and maintain customer relationships
                      through personalized and impactful communication. We
                      develop targeted email campaigns that include promotional
                      offers, newsletters, and automated follow-ups, all
                      tailored to your audience’s preferences. By leveraging
                      segmentation, A/B testing, and analytics, we optimize
                      email performance to increase open rates, click-through
                      rates, and conversions. Our goal is to help you build a
                      loyal customer base and drive sustained engagement.
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
                      With Techverse LLC’s SMS marketing service, you can reach
                      your audience with timely and concise messages directly to
                      their mobile devices. We craft engaging SMS campaigns that
                      include special offers, reminders, and updates, ensuring
                      that your messages are both relevant and actionable. By
                      leveraging targeted segmentation and personalized content,
                      we help you achieve high open rates and prompt responses.
                      Our approach is designed to keep your brand top-of-mind
                      and drive immediate customer action.
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
                      Boost your online visibility and drive targeted traffic to
                      your website with Techverse LLC’s Search Engine Marketing
                      (SEM) services. Our approach to SEM is designed to
                      maximize your presence on search engines like Google
                      through strategic ad placements and keyword optimization.
                      We create and manage pay-per-click (PPC) campaigns that
                      effectively target your ideal audience, ensuring your ads
                      appear at the right moment when potential customers are
                      searching for relevant products or services. Our team
                      focuses on optimizing ad copy, selecting high-performing
                      keywords, and analyzing campaign performance to
                      continuously improve results. By leveraging detailed
                      analytics and industry best practices, we help you achieve
                      higher click-through rates, increase conversions, and
                      maximize your return on investment.
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
                      At Techverse LLC, our YouTube marketing service is
                      designed to amplify your brand's presence on one of the
                      most powerful video platforms available. We craft
                      compelling video content that captures your target
                      audience’s attention and drives engagement. From
                      developing captivating video scripts to optimizing video
                      titles, descriptions, and tags, we ensure your videos
                      reach their maximum potential. Our strategies include
                      targeted ad campaigns, influencer collaborations, and
                      detailed performance analytics, all aimed at boosting your
                      brand’s visibility and driving measurable results.
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
                      Social media marketing with Techverse LLC helps you
                      connect with your audience on platforms where they spend
                      most of their time. We create and manage engaging content
                      across popular networks such as Facebook, Instagram,
                      Twitter, and LinkedIn. Our approach includes crafting
                      tailored content strategies, running targeted ad
                      campaigns, and leveraging data-driven insights to enhance
                      your social media presence. By focusing on community
                      engagement, brand storytelling, and strategic promotions,
                      we aim to foster meaningful connections and drive traffic
                      to your business.
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
                      Our Amazon marketing service at Techverse LLC is tailored
                      to boost your product visibility and sales on the world’s
                      largest e-commerce platform. We optimize your product
                      listings with targeted keywords, high-quality images, and
                      compelling descriptions to improve search rankings and
                      conversion rates. Our team also manages Amazon PPC
                      campaigns to drive targeted traffic and maximize ROI. By
                      analyzing performance metrics and staying up-to-date with
                      Amazon’s evolving algorithms, we ensure your products
                      stand out in a competitive marketplace.
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

      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default DigitalMarketing;
