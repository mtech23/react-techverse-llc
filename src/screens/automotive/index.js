import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import Aboutsection from '../../Components/aboutsection';
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Aos from "aos";
import 'swiper/css';
import Ctnbutton from '../../Components/ctnbutton/index'
import HeroSection from '../../Components/herosection';
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
import TechnologiesUse from '../../Components/technologiesuse';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Process from '../../Components/Process';
import TrustedPartners from '../../Components/TrustedPartners'
import serviceherobg from '../../asserts/images/service-hero-bg.png'
import tpblue from "../../asserts/images/t-p-blue.png";
import Portfolio from '../../Components/Portfolio'
import tpblack from "../../asserts/images/t-p-black.png";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import rapidappimg from "../../asserts/images/rapidapp-img.png";
import highendimg from "../../asserts/images/high-end-img.png";
import Mobileapphero from "../../asserts/images/Mobile-app-hero.png";
import donateWhite from "../../asserts/images/donate-white.png";
import peramidicon from "../../asserts/images/peramid-icon.png";
import phoneicongreen from "../../asserts/images/phone-icon-green.png";
import chaticonblue from '../../asserts/images/chat-icon-blue.png'
import automotiveabt2screens from '../../asserts/images/automotive-abt-2screens.png'
import playstore from '../../asserts/images/play-store.png'
import appstore from '../../asserts/images/app-store.png'
import analysisresporticon from '../../asserts/images/analysis-resport-icon.png'
import uiixicon from '../../asserts/images/ui-ix-icon.png'
import appdevicon from '../../asserts/images/app-dev-icon.png'
import testingandqaicon from '../../asserts/images/testing-and-qa-icon.png'
import businessanalysisicon from '../../asserts/images/business-analysis-icon.png'
import designanddevicon from '../../asserts/images/design-and-dev-icon.png'
import qualityicon from '../../asserts/images/quality-icon.png'
import devandmaintenenceicon from '../../asserts/images/dev-and-maintenence-icon.png'
import automotivedesktop from '../../asserts/images/automotive-desktop.png'
import drivingsecsecreen from '../../asserts/images/driving-sec-secreen.png'
import reicon1 from '../../asserts/images/re-icon1.png'
import reicon2 from '../../asserts/images/re-icon2.png'
import reicon3 from '../../asserts/images/re-icon3.png'
import reicon4 from '../../asserts/images/re-icon4.png'
import reicon5 from '../../asserts/images/re-icon5.png'
import reicon6 from '../../asserts/images/re-icon6.png'
import reicon7 from '../../asserts/images/re-icon7.png'
import reicon8 from '../../asserts/images/re-icon8.png'
import Driving_Exprience from '../../Components/Driving_experience';

gsap.registerPlugin(MotionPathPlugin);

