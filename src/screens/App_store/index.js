import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import Aboutsection from '../../Components/aboutsection';
import { Swiper, SwiperSlide } from 'swiper/react';

import appimg01 from '../../asserts/images/app-img-01.png'
import appstorehero from '../../asserts/images/app-store-hero.png'
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
import TrustedPartners from '../../Components/TrustedPartners';

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
                title={"FInnovate Today"}
                subtitle={" With "}
                title2={"Techverse App Store"}
                tagline={"Whether you're an aspiring entrepreneur or a seasoned developer, our App Store is your gateway to reaching millions of users worldwide. With our robust platform, you can harness the power of cutting-edge technology and provide a seamless user experience. From app discovery to deployment, we provide supreme support and resources to raise your app's visibility and success"}
                className={"storeApp_hero_img"}
                heroimage={appstorehero}
                CtnbuttonComponent={Ctnbutton}
                ctnButtonProps={{
                    phoneicon: phoneicon,
                    calltext: "Call Us",
                    primaryButtonClass: "btn_with_icon",
                    chaticon: chaticon,
                    chatenow: "Chat Us",
                    secondaryButtonClass: "btn_with_icon btn_secondary  "

                    // playstore: playstore,
                    // appstore: appstore
                }}
            />
            {/* <!-- Trusted Partners --> */}



            <TrustedPartners />
            {/* <!-- About Sec --> */}




            <Aboutsection
                pinkcapsol={pinkcapsol}
                greencube={greencube}
                donatorange={donatorange}


                title="Boost Downloads" subtitle="And " title2="  Visibility Techverse LLC's App Optimization At Your Service. ."
                para="Get the full potential of your mobile app with Techverse LLC's Comprehensive App Store Optimization service. We specialize in enhancing your app's visibility and reach across major platforms, including the Apple App Store and Google Play Store. Our expert team leverages advanced strategies in keyword optimization, metadata refinement, competitor analysis, and user engagement tactics to ensure your app not only ranks higher but also attracts and retains a loyal user base. Whether you're launching a new app or looking to boost downloads for an existing one, trust Techverse LLC to optimize your app for success in today's competitive marketplace.

"

                CtnbuttonComponent={Ctnbutton}
                ctnButtonProps={{
                    phoneicon: phoneicon,
                    calltext: "Call Us",
                    primaryButtonClass: "btn_with_icon",
                    chaticon: chaticon,
                    chatenow: "Chat Us",
                    secondaryButtonClass: "btn_with_icon btn_secondary  "

                    // playstore: playstore,
                    // appstore: appstore
                }}
                image={appimg01}
            />










            <Website />
            <Process />
            <TechnologiesUse />

            <Elevateyourbusiness />
            <Testimonials />
            <Frequentlyaskquestion />




        </UserLayout>
    )
}

export default App_store
