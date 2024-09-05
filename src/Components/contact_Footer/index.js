import React, { useState } from "react";
import bicon from "../../asserts/images/b-icon.webp";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import starticon from "../../asserts/images/start-icon.webp";
import {
  Logo,
  mainSiteLogo,
  dmca,
  dmcacomplaint,
  footerCertificate,
  playstore,
} from "../../asserts/images";
import ContactParticle from "../contactParticle/contactParticle";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const Contact_Footer = () => {
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

  const location = useLocation();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div>
      <footer id="custom_partilce">
        <ContactParticle />
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
                            <Link to={"/business-devlopment"} as={"link"}>
                              Business Development
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Development</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Mobile Application Development</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/ecommerse-development"}>
                              Ecommerce Development
                            </Link>
                          </li>
                          {/* <li className="footer__link">
                            <Link to={"/"}>Game Development</Link>
                          </li> */}
                          <li className="footer__link">
                            <Link to={"/web-development"}>Web Development</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Android App Development</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>iOS App Development</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Smart Contract Development</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer__quick-links">
                        <h3 className="foooter__subhead">Industries</h3>
                        <ul className="icon_list_items footer__links footer__categories_links">
                          <li className="footer__link">
                            <Link to={"/"}>Advertising</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Gaming & leisure</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/ecommerse"}>E-commerce & Retails</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Media & Entertainment</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/realEstate-and-property"}>
                              Real Estate & Property
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/"}>Software & High Tech</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/sports"}>Sports Teams & Leagues</Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/health-care"}>
                              Health & Life Sciences
                            </Link>
                          </li>
                          <li className="footer__link">
                            <Link to={"/travel"}>Travel & Hospitality</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="footer__quick-links">
                        <h3 className="foooter__subhead">qUIC Link</h3>
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
    </div>
  );
};

export default Contact_Footer;
