import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Layout/Header";
import Contact_Footer from "../../Components/contact_Footer";

import "./style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Helmet from "../../Components/Helmet";

const Terms_condition = () => {
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

  const [budget, setBudget] = useState(500);

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

    formDataMethod.append("ip", ipInfo?.ip);
    formDataMethod.append("country", ipInfo?.country);
    const url = process.env.REACT_APP_BASE_URL;

    try {
      const contact_api = await fetch(url, {
        method: "POST",

        body: formDataMethod,
      });

      if (!contact_api.ok) {
        throw new Error(
          "Network response was not ok " + contact_api.statusText
        );
      }

      const response = await contact_api.json();
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
      console.error("Error in adding:", error);
      // Handle error response
      throw error;
    }
  };

  return (
    <div>
      <Header />

      <Helmet
        title="Read Our Terms and Conditions | Techverse LLC"
        description="Explore the terms and conditions of Techverse LLC. Get informed about your rights and obligations when using our services. Read now for full details."
        keywords="Terms and Conditions"
      />

      <section className="inner_hero aboutUS_hero hoverEffectSec">
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
                    Terms
                    <span className="color-lightBlue1"> And </span>
                    Conditions
                  </h1>
                  {/* <!-- <p data-aos="fade-right" data-aos-offset="0" data-aos-duration="2000">
                            At Techverse LLC, we are committed to empowering businesses and individuals with cutting-edge tech solutions that bridge the gap between innovation and everyday life. Our mission is to provide robust, scalable, and future-proof solutions that cater to our clients' diverse needs.
                        </p>
                        <div className="icon-container-hover">
                            <img className="center_donatOrange animation11" src="images/donat-orange.webp" alt="">
                            <img className="center_donatBlue animation11" src="images/donat-blue.webp" alt="">
                        </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terms-and-condition">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="terms_condition_content">
                <div className="sec_title">
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    {/* <!-- <span className="color-lightBlue2"></span> --> */}
                    Introduction
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Welcome to Techverse LLC. These terms and conditions govern
                    your use of our app development and marketing services. By
                    accessing our services, you agree to comply with these
                    terms.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Services <span className="color-lightBlue2">Offered</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC provides app development and marketing
                    services, including but not limited to:
                  </p>
                  <ul
                    className="body-bullet-list"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Mobile Application Development</li>
                    <li>E-commerce </li>
                    <li>App Store</li>
                    <li>Business Development</li>
                    <li>Web Development</li>
                    <li>Digital Marketing</li>
                    <li>Web Application</li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Client{" "}
                    <span className="color-lightBlue2">Responsibilities</span>
                  </h2>
                  <ul
                    className="body-bullet-list"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Precise project requirements and objectives</li>
                    <li>Access to necessary resources and information</li>
                    <li>Timely feedback during project development phases</li>
                    <li>Payment as per the agreed terms and schedule</li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Project <span className="color-lightBlue2">Initiation</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Upon accepting a project proposal, Techverse LLC will
                    commence work according to the agreed-upon timeline and
                    scope outlined in the proposal or contract.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Payment Terms
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Payment terms will be outlined in the project proposal or
                    contract. Clients agree to adhere to these terms to maintain
                    project continuity.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Intellectual{" "}
                    <span className="color-lightBlue2">Property</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Upon full payment, the client will own all intellectual
                    property rights associated with the developed applications
                    and marketing strategies unless otherwise specified in the
                    contract.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Confidentiality
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC agrees to maintain confidentiality regarding
                    all client information and project details disclosed during
                    the term of engagement.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Liability
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC will not be liable for any indirect,
                    incidental, special, consequential, or punitive damages
                    arising out of or related to the services provided.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Termination
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Either party may terminate the engagement with a written
                    notice. Clients agree to pay for completed work up to the
                    termination date as per the agreed terms.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Governing <span className="color-lightBlue2">Law</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    These terms and conditions shall be governed by and
                    construed in accordance with the laws of Jurisdiction
                    without regard to its conflict of law provisions.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Amendments
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC reserves the right to amend these terms and
                    conditions at any time. Clients will be notified of any
                    changes, and continued use of services constitutes
                    acceptance of the amended terms.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Contact Us
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    For questions or concerns regarding these terms and
                    conditions, don't hesitate to get in touch with us.
                  </p>
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

export default Terms_condition;
