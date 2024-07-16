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
import travelimg1airplane from '../../asserts/images/travel-img-1-airplane.png'

import Macbook from '../../asserts/images/Macbook.png'
import mediaimg1 from '../../asserts/images/media-img-1.gif'
import mediaimg2 from '../../asserts/images/media-img-2.png'
import Testimonials from '../../Components/Testimonials';

import mediaimg3 from '../../asserts/images/media-img-3.png'
import sportsimg2 from '../../asserts/images/sports-img-2.png'
import travelimg2 from '../../asserts/images/travel-img-2.png'
import travelimg1 from '../../asserts/images/travel-img-1.gif'
import travelimg3 from '../../asserts/images/travel-img-3.png'
import travelportfolio1 from '../../asserts/images/travel-portfolio-1.png'
import travelportfolio2 from '../../asserts/images/travel-portfolio-2.png'
import travelportfolio3 from '../../asserts/images/travel-portfolio-3.png'
import travelportfolio4 from '../../asserts/images/travel-portfolio-4.png'
import travelportfolio5 from '../../asserts/images/travel-portfolio-5.png'
 
gsap.registerPlugin(MotionPathPlugin);

const Travel = () => {


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
                classheroimage={"travel_bg_custom"}
                title={"From Click To Content Guest With Techverse Apps"}
                subtitle={"  Revolutionize Hospitality  "}
                // title2={"Media & Entertainment!"}
                tagline={"Techverse LLC's advanced mobile app solutions are revolutionizing the hospitality sector. With our cutting-edge apps, you can guarantee compliance, improve visitor experiences, and streamline operations. We provide customized solutions that improve service delivery and maximize operational efficiency, from user-friendly interfaces to solid security. Use Techverse to transform your hospitality offerings."}
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
                pinkcapsol={pinkcapsol}
                classtitle={" color-darkBlue   "}
                newClass={"travel-abt1"}
                greencube={greencube}
                donatorange={donatorange}

                title="From Guest Engagement To Operations, Techverse Develops" subtitle="     Hospitality "
                title2="Solutions" 
                para="Techverse LLC is an expert in creating mobile apps specifically for the lodging sector. Our products promote effective service delivery, optimize operations, and improve visitor engagement. We place a high priority on efficacy and adherence to industry standards to guarantee user-friendly interfaces and secure data handling. Join Techverse to take advantage of cutting-edge app development services that improve visitor pleasure and streamline your hotel operations. With Techverse, discover the hospitality of the future."
                travelimg={travelimg1airplane}
                image={travelimg1}
                chaticon={chaticon}
                phoneicon={phoneicon}
                playstore={playstore}
                appstore={appstore}
                laptopFrame={"travel-img-1-airplane"}

            />








         {/* <!-- App Development Sec --> */}
      <App_development_solutions 
      title="Techverse Offers Secure And Effective"
      subtitle="Hospitality"
      title2="Apps"
      para="Techverse LLC provides secure, efficient 
      hospitality apps that boost guest experiences and streamline operations. Our advanced solutions ensure compliance and optimize service delivery for the hospitality industry."
      para1="Gain valuable insights into guest behaviors and operational metrics to drive informed decisions and improve efficiency within your travel and hospitality business."
      para2="Create intuitive and visually appealing interfaces that boost user experience, ensuring easy navigation and increased engagement for both guests and staff."
      para3="From initial concept to final deployment, develop robust and secure travel and hospitality applications that streamline workflows and increase service delivery.
      "
      para4="Implement comprehensive testing protocols to ensure reliability, security, and compliance with industry standards, guaranteeing seamless functionality across all platforms."
      
      
      />

            {/* <!-- Real Estate App Dev --> */}
            <Development_Process
            travelbgclass={"travel-abt2"}
            sportsclass={"travel-img-2"}
                image={travelimg2}
                title="Techverse Builds Scalable Apps For "
                subtitle="Guests & Businesses"
                para="Techverse LLC develops scalable apps for the travel and hospitality industry, enhancing guest experiences and streamlining business operations. Our innovative solutions ensure efficiency, security, and compliance for optimal service delivery.



"
                para1="Conduct thorough analyses to align app development with your travel and hospitality goals, ensuring effective solutions from inception to deployment."
                para2="Create intuitive interfaces and robust applications using advanced technologies to boost guest experiences and operational efficiency."
                para3="Implement comprehensive testing to meet high standards of security, performance, and regulatory compliance, ensuring reliable and safe user experiences."
                para4="Manage seamless app deployment and provide ongoing maintenance to keep your travel and hospitality apps secure, efficient, and adaptable to evolving needs."

            quality="Quality Assurance"

            //   title2="   Mobile App Development Process"

            />






            <Portfolios
                title="TRAVEL & HOSPITALITY "
                subtitle=" PORTFOLIO"
                para="Our Travel & Hospitality portfolio showcases innovative mobile apps and responsive websites that boost guest experiences, operational efficiency, and service delivery worldwide."
                image1={travelportfolio1}
                image2={travelportfolio2}
                image3={travelportfolio3}
                image4={travelportfolio4}
                image5={travelportfolio5}
                image6={mobileframe}
                image7={carbuying}
                image8={jeffwilson}
                image9={lllreptile}
                image10={privateastrology}
                image11={Macbook}
                classmobileapp="nav-link"
                classwebsite="nav-link"
                // classcms="nav-link"
                // CMS="CMS"
                Mobile_Apps="Mobile Apps"
                Websites="Websites"
            />


            {/* <!-- Mobile App Dev --> */}


            <Driving_Exprience titleclass2="color-darkBlue"
                titleclass="color-darkBlue"
                title="Why Choose Our"
                subtitle="  TRAVEL & HOSPITALITY "
                title2=" App Development Services "
                para="With extensive experience in app development for the travel and hospitality sector, we help boost guest experiences and operational efficiency."
                image={travelimg3 } 
                hrimg={"travel-img-3"}
                />



            {/* <!-- Technologies --> */}
            <TechnologiesUse />
            <Testimonials />



            {/* FAQ section */}

            <Frequentlyaskquestion />



        </UserLayout>
    )
}

export default Travel
