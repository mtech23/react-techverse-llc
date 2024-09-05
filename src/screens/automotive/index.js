import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import "./style.css";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import TrustedPartners from "../../Components/TrustedPartners";
import Portfolio from "../../Components/Portfolio";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import automotiveabt2screens from "../../asserts/images/automotive-abt-2screens.webp";
import playstore from "../../asserts/images/play-store.webp";
import appstore from "../../asserts/images/app-store.webp";
import automotivedesktop from "../../asserts/images/automotive-desktop.webp";
import drivingsecsecreen from "../../asserts/images/driving-sec-secreen.webp";
import Driving_Exprience from "../../Components/Driving_experience";
import Portfolios from "../../Components/portfolios";
import automotivescreen1 from "../../asserts/images/automotive-screen1.webp";
import automotivescreen2 from "../../asserts/images/automotive-screen2.webp";
import automotivescreen3 from "../../asserts/images/automotive-screen3.webp";
import automotivescreen4 from "../../asserts/images/automotive-screen4.webp";
import automotivescreen5 from "../../asserts/images/automotive-screen5.webp";
import mobileframe from "../../asserts/images/mobile-frame.webp";

import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";

import Macbook from "../../asserts/images/Macbook.webp";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import Testimonials from "../../Components/Testimonials";
import Helmet from "../../Components/Helmet";

gsap.registerPlugin(MotionPathPlugin);

const Automotive = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Get Expert IT Services For Automotive Industry | Techverse LLC "
        description="Get top rated IT services for the automotive industry with Techverse LLC. Our expert team is ready to elevate your business with cutting-edge technology."
        keywords="Automotive"
      />
      <HeroSection
        classheroimage="inner-automotive-bgColor "
        title={"Leave The Competition In The Dust. Get Started With Techverse"}
        subtitle={"Automotive"}
        title2={"Now!"}
        tagline={
          "A solid online presence is essential for maintaining one step ahead of the competition in the quick-paced automobile sector. Modern solutions from Techverse Automotive Digital Domination are designed to improve your brand. We make sure your business shines out with creative marketing techniques, thorough analytics, and individualized consumer engagement tools. Use technology to your advantage to boost sales, become more visible, and create enduring relationships with your clients. Techverse is the intersection of automotive quality with technology, and it can help you build your business faster."
        }
        className={"mobileApp_hero_img"}
        // heroimage={Mobileapphero}
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

      {/* <!-- About Sec --> */}

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="Why"
        subtitle=" Choose   "
        title2="Us?
"
        para="At Techverse LLC, we combine innovation, expertise, and a client-centric approach to deliver exceptional digital solutions. Our team excels in mobile and web development, digital marketing, and ongoing support. We customize our services to meet your unique needs, ensuring measurable results and complete satisfaction.

"
        image={automotiveabt2screens}
        chaticon={chaticon}
        phoneicon={phoneicon}
        playstore={playstore}
        appstore={appstore}
      />

      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Engage Customers With Unique  "
        subtitle="Transportation "
        title2="App Solutions"
        para="Improve your transportation and automotive business with personalized app solutions. With our customized app development services, you may increase productivity, increase consumer engagement, and simplify operations."
        para1="Unlock valuable insights in the automotive and transport industry with our analytics and reporting services. Monitor fleet performance, customer behavior, and operational efficiency to 
      make informed decisions and drive growth."
        para2="boost user experience with our specialized UI/UX design services for the automotive and transport sectors. We create intuitive, visually appealing interfaces that improve customer engagement and satisfaction."
        para3="Transform your automotive and transport business with our custom app development solutions. Our apps streamline operations, boost productivity, and boost customer service, ensuring your business stays ahead of the competition.
      "
        para4="Ensure the highest quality for your automotive and transport applications with our rigorous testing and QA services. We identify and fix issues to deliver reliable, efficient, and user-friendly solutions."
      />

      {/* <!-- Real Estate App Dev --> */}

      <Development_Process
        title="Our"
        subtitle="Real Estate"
        title2="Mobile App Development Process"
        image={automotivedesktop}
        para="We follow a streamlined approach to ensure customer satisfaction by delivering customized real estate mobile app development solutions."
        para1="We kick off every project with a detailed business analysis phase. This involves understanding your business objectives, target audience, and market landscape. Through collaborative workshops and in-depth research, we define the project scope, requirements,
                 and technical specifications to ensure alignment with your goals."
        para2="With insights gathered from the analysis phase, our skilled team of designers and developers begins crafting your app. We focus on creating intuitive user interfaces (UI) and engaging user experiences (UX) that resonate with your audience. Leveraging the latest technologies and agile methodologies, we build scalable, robust solutions that meet industry standards and 
                 exceed user expectations."
        para3="Quality is paramount in our development process. Before deployment, our QA specialists conduct rigorous testing across multiple devices and environments. We perform comprehensive functional testing, usability testing, performance testing, and security testing to identify and rectify any issues early on. This ensures your app is stable, secure, and ready to deliver a
                  seamless user experience."
        para4="Launching your app is just the beginning of our partnership. We handle the complexities of deploying your app across platforms, managing app store submissions, and ensuring a smooth rollout. Post-launch, we provide ongoing maintenance and support services to keep your app optimized, secure, and up-to-date with evolving technologies and user needs."
        quality="Quality Assurance"
      />

      <Portfolios
        title="Automotive And Transport "
        subtitle=" Portfolio"
        para="Explore our diverse portfolio showcasing successful automotive and transport app solutions. Each project highlights our expertise in enhancing efficiency, user experience, and operational excellence designed to industry needs.

"
        image1={automotivescreen1}
        image2={automotivescreen2}
        image3={automotivescreen3}
        image4={automotivescreen4}
        image5={automotivescreen5}
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

      {/* <!-- Mobile App Dev --> */}

      <Driving_Exprience
        class_innerBG="drivingSec_innerBG"
        classheroimage="drivingSec"
        titleclassName="color-white "
        titleclass2=" color-white "
        title="Beyond The Wheel A Revolution In "
        subtitle=" Driving "
        title2="Experiences"
        image={drivingsecsecreen}
        h1="
Seamless Connectivity"
        h2="Advanced Navigation
"
        h3="Personalized Settings
"
        h4="Real-Time Updates
"
        h5="Improve Safety
"
        h6="Voice Control"
        h7="Smart Diagnostics
"
        h8="Effortless Maintenance
"
      />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default Automotive;
