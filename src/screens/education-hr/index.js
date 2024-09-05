import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import TrustedPartners from "../../Components/TrustedPartners";
import eduhrimg2gif from "../../asserts/images/edu-hr-img-2.gif";
import donatorange from "../../asserts/images/donat-orange.webp";
import greenCube from "../../asserts/images/green-cube.webp";
import pinkCapsol from "../../asserts/images/pink-capsol.webp";
import HeroSection from "../../Components/herosection/index";
import ecomemrsescreen3 from "../../asserts/images/ecomemrse-screen3.webp";
import ecomemrsescreen4 from "../../asserts/images/ecomemrse-screen4.webp";
import ecomemrsescreen5 from "../../asserts/images/ecomemrse-screen5.webp";
import mobileframe from "../../asserts/images/mobile-frame.webp";
import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";
import Macbook from "../../asserts/images/Macbook.webp";
import eduhrportfolio1 from "../../asserts/images/edu-hr-portfolio-1.webp";
import eduhrportfolio2 from "../../asserts/images/edu-hr-portfolio-2.webp";
import neweduhrimg1 from "../../asserts/images/new-edu-hr-img-1.webp";
import eduhrimg3 from "../../asserts/images/edu-hr-img-3.webp";

import Ctnbutton from "../../Components/ctnbutton";
import Aos from "aos";
import "swiper/css";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Portfolio from "../../Components/Portfolio";
import { playstore } from "../../asserts/images";
import appstore from "../../asserts/images/app-store.webp";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import Portfolios from "../../Components/portfolios";
import Driving_Exprience from "../../Components/Driving_experience";
import Testimonials from "../../Components/Testimonials";
import Helmet from "../../Components/Helmet";
gsap.registerPlugin(MotionPathPlugin);
const Education_hr = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Best IT Services For Education and HR Industry | Techverse LLC"
        description="Techverse LLC offers the best IT services for education and HR industries. Transform your organization with our innovative technology solutions!"
        keywords="Education and HR"
      />
      <HeroSection
        classheroimage={"inner-educationHR-bgColor"}
        title={"Transforming"}
        subtitle={"HR And Education"}
        title2={"Systems With Techverse"}
        tagline={
          "In today's digital era, Techverse LLC specializes in transforming education and HR sectors through cutting-edge technology. We improve operational efficiency, engagement, and effectiveness to help you lead in your industry."
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

      <Portfolio
        title="
What Sets Us"
        // title2=" Us?"
        subtitle="Apart?"
        classtitle="color-darkBlue"
        para="We excel in digital solutions designed for the Education and HR sectors, leveraging deep industry expertise to deliver strategies that meet unique challenges and goals. Stay compliant and effective with our targeted campaigns, ensuring your organization stays ahead.

"
        // image={eduhrimg1}
        eduHR={"new_edu_HR_img"}
        image={neweduhrimg1}
        playstore={playstore}
        appstore={appstore}
        phoneicon={phoneicon}
        chaticon={chaticon}
        pinkcapsol={pinkCapsol}
        greencube={greenCube}
        donatorange={donatorange}
      />
      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Techverse Builds Apps To Fit Your"
        subtitle="Business Needs. "
        // title2="That Exceed Expectations "
        para="Use Techverse LLC's extensive app development services to grow your company. With our customized solutions, you may improve engagement, streamline operations, and enter new markets."
        para1="Gain actionable insights into performance and user behavior with advanced analytics and reporting tools. Drive informed decisions, optimize strategies, and achieve growth and efficiency in your operations."
        para2="We create intuitive interfaces that enhance user experience and drive engagement. 
      Our designs blend aesthetics with functionality, ensuring seamless navigation and boosting user satisfaction across educational and HR platforms."
        para3=" From initial concept to deployment, our developers craft scalable and secure apps designed to meet the unique demands of the education and HR sectors. Harness the latest technologies to achieve your organizational goals effectively and efficiently."
        para4="Ensure reliability and security through rigorous testing across platforms. Our QA processes guarantee flawless performance, maintaining high standards of functionality and user satisfaction in educational and HR app deployments."
      />

      <Development_Process
        title=" App Development Process At "
        subtitle="TECHVERSE LLC"
        // title2="Mobile App Development Process"
        para="Follow our streamlined approach to ensure customer satisfaction with customized real estate mobile app development solutions:"
        image={eduhrimg2gif}
        para1="Conduct comprehensive analysis to understand project objectives, target audience, and market trends for effective planning and strategy alignment."
        para2="Expertly craft intuitive UI/UX interfaces and develop robust solutions that meet industry standards and exceed user expectations."
        para3="Implement rigorous testing protocols to ensure app stability, security, and adherence to quality standards, guaranteeing a seamless user experience."
        para4="Facilitate smooth app rollout across multiple platforms and provide ongoing support to optimize performance and meet evolving user needs."
        quality="Quality Assurance"
      />

      <Portfolios
        title="EDUCATION & HR"
        subtitle="Portfolio"
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"
        image1={eduhrportfolio1}
        image2={eduhrportfolio2}
        image3={ecomemrsescreen3}
        image4={ecomemrsescreen4}
        image5={ecomemrsescreen5}
        image6={mobileframe}
        image7={website1}
        image8={website2}
        image9={website3}
        image10={website4}
        image11={Macbook}
        classmobileapp="nav-link"
        classwebsite="nav-link"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />

      <Driving_Exprience
        titleclass2="color-darkBlue"
        titleclassName="color-darkBlue"
        title="Why Choose Our  "
        subtitle="  Ecommerce App "
        title2=" Development Service"
        image={eduhrimg3}
        hrimg={"eduHR-img3"}
        h1="Industry Expertise"
        h2="  Customized Solutions"
        h3="User-Centric Design"
        h4="Scalable Architecture
"
        h5="Compliance Assurance
"
        h6="Robust Security
"
        h7="Ongoing Support
"
        h8="Innovative Technologies
"
      />

      <TechnologiesUse />
      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default Education_hr;
