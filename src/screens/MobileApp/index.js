import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import Aboutsection from '../../Components/aboutsection';
import { Swiper, SwiperSlide } from 'swiper/react';
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

gsap.registerPlugin(MotionPathPlugin);

const MobileApp = () => {


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
                title={"Top Mobile App"}
                subtitle={"Development"}
                title2={"Services for Online Businesses"}
                tagline={"Improve your brand awareness and maximize ROI through a responsive mobile application"}
                className={"service-hero-bg"}
                heroimage={serviceherobg}

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
                title="RAPID APPLICATION DEVELOPMENT USING" subtitle="  CUTTING-EDGE" title2="TECHNOLOGIES  "
                para="Techverse offers top-notch mobile app solutions that improve the performance of businesses by increasing revenues and amplifying the online presence of the brand. We create applications for businesses of all sizes and provide them with an exceptional custom app design experience that builds for them a loyal customer base and has a competitive advantage.

We help businesses delight their users with impressive native iOS/Android, Cross-Platform, and web application development, leveraging our extensive expertise in working with major app technologies."



                image={rapidappimg}
              
            />






            <Portfolio pinkcapsol={pinkcapsol}
                greencube={greencube}
                donatorange={donatorange}

                title="HIGH-END MOBILE APP SOLUTIONS FOR" subtitle="  BUSINESSES"
                para=" For startups to enterprise-level businesses, we offer a full cycle of app development, design, integration, and management services. From ideation to the delivery of the final application to the ongoing support, our company leads the whole process.

We help businesses delight their users with impressive native iOS/Android, Cross-Platform, and web application development, leveraging our extensive expertise in working with major app technologies."

                image={highendimg}
                chaticon={chaticon}
                phoneicon={phoneicon}

            />






















        </UserLayout>
    )
}

export default MobileApp
