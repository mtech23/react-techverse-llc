import React, { useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Header } from "../../Components/Layout/Header";
import { Footer } from "../../Components/Layout/Footer";
import Contact_Footer from "../../Components/contact_Footer";
import contactlisticon1 from "../../asserts/images/contact-list-icon1.png";
import contactlisticon2 from "../../asserts/images/contact-list-icon2.png";
import contactlisticon3 from "../../asserts/images/contact-list-icon3.png";
import contactclutch from "../../asserts/images/contact-clutch.png";
import contacttrust from "../../asserts/images/contact-trust.png";
import contactbbb from "../../asserts/images/contact-bbb.png";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />

      <section class="inner_hero contactUSNew_hero hoverEffectSec">
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="inner_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    BOOK A FREE <br />
                    <span class="color-lightBlue1">CONSULTATION</span>
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    What Happens Next?
                  </p>
                  <br />
                  <div
                    class="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <div class="box_icon">
                      <img src={contactlisticon1} alt="" />
                    </div>
                    <p>
                      An expert contacts you after having analyzed your
                      requirements.
                    </p>
                  </div>
                  <div
                    class="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <div class="box_icon">
                      <img src={contactlisticon2} alt="" />
                    </div>
                    <p>
                      If needed, we sign an NDA to ensure the highest privacy
                      level.
                    </p>
                  </div>
                  <div
                    class="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div class="box_icon">
                      <img src={contactlisticon3} alt="" />
                    </div>
                    <p>
                      We submit a comprehensive project proposal with estimates,
                      timelines, etc.
                    </p>
                  </div>
                  <h3
                    class="contact-page-subhead"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-offset="0"
                  >
                    <br />
                    We are trusted on
                  </h3>
                  <div
                    class="techVerse_store_links"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-offset="0"
                  >
                    <a href="#" class="techVerse_store_link">
                      <img src={contactclutch} alt="" />
                    </a>
                    <a href="#" class="techVerse_store_link">
                      <img src={contacttrust} alt="" />
                    </a>
                    <a href="#" class="techVerse_store_link">
                      <img src={contactbbb} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="contactPage_form"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <div class="contact_form">
                    <div class="contact_formContent">
                      <form method="POST" id="leadForm" action="">
                        <div class="row">
                          <div class="col-md-12 mb-3 contact-formCols">
                            <div class="form-group">
                              <select
                                class="inputForm"
                                name="industry"
                                required
                              >
                                <option>Select your industry</option>
                                <option>Industry 1</option>
                                <option>Industry 2</option>
                                <option>Industry 3</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="First Name"
                                class="inputForm"
                                name="firstname"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="Last Name"
                                class="inputForm"
                                name="lastname"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="Phone Number"
                                class="inputForm"
                                name="phone"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="email"
                                placeholder="Your Email"
                                class="inputForm"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3 contact-formCols">
                            <div class="form-group">
                              <textarea
                                rows="4"
                                class="inputForm"
                                placeholder="Please describe your project requirements"
                                name="message"
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-12 mb-5 contact-formCols">
                            <div class="budget-wrap">
                              <div class="budget-header">
                                <span class="budget-title">
                                  Set Your Budget
                                </span>
                                <span class="budget-value"> $500</span>
                              </div>
                              <div class="budget-content">
                                <input
                                  type="range"
                                  min="500"
                                  max="5000"
                                  value="50"
                                  class="budget-slider"
                                  id="budgetRange"
                                  name="budget"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="confidentialData">
                            <input type="hidden" id="country" name="country" />
                            <input type="hidden" id="ip" name="ip" />
                            <input
                              type="hidden"
                              class="locationLink"
                              name="website_url"
                            />
                          </div>
                          <div class="col-md-12 contact-formCols">
                            <div class="form-group">
                              <div class="techVerse_hero_btns">
                                <button
                                  type="submit"
                                  class="btn_with_icon w-100"
                                >
                                  <span class="btn_with_icon_text">SUBMIT</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact_Footer />
    </div>
  );
};

export default Contact;
