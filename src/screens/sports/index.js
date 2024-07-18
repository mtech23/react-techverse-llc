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
import sportsimg111 from '../../asserts/images/sports-img-111.png'
import sportsimg3 from '../../asserts/images/sports-img-3.png'
import sportsportfolio1 from '../../asserts/images/sports-portfolio-1.png'
import sportsportfolio2 from '../../asserts/images/sports-portfolio-2.png'
import sportsportfolio3 from '../../asserts/images/sports-portfolio-3.png'
import sportsportfolio4 from '../../asserts/images/sports-portfolio-4.png'
import sportsportfolio5 from '../../asserts/images/sports-portfolio-5.png'

import Macbook from '../../asserts/images/Macbook.png'
import mediaimg1 from '../../asserts/images/media-img-1.gif'
import mediaimg2 from '../../asserts/images/media-img-2.png'
import Testimonials from '../../Components/Testimonials';

import mediaimg3 from '../../asserts/images/media-img-3.png'
import sportsimg2 from '../../asserts/images/sports-img-2.png'
import { Helmet } from 'react-helmet'
gsap.registerPlugin(MotionPathPlugin);

const Sports = () => {


    Aos.init();


    // useEffect(() => {
    //     gsap.set(".road", { opacity: 1 });
    //     const circles = gsap.utils.toArray(".ani_cnt .icc");
    //     const tl2 = gsap.timeline({ repeat: 20 });

    //     circles.forEach((circle, i) => {
    //         let start = i / circles.length; // secret sauce for circles
    //         tl2.to(
    //             circle,
    //             {
    //                 motionPath: {
    //                     path: ".mypath",
    //                     align: ".mypath",
    //                     alignOrigin: [0.5, 0.4],
    //                     start: start,
    //                     end: start + 1,
    //                 },
    //                 ease: "none",
    //                 duration: 40,
    //             },
    //             0
    //         );
    //     });
    // }, []);


    return (
        <UserLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sports Teams & Leagues Scorecards with Techverse LLC Apps </title>
                <meta name="Professional sports teams management apps with proper records and each player database. Techverse LLC offers sports teams & leagues apps. " />
            </Helmet>



            <HeroSection
                classheroimage={"sports_bg_custom"}
                title={" Techverse "}
                subtitle={" Sports "}
                title2={"Apps Game-Changing Solutions For Teams & Organizations"}
                tagline={"Customized mobile app solutions for sports clubs and organizations are offered by Techverse LLC. Our cutting-edge tools boost productivity, expedite administrative duties, and promote team communication. Our solutions are designed to meet the unique requirements of coaches, players, and staff, with features ranging from user-friendly interfaces to powerful tools like scheduling and performance statistics. Increase the potential of your sports team and reach new heights of achievement both on and off the field by collaborating with Techverse."}
                className={"ecommerceDev_hero_img"}

                CtnbuttonComponent={Ctnbutton}
                ctnButtonProps={{
                    phoneicon: phoneicon,
                    calltext: "Call Us",
                    primaryButtonClass: "btn_with_icon",
                    playstore: playstore,
                    appstore: appstore
                }}


            // secondaryButtonClass="btn_with_icon btn_secondary"
            />
            {/* <!-- Trusted Partners --> */}

            <TrustedPartners />


            {/* <!-- About Sec --> */}


            <Portfolio
                newClass="health-care-abt1"
                pinkcapsol={pinkcapsol}
                classtitle={" color-darkBlue   "}
                // newClass={"media-abt1"}
                greencube={greencube}
                donatorange={donatorange}

                title="From Huddle To High-Five Techverse Apps" subtitle="   Connect Teams  "
                title2="For Victory"
                para="Our apps improve communication both on and off the field, promote team cohesion, and expedite game planning. Techverse ensures teams stay coordinated and focused on reaching their goals with features meant for coaches and athletes alike, such as real-time updates and performance tracking. With Techverse, your team may achieve unmatched athletic success.
"

                image={sportsimg111}
                eduHR={"sports-img-1"}
                chaticon={chaticon}
                phoneicon={phoneicon}
                playstore={playstore}
                appstore={appstore}

            />








            {/* <!-- App Development Sec --> */}
            <App_development_solutions
                title="Techverse Delivers Secure And Efficient"
                subtitle=" Sports "
                title2="Management Apps"
                para="We excel in creating applications that boost team workflows, improve player outcomes, and ensure regulatory compliance within the sports industry. Partner with us to develop advanced mobile apps designed to your team’s unique needs."
                para1="Gain insights into team performance and strategic metrics to optimize game strategies and decision-making for sports teams and leagues."
                para2="Create user-friendly interfaces that boost engagement and ease navigation, ensuring seamless experiences for athletes and staff with sports apps."
                para3="Develop robust and designed applications for sports teams and leagues, integrating essential features for efficient management and performance.
      "
                para4="Implement rigorous testing protocols to ensure reliability, security, and performance across sports apps, guaranteeing seamless functionality and user satisfaction."


            />

            {/* <!-- Real Estate App Dev --> */}
            <Development_Process
                sportsclass={"sports-img-2"}
                image={sportsimg2}
                title=" Techverse Leads The Way In "
                title2=" Technology "
                subtitle="Sports"
                para="Our approach to app development in the sports sector focuses on creating scalable, secure applications designed to meet the needs of teams and sports professionals. We integrate modern technology into our solutions to boost operational efficiency and service delivery.

"
                para1="We conduct thorough analyses to align sports app development with organizational goals and player needs, ensuring effective solutions from inception to deployment."
                para2="Our team designs intuitive interfaces and develops robust sports solutions, leveraging advanced technologies to boost player engagement and operational efficiency."

                para3="We perform comprehensive testing to ensure that our sports apps meet the highest standards for security, performance, and regulatory compliance and provide reliable and safe user experiences."
                para4="We oversee smooth deployment and provide ongoing maintenance to ensure sports apps remain secure, efficient, and adaptable to evolving needs."
                //   title2="   Mobile App Development Process"
                quality="Seamless Deployment and Maintenance"

            />






            <Portfolios
                title="SPORTS TEAM MANAGEMENT"
                subtitle=" Portfolio"
                para="Our Sports Team Management portfolio highlights innovative mobile apps and responsive websites that improve team management, player engagement, and operational efficiency worldwide."
                image1={sportsportfolio1}
                image2={sportsportfolio2}
                image3={sportsportfolio3}
                image4={sportsportfolio4}
                image5={sportsportfolio5}
                image6={mobileframe}
                image7={carbuying}
                image8={jeffwilson}
                image9={lllreptile}
                image10={privateastrology}
                image11={Macbook}
                classmobileapp="nav-link"
                classwebsite="nav-link"
                Mobile_Apps="Mobile Apps"
                Websites="Websites"
            />


            {/* <!-- Mobile App Dev --> */}


            <Driving_Exprience titleclass2="color-darkBlue"
                titleclass="color-darkBlue"
                title="Why Choose Our  "
                subtitle="    Media & Entertainment  "
                title2=" App Development Service  "
                para="When you choose Blitz Mobile Apps for your media and entertainment mobile app development needs, you can expect:"
                image={sportsimg3}
                hrimg={"sports-img-3"}

h1="Customized Solutions"
                h2="Improved Efficiency"
                h3="Interfaces that are easy to use"
                h4="Advanced Analytics"
                h5="Secure Data Handling"
                h6="Expertise in the Sports Industry"
                h7="Scalable Solutions"
                h8="Proven Track Record"
                


                />
            















            {/* <!-- Technologies --> */}
            <TechnologiesUse />
            <Testimonials />



            {/* FAQ section */}

            <Frequentlyaskquestion />

























        </UserLayout>
    )
}

export default Sports
