import { useLocation } from "react-router-dom";
import bicon from "../../../asserts/images/b-icon.webp";
import { Link } from "react-router-dom";
import starticon from "../../../asserts/images/start-icon.webp";
import Particles from "react-particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Logo,
  mainSiteLogo,
  dmca,
  dmcacomplaint,
  footerCertificate,
  playstore,
} from "../../../asserts/images";
import partnersbbb from "../../../asserts/images/partners-bbb.webp";
import arrowicon from "../../../asserts/images/arrow-icon.webp";
import goodfirms from "../../../asserts/images/good-firms.webp";
import partnersclutch from "../../../asserts/images/partners-clutch.webp";
import bluecubelarge from "../../../asserts/images/blue-cube-large.webp";
import partnerstruspilot from "../../../asserts/images/partners-trus-pilot.webp";

import contactUslaptop from "../../../asserts/images/contactUs-laptop.webp";
import SuperToroidOrangeGlossy from "../../../asserts/images/SuperToroid-Orange-Glossy.webp";
import { useCallback, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
// import Particles from "react-particles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// mainSiteLogo

import "./style.css";

export const Footer = (props) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll(".techVerse_contact");

    sections.forEach((section) => {
      const container = section.querySelector(".contactinner_images");

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

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

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

    formDataMethod.append("website_url", "https://techversellc.com/");
    formDataMethod.append("ip", ipInfo?.ip);

    formDataMethod.append("country", ipInfo?.country);
    formDataMethod.append("industry", selectedIndustry);

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
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 2, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 5,
          random: true,
          anim: { enable: false, speed: 40, size_min: 5, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });

    // Clean up
    return () => {
      window.pJSDom && window?.pJSDom[0]?.pJS?.fn.vendors.destroypJS();
      window.pJSDom = [];
    };
  }, []);

  const industries = [
    { key: "real-estate-and-property", name: "Real Estate & Property" },
    { key: "automotive-and-transport", name: "Automotive and Transport" },
    { key: "eCommerse-and-retail", name: "E-commerce & Retails" },
    { key: "advertizing", name: "Advertising" },
    { key: "edu-hr", name: "Education & HR" },
    { key: "health-science", name: "Health and Life Sciences" },
    { key: "software-tech", name: "Software & High Tech" },
    { key: "finance", name: "Finance" },
    { key: "media-entertainment", name: "Media & Entertainment" },
    { key: "sports-leagues", name: "Sports Teams & Leagues" },
    { key: "travel-hospitality", name: "Travel & Hospitality" },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  console.log("selectedIndustry", selectedIndustry);

  return (
    <>
      {/* <!-- Contact --> */}
      <div ref={sectionRef}>
        <section className="techVerse_contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 contact-laptopBG">
                <div className="contactLaptop-outer">
                  <div
                    className="techVerse-contact-img"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <img
                      src={contactUslaptop}
                      className="contactUs-laptop"
                      alt=""
                    />
                  </div>
                  <div className="contactinner_images">
                    <img
                      src={SuperToroidOrangeGlossy}
                      className="techVerse-contact-imgIcon animation11"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact_form">
                      <div className="contact_formContent">
                        <div className="sec_title">
                          <h2 className="sec_title_head color-lightBlue2">
                            CONTACT
                            <span className="color-darkBlue"> Us </span>
                          </h2>
                        </div>
                        <form onSubmit={handlesubmit}>
                          <div className="row">
                            <div className="col-md-10 mb-3 contact-formCols">
                              <div className="form-group">
                                <select
                                  className="inputForm"
                                  name="industry"
                                  value={selectedIndustry}
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="" disabled>
                                    Select your industry
                                  </option>
                                  {industries.map((industry) => (
                                    <option
                                      key={industry.key}
                                      value={industry.key}
                                    >
                                      {industry.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-5 mb-5 contact-formCols">
                              <div className="form-group">
                                <input
                                  required
                                  onChange={handlechange}
                                  name="firstname"
                                  type="text"
                                  placeholder="First Name"
                                  className="inputForm"
                                />
                              </div>
                            </div>
                            <div className="col-md-5 mb-5 contact-formCols">
                              <div className="form-group">
                                <input
                                  required
                                  onChange={handlechange}
                                  name="lastname"
                                  type="text"
                                  placeholder="Last Name"
                                  className="inputForm"
                                />
                              </div>
                            </div>
                            <div className="col-md-5 mb-5 contact-formCols">
                              <div className="form-group">
                                <input
                                  required
                                  onChange={handlechange}
                                  name="phone"
                                  type="text"
                                  placeholder="Phone Number"
                                  className="inputForm"
                                />
                              </div>
                            </div>
                            <div className="col-md-5 mb-5 contact-formCols">
                              <div className="form-group">
                                <input
                                  required
                                  onChange={handlechange}
                                  name="email"
                                  type="email"
                                  placeholder="Your Email"
                                  className="inputForm"
                                />
                              </div>
                            </div>
                            <div className="col-md-10 mb-5 contact-formCols">
                              <div className="form-group">
                                <textarea
                                  required
                                  onChange={handlechange}
                                  name="message"
                                  rows="8"
                                  className="inputForm"
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-10 mb-5 contact-formCols">
                              <div className="budget-wrap">
                                <div className="budget-header">
                                  <span className="budget-title">
                                    Set Your Budget
                                  </span>
                                  <span className="budget-value">
                                    {" "}
                                    ${budget}
                                  </span>
                                </div>
                                <div className="budget-content">
                                  <input
                                    onChange={handlechange}
                                    name="budget"
                                    type="range"
                                    // value={budget}
                                    // setBudget={value}
                                    min={0}
                                    max={50000}
                                    className="budget-slider"
                                    id="budgetRange"
                                  />
                                  {/* <input
                                    onChange={handlechange}
                                    name="budget"
                                    type="range"
                                    min="500"
                                    max="5000"
                                    className="budget-slider"
                                    id="budgetRange"
                                    value={budget}
                                  /> */}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-10 mb-5 contact-formCols">
                              <div className="form-group">
                                <div className="techVerse_hero_btns">
                                  <button
                                    type="submit"
                                    className="btn_with_icon w-100"
                                  >
                                    <span className="btn_with_icon_text">
                                      SUBMIT
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="get_discount_one">GET DISCOUNT</div>
                      </div>
                      {/* <div className="newLetterBox">
                        <div className="contentBox">
                          <h3
                            className="newLetterBox_strokeTxt"
                            data-aos="fade-up"
                            data-aos-offset="0"
                            data-aos-duration="1000"
                          >
                            NEWSLETTER
                          </h3>
                          <h3
                            data-aos="fade-up"
                            data-aos-offset="0"
                            data-aos-duration="2000"
                          >
                            subscribe our newsletter
                          </h3>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="0"
                            data-aos-duration="2000"
                          >
                           Stay updated with the latest trends and insights in mobile innovation.
                            Subscribe to our newsletter for exclusive updates, industry news, and tips to boost your digital strategy.
                          </p>
                          <form
                            data-aos="fade-up"
                            data-aos-offset="0"
                            data-aos-duration="3000"
                          >
                            <div className="formGroup news_letterInput">
                              <input
                                type="email"
                                placeholder="Enter Your Email...."
                              />
                              <button type="submit">
                                Subscribe Now
                                <img
                                  className="btn_with_icon_img"
                                  src={arrowicon}
                                  alt=""
                                />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Partners --> */}

      <section className="techVerse_partners">
        {/* <img
          className="techVerse_partners_icon1 animation11"
          src={bluecubelarge}
          alt=""
        />
        <img
          className="techVerse_partners_icon2 animation22"
          src="images/peramid-angled.png"
          alt=""
        /> */}
        <div className="techVerse_Contentpartners">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="partners-imgBox">
                  <img src={partnersclutch} alt="" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="partners-imgBox">
                  <img src={partnerstruspilot} alt="" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="partners-imgBox">
                  <img src={partnersbbb} alt="" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="partners-imgBox">
                  <img src={goodfirms} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="custom_partilce">
        <section className="techVerse_footer">
          <div className="techVerse_footerContent width-1600">
            <div className="container-fluid">
              <div className="row footer_row">
                <div className="col-xl-9 col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="footer_about">
                        <div className="footer_logo_img_box">
                          <Link to={"/"}>
                            <img src={mainSiteLogo} alt="" />
                          </Link>
                        </div>
                      </div>
                      <ul className="icon_list_items footer__links footer_contactUS">
                        {/* <li className="icon_list_item footer__link">
                          <Link href="tel:(866) 123-4567">
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-phone"></i>
                            </span>
                            <span className="icon_list_text">
                              For Sales: (866) 123-4567
                            </span>
                          </Link>
                        </li> */}
                        {/* <li className="icon_list_item footer__link">
                          <Link href="tel:+1 234-567-890">
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-phone"></i>
                            </span>
                            <span className="icon_list_text">
                              For Billing: +1 234-567-890
                            </span>
                          </Link>
                        </li> */}
                        <li className="icon_list_item footer__link">
                          <Link href="mailto:info@example.com">
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span className="icon_list_text">
                              info@example.com
                            </span>
                          </Link>
                        </li>
                        <li className="icon_list_item footer__link">
                          <Link to={"/"}>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <span className="icon_list_text">USA</span>
                          </Link>
                        </li>
                      </ul>
                      <div className="social_links">
                        <Link to={"/"} className="social_link">
                          <i className="fa-brands fa-facebook"></i>
                        </Link>
                        <Link to={"/"} className="social_link">
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                        <Link to={"/"} className="social_link">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link to={"/"} className="social_link">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link to={"/"} className="social_link">
                          <i className="fa-brands fa-square-pinterest"></i>
                        </Link>
                        <Link to={"/"} className="social_link">
                          <i className="fa-solid fa-star"></i>
                        </Link>
                      </div>
                      <div className="footer_bbb">
                        <Link to={"/"}>
                          <img src={bicon} alt="" />
                        </Link>
                        <Link to={"/"}>
                          <img src={starticon} alt="" />
                        </Link>
                      </div>
                      <p className="company_wishText">
                        A Company oF More Wish Digital
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="footer__quick-links">
                        <h3 className="foooter__subhead"> Services</h3>
                        <ul className="icon_list_items footer__links footer__categories_links">
                          <li className="footer__link">
                            <Link to={"/app-store"} as={"link"}>
                              App Store
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/branding"}>Branding</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/book-publication"}>
                              Book Publication
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/business-devlopment"}>
                              Business Development
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/Devops"}>DevOps</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/digital-marketing"}>
                              Digital Marketing
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/ecommerse-development"}>
                              E-Commerce Development
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/mobile-app"}>
                              Mobile Application Development
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/out-sourcing"}>Out Source</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/web-application"}>Web Application</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/web-development"}>Web Development</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer__quick-links">
                        <h3 className="foooter__subhead">Industries</h3>
                        <ul className="icon_list_items footer__links footer__categories_links">
                          {/* <li className="footer__link">
                            <Link to={"/Advertising"}>Advertising</Link>
                          </li> */}
                          <li className="footer__link">
                            <Link to={"/automotive"}>
                              Automotive and Transport
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/ecommerse"}>E-commerce & Retails</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/education-hr"}>Education & HR</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/finance"}>Finance</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/health-care"}>
                              Health and Life Sciences
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/media"}>Media & Entertainment</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/realEstate-and-property"}>
                              Real Estate & Property
                            </Link>
                          </li>

                          <li className="footer__link">
                            <Link to={"/sports"}>Sports Teams & Leagues</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/travel"}>Travel & Hospitality</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="footer__quick-links">
                        <h3 className="foooter__subhead">Quick Link</h3>
                        <ul className="icon_list_items footer__links footer__categories_links">
                          <li className="footer__link">
                            <Link to={"/"}>About</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/contact"}> Blogs</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-spacer"></div>
                  <div className="col-md-12 footer_copyright-col px-0">
                    <div className="row footer_copyright">
                      <div className="col-lg-4">
                        <div className="techVerse_footer_copyright">
                          <p>© 2024 Techverse All rights reserved.</p>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="techVerse_powerdby">
                          {/* <Link to={"/"}>Corporate Profile</Link>
                          <Link to={"/"}>Our Creations</Link>
                          <Link to={"/"}>Podcast</Link>
                          <Link to={"/"}>Blog</Link> */}
                          <Link to={"/privacy-policy"}>Privacy Policy</Link>
                          <Link to={"/terms-conditions"}>
                            Terms & Conditions
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="techVerse_disclaimer">
                          <h4 className="techVerse_disclaimer_title">
                            DISCLAIMER:
                          </h4>
                          <p>
                            App, portfolio, images and content are the sole
                            property of Techverse. All third party company
                            names, brand names, trademarks displayed on this
                            website are the property of their respective owners.
                            Furthermore, Techverse . has no influence over the
                            third party material that is being displayed on the
                            website. Therefore, we are also not responsible for
                            any resemblance with any other material on the web.
                            These portfolios and case studies are actual but
                            exemplary (for better understanding); the actual
                            names, designs, functionality, content and
                            stats/facts may differ from the actual apps that
                            have been published. This is due to the strict NDA
                            policy that Techverse. adheres to.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="techVerse_footerRrequest_quote">
                        <h3 className="foooter__subhead">
                          Subscribe to Our Newsletter
                        </h3>
                        <div className="footer_formBox">
                          <form>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                              />
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </form>
                        </div>
                        <div className="hero_brands">
                          <Link to={"/"} className="hero_brands_img">
                            <img src={dmca} alt="" />
                          </Link>
                          <Link to={"/"} className="hero_brands_img">
                            <img src={dmcacomplaint} alt="" />
                          </Link>
                          {/* <Link to={"/"} className="hero_brands_img">
                            <img src={playstore} alt="" />
                          </Link> */}
                        </div>
                        <div className="footer_certicate">
                          <img src={footerCertificate} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id="particles-js">
            <Particles
              style={{ position: "absolute" , top:"200px"}}
              id="particles-js"
              className="customClass"
              canvasclassName="abc"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "",
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "ff0000",
                  },
                  links: {
                    color: "ff0000",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div> */}
          <div id="particles-js" style={{ maxWidth: "" }}></div>
        </section>
      </footer>

      <ToastContainer />
    </>
  );
};
