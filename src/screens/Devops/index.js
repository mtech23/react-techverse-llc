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
import Testimonials from "../../Components/Testimonials";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import devopsbanner1 from "../../asserts/images/devopsbanner1.webp";
import bannerdevops from "../../asserts/images/bannerdevops.webp";
import devops02 from "../../asserts/images/devops02.webp";
import devopsbanner from "../../asserts/images/devopsbanner.webp";
import devopsabt from "../../asserts/images/devopsabt.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import digitalmarketinghero from "../../asserts/images/digital-marketing-hero.webp";
import digitalmarketing01 from "../../asserts/images/digital-marketing-01.webp";
import digitalmarketing02 from "../../asserts/images/digital-marketing-02.webp";
import Helmet from "../../Components/Helmet";
gsap.registerPlugin(MotionPathPlugin);

const Devops = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Expert DevOps Solutions in California, USA | Techverse LLC"
        description="Get expert DevOps solutions in California from Techverse LLC. Elevate your business efficiency and innovation with our dedicated services and support."
        keywords="Devops"
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Outsourcing"}
        subtitle={"   IT "}
        title2={"with Expert Dev"}
        subtitle2={"Ops"}
        title3={"Solutions "}
        tagline={
          "Grow your business’s online presence and witness an increase in conversions with Techverse."
        }
        // className={"devopsimg"}
        className={"digital-marketing-hero, devopsimg"}
        heroimage={devopsbanner1}
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
        classSpace="devOps_sec1"
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        // title2={""}
        title="Impactful CX & insightful "
        subtitle="solutions"
        para="At Techverse, we have got the team and the expertise to take your online presence to the next level. From website designing to optimization, social media marketing to content marketing, we can help you make the most of your marketing investment. Here’s why you should hire us:
"
        // CtnbuttonComponent={Ctnbutton}
        // ctnButtonProps={{
        //   phoneicon: phoneicon,
        //   calltext: "Call Now",
        //   primaryButtonClass: "btn_with_icon",
        //   chaticon: chaticon,
        //   chatenow: "Chat Now",
        //   secondaryButtonClass: "btn_with_icon btn_secondary  ",
        // }}
        // abtImgclassName="img_abt_devops"
        image={devopsabt}
        bulletListItems={[
          "10+ Years of Experience",
          "Team of 50+ Digital Marketing Experts",
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
        title="DevOps & IT "
        // title2="Your Brand's Growth."
        subtitle="Outsourcing"
        para="Great brands start with consumer demands and marketplace gaps, not corporate strengths, which may seem paradoxical. That's why we start our brand development process by going deep – really deep – into research to find ways to make your brand genuine to who you are, different in the market, and memorable."
        image={devops02}
        portfolioimg="portfolio_img"
        chaticon={chaticon}
        phoneicon={phoneicon}
        newclassName="devOps_sec2"
      />

      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* process we use */}
      <Process para="We nurture creativity in our skilled teams by harnessing fresh ideas, perspectives, techniques and tapping into new sources of inspiration. We are on a mission to design and build products that are fit-for-purpose, fulfil their objectives, and that deliver value to their users. Whether it’s Mobile App Development, game development, UI/UX design, or anything else, we deliver – keeping in mind your budget, timeline, and unique needs!" />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default Devops;
