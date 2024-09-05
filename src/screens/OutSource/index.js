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
import bannerImg1 from "../../asserts/images/out-source-banner-img.webp";

import phoneicongreen from "../../../src/asserts/images/phone-icon-green.webp";
import chaticonblue from "../../../src/asserts/images/chat-icon-blue.webp";
import outSourceImg3 from "../../../src/asserts/images/out-source-img-3.webp";

import simpleStepIcon1 from "../../../src/asserts/images/simple-step-icon1.webp";
import simpleStepIcon2 from "../../../src/asserts/images/simple-step-icon2.webp";
import simpleStepIcon3 from "../../../src/asserts/images/simple-step-icon3.webp";
import simpleStepIcon4 from "../../../src/asserts/images/simple-step-icon4.webp";
import simpleStepIcon5 from "../../../src/asserts/images/simple-step-icon5.webp";

import numberIcon1 from "../../../src/asserts/images/numbers-icon1.webp";
import numberIcon2 from "../../../src/asserts/images/numbers-icon2.webp";
import numberIcon3 from "../../../src/asserts/images/numbers-icon3.webp";
import numberIcon4 from "../../../src/asserts/images/numbers-icon4.webp";

import specialitiesIcon from "../../../src/asserts/images/business-analysis-icon.webp";
import specialitiesScreen from "../../../src/asserts/images/specialities-screen.webp";

import Helmet from "../../Components/Helmet";
gsap.registerPlugin(MotionPathPlugin);

const simpleStepData = [
  {
    id: 1,
    icon: simpleStepIcon1,
    title: "NDA Signing",
    desc: "We understand your confidentiality challenges and ensure that the process starts with NDA signing.",
  },
  {
    id: 2,

    icon: simpleStepIcon2,
    title: "You share your requirements",
    desc: "You share your requirements with our designated Account Manager.",
  },
  {
    id: 3,
    icon: simpleStepIcon3,
    title: "Search begins",
    desc: "We mobilize our Network and Active Talent Pool.",
  },
  {
    id: 4,
    icon: simpleStepIcon4,
    title: "Ready & interviewed Candidates",
    desc: "We ensure shortlisted candidates qualified Technical and Communciatoin interviews with.",
  },
  {
    id: 5,
    icon: simpleStepIcon5,
    title: "Hire",
    desc: "You get your resources hired.",
  },
];

const numberData = [
  {
    id: 1,
    icon: numberIcon1,
    title: 388,
    desc: "Softwear Engineers Served",
  },
  {
    id: 2,
    icon: numberIcon2,
    title: 995,
    desc: "Project Done",
  },
  {
    id: 1,
    icon: numberIcon3,
    title: 388,
    desc: "Softwear Engineers Served",
  },
  {
    id: 1,
    icon: numberIcon4,
    title: 388,
    desc: "Softwear Engineers Served",
  },
];

