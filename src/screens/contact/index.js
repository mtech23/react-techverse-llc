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

import Helmet from "../../Components/Helmet";

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
        title="Contact Us For Any Information and Queries | Techverse LLC"
        description="Need assistance or have questions? Contact Techverse LLC! We're committed to helping you with all your information and tech queries. Reach out today!"
        keywords="Contact"
      />
      <Header />

      <section className="inner_hero contactUSNew_hero hoverEffectSec">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="inner_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    BOOK A FREE <br />
                    <span className="color-lightBlue1">CONSULTATION</span>
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
                    className="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <div className="box_icon">
                      <img src={contactlisticon1} alt="" />
                    </div>
                    <p>
                      An expert contacts you after having analyzed your
                      requirements.
                    </p>
                  </div>
                  <div
                    className="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <div className="box_icon">
                      <img src={contactlisticon2} alt="" />
                    </div>
                    <p>
                      If needed, we sign an NDA to ensure the highest privacy
                      level.
                    </p>
                  </div>
                  <div
                    className="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="box_icon">
                      <img src={contactlisticon3} alt="" />
                    </div>
                    <p>
                      We submit a comprehensive project proposal with estimates,
                      timelines, etc.
                    </p>
                  </div>
                  <h3
                    className="contact-page-subhead"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-offset="0"
                  >
                    <br />
                    We are trusted on
                  </h3>
                  <div
                    className="techVerse_store_links"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-offset="0"
                  >
                    <a href="#" className="techVerse_store_link">
                      <img src={contactclutch} alt="" />
                    </a>
                    <a href="#" className="techVerse_store_link">
                      <img src={contacttrust} alt="" />
                    </a>
                    <a href="#" className="techVerse_store_link">
                      <img src={contactbbb} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contactPage_form"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <div className="contact_form">
                    <div className="contact_formContent">
                      <form onSubmit={handlesubmit} id="leadForm" action="">
                        <div className="row">
                          <div className="col-md-12 mb-3 contact-formCols">
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
                          <div className="col-md-6 mb-3 contact-formCols">
                            <div className="form-group">
                              <input
                                value={formdata.firstname}
                                type="text"
                                placeholder="First Name"
                                className="inputForm"
                                name="firstname"
                                onChange={handlechange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-3 contact-formCols">
                            <div className="form-group">
                              <input
                                value={formdata.lastname}
                                type="text"
                                placeholder="Last Name"
                                className="inputForm"
                                name="lastname"
                                required
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-3 contact-formCols">
                            <div className="form-group">
                              <input
                                value={formdata.phone}
                                type="text"
                                placeholder="Phone Number"
                                className="inputForm"
                                name="phone"
                                required
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-3 contact-formCols">
                            <div className="form-group">
                              <input
                                value={formdata.email}
                                type="email"
                                placeholder="Your Email"
                                className="inputForm"
                                name="email"
                                required
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3 contact-formCols">
                            <div className="form-group">
                              <textarea
                                value={formdata.message}
                                onChange={handlechange}
                                rows="4"
                                className="inputForm"
                                placeholder="Please describe your project requirements"
                                name="message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 mb-5 contact-formCols">
                            <div className="budget-wrap">
                              <div className="budget-header">
                                <span className="budget-title">
                                  Set Your Budget
                                </span>
                                <span className="budget-value"> ${budget}</span>
                              </div>
                              <div className="budget-content">
                                <input
                                  onChange={handlechange}
                                  type="range"
                                  min="0"
                                  max={50000}
                                  // value="50"
                                  className="budget-slider"
                                  id="budgetRange"
                                  name="budget"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="confidentialData">
                            <input type="hidden" id="country" name="country" />
                            <input type="hidden" id="ip" name="ip" />
                            <input
                              type="hidden"
                              className="locationLink"
                              name="website_url"
                            />
                          </div>
                          <div className="col-md-12 contact-formCols">
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
