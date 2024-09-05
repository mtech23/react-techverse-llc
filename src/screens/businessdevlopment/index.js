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
import tpblue from "../../asserts/images/t-p-blue.webp";
import tpblack from "../../asserts/images/t-p-black.webp";

import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";

import chaticon from "../../asserts/images/chat-icon.webp";
import businessimg01 from "../../asserts/images/business-img-01.webp";

import businessdevelopmenthero from "../../asserts/images/business-development-hero.webp";
import Helmet from "../../Components/Helmet";
gsap.registerPlugin(MotionPathPlugin);

const Businessdevlopment = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Best MVP Development Services in CA, USA | Techverse LLC"
        description="Professional MVP development services in CA, USA by Techverse LLC. Transform your ideas into successful products with our expert team. Visit our website!"
        keywords="MVP Development Services"
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Accelerate Your Product Launch   "}
        subtitle={"  With"}
        title2={"With"}
        tagline={
          "At Techverse LLC, we specialize in MVP Development Services designed to fast-track your product from concept to market success. Our approach focuses on building Minimum Viable Products (MVPs) strategically crafted to validate your idea, engage early adopters, and gather crucial feedback—all while minimizing time to market and development costs."
        }
        className={"web-development_hero_img"}
        heroimage={businessdevelopmenthero}
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
      <section className="techVerse_trustedPartners techVerse_trustedPartnersServices">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row flex-nowrap gap-4 custom_trusted_partners_seprator">
                <marquee>
                  <div className="trustedPartners">
                    <div className="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div className="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Sec --> */}

      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        // chaticon={chaticon}
        // phoneicon={phoneicon}
        calltext={"Call Now"}
        chatenow={"Chat Now"}
        title="Launch Smart"
        subtitle="    With  "
        title2="Mvps Validate, Iterate, Succeed!"
        para="Our MVP Development Services empower you to validate your business idea effectively before full-scale implementation. We specialize in crafting Minimum Viable Products (MVPs) that allow you to test core functionalities and gather crucial feedback from early users. By leveraging rapid prototyping and iterative development methodologies, we ensure your MVP evolves based on real-world insights, validating market demand and optimizing your product-market fit. With Techverse LLC, you can confidently refine your concept, mitigate risks, and position your product for successful market entry. "
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
        listItems={[
          "Robust approach to connect your product with the target market",
          "Verification of your idea with a test version of your digital product",
        ]}
        image={businessimg01}
      />

      {/* <!-- Website --> */}
      <Elevateyourbusiness />

      {/* process we use */}
      <Process para="At Techverse LLC, we specialize in transforming your innovative ideas into robust Minimum Viable Products (MVPs) that resonate with your target audience. Our streamlined process ensures that every stage of development is meticulously planned and executed, focusing on agility, functionality, and user-centric design." />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default Businessdevlopment;
