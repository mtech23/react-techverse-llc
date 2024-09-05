import React, { useEffect } from "react";
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
import Packages from "../../Components/Packages";
import Process from "../../Components/Process";

import webimg01 from "../../asserts/images/web-img-01.webp";

// import recomendedCardBg from "../../asserts/images/recomended-card-bg.png";

import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import webdevelopmenthero from "../../asserts/images/web-development-hero.webp";
import TrustedPartners from "../../Components/TrustedPartners";
import Helmet from "../../Components/Helmet";
gsap.registerPlugin(MotionPathPlugin);

const WebDevelopment = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="#1 Custom Web Development Services in USA | Techverse LLC"
        description="Techverse LLC offers premier custom web development services in the USA. Enhance your online presence today. Trust us for innovative website solutions."
        keywords="Custom Web Development Services"
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Building Websites That Reflect Your Vision"}
        subtitle={"  And "}
        title2={"Goals"}
        tagline={
          "We specialize in creating websites that mirror your unique vision and propel your business goals forward. Our expert team of developers understands that your website is more than just an online presence—it's a reflection of your brand's identity and aspirations. Discover the power of personalized web development with Techverse LLC, where your vision comes to life in every pixel"
        }
        className={"web-development_hero_img"}
        heroimage={webdevelopmenthero}
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
        title="Innovative Web Solutions"
        subtitle="   For  "
        title2="Your Digital Success"
        para="At Techverse LLC, we specialize in crafting web solutions that propel your business forward. Our expert team of developers blends creativity with practical ability to deliver websites that not only impress but also drive results. Whether you need a smooth company site, an engaging e-commerce platform, or a robust web application, we tailor our web development services to meet your unique goals. Partner with us to leverage cutting-edge technology and strategic insights that enhance your online presence and accelerate your business growth."
        //  CtnbuttonComponent={Ctnbutton}
        //  ctnButtonProps={{
        //    phoneicon: phoneIcon,
        //    calltext: "Call Us",
        //    chaticon: chatIcon,
        //    chatenow: "Chat Now"
        //  }}
        image={webimg01}
        // WordPress="10+ Years of Experience"
        // PHP="Team of 50+ Digital Marketing Experts"
        // Shopify="2k+ Satisfied Clients"
        // Joomla="150+ Ongoing Projects"
        // Magneto="Up to 43% Increase in ROI"

        bulletListItems={["WordPress", "PHP", "Shopify", "Joomla", "Magneto  "]}
      />

      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* <section className="packages_sec">
        <div className="container-fluid width-1600">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_title text-center">
                <h2
                  className="sec_title_head color-lightBlue2"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Packages
                  <span className="color-darkBlue">We offer</span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="package_card">
                <div className="package_card_head">
                  <h4 className="package_card_title">
                    <span className="color-lightBlue2">Basic</span>
                    <span className="color-darkBlue"> website package</span>
                  </h4>
                  <p className="package_card_p">Basic design solution</p>
                  <div className="package_card_price">
                    <p className="package_card_actual_price">$149</p>
                    <p className="package_card_discount_price">
                      50% off <br />
                      <span className="discount_price">$300</span>
                    </p>
                  </div>
                  <button type="button" className="package_card_btn">
                    Place Your order
                  </button>
                  <p className="package_card_deliveryText">
                    Rush delivery : $500
                  </p>
                </div>
                <div className="package_card_body">
                  <ul>
                    <li>3 pages website</li>
                    <li>3 banner design</li>
                    <li>5 stock photos</li>
                    <li>1 jQuery slider banner</li>
                    <li>Complete W3C certified HTML</li>
                    <li>48 to 72 hours TAT</li>
                    <li>Facebook page design</li>
                    <li>Twitter page design</li>
                    <li>YouTube page design</li>
                    <li>100% satisfaction guarantee</li>
                    <li>100% unique design guarantee</li>
                    <li>100% money back guarantee *</li>
                  </ul>
                </div>
                <div className="package_card_footer">
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src="/static/media/phone-icon.1da16f20c2a79bcba6ad.webp"
                      alt=""
                    />
                    <span className="btn_with_icon_text">Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* packages */}
      <Packages />

      {/* process we use */}
      <Process para="At Techverse LLC, we believe in making dynamic and effective web solutions tailored to meet your unique business needs. Our web development process integrates cutting-edge technology with creative design, ensuring your digital presence stands out in the competitive landscape." />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default WebDevelopment;
