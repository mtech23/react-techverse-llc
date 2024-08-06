 
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
import Process from "../../Components/Process";
import TrustedPartners from "../../Components/TrustedPartners";
import Portfolio from "../../Components/Portfolio";

import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import digitalmarketinghero from "../../asserts/images/digital-marketing-hero.webp";
import digitalmarketing01 from "../../asserts/images/digital-marketing-01.webp";
import digitalmarketing02 from "../../asserts/images/digital-marketing-02.webp";
import Helmet from '../../Components/Helmet'
gsap.registerPlugin(MotionPathPlugin);

const DigitalMarketing = () => {
  Aos.init();

  return (
    <UserLayout>
  

      <Helmet
        title="  Techverse LLC Digital Marketing Like an Army to Reach Goals"
        description="Digital Marketing that can change business position with new customers every day. Techverse LLC skills in digital marketing are remarkable! "
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Innovative Digital Marketing Strategies"}
        subtitle={"  For "}
        title2={"  Modern Success    "}
        tagline={
          "In today's rapidly evolving digital landscape, harnessing the power of innovative marketing strategies is crucial for achieving sustained business growth and market success. At Techverse LLC, we specialize in making tailored digital marketing solutions that propel brands forward in the digital sphere."
        }
        className={"digital-marketing-hero"}
        heroimage={digitalmarketinghero}
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
        title2={"Visibility With Our Dynamic Digital Solutions!"}
        title="Drive Growth"
        subtitle="  And  "
        para="Discover top-tier digital marketing solutions tailored to raise your brand's online presence with Techverse LLC. Our expert team crafts comprehensive strategies encompassing SEO optimization, targeted PPC campaigns, engaging social media management, and compelling content marketing. Whether you're aiming to boost conversions, enhance brand visibility, or drive traffic, our innovative approach ensures measurable results. Trust Techverse LLC to navigate the digital landscape and push your business to sustained growth and success.

"
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",
        }}
        image={digitalmarketing01}
        bulletListItems={[
          "10+ Years of Experience",
          "A Team of 50+ Digital Marketing Experts",
          "2k+ Satisfied Clients",
          "150+ Ongoing Projects",
          "Up to 43% Increase in ROI  ",
        ]}
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="Excellent Digital Solutions "
        title2="Your Brand's Growth."
        subtitle=" For "
        para="We excel in crafting compelling digital marketing strategies that resonate with your audience and lift your brand's online presence. Through expert SEO techniques, targeted social media campaigns, and innovative content strategies, we ensure that your brand not only stands out but thrives in the digital landscape. Whether you're looking to boost your website's visibility, engage with your community on social platforms, or drive conversions through effective digital advertising, our team is dedicated to building your brand's success story. 
        Trust Techverse LLC to navigate the complexities of digital marketing so you can focus on what you do best – delivering exceptional value to your customers."
        image={digitalmarketing02}
        chaticon={chaticon}
        phoneicon={phoneicon}
      />

      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* process we use */}
      <Process para="Our service is designed to propel your business forward through strategic online campaigns personalized to your unique goals. We begin by conducting a comprehensive analysis of your current digital footprint and market landscape, identifying key opportunities and challenges" />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default DigitalMarketing;
