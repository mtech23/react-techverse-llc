import React from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import realestateimg from "../../asserts/images/realEstate-img-3.webp";
import realEstateportfolioimg1 from "../../asserts/images/realEstate-portfolio-img1.webp";
import realEstateportfolioimg2 from "../../asserts/images/realEstate-portfolio-img2.webp";
import realEstateportfolioimg3 from "../../asserts/images/realEstate-portfolio-img3.webp";
import realEstateportfolioimg4 from "../../asserts/images/realEstate-portfolio-img4.webp";
import realEstateportfolioimg5 from "../../asserts/images/realEstate-portfolio-img5.webp";
import mobileframe from "../../asserts/images/mobile-frame.webp";
import Macbook from "../../asserts/images/Macbook.webp";
import Ctnbutton from "../../Components/ctnbutton";

import realestateimg2 from "../../asserts/images/real-estate-img2.gif";
import Aboutsection from "../../Components/aboutsection";
import realestateimg1 from "../../asserts/images/real-estate-img1.webp";
import TrustedPartners from "../../Components/TrustedPartners";

import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import HeroSection from "../../Components/herosection/index";

import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";

import Aos from "aos";
import "swiper/css";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Testimonials from "../../Components/Testimonials";
import Portfolios from "../../Components/portfolios";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import Driving_Exprience from "../../Components/Driving_experience";
import Helmet from "../../Components/Helmet";
const RealEstate_and_property = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="IT Services For Real State & Property Industry | Techverse LLC"
        description="Techverse LLC offers specialized IT services for the real estate and property sector. Boost your efficiency and success with our innovative technology solutions."
        keywords="Real State and Property"
      />
      {/* <!-- Inner Hero --> */}

      <HeroSection
        classheroimage={"inner-realEstate-bgColor"}
        title={"Revolutionize Your Real Estate Strategy"}
        subtitle={"With"}
        title2={"  Cutting-Edge Tech "}
        tagline={
          " Use Techverse LLC's advanced digital technologies to transform your real estate strategy. We revolutionize client connections and operational efficiency with our user-friendly property management applications and captivating virtual tours. Our cutting-edge solutions increase client engagement, streamline transactions, and improve listing exposure. Whether you work as a property manager, developer, or realtor, you can rely on us to improve your online visibility and spur business in the cutthroat real estate sector. Join together with Techverse LLC to get revolutionary solutions customized to your sector's requirements. "
        }
        // heroimage={webapplicationhero}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Us",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",

          // playstore: playstore,
          // appstore: appstore
        }}
      />

      {/* TrustedPartners */}
      <TrustedPartners />
      {/* ecommerce section */}
      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Us",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",

          // playstore: playstore,
          // appstore: appstore
        }}
        // title2="Client Engagement "
        title="Techverse Powers Your Operations & "
        subtitle="  Client Engagement "
        para="Together with us, create an innovative route to real estate success. Techverse LLC provides cutting-edge digital solutions designed specifically for real estate agents. With state-of-the-art technology and knowledge, we enable you to maximize operations, improve client engagement, and accomplish your business objectives—from efficient property administration to exciting virtual tours. "
        image={realestateimg1}
      />

      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Techverse Develops"
        subtitle="Custom Apps "
        title2="That Exceed Expectations "
        para="Custom app development to meet your specific company requirements. Techverse LLC is an expert in developing personalized mobile apps that precisely match your demands. You can rely on us to provide clear-cut, efficient solutions that advance your company from conception to implementation."
        para1="Gain valuable insights with our robust analytics solutions, built to track and optimize user engagement and performance metrics, ensuring informed decision-making for your business."
        para2="Create intuitive and captivating user experiences with our expert UI/UX design services, focusing on aesthetics and usability to boost customer satisfaction and retention."
        para3="From concept to launch, our skilled team delivers scalable and feature-rich mobile applications that meet your business goals, ensuring seamless functionality across platforms.
      "
        para4="Ensure high performance and reliability with our rigorous testing and quality assurance processes. We carefully check every aspect of your application to deliver a flawless user experience."
      />

      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        image={realestateimg2}
        title="Quality From Start To Finish Techverse Builds Reliable"
        subtitle="Custom Mobile Apps."
        // title2="Custom Mobile Apps."
        para="From conception to implementation, we follow a thorough approach that includes careful planning, creative design, agile development, stringent testing, and smooth implementation. Delivering reliable, user-focused mobile solutions that go above and beyond for clients is our mission. "
        para1="Thoroughly analyze business requirements and user needs to define project scope and objectives, ensuring alignment with strategic goals and optimal solution planning."
        para2="Craft visually appealing and functional designs while implementing robust development strategies to create customized solutions that meet client specifications and exceed expectations."
        para3="Conduct rigorous testing and quality checks throughout the development lifecycle to ensure high performance, reliability, and adherence to industry standards for seamless user experiences."
        para4="Efficiently deploy applications while providing ongoing support and maintenance services to ensure smooth operations, continuous improvements, and client satisfaction post-launch."
        quality="Quality Assurance"
      />

      <Portfolios
        title="REAL ESTATE "
        subtitle="Portfolio   "
        para="Explore our diverse portfolio, which showcases innovative digital solutions for real estate, including property management apps, virtual tours, and client engagement tools. This demonstrates our expertise in transforming the real estate industry."
        image1={realEstateportfolioimg1}
        image2={realEstateportfolioimg2}
        image3={realEstateportfolioimg3}
        image4={realEstateportfolioimg4}
        image5={realEstateportfolioimg5}
        image6={mobileframe}
        // image7={carbuying}
        // image8={jeffwilson}
        // image9={lllreptile}
        // image10={privateastrology}
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
        title=" What Makes Our "
        subtitle=" Real Estate "
        title2=" Mobile App Development Stand Out? "
        image={realestateimg}
        hrimg="mobile-app-22"
        h1="Specialized Expertise"
        h2="Customized Solutions"
        h3="Innovative Technology"
        h4="Intuitive Design"
        h5="Robust Performance"
        h6="Client Satisfaction"
        h7="Reliable Support"
        h8="Market Insight"
      />

      <TechnologiesUse />

      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default RealEstate_and_property;
