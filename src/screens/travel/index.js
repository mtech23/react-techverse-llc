import React, { useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import "./style.css";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import TrustedPartners from "../../Components/TrustedPartners";
import Portfolio from "../../Components/Portfolio";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import playstore from "../../asserts/images/play-store.webp";
import appstore from "../../asserts/images/app-store.webp";
import Driving_Exprience from "../../Components/Driving_experience";
import Portfolios from "../../Components/portfolios";
import mobileframe from "../../asserts/images/mobile-frame.webp";

import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";

import travelimg1airplane from "../../asserts/images/travel-img-1-airplane.webp";

import Macbook from "../../asserts/images/Macbook.webp";
import Testimonials from "../../Components/Testimonials";

import Helmet from "../../Components/Helmet";

import travelimg2 from "../../asserts/images/travel-img-2.webp";
import travelimg1 from "../../asserts/images/travel-img-1.gif";
import travelimg3 from "../../asserts/images/travel-img-3.webp";
import travelportfolio1 from "../../asserts/images/travel-portfolio-1.webp";
import travelportfolio2 from "../../asserts/images/travel-portfolio-2.webp";
import travelportfolio3 from "../../asserts/images/travel-portfolio-3.webp";
import travelportfolio4 from "../../asserts/images/travel-portfolio-4.webp";
import travelportfolio5 from "../../asserts/images/travel-portfolio-5.webp";

gsap.registerPlugin(MotionPathPlugin);

const Travel = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Hire #1 IT Solutions Provider For Travel Industry | Techverse LLC"
        description="Looking for IT solutions in the travel industry? Hire Techverse LLC, the #1 provider, to streamline your processes and elevate your customer satisfaction."
        keywords="Travel"
      />

      <HeroSection
        classheroimage={"travel_bg_custom"}
        title={"From Click To Content Guest With Techverse Apps"}
        subtitle={"  Revolutionize Hospitality  "}
        // title2={"Media & Entertainment!"}
        tagline={
          "Techverse LLC's advanced mobile app solutions are revolutionizing the hospitality sector. With our cutting-edge apps, you can guarantee compliance, improve visitor experiences, and streamline operations. We provide customized solutions that improve service delivery and maximize operational efficiency, from user-friendly interfaces to solid security. Use Techverse to transform your hospitality offerings."
        }
        className={"ecommerceDev_hero_img"}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          playstore: playstore,
          appstore: appstore,
        }}

        // secondaryButtonclassName="btn_with_icon btn_secondary"
      />
      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      {/* <!-- About Sec --> */}

      <Portfolio
        pinkcapsol={pinkcapsol}
        classtitle={" color-darkBlue   "}
        newclassName={"travel-abt1"}
        greencube={greencube}
        donatorange={donatorange}
        title="From Guest Engagement To Operations, Techverse Develops"
        subtitle="     Hospitality "
        title2="Solutions"
        para="Techverse LLC is an expert in creating mobile apps specifically for the lodging sector. Our products promote effective service delivery, optimize operations, and improve visitor engagement. We place a high priority on efficacy and adherence to industry standards to guarantee user-friendly interfaces and secure data handling. Join Techverse to take advantage of cutting-edge app development services that improve visitor pleasure and streamline your hotel operations. With Techverse, discover the hospitality of the future."
        travelimg={travelimg1airplane}
        image={travelimg1}
        chaticon={chaticon}
        phoneicon={phoneicon}
        playstore={playstore}
        appstore={appstore}
        laptopFrame={"travel-img-1-airplane"}
      />

      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Techverse Offers Secure And Effective"
        subtitle="Hospitality"
        title2="Apps"
        para="Techverse LLC provides secure, efficient 
      hospitality apps that boost guest experiences and streamline operations. Our advanced solutions ensure compliance and optimize service delivery for the hospitality industry."
        para1="Gain valuable insights into guest behaviors and operational metrics to drive informed decisions and improve efficiency within your travel and hospitality business."
        para2="Create intuitive and visually appealing interfaces that boost user experience, ensuring easy navigation and increased engagement for both guests and staff."
        para3="From initial concept to final deployment, develop robust and secure travel and hospitality applications that streamline workflows and increase service delivery.
      "
        para4="Implement comprehensive testing protocols to ensure reliability, security, and compliance with industry standards, guaranteeing seamless functionality across all platforms."
      />

      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        travelbgclassName={"travel-abt2"}
        sportsclassName={"travel-img-2"}
        image={travelimg2}
        title="Techverse Builds Scalable Apps For "
        subtitle="Guests & Businesses"
        para="Techverse LLC develops scalable apps for the travel and hospitality industry, enhancing guest experiences and streamlining business operations. Our innovative solutions ensure efficiency, security, and compliance for optimal service delivery.



"
        para1="Conduct thorough analyses to align app development with your travel and hospitality goals, ensuring effective solutions from inception to deployment."
        para2="Create intuitive interfaces and robust applications using advanced technologies to boost guest experiences and operational efficiency."
        para3="Implement comprehensive testing to meet high standards of security, performance, and regulatory compliance, ensuring reliable and safe user experiences."
        para4="Manage seamless app deployment and provide ongoing maintenance to keep your travel and hospitality apps secure, efficient, and adaptable to evolving needs."
        quality="Quality Assurance"

        //   title2="   Mobile App Development Process"
      />

      <Portfolios
        title="TRAVEL & HOSPITALITY "
        subtitle=" PORTFOLIO"
        para="Our Travel & Hospitality portfolio showcases innovative mobile apps and responsive websites that boost guest experiences, operational efficiency, and service delivery worldwide."
        image1={travelportfolio1}
        image2={travelportfolio2}
        image3={travelportfolio3}
        image4={travelportfolio4}
        image5={travelportfolio5}
        image6={mobileframe}
        image7={website1}
        image8={website2}
        image9={website3}
        image10={website4}
        image11={Macbook}
        classmobileapp="nav-link"
        classwebsite="nav-link"
        // classcms="nav-link"
        // CMS="CMS"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />

      {/* <!-- Mobile App Dev --> */}

      <Driving_Exprience
        titleclass2="color-darkBlue"
        titleclassName="color-darkBlue"
        title="Why Choose Our"
        subtitle="  TRAVEL & HOSPITALITY "
        title2=" App Development Services "
        para="With extensive experience in app development for the travel and hospitality sector, we help boost guest experiences and operational efficiency."
        image={travelimg3}
        hrimg={"travel-img-3"}
        h1="Innovative Solutions"
        h2="Real-Time Property Listings
"
        h3="Secure Payment Integration"
        h4="Virtual Property Tours"
        h5="Secure Data Handling"
        h6="Scalable Architecture"
        h7="Expert Development Team"
        h8="Proven Industry Experience"
      />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />
      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default Travel;
