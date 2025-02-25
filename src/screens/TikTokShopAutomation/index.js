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
import tiktokshop1 from "../../asserts/images/tiktok-shop-01.png";
import tiktokshop2 from "../../asserts/images/tiktok-shop-02.png";
import tiktokshopbanner from "../../asserts/images/tiktok-shop-banner.png";
import TrustedPartners from "../../Components/TrustedPartners";
import Helmet from "../../Components/Helmet";
import Testimonials from "../../Components/Testimonials";
gsap.registerPlugin(MotionPathPlugin);

const WebDevelopment = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="TikTok Shop Automation Services | Techverse LLC"
        description="Maximize sales with Techverse LLC’s TikTok Shop automation. Streamline operations, boost conversions, and grow your eCommerce success."
        keywords=""
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Put Your TikTok Shop on "}
        subtitle={"  Auto-Drive! "}
        // title2={""}
        tagline={
          "Grow your TikTok Shop effortlessly with Techverse LLC. Enjoy seamless sales while automation takes care of the work. No more stress—just smooth operations and steady profits. Let technology handle the details while you focus on your brand. Selling on TikTok has never been this easy!"
        }
        className={"web-development_hero_img"}
        heroimage={tiktokshopbanner}
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
        title="The Shortcut To  "
        subtitle="   Tiktok Shop  "
        title2="Domination!"
        para="Techverse LLC's TikTok Shop Automation service is designed to help you build and scale a successful online store with minimal effort. By automating key processes, we eliminate the challenges of managing a TikTok Shop, allowing you to focus on growing your brand and maximizing profits. We handle everything from setting up your store to managing inventory, orders, and customer interactions. With our expert automation, you can enjoy a hassle-free eCommerce experience while boosting sales and engagement. Our service includes:"
        //  CtnbuttonComponent={Ctnbutton}
        //  ctnButtonProps={{
        //    phoneicon: phoneIcon,
        //    calltext: "Call Us",
        //    chaticon: chatIcon,
        //    chatenow: "Chat Now"
        //  }}
        image={tiktokshop1}
        // WordPress="10+ Years of Experience"
        // PHP="Team of 50+ Digital Marketing Experts"
        // Shopify="2k+ Satisfied Clients"
        // Joomla="150+ Ongoing Projects"
        // Magneto="Up to 43% Increase in ROI"

        bulletListItems={["Product Research", "Store Setup", "Order Management", "Inventory Automation", "Customer Support  ", "Marketing & Promotions"]}
      />



<Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="Never Miss A Sale "
        subtitle="Automate"
        title2="Your Tiktok Shop Today!"
        para="Techverse LLC helps you grow your TikTok Shop by automating everything, so you never miss a sale. Our automation service manages your inventory, processes orders, and handles customer interactions, saving you time and effort. With real-time updates and smart tools, your shop runs smoothly while you focus on growing your business. Let automation take care of the hard work, so you can enjoy more sales and success on TikTok."
        image={tiktokshop2}
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
      <Process para="Our TikTok Shop automation process is designed to maximize your sales effortlessly. We begin by understanding your business needs and setting up a customized automation plan. Our system manages inventory, processes orders, and optimizes customer interactions, ensuring a smooth shopping experience." />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default WebDevelopment;
