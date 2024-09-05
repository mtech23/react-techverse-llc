import React, { useEffect, useRef, useState } from "react";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { gsap } from "gsap";
import sportsimg3 from "../../asserts/images/sports-img-3.webp";

import donatblue from "../../asserts/images/donat-blue.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";

import Helmet from "../../Components/Helmet";

import playstore from "../../asserts/images/playstore.webp";
import appStore from "../../asserts/images/app-store.webp";
import phoneiconblue from "../../asserts/images/phone-icon-blue.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";

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
        notify();
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
  };

  return (
    <>
      <Header />

      <Helmet
        title="contact Us For Any Information and Queries | Techverse LLC"
        description="Discover how Techverse LLC, the top app developers in CA, create innovative solutions. Explore our case studies and see our success stories today!"
        keywords="Case Study"
      />

      <div ref={sectionRef}>
        <section className="inner_hero case-study-hero hoverEffectSec">
          <div className="inner-bgColor"></div>
          <div className="width-1600">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="inner_hero_content centered-text">
                    <h1
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <span className="color-lightBlue1">Case Studies</span>
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
                      className="techVerse_hero_btns justify-content-center"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" className="btn_with_icon">
                        <img
                          className="btn_with_icon_img"
                          src={phoneicon}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Call Now</span>
                      </a>
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={chaticon}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Chat Now</span>
                      </a>
                    </div>
                    <div className="icon-container-hover">
                      <img
                        className="center_donatOrange animation11"
                        src={donatorange}
                        alt=""
                      />
                      <img
                        className="center_donatBlue animation11"
                        src={donatblue}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Case Study Sec 1 --> */}
      <section className="sec1 case-study-sec case-study-sec1">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="casestudy-content">
                  <div className="sec_title">
                    <div className="d-flex gx-2  my-3 g-2">
                      <img src={playstore} className="rounded" />
                      <img className="ml-4 rounded" src={appStore} />
                    </div>

                    <h2
                      className="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      ANGEL BODY - E-Commerce App
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
                      className="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Call Now</span>
                      </a>

                      <button
                        className="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img className="btn_with_icon_img" src="images/phone-icon-blue.webp" alt=""> --> */}
                        <span className="btn_with_icon_text">
                          Request A Quote
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 2 --> */}
      {/* style="background-image: url(images/case-study-sec222-bg.webp);" */}
      <section className="sec2 case-study-sec case-study-sec2">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="casestudy-content">
                  <div className="sec_title">
                    <div className="d-flex gx-2  my-3 g-2">
                      <img src={playstore} className="rounded" />
                      <img className="ml-4 rounded" src={appStore} />
                    </div>
                    <h2
                      className="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Brian Carlisle - E-Book App
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
                      className="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div className="techVerse_store_links">
                        <a href="#" className="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" className="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}

                      <button
                        className="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img className="btn_with_icon_img" src="images/phone-icon-blue.webp" alt=""> --> */}
                        <span className="btn_with_icon_text">
                          Request A Quote
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 3 --> */}

      {/*  style="background-image: url(images/case-study-sec3-bg.webp);" */}
      <section className="sec3 case-study-sec case-study-sec3">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="casestudy-content">
                  <div className="sec_title">
                    <div className="d-flex gx-2  my-3 g-2">
                      <img src={playstore} className="rounded" />
                      <img className="ml-4 rounded" src={appStore} />
                    </div>
                    <h2
                      className="sec_title_head"
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
                      className="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div className="techVerse_store_links">
                        <a href="#" className="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" className="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}
                      <button
                        className="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img className="btn_with_icon_img" src="images/phone-icon-blue.webp" alt=""> --> */}
                        <span className="btn_with_icon_text">
                          Request A Quote
                        </span>
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
      {/* style="background-image: url(images/case-study-sec4-bg.webp);" */}
      <section className="sec4 case-study-sec case-study-sec4">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="casestudy-content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head"
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
                      className="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div className="techVerse_store_links">
                        <a href="#" className="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" className="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}
                      <button
                        className="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img className="btn_with_icon_img" src="images/phone-icon-blue.webp" alt=""> --> */}
                        <span className="btn_with_icon_text">
                          Request A Quote
                        </span>
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
      {/* style={"background-image: url(images/case-study-sec5-bg.webp);"} */}
      <section className="sec5 case-study-sec case-study-sec5">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="casestudy-content">
                  <div className="sec_title">
                    <div className="d-flex gx-2  my-3 g-2">
                      <img src={playstore} className="rounded" />
                      <img className="ml-4 rounded" src={appStore} />
                    </div>
                    <h2
                      className="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Frame With Photos - E-Commerce App
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
                      className="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div className="techVerse_store_links">
                        <a href="#" className="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" className="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}

                      <button
                        className="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img className="btn_with_icon_img" src="images/phone-icon-blue.webp" alt=""> --> */}
                        <span className="btn_with_icon_text">
                          Request A Quote
                        </span>
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
      <section className="sec5 case-study-sec case-study-sec6">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="casestudy-content">
                  <div className="sec_title">
                    <div className="d-flex gx-2  my-3 g-2">
                      <img src={playstore} className="rounded" />
                      <img className="ml-4 rounded" src={appStore} />
                    </div>
                    <h2
                      className="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      1-Eleven - Booking Service
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
                      className="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span className="btn_with_icon_text">Call Now</span>
                      </a>
                      {/* <div className="techVerse_store_links">
                        <a href="#" className="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" className="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div> */}

                      <button
                        className="btn_with_icon btn_white"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        {/* <!-- <img className="btn_with_icon_img" src="images/phone-icon-blue.webp" alt=""> --> */}
                        <span className="btn_with_icon_text">
                          Request A Quote
                        </span>
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
          className="modal fade bd-example-modal-lg popup_modal"
          id="popup_modal_id"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              {/* <!-- <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> --> */}
              <div className="modal-body">
                <button
                  type="button"
                  className="close popup_modal-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="popUp_img">
                        <img src={sportsimg3} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="popUp_content">
                        <div className="popUp_title">
                          <h2 className="popUp_title_head color-white">
                            Sign Up Now To Get A Free Quote! Upto 50% Off For
                            Limited Time
                            {/* <!-- <span className="color-lightBlue2">Choose</span> Us? --> */}
                          </h2>
                        </div>
                        <div className="popUp_form">
                          <form onSubmit={handlesubmit}>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroup-sizing-default"
                                >
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={handlechange}
                              />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroup-sizing-default"
                                >
                                  <i
                                    className="fa fa-envelope"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email Here"
                                onChange={handlechange}
                                name="email"
                              />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroup-sizing-default"
                                >
                                  <i
                                    className="fa fa-phone"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <input
                                name="phone"
                                type="text"
                                onChange={handlechange}
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i
                                    className="fa fa-comment"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <textarea
                                onChange={handlechange}
                                name="message"
                                className="form-control"
                                aria-label="With textarea"
                                placeholder="Message"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="btn_with_icon popUp_form_btn"
                            >
                              {/* <!-- <img className="btn_with_icon_img" src="images/phone-icon.webp" alt=""> --> */}
                              <span className="btn_with_icon_text">
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
