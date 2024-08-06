import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Layout/Header";
import Contact_Footer from "../../Components/contact_Footer";
import contactlisticon1 from "../../asserts/images/contact-list-icon1.webp";
import contactlisticon2 from "../../asserts/images/contact-list-icon2.webp";
import contactlisticon3 from "../../asserts/images/contact-list-icon3.webp";
import contactclutch from "../../asserts/images/contact-clutch.webp";
import contacttrust from "../../asserts/images/contact-trust.webp";
import contactbbb from "../../asserts/images/contact-bbb.webp";
import "./style.css";

import Helmet from '../../Components/Helmet'


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
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

  const notify = () => toast.success("Thank You");
  const [formdata, setFormData] = useState({
    firstname: "",
  });

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

  const handlesubmit = async (event) => {
    event.preventDefault();
    const formDataMethod = new FormData();
    for (const key in formdata) {
      formDataMethod.append(key, formdata[key]);
    }
    formDataMethod.append("industry", selectedIndustry);
    formDataMethod.append("website_url", "https://techversellc.com/");

    formDataMethod.append("ip", ipInfo?.ip);
    formDataMethod.append("country", ipInfo?.country);
    const url = process.env.REACT_APP_BASE_URL;

    try {
      const contact_api = await fetch(url, {
        method: "POST",

        body: formDataMethod,
      });

      if (!contact_api.ok) {
        notify();
        // throw new Error('Network response was not ok ' + contact_api.statusText);
      }

      const response = await contact_api.json();

      setFormData({
        firstname: "",
        lastname: "",
        phone: " ",
        email: " ",
        message: " ",
        budget: " ",
        country: " ",
      });
      if (response?.status == true) {
        notify();

        setFormData({
          firstname: "",
          lastname: "",
          phone: " ",
          email: " ",
          message: " ",
          budget: " ",
          country: " ",
        });
      }
      console.log("Success:", response);
      // Handle successful response
      return response;
    } catch (error) {
      // notify();
      console.error("Error in adding:", error);
      // Handle error response
      // throw error;
    }
  };

  const industries = [
    { key: "Real-estate-and-property", name: "Real Estate & Property" },
    { key: "automotive-and-transport", name: "Automotive and Transport" },
    { key: "eCommerse-and-retail", name: "E-commerce & Retails" },
    { key: "advertizing", name: "Advertising" },
    { key: "Education Hr", name: "Education & HR" },
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

  return (
    <div>



      <Helmet
        title="          Contact Techverse LLC for Software Development & Solutions"
        description=" Looking for business software development & solutions? We also develop mobile apps; contact Techverse LLC for all the business solutions !!"
      />
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
                      <form onSubmit={handlesubmit} id="leadForm" action="">
                        <div class="row">
                          <div class="col-md-12 mb-3 contact-formCols">
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
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                value={formdata.firstname}
                                type="text"
                                placeholder="First Name"
                                class="inputForm"
                                name="firstname"
                                onChange={handlechange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                value={formdata.lastname}
                                type="text"
                                placeholder="Last Name"
                                class="inputForm"
                                name="lastname"
                                required
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                value={formdata.phone}
                                type="text"
                                placeholder="Phone Number"
                                class="inputForm"
                                name="phone"
                                required
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                value={formdata.email}
                                type="email"
                                placeholder="Your Email"
                                class="inputForm"
                                name="email"
                                required
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3 contact-formCols">
                            <div class="form-group">
                              <textarea
                                value={formdata.message}
                                onChange={handlechange}
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
                                <span class="budget-value"> ${budget}</span>
                              </div>
                              <div class="budget-content">
                                <input
                                  onChange={handlechange}
                                  type="range"
                                  min="0"
                                  max={50000}
                                  // value="50"
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
