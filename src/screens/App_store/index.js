import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";

import appimg01 from "../../asserts/images/app-img-01.webp";
import appstorehero from "../../asserts/images/app-store-hero.webp";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import Process from "../../Components/Process";
import TechnologiesUse from "../../Components/technologiesuse";
import Testimonials from "../../Components/Testimonials";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import TrustedPartners from "../../Components/TrustedPartners";

import Helmet from "../../Components/Helmet";
gsap.registerPlugin(MotionPathPlugin);

const App_store = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Top App Store Optimization Services in CA, USA | Techverse LLC"
        description="Boost your app's visibility with expert App Store Optimization services in CA, USA from Techverse LLC. Maximize your app's potential now with our expert team."
        keywords="App Store Optimization Services"
      />

      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Innovate Today"}
        subtitle={" With "}
        title2={"Techverse App Store"}
        tagline={
          "Whether you're an aspiring entrepreneur or a seasoned developer, our App Store is your gateway to reaching millions of users worldwide. With our robust platform, you can harness the power of cutting-edge technology and provide a seamless user experience. From app discovery to deployment, we provide supreme support and resources to raise your app's visibility and success"
        }
        className={"storeApp_hero_img"}
        heroimage={appstorehero}
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
        title="Boost Downloads"
        subtitle="And "
        title2="  Visibility Techverse LLC's App Optimization At Your Service. ."
        para="Get the full potential of your mobile app with Techverse LLC's Comprehensive App Store Optimization service. We specialize in enhancing your app's visibility and reach across major platforms, including the Apple App Store and Google Play Store. Our expert team leverages advanced strategies in keyword optimization, metadata refinement, competitor analysis, and user engagement tactics to ensure your app not only ranks higher but also attracts and retains a loyal user base. Whether you're launching a new app or looking to boost downloads for an existing one, trust Techverse LLC to optimize your app for success in today's competitive marketplace.

"
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
        image={appimg01}
      />

      <Elevateyourbusiness />
      {/* <Website /> */}
      <Process
        para="Our App Store Optimization (ASO) process is meticulously crafted to uplift your app's visibility and downloads. We begin with a thorough assessment of your app's current performance and market positioning, followed by in-depth keyword research to identify optimal search terms. 
            Crafting compelling app titles, descriptions, and visually appealing icons and screenshots is integral to our strategy."
      />
      <TechnologiesUse />

      <Testimonials />
      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default App_store;