const Automotive = () => {


    Aos.init();


    useEffect(() => {
        gsap.set(".road", { opacity: 1 });
        const circles = gsap.utils.toArray(".ani_cnt .icc");
        const tl2 = gsap.timeline({ repeat: 20 });

        circles.forEach((circle, i) => {
            let start = i / circles.length; // secret sauce for circles
            tl2.to(
                circle,
                {
                    motionPath: {
                        path: ".mypath",
                        align: ".mypath",
                        alignOrigin: [0.5, 0.4],
                        start: start,
                        end: start + 1,
                    },
                    ease: "none",
                    duration: 40,
                },
                0
            );
        });
    }, []);


    return (
        <UserLayout>

            <HeroSection
                classheroimage="inner-automotive-bgColor "
                title={"Upgrade The Riding Experience With Techverse"}
                subtitle={"Automotive Apps"}
                title2={"Services for Online Businesses"}
                tagline={"Accelerate with our leading-edge app solutions and stay ahead of the curve."}
                className={"mobileApp_hero_img"}
            // heroimage={Mobileapphero}

            />
            {/* <!-- Trusted Partners --> */}

            <TrustedPartners />


            {/* <!-- About Sec --> */}


            <Portfolio pinkcapsol={pinkcapsol}
                greencube={greencube}
                donatorange={donatorange}

                title="How Techverse Mobile Apps Is Transforming The" subtitle=" Automotive " title2="Industry"
                para="Techverse, founded in 2014, is an automotive app development company, a leading provider of innovative
                 automotive mobile app development solutions. Our mission is to empower the industry with the tools to enhance the driving experience and keep vehicles running smoothly"

                image={automotiveabt2screens}
                chaticon={chaticon}
                phoneicon={phoneicon}
                playstore={playstore}
                appstore={appstore}

            />







            {/* <!-- App Development Sec --> */}
            <section class="app_devSec services-abbout1">
                <div class="container">
                    <div class="row">
                        <div class="sec_title">
                            <h2 class="sec_title_head color-darkBlue" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">Transform Your Real Estate Business with a Wide Spectrum Of
                                <span class="color-darkBlue1">App Development</span> Solutions
                            </h2>
                            <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="2000">
                                We offer comprehensive real estate mobile app development solutions tailored to your business requirements.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="app_devBoxes" data-aos="fade-up" data-aos-offset="0" data-aos-duration="3000">
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon">
                            <img src={analysisresporticon} alt="" />
                        </div>
                        <h4>Analytics & Reporting</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon">
                            <img src={uiixicon} alt="" />
                        </div>
                        <h4>UI/UX Design</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon">
                            <img src={appdevicon} alt="" />
                        </div>
                        <h4>App Development</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon">
                            <img src={testingandqaicon} alt="" />
                        </div>
                        <h4>Testing & QA</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                </div>
            </section>



            {/* <!-- Real Estate App Dev --> */}
            <section class="techVerse_about techVerse_aboutServices2">
                <img class="techVerse_about_icon1 animation11" src="images/pink-capsol.png" alt="" />
                {/* <!-- <img
                    class="techVerse_about_icon2 animation33"
                    src="images/Pill.png"
                    alt=""
                    /> --> */}
                <img class="techVerse_about_icon3 animation11" src="images/green-cube.png" alt="" />
                <img class="techVerse_about_icon4 animation11" src="images/donat-orange.png" alt="" />
                <div class="techVerse_aboutContent techVerse_aboutContentServices2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="techVerse_about_img">
                                    <div class="techVerse_about_laptop_img realEstate-gif">
                                        <img src={automotivedesktop}
                                            class="about-laptopImg" data-aos="fade-right" data-aos-offset="0" data-aos-duration="1000" />
                                    </div>
                                    <div class="techVerse_hero_btns re_appDev_btns" data-aos="fade-up" data-aos-offset="0" data-aos-duration="3000">
                                        <a href="#" class="btn_with_icon">
                                            <img class="btn_with_icon_img"
                                                src={phoneicon} alt="" />
                                            <span class="btn_with_icon_text">Call Now</span>
                                        </a>
                                        <a href="#" class="btn_with_icon btn_secondary">
                                            <img class="btn_with_icon_img"
                                                src={chaticon} alt="" />
                                            <span class="btn_with_icon_text">Chat Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="techVerse_about_content services-abbout2">
                                    <div class="sec_title realEstate-appSec_title">
                                        <h2 class="sec_title_head color-darkBlue" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">Our
                                            <span class="color-lightBlue2">Real Estate</span> Mobile App Development Process
                                        </h2>
                                        <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="2000">
                                            We follow a streamlined approach to ensure customer satisfaction by delivering customized real estate mobile app development solutions.
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
                                            <div class="reApp_box_icon">
                                                <img src={businessanalysisicon} alt="" />
                                            </div>
                                            <h4>Business Analysis</h4>
                                            <p>We thoroughly analyze your business requirements, target audience, and competition to develop a comprehensive plan.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
                                            <div class="reApp_box_icon">
                                                <img src={designanddevicon} alt="" />
                                            </div>
                                            <h4>Design & Development</h4>
                                            <p>Our designers and developers work collaboratively to create a visually stunning and user-friendly mobile app.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up" data-aos-offset="0" data-aos-duration="2000">
                                            <div class="reApp_box_icon">
                                                <img src={qualityicon} alt="" />
                                            </div>
                                            <h4>Quality Assurance</h4>
                                            <p>We conduct rigorous testing and quality assurance to ensure your mobile app works flawlessly.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="reApp_box" data-aos="fade-up" data-aos-offset="0" data-aos-duration="2000">
                                            <div class="reApp_box_icon">
                                                <img src={devandmaintenenceicon} alt="" />
                                            </div>
                                            <h4>Deployment and Maintenance</h4>
                                            <p>We deploy your application and provide ongoing maintenance and support.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/*                     
      <Portfolios
        title="REAL ESTATE "
        subtitle="Portfolio   "
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"
        image1={realEstateportfolioimg1}
        image2={realEstateportfolioimg2}
        image3={realEstateportfolioimg3}
        image4={realEstateportfolioimg4}
        image5={realEstateportfolioimg5}
        image6={mobileframe}
        image7={carbuying}
        image8={jeffwilson}
        image9={lllreptile}
        image10={privateastrology}
        image11={Macbook}
        classmobileapp="nav-link"
        classwebsite="nav-link"
        classcms="nav-link"
        CMS="CMS"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      /> */}



















            {/* <!-- Mobile App Dev --> */}

            <Driving_Exprience
                classheroimage="drivingSec"
                title="
ENHANCING YOUR"
                subtitle="DRIVING EXPERIENCE"
                title2="LIKE NEVER BEFORE"
                image={drivingsecsecreen}
            />














            {/* <!-- Technologies --> */}
            <TechnologiesUse />




            {/* FAQ section */}

            <Frequentlyaskquestion />

























        </UserLayout>
    )
}

export default Automotive
