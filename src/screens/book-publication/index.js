import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import Process from "../../Components/Process";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
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

import digitalmarketing0111 from "../../asserts/images/digital-marketing-0111.png";
import bookPublicationImg2 from "../../asserts/images/book-publication-img-2.png";
import bookPublicationImg44 from "../../asserts/images/book-publication-img44.png";
// import digitalmarketing0222 from "../../asserts/images/digital-marketing-0222.png";
import brandingImg3 from "../../asserts/images/book-publication-img-3.png";
import bookPublicationImg3After from "../../asserts/images/book-publication-img-2-after.png";
import Helmet from "../../Components/Helmet";
import Packages from "../../Components/Packages";

import chaticons from "../../../src/asserts/images/chat-icon-blue.webp";
import phoneicongreen from "../../../src/asserts/images/phone-icon-green.webp";

import mobileAppimg from "../../../src/asserts/images/mobileAppimg.webp";
import ElevateyourbusinessImg from "../../../src/asserts/images/ElevateyourbusinessImg.png";

import chaticonblue from "../../asserts/images/phone-icon-green.webp";
import donateWhite from "../../asserts/images/donate-white.webp";
import peramidicon from "../../asserts/images/peramid-icon.webp";

import seoIconTop from "../../asserts/images/seo-icon-top.png";
import seoIconBottom from "../../asserts/images/seo-icon-bottom.png";
import ServiceParticle from "../../Components/ServiceParticle/ServiceParticle";
import orangecircle from "../../asserts/images/orange-circle.webp";

import donatewhitesmall from "../../asserts/images/donate-white-small.webp";
import orangehalfcircle from "../../asserts/images/orange-half-circle.webp";
import bluecube from "../../asserts/images/blue-cube.webp";

import youtubeMarketingIcon from "../../asserts/images/business-logo-icon.png";
import socialMarketingIcon from "../../asserts/images/custom-logo-icon.png";
import amazonMarketingIcon from "../../asserts/images/graphic-design-icon.png";
import emailMarketingIcon from "../../asserts/images/business-card-icon.png";
import smsMarketingIcon from "../../asserts/images/enter-prize-icon.png";
import crossplatform from "../../asserts/images/cross-platform.webp";

import brandingbannerImg from "../../asserts/images/book-publication-banner-img.png";
import logoDesignSecImg from "../../asserts/images/logo-design-sec-img.png";
import penImage from "../../asserts/images/pen-img.png";
import PortfoliosTech from "../../Components/PortfoliosTech";

gsap.registerPlugin(MotionPathPlugin);

const BookPublication = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="#1 Digital Marketing Services in California, USA | Techverse LLC"
        description="Techverse LLC provides professional digital marketing services in California, USA. Boost your sales, Take your brand to the next level with our proven strategies"
        keywords="Digital Marketing Services"
      />
      <HeroSection
        innerbgclass="inner-bgColor"
        title="Book Publishing Excellence With"
        subtitle="  Best Book Publishers"
        title2="  At Techverse LLC    "
        tagline={
          "From manuscript to masterpiece with Book Authors Hub's distinguished book publishing services. Our dedicated team ensures your literary work receives the attention it deserves, guiding you through every stage of the publishing process"
        }
        className="digital-marketing-hero"
        heroimage={brandingbannerImg}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon,
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
        classSpace="branding-about-sec"
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title="Weaving Dreams, "
        subtitle="Shaping Stories "
        // title2=""
        para="Book Authors Hub, where we turn your publishing dreams into a reality. Our professional editing services ensure your manuscript achieves the pinnacle of perfection, offering clarity and coherence. With strategic publication plans tailored to your preferences, you can choose between digital, print, or a combination for a personalized approach. Our targeted marketing strategies create a buzz around your book, incorporating online and offline promotional activities, events, and media engagement to maximize visibility. Benefit from our global distribution network, reaching major online and physical retailers, ensuring your book is available worldwide. Beyond publication, our support extends to the book launch, ongoing marketing efforts, and additional services like author website design. Join us at Book Authors Hub to elevate your literary journey, where every word finds its place and every story becomes a remarkable chapter in your success."
        para2=""
        CtnbuttonComponent={Ctnbutton}
        // ctnButtonProps={{
        //   phoneicon: phoneicon,
        //   calltext: "Call Now",
        //   primaryButtonClass: "btn_with_icon",
        //   chaticon: chaticon,
        //   chatenow: "Chat Now",
        //   secondaryButtonClass: "btn_with_icon btn_secondary  ",
        // }}
        image={bookPublicationImg2}
        bulletListItems={[
          "10+ Years of Experience",
          "2k+ Satisfied Clients",
          "A Team of 50+ Digital Marketing Experts",
          "150+ Ongoing Projects",
        ]}
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="Best Book Publishing Company "
        subtitle=" Turning Dreams "
        title2="Into Published Realities"
        para="At Techverse LLC, we turn your publishing dreams into a reality. Our commitment begins with Professional Editing, where our skilled editors meticulously refine your manuscript, ensuring it reaches its full potential with impeccable clarity and coherence."
        para1="Moving forward, our expertise in Strategic Publication navigates the intricate pathways of the publishing world. We guide you in choosing the right platform and collaborate on creating an impactful book cover that stands out. As your literary partner, we go beyond publication to ensure your book receives the attention it deserves. Our Targeted Marketing strategies are tailored to reach the right audience through diverse channels, maximizing your book's visibility and impact."
        para2="With our comprehensive Global Distribution network, your book transcends boundaries, reaching readers worldwide through online platforms and physical stores. At Book Authors Hub, our holistic approach to publishing transforms your manuscript into a literary masterpiece, supported by professional editing, strategic publication, targeted marketing, and global distribution. Your journey from writer to published author is our shared success story, as we navigate each step with passion, precision, and a commitment to turning your literary aspirations into a tangible reality."
        image={brandingImg3}
        imgAfter={bookPublicationImg3After}
        imgAfterClass="imgAfterClass"
        chaticon={chaticon}
        phoneicon={phoneicon}
      />

      {/* MOBILE APP */}

      {/* <Elevateyourbusiness /> */}
      <section className="techVerse_mobileApp techVerse_mobileAppBookPublication">
        <div className="techVerse_mobileAppContent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6">
                <div className="techVerse_mobileApp_content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Empowering Authors, Entertaining Readers Through Our
                      Publishing Services
                      {/* <span className="color-lightBlue2"> Branding</span> */}
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, we specialize in crafting customized
                      mobile applications tailored to amplify your brand's
                      visibility and functionality.
                    </p>
                    <div
                      className="techVerse_hero_btns"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                        <img
                          className="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          +(1) 23456-7890
                        </span>
                      </a>
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={chaticons}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          {" "}
                          Start A Live Chat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 px-0">
                <div className="techVerse_mobileApp_img">
                  <img
                    src={bookPublicationImg44}
                    alt=""
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Packages />

      {/* process we use */}
      <Process para="Our service is designed to propel your business forward through strategic online campaigns personalized to your unique goals. We begin by conducting a comprehensive analysis of your current digital footprint and market landscape, identifying key opportunities and challenges" />

      <section className="connect_min_sec">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="connect_min_img">
                  <img src={penImage} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="connect_min_content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Connecting Minds through Pages
                      {/* <span className="color-lightBlue2"> Branding</span> */}
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <div
                      className="techVerse_hero_btns"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                        <img
                          className="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          +(1) 23456-7890
                        </span>
                      </a>
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={chaticons}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          {" "}
                          Start A Live Chat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Technologies --> */}
      {/* <TechnologiesUse /> */}

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default BookPublication;
