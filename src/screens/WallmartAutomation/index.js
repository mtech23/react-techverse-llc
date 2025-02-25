import React, { useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";

import Portfolio from "../../Components/Portfolio";

import webaboutimg1es from "../../asserts/images/web-about-imges.webp";

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
import wallmartbanner from "../../asserts/images/wallmart-banner.png";
import wallmartautomation1 from "../../asserts/images/wallmart-automation-01.png";
import wallmartautomation2 from "../../asserts/images/wallmart-automation-02.png";
import TrustedPartners from "../../Components/TrustedPartners";
import Helmet from "../../Components/Helmet";
import Testimonials from "../../Components/Testimonials";
gsap.registerPlugin(MotionPathPlugin);

const WebDevelopment = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Walmart Automation Services | Techverse LLC"
        description="Automate your Walmart store with Techverse LLC’s expert solutions. Simplify management, increase profits, and grow your eCommerce brand."
        keywords=""
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Your Walmart Business, "}
        subtitle={"  Fully Automated And Profitable! "}
        // title2={""}
        tagline={
          "Techverse LLC helps you run a successful Walmart business without the hassle. Our automation service handles everything—product sourcing, listing, order management, and customer support. You enjoy steady profits while we do the work. With our expert team, your Walmart store runs smoothly, giving you more time and financial freedom."
        }
        className={"web-development_hero_img"}
        heroimage={wallmartbanner}
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
        title="Automate & Dominate  "
        subtitle="   Walmart  "
        title2="With Ease!"
        para="Techverse LLC makes selling on Walmart simple and profitable with our expert Walmart Automation services, helping you grow and scale your business without the stress of managing daily operations. Our team of professionals handles everything from product selection to customer service, ensuring smooth operations and maximum profits. With our cutting-edge strategies and in-depth market expertise, we optimize your store for long-term success. Our six key services include:"
        //  CtnbuttonComponent={Ctnbutton}
        //  ctnButtonProps={{
        //    phoneicon: phoneIcon,
        //    calltext: "Call Us",
        //    chaticon: chatIcon,
        //    chatenow: "Chat Now"
        //  }}
        image={wallmartautomation1}
        // WordPress="10+ Years of Experience"
        // PHP="Team of 50+ Digital Marketing Experts"
        // Shopify="2k+ Satisfied Clients"
        // Joomla="150+ Ongoing Projects"
        // Magneto="Up to 43% Increase in ROI"

        bulletListItems={["Walmart WFS Automation", "Product Research", "Listing Optimization", "Inventory Management", "Order Processing  ", "Customer Support"]}
      />



<Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="No More "
        subtitle="Manual Work"
        title2="—Let Automation Handle It!"
        para="Walmart automation helps you run your online store without manual work. Techverse LLC handles everything—from product listing to order fulfillment—so you can save time and earn more. No need to track inventory or process orders yourself. Let automation boost your business while you focus on growth and profits!"
        image={wallmartautomation2}
        chaticon={chaticon}
        phoneicon={phoneicon}
        webaboutimg1={webaboutimg1es}
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
      {/* <Packages /> */}

      {/* process we use */}
      <Process para="Our Walmart automation process is designed for outstanding results. We begin by thoroughly understanding your business goals and operational needs, then develop a strategic plan. Our setup phase ensures seamless store integration, while our optimization focuses on enhancing product visibility and performance, aligning with your brand for maximum success." />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default WebDevelopment;
