import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Layout/Header";
import Contact_Footer from "../../Components/contact_Footer";

import "./style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Helmet from "../../Components/Helmet";

const Privacy_Policy = () => {
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
        title="Our Privacy Policy Safeguards Your Information | Techverse LLC"
        description="Learn about Techverse LLC's privacy policy. We are dedicated to safeguarding your information and ensuring your data remains confidential and secure."
        keywords="Privacy Policy"
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
                    Privacy
                    <span className="color-lightBlue1">Policy</span>
                  </h1>
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
                    {/* <!-- <span className="color-lightBlue2"></span> -->Introduction */}
                    Introduction
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC ("we," "our," "us") is committed to protecting
                    the privacy of our users. This Privacy Policy outlines how
                    we collect, use, disclose, and safeguard your information
                    when you visit our website, use our services, or interact
                    with us. Please read this policy carefully to understand our
                    views and practices regarding your data and how we will
                    treat it.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    2. Information We{" "}
                    <span className="color-lightBlue2">Collect</span>
                  </h2>

                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>
                      <b>Personal Information:</b> We may collect personal
                      information such as your name, email address, phone
                      number, and company details when you voluntarily submit it
                      to us through forms on our website or through
                      communication with us.
                    </li>
                    <li>
                      <b>Usage Data:</b> We may collect non-personal information
                      about how you interact with our website and services,
                      including IP addresses, browser types, device types, and
                      pages visited. This information helps us improve our
                      services and user experience.
                    </li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    3. How We Use Your{" "}
                    <span className="color-lightBlue2">Information</span>
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Precise project requirements and objectives</li>
                    <li>To provide, operate, and maintain our services.</li>
                    <li>
                      To communicate with you, respond to your inquiries, and
                      provide support.
                    </li>
                    <li>
                      To personalize and improve our services and user
                      experience.
                    </li>
                    <li>
                      To send you promotional emails about new services, special
                      offers, or other information that we think you may find
                      interesting.
                    </li>
                    <li>To comply with legal obligations.</li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    4. How We Protect Your{" "}
                    <span className="color-lightBlue2">Information</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    We have implemented appropriate technical and organizational
                    security measures designed to protect the security of any
                    personal information we process. However, no transmission
                    over the Internet can ever be guaranteed to be secure, so we
                    cannot guarantee the absolute security of any information
                    transmitted to us.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Sharing Your{" "}
                    <span className="color-lightBlue2">Information</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    We do not sell, trade, or otherwise transfer your personal
                    information to outside parties. However, we may share your
                    information with trusted third parties who assist us in
                    operating our website, conducting our business, or servicing
                    you, as long as those parties agree to keep this information
                    confidential.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    6. Your <span className="color-lightBlue2">Rights</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    You have the right to access the personal information we
                    hold about you and to ask that your personal information be
                    corrected, updated, or deleted. You may also object to the
                    processing of your personal information, restrict its
                    processing, or request its portability. To exercise these
                    rights, please get in touch with us using the information
                    provided below.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    7. Changes to This{" "}
                    <span className="color-lightBlue2">Privacy Policy</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    We may update this Privacy Policy from time to time in order
                    to reflect, for example, changes to our practices or for
                    other operational, legal, or regulatory reasons.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    8. Contact Us
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    If you have any questions about this Privacy Policy, please
                    get in touch with us.
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

export default Privacy_Policy;
