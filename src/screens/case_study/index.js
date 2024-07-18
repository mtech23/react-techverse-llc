import React, { useEffect, useRef, useState } from "react";

import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { gsap } from "gsap";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import sportsimg3 from "../../asserts/images/sports-img-3.webp";

import donatblue from "../../asserts/images/donat-blue.png";
import donatorange from "../../asserts/images/donat-orange.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import greencube from "../../asserts/images/green-cube.png";
import Aos from "aos";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";
import Process from "../../Components/Process";

import aboutimg1 from "../../asserts/images/about-img1.png";
import aboutimg2 from "../../asserts/images/about-img2.png";
import playstore from "../../asserts/images/playstore.png";
import appStore from "../../asserts/images/app-store.png";
import phoneiconblue from "../../asserts/images/phone-icon-blue.png";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import Testimonials from "../../Components/Testimonials";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Website from "../../Components/Website";
import Aboutsection from "../../Components/aboutsection";
import TrustedPartners from "../../Components/TrustedPartners";
import { Header } from "../../Components/Layout/Header";
import Contact_Footer from "../../Components/contact_Footer";
gsap.registerPlugin(MotionPathPlugin);

const Case_study = () => {
  Aos.init();
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll(".case-study-hero");

    sections.forEach((section) => {
      const container = section.querySelector(".icon-container-hover");

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = (mouseX - centerX) * 0.1;
        const distY = (mouseY - centerY) * 0.1;

        gsap.to(container, {
          x: distX,
          y: distY,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          x: 0,
          y: 0,
          ease: "power1.out",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set showModal to true when component mounts
    setShowModal(true);
  }, []); // Empty dependency array means this effect runs only once, like componentDidMount

  // useEffect(() => {
  //   gsap.set(".road", { opacity: 1 });
  //   const circles = gsap.utils.toArray(".ani_cnt .icc");
  //   const tl2 = gsap.timeline({ repeat: 20 });

  //   circles.forEach((circle, i) => {
  //     let start = i / circles.length; // secret sauce for circles
  //     tl2.to(
  //       circle,
  //       {
  //         motionPath: {
  //           path: ".mypath",
  //           align: ".mypath",
  //           alignOrigin: [0.5, 0.4],
  //           start: start,
  //           end: start + 1,
  //         },
  //         ease: "none",
  //         duration: 40,
  //       },
  //       0
  //     );
  //   });
  // }, []);























  const [ipInfo, setIpInfo] = useState({ ip: "", country: "" });

  console.log("ipInfo", ipInfo);

  useEffect(() => {
    function getCountryByIP() {
      fetch("https://ipinfo.io?token=ab03b394f4fb7c")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setIpInfo({ ip: data.ip, country: data.country });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    getCountryByIP();
  }, []);

  const [budget, setBudget] = useState(0);

 

 
  const notify = () => toast.success("Thank You");
  const [formdata, setFormData] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name == "budget") {
      setBudget(value);
    }
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const url = process.env.REACT_APP_BASE_URL;
  console.log("url", url);

  const handlesubmit = async (event) => {
    event.preventDefault();
    const formDataMethod = new FormData();
    for (const key in formdata) {
      formDataMethod.append(key, formdata[key]);
    }

    formDataMethod.append("ip", ipInfo?.ip);
    formDataMethod.append("website_url", "https://techversellc.com/");
    formDataMethod.append("country", ipInfo?.country);
 

    try {
      const contact_api = await fetch(url, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
        },
        // No need to set headers for FormData
        body: formDataMethod,
      });
      // notify();
      if (!contact_api.ok) {
        // throw new Error('Network response was not ok ' + contact_api.statusText);
        notify();
      }

      const response = await contact_api.json();
      if (response?.status == true) {
        notify()
      }
      // console.log("Success:", response);
      // Handle successful response
      // return response;
    } catch (error) {
      // notify();
      console.error("Error in adding:", error);
      // Handle error response
      // throw error;
    }
  }







  return (
    <>
      <Header />

      <div ref={sectionRef}>
        <section class="inner_hero case-study-hero hoverEffectSec">
          <div class="inner-bgColor"></div>
          <div class="width-1600">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="inner_hero_content centered-text">
                    <h1
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue1">Case Studies</span>
                    </h1>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      We pride ourselves on delivering innovative solutions that
                      drive business growth and enhance digital presence. Our
                      case studies exemplify our commitment to excellence and
                      showcase how we have helped businesses across various
                      industries achieve their goals through personalized
                      technological solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns justify-content-center"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon">
                        <img class="btn_with_icon_img" src={phoneicon} alt="" />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img class="btn_with_icon_img" src={chaticon} alt="" />
                        <span class="btn_with_icon_text">Chat Now</span>
                      </a>
                    </div>
                    <div class="icon-container-hover">
                      <img
                        class="center_donatOrange animation11"
                        src={donatorange}
                        alt=""
                      />
                      <img
                        class="center_donatBlue animation11"
                        src={donatblue}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* <!--<div class="col-md-6 inner-hero_rightCol">-->
                  <!--  <div class="inner_hero_img">-->
                    <!--    <img-->
                      <!--        src="images/Ecommerce-development-hero.png"-->
                      <!--        data-aos="fade-left"-->
                      <!--        data-aos-offset="0"-->
                      <!--        data-aos-duration="3000"-->
                      <!--        class="ecommerceDev_hero_img"-->
                      <!--        alt=""-->
                      <!--      />-->
                      <!--  </div>-->
                  <!--</div>--> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Case Study Sec 1 --> */}
      <section class="sec1 case-study-sec case-study-sec1">
        {/* <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <div className="d-flex gx-2  my-3 g-2">
                      <img src={playstore} className="rounded" />
                      <img className="ml-4 rounded" src={appStore} />
                    </div>

                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      ANGEL BODY - ECOMMERCE APP
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Techverse LLC partnered with a leading clothing retailer
                      aiming to enhance its digital presence and customer
                      engagement through a bespoke e-commerce app.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}
                      <button 
                        class="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img class="btn_with_icon_img" src="images/phone-icon-blue.png" alt=""> --> */}
                        <span class="btn_with_icon_text">Request A Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--<div class="col-md-6">-->
                <!--    <div class="casestudy-img">-->
                  <!--        <img src="images/case-study-img111.png" class="case-study-img1" />-->
                  <!--    </div>-->
                <!--</div>--> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 2 --> */}
      {/* style="background-image: url(images/case-study-sec222-bg.png);" */}
      <section class="sec2 case-study-sec case-study-sec2">
        {/*     <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Brian Carlisle - Book Author App
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Techverse LLC partnered with a leading clothing retailer
                      aiming to enhance its digital presence and customer
                      engagement through a bespoke e-commerce app.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}

                      <button
                        class="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img class="btn_with_icon_img" src="images/phone-icon-blue.png" alt=""> --> */}
                        <span class="btn_with_icon_text">Request A Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--<div class="col-md-6">-->
                <!--    <div class="casestudy-img">-->
                  <!--        <img src="images/case-study-img222.png" class="case-study-img2" />-->
                  <!--    </div>-->
                <!--</div>--> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 3 --> */}

      {/*  style="background-image: url(images/case-study-sec3-bg.png);" */}
      <section class="sec3 case-study-sec case-study-sec3">
        {/*     <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Ryderz Van - E-Commerce App
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Techverse LLC partnered with a leading clothing retailer
                      aiming to enhance its digital presence and customer
                      engagement through a bespoke e-commerce app.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}
                      <button
                        class="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img class="btn_with_icon_img" src="images/phone-icon-blue.png" alt=""> --> */}
                        <span class="btn_with_icon_text">Request A Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 4 --> */}
      {/* style="background-image: url(images/case-study-sec4-bg.png);" */}
      <section class="sec4 case-study-sec case-study-sec4">
        {/* <!--<div class="case-study-bg-img">--> */}
        {/* <!--    <img src="images/case-study-sec1-bg.png" alt=""/>--> */}
        {/* <!--</div>-->  */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Irving Segal - E-Book App
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Techverse LLC partnered with a leading clothing retailer
                      aiming to enhance its digital presence and customer
                      engagement through a bespoke e-commerce app.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}
                      <button
                        class="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img class="btn_with_icon_img" src="images/phone-icon-blue.png" alt=""> --> */}
                        <span class="btn_with_icon_text">Request A Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 5 --> */}
      {/* style={"background-image: url(images/case-study-sec5-bg.png);"} */}
      <section class="sec5 case-study-sec case-study-sec5">
        {/* <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      ANGEL BODY - ECOMMERCE APP
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}

                      <button
                        class="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img class="btn_with_icon_img" src="images/phone-icon-blue.png" alt=""> --> */}
                        <span class="btn_with_icon_text">Request A Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 6 --> */}
      <section class="sec5 case-study-sec case-study-sec6">
        {/* <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      ANGEL BODY - ECOMMERCE APP
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}

                      <button
                        class="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img class="btn_with_icon_img" src="images/phone-icon-blue.png" alt=""> --> */}
                        <span class="btn_with_icon_text">Request A Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={`modal fade bd-example-modal-lg ${modalOpen ? 'show' : ''}`} id="popup_modal_id" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden={!modalOpen}> */}
        {/* // <div  style={{ display: 'block' }} className="modal fade bd-example-modal-lg " id="popup_modal_id" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"  > 
        // <div className="modal show" tabIndex="-1" style={{ display: 'block' }}   id="popup_modal_id"> */}

        <div
          class="modal fade bd-example-modal-lg popup_modal"
          id="popup_modal_id"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="false"
        >
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              {/* <!-- <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> --> */}
              <div class="modal-body">
                <button
                  type="button"
                  class="close popup_modal-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <div class="popUp_img">
                        <img src={sportsimg3} alt="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="popUp_content">
                        <div class="popUp_title">
                          <h2 class="popUp_title_head color-white">
                            Sign Up Now To Get A Free Quote! Upto 50% Off For
                            Limited Time
                            {/* <!-- <span class="color-lightBlue2">Choose</span> Us? --> */}
                          </h2>
                        </div>
                        <div class="popUp_form">
                          <form onSubmit={handlesubmit}>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroup-sizing-default"
                                >
                                  <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                class="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={handlechange}
                              />
                            </div>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroup-sizing-default"
                                >
                                  <i
                                    class="fa fa-envelope"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Email Here"
                                onChange={handlechange}
                                name="email"
                              />
                            </div>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroup-sizing-default"
                                >
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                </span>
                              </div>
                              <input
                              name="phone"
                                type="text"
                                onChange={handlechange}
                                class="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i
                                    class="fa fa-comment"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <textarea
                               onChange={handlechange}
                               name="message"
                                class="form-control"
                                aria-label="With textarea"
                                placeholder="Message"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              class="btn_with_icon popUp_form_btn"
                            >
                              {/* <!-- <img class="btn_with_icon_img" src="images/phone-icon.png" alt=""> --> */}
                              <span class="btn_with_icon_text">
                                Request A Quote
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      <Contact_Footer />
    </>
  );
};
export default Case_study;
