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
import App_development_solutions from '../../Components/App_development_solutions';
import Development_Process from '../../Components/Development_Process';
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
import Driving_Exprience from '../../Components/Driving_experience';
import Portfolios from '../../Components/portfolios';
import reicon1 from '../../asserts/images/re-icon1.png'
import reicon2 from '../../asserts/images/re-icon2.png'
import reicon3 from '../../asserts/images/re-icon3.png'
import reicon4 from '../../asserts/images/re-icon4.png'
import reicon5 from '../../asserts/images/re-icon5.png'
import reicon6 from '../../asserts/images/re-icon6.png'
import reicon7 from '../../asserts/images/re-icon7.png'
import reicon8 from '../../asserts/images/re-icon8.png'
import automotivescreen1 from '../../asserts/images/automotive-screen1.png'
import automotivescreen2 from '../../asserts/images/automotive-screen2.png'
import automotivescreen3 from '../../asserts/images/automotive-screen3.png'
import automotivescreen4 from '../../asserts/images/automotive-screen4.png'
import automotivescreen5 from '../../asserts/images/automotive-screen5.png'
import mobileframe from '../../asserts/images/mobile-frame.webp'
import carbuying from '../../asserts/images/car-buying.png'
import jeffwilson from '../../asserts/images/jeff-wilson.png'
import lllreptile from '../../asserts/images/lll-reptile.png'
import privateastrology from '../../asserts/images/private-astrology.png'
import Macbook from '../../asserts/images/Macbook.png'
import mediaimg1 from '../../asserts/images/media-img-1.gif'
import mediaimg2 from '../../asserts/images/media-img-2.png'
import Testimonials from '../../Components/Tetimonials';

gsap.registerPlugin(MotionPathPlugin);

const Media = () => {


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

                classheroimage="inner-bgColor"
                title={"And"}
                subtitle={"Entertainment"}
                subtitle2={"Media"}
                title2={"App Development Solutions"}
                tagline={"Techverse provides unparalleled mobile app Development services, transforming how people interact with media and entertainment."}
                className={"mobileApp_hero_img"}
            // heroimage={Mobileapphero}

            />
            {/* <!-- Trusted Partners --> */}

            <TrustedPartners />


            {/* <!-- About Sec --> */}


            <Portfolio pinkcapsol={pinkcapsol}
            // newClass={"media-abt1"}
                greencube={greencube}
                donatorange={donatorange}

                title="Perfectly Curated Mobile Applications For The" subtitle=" Entertainment Industry "
                para="We offer cutting-edge mobile app development solutions to transform the media and entertainment industry. 
                Our team of experts creates unique, high-performance mobile apps that provide a seamless user experience to your audience."

                image={mediaimg1}
                chaticon={chaticon}
                phoneicon={phoneicon}
                playstore={playstore}
                appstore={appstore}

            />








            {/* <!-- App Development Sec --> */}
            <App_development_solutions />

            {/* <!-- Real Estate App Dev --> */}
            <Development_Process
                image={mediaimg2}
                title="App Development For The "
                subtitle="Entertainment Industry"
                para="We follow a streamlined approach to ensure customer satisfaction by delivering customized real estate mobile app development solutions.

"
            //   title2="   Mobile App Development Process"

            />






            <Portfolios
                title="AUTOMOTIVE "
                subtitle=" Portfolio"
                para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"
                image1={automotivescreen1}
                image2={automotivescreen2}
                image3={automotivescreen3}
                image4={automotivescreen4}
                image5={automotivescreen5}
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
            />



















            {/* <!-- Mobile App Dev --> */}

            <Driving_Exprience
                // classheroimage="drivingSec"

                title="
            ENHANCING YOUR"
                subtitle="DRIVING EXPERIENCE"
                title2="LIKE NEVER BEFORE"
                image={drivingsecsecreen}
            />














            {/* <!-- Technologies --> */}
            <TechnologiesUse />
            <Testimonials />



            {/* FAQ section */}

            <Frequentlyaskquestion />

























        </UserLayout>
    )
}

export default Media