const OutSourcing = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Outsource Your Projects to Techverse | USA's Leading IT Service"
        description="Techverse offers premier IT services in the USA. Outsource your projects to us for reliable solutions and expert support. Start your journey now!"
        keywords="Outsource"
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Top Mobile App "}
        subtitle={" Development "}
        title2={"Services for Online Businesses"}
        tagline={
          "Improve your brand awareness and maximize ROI through a responsive mobile application."
        }
        // className={"devopsimg"}
        className={"outSourceBannerImg"}
        heroimage={bannerImg1}
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

      {/* <!-- About Sec --> */}

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="Techverse "
        // title2="Your Brand's Growth."
        subtitle="Outsourcing"
        para="Great brands start with consumer demands and marketplace gaps, not corporate strengths, which may seem paradoxical. That's why we start our brand development process by going deep – really deep – into research to find ways to make your brand genuine to who you are, different in the market, and memorable."
        para1="Techverse is a leading finance app development company based in the US, focused on providing cutting-edge mobile app development solutions to clients in the banking and financial industry. Our team is committed to delivering high-quality services tailored to our "
        para2="Great brands start with consumer demands and marketplace gaps, not corporate strengths, which may seem paradoxical. That's why we start our brand development process by going deep "
        image={devops02}
        eduHR="outSourceImg2"
        portfolioimg="portfolio_img"
        chaticon={chaticon}
        phoneicon={phoneicon}
        newclassName="outSourceSec2"
      />

      {/* Full Time Resource Sec */}
      <section className="fullTime-resouce">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-7 ">
                <div className="sec_title">
                  <h2
                    className={` sec_title_head `}
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    According to Your Schedule: <br />
                    We Have{" "}
                    <span className="color-white">Full Time Resources!</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div
                    className="techVerse_hero_btns"
                    data-aos="fade-up"
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
                        src={chaticonblue}
                        alt=""
                      />
                      <span className="btn_with_icon_text">
                        Start A Live Chat
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 ">
                <div className="fullTime-resouce_imgDiv">
                  <img
                    src={outSourceImg3}
                    className="fullTime-resouce-Img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps Sec */}
      <section className="simple-step">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="sec_title">
                  <h2
                    className={` sec_title_head mb-0`}
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    SIMPLE
                    <span className="color-lightBlue2"> STEPS</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    To your Succesful hiring with us
                  </p>
                </div>
              </div>
            </div>
            <div className="simpleStep-item-iconsBg">
              <div className="row  justify-content-center">
                <div className="simpleStepGrid">
                  {simpleStepData.map((item, index) => (
                    <div className="simpleStep-item">
                      <img
                        src={item.icon}
                        className="simpleStep-item-icon"
                        alt=""
                      />
                      <h3 className="simpleStep-item-title">{item.title}</h3>
                      <p className="simpleStep-item-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part Time Resouce */}
      <section className="part-time-resouce">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="sec_title">
                  <h2
                    className={` sec_title_head `}
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    According to Your Schedule: We <br />
                    Have{" "}
                    <span className="color-white">Full Time Resources!</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div
                    className="techVerse_hero_btns"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a
                      href="tel:+(1) 23456-7890"
                      className="btn_with_icon btn_white"
                    >
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
                        src={chaticonblue}
                        alt=""
                      />
                      <span className="btn_with_icon_text">
                        Start A Live Chat
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities Sec */}
      <section className="specialities_sec">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 ">
                <h2
                  className={` sec_title_head`}
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  OUR
                  <span className="color-lightBlue2"> SPECIALITIES</span>
                </h2>
              </div>
              <div className="col-lg-4 specialities_item_col111">
                <div className="specialities_item_col specialities_item_col1">
                  <div className="specialities_item">
                    <img
                      className="specialities_item_icon"
                      src={specialitiesIcon}
                      alt=""
                    />
                    <h3>Fast hire</h3>
                    <p>
                      We understand face paced environments well and ensure
                      speedy onboarding of your talent.
                    </p>
                  </div>
                  <div className="specialities_item">
                    <img
                      className="specialities_item_icon"
                      src={specialitiesIcon}
                      alt=""
                    />
                    <h3>Ready and interviewed Candidates</h3>
                    <p>
                      We ensure that you get qualified candidates after a
                      rigorous screening process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 specialities_item_col222">
                <div className="specialities_item_col specialities_item_col2">
                  <div className="specialities_item">
                    <img
                      className="specialities_item_icon"
                      src={specialitiesIcon}
                      alt=""
                    />
                    <h3>Commitment to Your Goals</h3>
                    <p>
                      Your goals are like ours, we commit to you like a close
                      partner you can trust on.
                    </p>
                  </div>
                  <div className="specialities_item">
                    <img
                      src={specialitiesScreen}
                      className="img-fluid specialities_item_screen"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 specialities_item_col333">
                <div className="specialities_item_col specialities_item_col3">
                  <div className="specialities_item">
                    <img
                      className="specialities_item_icon"
                      src={specialitiesIcon}
                      alt=""
                    />
                    <h3>Agile Talent with the Trending Skills</h3>
                    <p>
                      Our Active Talent sourcers are vigilant on the evolving
                      Talent needs
                    </p>
                  </div>
                  <div className="specialities_item">
                    <img
                      className="specialities_item_icon"
                      src={specialitiesIcon}
                      alt=""
                    />
                    <h3>Excellent Communication</h3>
                    <p>
                      Communication is our Value, All candidates are excellent
                      in Communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Number Sec */}
      <section className="number_sec">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              {numberData.map((item, index) => (
                <div className="col-md-3">
                  <div className="numbers_item">
                    <img src={item.icon} className="numbers_item_img" alt="" />
                    <h3 className="numbers_item_title">{item.title}</h3>
                    <p className="numbers_item_desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default OutSourcing;
