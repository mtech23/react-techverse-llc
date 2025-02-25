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
import amazondropbanner from "../../asserts/images/amazon-drop-banner.png";
import amazondropshipping1 from "../../asserts/images/amazon-dropshipping-01.png";
import amazondropshipping2 from "../../asserts/images/amazon-dropshipping-02.png";
import TrustedPartners from "../../Components/TrustedPartners";
import Helmet from "../../Components/Helmet";
import Testimonials from "../../Components/Testimonials";
gsap.registerPlugin(MotionPathPlugin);

const WebDevelopment = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Amazon Dropshipping Services | Techverse LLC"
        description="Scale your Amazon business with Techverse LLC’s expert dropshipping solutions. Automate, optimize, and grow your online store today!"
        keywords=""
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Your Automated Path To "}
        subtitle={"  Amazon Wealth! "}
        // title2={""}
        tagline={
          "Techverse LLC makes Amazon dropshipping easy! We handle product sourcing, order fulfillment, and customer service while you focus on growing your business. No inventory, no hassle—just profits! Start your journey to financial freedom today."
        }
        className={"web-development_hero_img"}
        heroimage={amazondropbanner}
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
        title="Smart Sellers Choose  "
        subtitle="   Techverse LLC  "
        title2="For Amazon Dropshipping!"
        para="Techverse LLC makes Amazon dropshipping simple, efficient, and highly profitable by taking care of every essential aspect of your business. We understand the challenges of running a dropshipping store, from finding the right products to managing customer expectations. Our expert team is dedicated to helping you discover top-selling items, establish strong relationships with reliable suppliers, and optimize your product listings to attract more buyers. By streamlining operations and implementing smart strategies, we help you scale your business with minimal effort. To ensure your success, we offer six key services that cover every crucial step of the dropshipping process:"
        //  CtnbuttonComponent={Ctnbutton}
        //  ctnButtonProps={{
        //    phoneicon: phoneIcon,
        //    calltext: "Call Us",
        //    chaticon: chatIcon,
        //    chatenow: "Chat Now"
        //  }}
        image={amazondropshipping1}
        // WordPress="10+ Years of Experience"
        // PHP="Team of 50+ Digital Marketing Experts"
        // Shopify="2k+ Satisfied Clients"
        // Joomla="150+ Ongoing Projects"
        // Magneto="Up to 43% Increase in ROI"

        bulletListItems={["Product Research", "Supplier Management", "Order Fulfillment", "Listing Optimization", "Pricing Strategy  ", "Customer Support"]}
      />



<Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="The Passive Income "
        subtitle="Solution"
        title2="You’ve Been Waiting For!"
        para="Amazon Dropshipping with Techverse LLC is the perfect way to build a steady stream of income without the hassle of managing inventory or handling shipping. Our expert team takes care of everything—from setting up your online store to finding high-demand products and ensuring smooth order fulfillment. With no upfront inventory costs and access to millions of products, you can start earning without the risks of traditional retail. We provide full support, automation, and strategies to maximize your profits while you enjoy the benefits of a hands-free business."
        image={amazondropshipping2}
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
      <Process para="Our approach eliminates the need for inventory management, allowing sellers to focus on growing their business while we handle the operations. By leveraging market research, supplier partnerships, and strategic listing techniques, we create a seamless experience for both sellers and buyers." />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default WebDevelopment;
