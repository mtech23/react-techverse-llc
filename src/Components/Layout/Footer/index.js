import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Particles from "react-particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo, mainSiteLogo, dmca, dmcacomplaint, footerCertificate, playstore } from "../../../asserts/images";



import { useCallback } from "react";
// import Particles from "react-particles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";




// mainSiteLogo

import "./style.css";





export const Footer = (props) => {
  const location = useLocation();

  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);



  return (




    <footer id="custom_partilce">

      


      <section class="techVerse_footer" >
        <div class="techVerse_footerContent">
          <div class="container-fluid">
            <div class="row footer_row">
              <div class="col-xl-9 col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    <div class="footer_about">
                      <div class="footer_logo_img_box">
                        <a href="#"><img src={mainSiteLogo} alt="" /></a>
                      </div>
                    </div>
                    <ul class="icon_list_items footer__links footer_contactUS">
                      <li class="icon_list_item footer__link">
                        <a href="tel:(866) 123-4567">
                          <span class="icon_list_icon">
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          <span class="icon_list_text"
                          >For Sales: (866) 123-4567</span
                          >
                        </a>
                      </li>
                      <li class="icon_list_item footer__link">
                        <a href="tel:+1 234-567-890">
                          <span class="icon_list_icon">
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          <span class="icon_list_text"
                          >For Billing: +1 234-567-890</span
                          >
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
                      <a href="#" class="social_link"
                      ><i class="fa-brands fa-facebook"></i
                      ></a>
                      <a href="#" class="social_link"
                      ><i class="fa-brands fa-youtube"></i
                      ></a>
                      <a href="#" class="social_link"
                      ><i class="fa-brands fa-linkedin"></i
                      ></a>
                      <a href="#" class="social_link"
                      ><i class="fa-brands fa-instagram"></i
                      ></a>
                      <a href="#" class="social_link"
                      ><i class="fa-brands fa-square-pinterest"></i
                      ></a>
                      <a href="#" class="social_link"
                      ><i class="fa-solid fa-star"></i
                      ></a>
                    </div>
                    <div class="footer_bbb">
                      <a href="#"><img src="images/b-icon.png" alt="" /></a>
                      <a href="#"><img src="images/start-icon.png" alt="" /></a>
                    </div>
                    <p class="company_wishText">A Company oF More Wish Digital</p>
                  </div>
                  <div class="col-md-3">
                    <div class="footer__quick-links">
                      <h3 class="foooter__subhead">Quick Links</h3>
                      <ul
                        class="icon_list_items footer__links footer__categories_links"
                      >
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
                      <ul
                        class="icon_list_items footer__links footer__categories_links"
                      >
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
                      <ul
                        class="icon_list_items footer__links footer__categories_links"
                      >
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
                <div class="col-md-12 footer_copyright-col">
                  <div class="row footer_copyright">
                    <div class="col-lg-4">
                      <div class="techVerse_footer_copyright">
                        <p>© 2024 Techverse All rights reserved.</p>
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="techVerse_powerdby">
                        <a href="#">Corporate Profile</a>
                        <a href="#">Our Creations</a>
                        <a href="#">Podcast</a>
                        <a href="#">Blog</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="techVerse_disclaimer">
                        <h4 class="techVerse_disclaimer_title">DISCLAIMER:</h4>
                        <p>
                          App, portfolio, images and content are the sole property
                          of Techverse. All third party company names, brand
                          names, trademarks displayed on this website are the
                          property of their respective owners. Furthermore,
                          Techverse . has no influence over the third party
                          material that is being displayed on the website.
                          Therefore, we are also not responsible for any
                          resemblance with any other material on the web. These
                          portfolios and case studies are actual but exemplary
                          (for better understanding); the actual names, designs,
                          functionality, content and stats/facts may differ from
                          the actual apps that have been published. This is due to
                          the strict NDA policy that Techverse. adheres to.
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
                        <a href="#" class="hero_brands_img"
                        ><img src={dmca} alt=""
                          /></a>
                        <a href="#" class="hero_brands_img"
                        ><img src={dmcacomplaint} alt=""
                          /></a>
                        <a href="#" class="hero_brands_img"
                        ><img src={playstore} alt=""
                          /></a>
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
  );
};
