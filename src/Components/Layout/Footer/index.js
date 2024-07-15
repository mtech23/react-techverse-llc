
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
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
import partnersbbb from "../../../asserts/images/partners-bbb.png";
import arrowicon from "../../../asserts/images/arrow-icon.png";
import goodfirms from "../../../asserts/images/good-firms.png";
import partnersclutch from "../../../asserts/images/partners-clutch.png";
import bluecubelarge from "../../../asserts/images/blue-cube-large.png";
import partnerstruspilot from "../../../asserts/images/partners-trus-pilot.png";

import contactUslaptop from '../../../asserts/images/contactUs-laptop.png';
import SuperToroidOrangeGlossy from '../../../asserts/images/SuperToroid-Orange-Glossy.png';
import { useCallback, useState, useEffect } from "react";
// import Particles from "react-particles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// mainSiteLogo

import "./style.css";

export const Footer = (props) => {
  const [ipInfo, setIpInfo] = useState({ ip: '', country: '' });

  console.log("ipInfo", ipInfo)



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




  const [budget, setBudget] = useState(500);


  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // const notify = () => toast.success("Thank You");
  const [formdata, setFormData] = useState("")

  const handlechange = (e) => {
    const { name, value } = e.target
    if (name == "budget") {
      setBudget(value);

    }
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value
    }))
  }

  const url = process.env.REACT_APP_BASE_URL;
  console.log("url", url)

  const handlesubmit = async (event) => {
    event.preventDefault()
    const formDataMethod = new FormData();
    for (const key in formdata) {
      formDataMethod.append(key, formdata[key]);
    }

    formDataMethod.append("ip", ipInfo?.ip);
    formDataMethod.append("country", ipInfo?.country);

    try {
      const contact_api = await fetch(url, {
        method: "POST",
        headers: {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
        },
        // No need to set headers for FormData
        body: formDataMethod
      });

      if (!contact_api.ok) {
        throw new Error('Network response was not ok ' + contact_api.statusText);
      }

      const response = await contact_api.json();
      if (response?.status == true) {
        // notify()
      }
      console.log('Success:', response);
      // Handle successful response
      return response;
    } catch (error) {
      console.error("Error in adding:", error);
      // Handle error response
      throw error;
    }
  }


  return (
    <>

      {/* <!-- Contact --> */}
      <section class="techVerse_contact">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-5 contact-laptopBG">
              <div class="contactLaptop-outer">
                <div
                  class="techVerse-contact-img"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img src={contactUslaptop} class="contactUs-laptop" alt="" />
                </div>
                <img
                  src={SuperToroidOrangeGlossy}
                  class="techVerse-contact-imgIcon animation11"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="row">
                <div class="col-md-12">
                  <div class="contact_form">
                    <div class="contact_formContent">
                      <div class="sec_title">
                        <h2 class="sec_title_head color-lightBlue2">
                          CONTACT
                          <span class="color-darkBlue">Us</span>
                        </h2>
                      </div>
                      <form onSubmit={handlesubmit}>
                        <div class="row">
                          <div class="col-md-5 mb-5 contact-formCols">
                            <div class="form-group">
                              <input
                                required
                                onChange={handlechange}
                                name="firstname"
                                type="text"
                                placeholder="First Name"
                                class="inputForm"
                              />
                            </div>
                          </div>
                          <div class="col-md-5 mb-5 contact-formCols">
                            <div class="form-group">
                              <input
                                required
                                onChange={handlechange}
                                name="lastname"
                                type="text"
                                placeholder="Last Name"
                                class="inputForm"
                              />
                            </div>
                          </div>
                          <div class="col-md-5 mb-5 contact-formCols">
                            <div class="form-group">
                              <input
                                required
                                onChange={handlechange}
                                name="phone"
                                type="text"
                                placeholder="Phone Number"
                                class="inputForm"
                              />
                            </div>
                          </div>
                          <div class="col-md-5 mb-5 contact-formCols">
                            <div class="form-group">
                              <input
                                required
                                onChange={handlechange}
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                class="inputForm"
                              />
                            </div>
                          </div>
                          <div class="col-md-10 mb-5 contact-formCols">
                            <div class="form-group">
                              <textarea
                                required
                                onChange={handlechange}
                                name="message"
                                rows="8"
                                class="inputForm"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-10 mb-5 contact-formCols">
                            <div class="budget-wrap">
                              <div class="budget-header">
                                <span class="budget-title">Set Your Budget</span>
                                <span class="budget-value"> ${budget}</span>
                              </div>
                              <div class="budget-content">
                                <input
                                  onChange={handlechange}
                                  name="budget"
                                  type="range"
                                  // value={budget}
                                  // setBudget={value}
                                  min="500"
                                  max="5000"
                                  class="budget-slider"
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
                          <div class="col-md-10 mb-5 contact-formCols">
                            <div class="form-group">
                              <div class="techVerse_hero_btns">
                                <button type="submit" class="btn_with_icon w-100">
                                  <span class="btn_with_icon_text">SUBMIT</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="get_discount">GET DISCOUNT</div>
                    </div>
                    <div class="newLetterBox">
                      <div class="contentBox">
                        <h3
                          class="newLetterBox_strokeTxt"
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
                          <div class="formGroup news_letterInput">
                            <input
                              type="email"
                              placeholder="Enter Your Email...."
                            />
                            <button type="submit">
                              Subscribe Now
                              <img
                                class="btn_with_icon_img"
                                src={arrowicon}
                                alt=""
                              />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Partners --> */}

      <section class="techVerse_partners">
        {/* <img
          class="techVerse_partners_icon1 animation11"
          src={bluecubelarge}
          alt=""
        />
        <img
          class="techVerse_partners_icon2 animation22"
          src="images/peramid-angled.png"
          alt=""
        /> */}
        <div class="techVerse_Contentpartners">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <div class="partners-imgBox">
                  <img src={partnersclutch} alt="" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="partners-imgBox">
                  <img src={partnerstruspilot} alt="" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="partners-imgBox">
                  <img src={partnersbbb} alt="" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="partners-imgBox">
                  <img src={goodfirms} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="custom_partilce">
        <section class="techVerse_footer">
          <div class="techVerse_footerContent width-1600">
            <div class="container-fluid">
              <div class="row footer_row">
                <div class="col-xl-9 col-md-12">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="footer_about">
                        <div class="footer_logo_img_box">
                          <a href="#">
                            <img src={mainSiteLogo} alt="" />
                          </a>
                        </div>
                      </div>
                      <ul class="icon_list_items footer__links footer_contactUS">
                        <li class="icon_list_item footer__link">
                          <a href="tel:(866) 123-4567">
                            <span class="icon_list_icon">
                              <i class="fa-solid fa-phone"></i>
                            </span>
                            <span class="icon_list_text">
                              For Sales: (866) 123-4567
                            </span>
                          </a>
                        </li>
                        <li class="icon_list_item footer__link">
                          <a href="tel:+1 234-567-890">
                            <span class="icon_list_icon">
                              <i class="fa-solid fa-phone"></i>
                            </span>
                            <span class="icon_list_text">
                              For Billing: +1 234-567-890
                            </span>
                          </a>
                        </li>
                        <li class="icon_list_item footer__link">
                          <a href="mailto:info@example.com">
                            <span class="icon_list_icon">
                              <i class="fa-solid fa-envelope"></i>
                            </span>
                            <span class="icon_list_text">info@example.com</span>
                          </a>
                        </li>
                        <li class="icon_list_item footer__link">
                          <a href="#">
                            <span class="icon_list_icon">
                              <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <span class="icon_list_text">USA</span>
                          </a>
                        </li>
                      </ul>
                      <div class="social_links">
                        <a href="#" class="social_link">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="social_link">
                          <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="#" class="social_link">
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#" class="social_link">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" class="social_link">
                          <i class="fa-brands fa-square-pinterest"></i>
                        </a>
                        <a href="#" class="social_link">
                          <i class="fa-solid fa-star"></i>
                        </a>
                      </div>
                      <div class="footer_bbb">
                        <a href="#">
                          <img src="images/b-icon.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="images/start-icon.png" alt="" />
                        </a>
                      </div>
                      <p class="company_wishText">
                        A Company oF More Wish Digital
                      </p>
                    </div>
                    <div class="col-md-3">
                      <div class="footer__quick-links">
                        <h3 class="foooter__subhead">Quick Links</h3>
                        <ul class="icon_list_items footer__links footer__categories_links">
                          <li class="footer__link">
                            <a href="#">Business Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Mobile Application Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Ecommerce Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Game Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Web Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Android App Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">iOS App Development</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Smart Contract Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="footer__quick-links">
                        <h3 class="foooter__subhead">Industries</h3>
                        <ul class="icon_list_items footer__links footer__categories_links">
                          <li class="footer__link">
                            <a href="#">Advertising</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Gaming & leisure</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">E-commerce & Retails</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Media & Entertainment</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Real Estate & Property</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Software & High Tech</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Sports Teams & Leagues</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Health & Life Sciences</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Travel & Hospitality</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="footer__quick-links">
                        <h3 class="foooter__subhead">About</h3>
                        <ul class="icon_list_items footer__links footer__categories_links">
                          <li class="footer__link">
                            <a href="#">Pricing</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Contact us</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Podcast</a>
                          </li>
                          <li class="footer__link">
                            <a href="#">Guest Posts</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="footer-spacer"></div>
                  <div class="col-md-12 footer_copyright-col px-0">
                    <div class="row footer_copyright">
                      <div class="col-lg-4">
                        <div class="techVerse_footer_copyright">
                          <p>© 2024 Techverse All rights reserved.</p>
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="techVerse_powerdby">
                          {/* <a href="#">Corporate Profile</a>
                          <a href="#">Our Creations</a>
                          <a href="#">Podcast</a>
                          <a href="#">Blog</a> */}
                          <Link to={"/privacy-policy"} >Privacy Policy</Link>
                          <Link to={"/terms-condition"} >Terms & Conditions</Link>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="techVerse_disclaimer">
                          <h4 class="techVerse_disclaimer_title">
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
                <div class="col-xl-3 col-lg-6 col-md-8">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="techVerse_footerRrequest_quote">
                        <h3 class="foooter__subhead">
                          Subscribe to Our Newsletter
                        </h3>
                        <div class="footer_formBox">
                          <form>
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Enter email"
                              />
                            </div>
                            <button type="submit" class="btn btn-primary">
                              Submit
                            </button>
                          </form>
                        </div>
                        <div class="hero_brands">
                          <a href="#" class="hero_brands_img">
                            <img src={dmca} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={dmcacomplaint} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={playstore} alt="" />
                          </a>
                        </div>
                        <div class="footer_certicate">
                          <img src={footerCertificate} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tsparticlesss">
            <Particles
              id="tsparticlesss"
              canvasClassName="abc"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "",
                  },
                  height: 20,
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
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
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
          </div>
        </section>
      </footer>

      <ToastContainer />
    </>
  );
};
