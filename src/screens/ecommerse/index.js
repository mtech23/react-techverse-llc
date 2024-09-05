import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";

import ecommersdoubleScreens from "../../asserts/images/ecommers-doubleScreens.webp";
import TrustedPartners from "../../Components/TrustedPartners";
import ecommersedesktopimg from "../../asserts/images/ecommerse-desktop-img.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import ecommerce from "../../asserts/images/ecommerse-gif.gif";
import HeroSection from "../../Components/herosection/index";
import ecomemrsescreen1 from "../../asserts/images/ecomemrse-screen1.webp";
import ecomemrsescreen2 from "../../asserts/images/ecomemrse-screen2.webp";
import ecomemrsescreen3 from "../../asserts/images/ecomemrse-screen3.webp";
import ecomemrsescreen4 from "../../asserts/images/ecomemrse-screen4.webp";
import ecomemrsescreen5 from "../../asserts/images/ecomemrse-screen5.webp";
import mobileframe from "../../asserts/images/mobile-frame.webp";

import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";

import Macbook from "../../asserts/images/Macbook.webp";
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
const Ecommerse = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Get Premier IT Solutions For eCommerce Development Industry"
        description="Techverse LLC offers premier IT solutions for the eCommerce industry. Boost your online presence with our tailored development services and expert support."
        keywords="eCommerce Development"
      />

      <HeroSection
        classheroimage={"inner-ecommerce-bgColor"}
        title={"Techverse"}
        subtitle={"E-Commerce"}
        title2={"Apps Reimagine Customer Journeys, Reignite Sales"}
        tagline={
          "Our method of developing apps redefines customer interaction and operational effectiveness in the competitive world of e-commerce. Modern features are included for secure transactions, smooth browsing, and customized shopping experiences. Our robust systems guarantee scalability and use cutting-edge analytics to improve user retention and target marketing. We customize every program to achieve your company objectives, from solid backend solutions to appealing UI/UX design."
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
      />

      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      <Portfolio
        title="Techverse Revolutionizes"
        classtitle="color-darkBlue"
        subtitle="Industries"
        title2="Through Digital Power"
        para="Welcome to Techverse, where our knowledge and your vision combine to build a better tomorrow. Enter a future where technology is defining the way things happen. Our specialty at Techverse is turning concepts into innovative solutions. We're here to innovate and improve, whether it's app development, digital strategy, or improving your online visibility. Our group is passionate about pushing the envelope and creating outcomes that revolutionize industries. Come along on this exploration and digital revolution adventure with us."
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        image={ecommerce}
        phoneicon={phoneicon}
        chaticon={chaticon}
        playstore={playstore}
        appstore={appstore}
      />

      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Techverse For Personalized"
        subtitle="Retail & E-Commerce "
        title2="Apps Today!"
        para="Personalized app solutions to improve your retail and e-commerce operations. With our customized development services,
       you may increase revenue, improve client engagement, and streamline processes."
        para1="Gain actionable insights into customer behavior and business performance to drive informed decisions and optimize strategies for growth."
        para2="Create intuitive interfaces that boost user experience and foster engagement, ensuring seamless navigation and compelling visuals."
        para3="Build robust, scalable applications designed to meet the unique demands of retail and e-commerce environments, integrating cutting-edge features for boosted functionality.
      "
        para4="Conduct rigorous testing across platforms to ensure performance, security, and reliability, delivering a flawless user experience and maintaining operational excellence."
      />

      <Development_Process
        title=" Techverse Delivers Flawless "
        subtitle=" E-Commerce & Retail "
        title2="Mobile Apps."
        para="Our E-commerce & Retail Mobile App Development Process begins with thorough discovery and planning, where we align business goals with user expectations. We then design intuitive UI/UX interfaces, develop robust applications with scalable features, and ensure quality through rigorous testing before seamless deployment."
        image={ecommersedesktopimg}
        para1="Gain deep insights into market trends and customer preferences to align app development with business goals and boost user satisfaction."
        para2="Create intuitive interfaces and robust solutions that optimize shopping experiences, integrating innovative features to drive engagement and sales."
        para3="Implement rigorous testing to ensure seamless functionality, security, and performance, maintaining high standards for user trust and satisfaction."
        para4="Efficiently deploy apps across platforms and provide ongoing support, ensuring scalability, reliability, and continuous improvement to meet evolving business needs."
        quality="Quality Assurance"
      />

      <Portfolios
        title="ECOMMERCE "
        subtitle="Portfolio"
        para="Explore our diverse eCommerce portfolio, which showcases successful app solutions. Each project highlights our expertise in enhancing user experience, driving sales, and optimizing operational efficiency for diverse business needs."
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
        classmobileapp="nav-link"
        classwebsite="nav-link"
        image1={ecomemrsescreen1}
        image2={ecomemrsescreen2}
        image3={ecomemrsescreen3}
        image4={ecomemrsescreen4}
        image5={ecomemrsescreen5}
        image6={mobileframe}
        image7={website1}
        image8={website2}
        image9={website3}
        image10={website4}
        image11={Macbook}
      />

      <Driving_Exprience
        titleclass2="color-darkBlue"
        titleclassName="color-darkBlue"
        title="Why Choose Our  "
        subtitle="    Ecommerce App "
        title2="         Development Service
"
        image={ecommersdoubleScreens}
        h1="Expertise in UX/UI
"
        h2="Robust Security Measures
"
        h3="Scalable Solutions"
        h4="Increase Customer Engagement
"
        h5="Customized Features"
        h6="Seamless Integration "
        h7="Proven Track Record
"
        h8="Ongoing Support
"
      />

      <TechnologiesUse />
      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default Ecommerse;
