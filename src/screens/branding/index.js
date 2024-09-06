import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import Process from "../../Components/Process";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
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
import brandingImg2 from "../../asserts/images/branding-img-2.png";
import BrandingElevateYourBusinessImg from "../../asserts/images/BrandingElevateYourBusinessImg.png";
// import digitalmarketing0222 from "../../asserts/images/digital-marketing-0222.png";
import brandingImg3 from "../../asserts/images/branding-img-3.png";
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

import youtubeMarketingIcon from "../../asserts/images/business-logo-icon.png";
import socialMarketingIcon from "../../asserts/images/custom-logo-icon.png";
import amazonMarketingIcon from "../../asserts/images/graphic-design-icon.png";
import emailMarketingIcon from "../../asserts/images/business-card-icon.png";
import smsMarketingIcon from "../../asserts/images/enter-prize-icon.png";
import crossplatform from "../../asserts/images/cross-platform.webp";

import brandingbannerImg from "../../asserts/images/branding-banner-img.png";
import logoDesignSecImg from "../../asserts/images/logo-design-sec-img.png";
import PortfoliosTech from "../../Components/PortfoliosTech";
import Testimonials from "../../Components/Testimonials";

gsap.registerPlugin(MotionPathPlugin);

const Branding = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="#1 Digital Marketing Services in California, USA | Techverse LLC"
        description="Techverse LLC provides professional digital marketing services in California, USA. Boost your sales, Take your brand to the next level with our proven strategies"
        keywords="Digital Marketing Services"
      />
      <HeroSection
        innerbgclass="inner-bgColor"
        title="Build Your  "
        subtitle="Brand"
        title2="   Identity With Techverse's Creative Force!    "
        tagline={
          "At Techverse, we understand that a strong brand identity is the foundation of every successful business. Our branding service brings your vision to life through a powerful blend of creativity, strategy, and innovation. We craft logos, color schemes, messaging, and visual elements that not only capture the essence of your brand but also resonate with your target audience.  "
        }
        className="digital-marketing-hero"
        heroimage={brandingbannerImg}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon,
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
        classSpace="branding-about-sec"
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title="Delivering The   "
        subtitle="Brand Strategy, "
        title2=" You Deserve!"
        para="Our service is designed to create bespoke branding solutions that align perfectly with your business goals and market aspirations. We dive deep into understanding your brand’s identity, values, and target audience to create a strategic roadmap that not only stands out in the crowded marketplace but also drives meaningful engagement and growth. Partner with us to transform your brand into a compelling and memorable experience that resonates with your audience and propels your business to new heights."
        // para2=""
        CtnbuttonComponent={Ctnbutton}
        // ctnButtonProps={{
        //   phoneicon: phoneicon,
        //   calltext: "Call Now",
        //   primaryButtonClass: "btn_with_icon",
        //   chaticon: chaticon,
        //   chatenow: "Chat Now",
        //   secondaryButtonClass: "btn_with_icon btn_secondary  ",
        // }}
        image={brandingImg2}
        bulletListItems={[
          "10+ Years of Experience",
          "2k+ Satisfied Clients",
          "A Team of 50+ Digital Marketing Experts",
          "150+ Ongoing Projects",
        ]}
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="We Distinctive  "
        title2=" Branding"
        subtitle=" To Drive Business Success!  "
        para="We believe that distinctive branding is the cornerstone of business success. Our expert team crafts unique brand identities that stand out in today's crowded market, helping you capture attention and leave a lasting impression. By blending creativity with strategic insights, we ensure that your brand communicates your values and vision effectively, resonates with your target audience, and fosters strong connections. Increase your business with a branding strategy that not only defines who you are but also drives growth and establishes a powerful presence in your industry."
        // para1=""
        // para2=""
        image={brandingImg3}
        chaticon={chaticon}
        phoneicon={phoneicon}
      />

      {/* MOBILE APP */}

      {/* <Elevateyourbusiness /> */}
      <section className="techVerse_mobileApp techVerse_mobileAppBranding">
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
                      Maximize Your
                      <span className="color-lightBlue2"> Digital</span>
                      Impact—Request A Quote From Techverse LLC!
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Enhance your digital footprint with expert branding
                      solutions. Request a quote from Techverse LLC to see how
                      we can amplify your brand's impact.
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
                    src={BrandingElevateYourBusinessImg}
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
                  branding Services
                  <span className="color-darkBlue"> We Offer </span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  At Techverse LLC, we understand that effective branding is
                  more than just a logo; it's about creating a cohesive and
                  memorable identity that resonates with your audience. Our
                  comprehensive branding services are designed to establish and
                  raise your brand’s presence in the marketplace. Whether you’re
                  a startup or an established enterprise, we provide tailored
                  solutions to enhance your brand’s image and ensure it stands
                  out. Explore our diverse range of branding services below:
                </p>
              </div>
              <div className="techVerse_services_content">
                <img src={bluecube} className="blue-cube1 animation11" alt="" />
                <img src={bluecube} className="blue-cube2 animation11" alt="" />
                <div className="service_box_1" />
                <div className="service_box_2" />
                <div className="service_box_3" />
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={youtubeMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Business Logo Design</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Business Logo Design</h3>
                    <p className="service_box_p">
                      Your logo is the cornerstone of your brand’s identity. At
                      Techverse LLC, our business logo design services focus on
                      creating visually compelling and unique logos that
                      encapsulate the essence of your company. We ensure that
                      your logo not only looks great but also communicates your
                      brand’s values and mission clearly. Our team of
                      experienced designers works closely with you to craft a
                      logo that leaves a lasting impression on your audience.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={socialMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Custom Logo Design</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Custom Logo Design</h3>
                    <p className="service_box_p">
                      For businesses seeking a truly one-of-a-kind logo, our
                      custom logo design service is the perfect solution. We go
                      beyond standard designs to create logos that are
                      tailor-made to fit your specific needs and preferences.
                      From conceptualization to execution, our custom logo
                      design process involves thorough research and creativity
                      to ensure your logo stands out and aligns perfectly with
                      your brand’s personality.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={amazonMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Graphic Design Sevices
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Graphic Design Sevices
                    </h3>
                    <p className="service_box_p">
                      Effective branding relies heavily on strong graphic
                      design. Our graphic design services at Techverse LLC cover
                      a wide range of needs, including promotional materials,
                      digital graphics, and marketing collateral. We focus on
                      creating visually engaging designs that not only attract
                      attention but also convey your brand’s message
                      effectively. Let us help you create compelling graphics
                      that enhance your brand’s visual identity.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={emailMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">Business Card Design</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Business Card Design</h3>
                    <p className="service_box_p">
                      A well-designed business card can make a powerful
                      impression. Our business card services are tailored to
                      create professional, stylish, and memorable cards that
                      reflect your brand’s identity. We pay attention to every
                      detail, from the design and layout to the choice of
                      materials, ensuring that your business card stands out and
                      leaves a lasting impression on potential clients and
                      partners.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={smsMarketingIcon} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Enterprise App Development
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Enterprise App Development
                    </h3>
                    <p className="service_box_p">
                      In today’s digital world, a strong online presence is
                      essential for any business. Our enterprise app development
                      services are designed to create robust, scalable, and
                      user-friendly applications that enhance your brand’s
                      digital footprint. We work with you to develop customized
                      apps that meet your specific business needs, ensuring
                      seamless integration and optimal performance.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={crossplatform} alt="" />
                    </div>
                    <h3 className="service_box_title">Post Card Design</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Post Card Design</h3>
                    <p className="service_box_p">
                      Postcards are a great way to reach out to your audience
                      with a personal touch. Our postcard design services at
                      Techverse LLC are focused on creating eye-catching and
                      effective designs that help you connect with your
                      customers. Whether you’re using postcards for marketing
                      campaigns, announcements, or special promotions, we ensure
                      that your postcards stand out and deliver your message
                      effectively.
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

      <PortfoliosTech
        title="Our "
        subtitle="Portfolio"
        para="At Techverse LLC, our portfolio is a testament to our commitment to transforming ideas into cutting-edge digital solutions. With a diverse range of projects spanning various industries, our work reflects our expertise in delivering innovative, user-centric technology solutions."
      />

      <section className="logo_design_sec">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5">
                <div className="logo_design_img">
                  <img src={logoDesignSecImg} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="logo_design_content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Elevate your business presence with a our
                      <span className="color-lightBlue2"> Branding </span>
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
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Website --> */}
      {/* <div ref={website}> */}
      {/* <section className="techVerse_webSolution techVerse_webSolution_digital_M">
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
                    <span className="color-lightBlue2"> SEO </span>
                    services
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
      </section> */}
      {/* </div> */}

      {/* process we use */}
      <Process para="Our service is designed to propel your business forward through strategic online campaigns personalized to your unique goals. We begin by conducting a comprehensive analysis of your current digital footprint and market landscape, identifying key opportunities and challenges" />

      <Packages />

      {/* <!-- Technologies --> */}
      {/* <TechnologiesUse /> */}

      {/* FAQ section */}

      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default Branding;
