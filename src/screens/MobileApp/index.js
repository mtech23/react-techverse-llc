import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Helmet from "../../Components/Helmet";
import Aboutsection from "../../Components/aboutsection";

import Aos from "aos";

import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Process from "../../Components/Process";
import TrustedPartners from "../../Components/TrustedPartners";

import Portfolio from "../../Components/Portfolio";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import rapidappimg from "../../asserts/images/rapidapp-img.webp";
import highendimg from "../../asserts/images/high-end-img.webp";
import Mobileapphero from "../../asserts/images/Mobile-app-hero.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Testimonials from "../../Components/Testimonials";

// import required modules
// import { Pagination,  Autoplay } from 'swiper/modules';
gsap.registerPlugin(MotionPathPlugin);

const MobileApp = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Top Custom Mobile App Development Services | Techverse LLC"
        description="Techverse LLC a leading provider of custom mobile app development services in USA. Transform your ideas into creative mobile solutions with our expert team."
        keywords="Custom Mobile App Development Services"
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Innovate. Develop. Dominate With"}
        subtitle={"Techverse Apps!"}
        // title2={"Services for Online Businesses"}
        tagline={
          "Our Mobile Application Development service is tailored to propel your business forward in the digital landscape. Our expert team crafts bespoke mobile solutions that resonate with your audience and drive results."
        }
        className={"mobileApp_hero_img"}
        heroimage={Mobileapphero}
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
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary ",

          // playstore: playstore,
          // appstore: appstore
        }}
        title="Leading"
        subtitle="The"
        title2="Charge In Rapid Mobile App Innovation "
        para="Experience the forefront of mobile application development with Techverse LLC, where we excel in rapid application deployment driven by cutting-edge technologies. Our approach blends agile methodologies with the latest advancements in AI, IoT, and blockchain, ensuring that your app not only meets but exceeds industry standards. Whether you require a robust iOS solution, an adaptable Android platform, or a versatile cross-platform app, our seasoned developers are adept at crafting bespoke applications that resonate with your target audience. From initial ideation and meticulous prototyping to seamless deployment and ongoing support, we prioritize collaboration and innovation to deliver solutions that propel your business forward. Trust Techverse LLC to transform your vision into a dynamic and scalable mobile application that stands out in today's competitive digital landscape."
        image={rapidappimg}
        abtImgclassName="mobile-img-1"
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle={"color-darkBlue"}
        title="Scalable Mobile Solutions "
        title2="Every Business Need. "
        subtitle=" For "
        para=" At Techverse LLC, we specialize in crafting high-end mobile app solutions tailored to raise businesses across diverse industries. Our Mobile Application Development service is meticulously designed to transform your ideas into intuitive, scalable, and robust mobile applications that resonate with your target audience. Whether you're aiming to streamline internal processes, enhance customer engagement, or launch a cutting-edge product, our expert team of developers, designers, and strategists is dedicated to delivering excellence. From initial concept and UI/UX design to seamless integration and ongoing support, we prioritize innovation and functionality every step of the way. Partner with Techverse LLC and get the potential in today's digital landscape."
        image={highendimg}
        chaticon={chaticon}
        phoneicon={phoneicon}
      />
      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* new Portfolio swipper section */}

      {/* process we use */}
      <Process para="We proceed to meticulous planning, where we outline the app's features, user interface design, and functionality. Our expert team of developers then takes over, using cutting-edge technologies to build a robust and scalable application tailored to your specifications." />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ section */}
      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default MobileApp;
