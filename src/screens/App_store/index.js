import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import Aboutsection from '../../Components/aboutsection';
import { Swiper, SwiperSlide } from 'swiper/react';
 
import appimg01 from '../../asserts/images/app-img-01.png'
import appstorehero from '../../asserts/images/app-store-hero-img.png'
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Aos from "aos";
import 'swiper/css';
import Ctnbutton from '../../Components/ctnbutton/index'
import HeroSection from '../../Components/herosection';
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
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
import Process from '../../Components/Process';
import TechnologiesUse from '../../Components/technologiesuse';
import Website from '../../Components/Website';
import Testimonials from '../../Components/Tetimonials';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';

gsap.registerPlugin(MotionPathPlugin);

const App_store = () => {


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
                title={"Full-Fledged"}
                subtitle={" App Store"}
                title2={"Optimization Services"}
                tagline={"Take the charge and unleash your business's true potential with powerful mobile app & web application development solutions."}
                className={"service-hero-bg"}
                heroimage={appstorehero}

            />
            {/* <!-- Trusted Partners --> */}
            <section class="techVerse_trustedPartners techVerse_trustedPartnersServices">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md-12">
                            <div
                                class="row flex-nowrap gap-4 custom_trusted_partners_seprator"

                            >
                                <marquee>
                                    <div class="trustedPartners">
                                        <div class="trustedPartner col">
                                            <img src={tpblue} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblack} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblue} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblack} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblue} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblack} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblue} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblack} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
                                            <img src={tpblue} alt="" />
                                        </div>
                                        <div class="trustedPartner col">
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
                chaticon={chaticon}
                phoneicon={phoneicon}
                calltext={"Call Now"}
                chatenow={"Chat Now"}
                title="Comprehensive " subtitle="  App Store" title2="TECHNOLOGIES  "
                para="Techverse is the leading provider of app store optimization services. Our team of experts uses various techniques to optimize your app, including keyword research, title optimization, and description optimization."



                image={appimg01}

            />
 <Website/>
            <Process/>
            <TechnologiesUse/>
            
            <Elevateyourbusiness/>
            <Testimonials/>
        <Frequentlyaskquestion/>




        </UserLayout>
    )
}

export default App_store
