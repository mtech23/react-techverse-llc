import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Layout/Header";
import Contact_Footer from "../../Components/contact_Footer";

import "./style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Helmet from "../../Components/Helmet";

const RefundPolicy = () => {
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
                    Refund
                    <span className="color-lightBlue1"> Policy</span>
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
                    Refund Policy
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC has created this refund policy to describe the circumstances when Techverse LLC will issue a refund, the process for claiming a refund against an order and the liabilities of Techverse LLC related to a transaction ending in a refund claim. By registering for any of Techverse LLC services, you are stating that you have read and accept all of the terms and conditions.
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    The information Techverse LLC collects is used to improve the content of our web site, used to notify consumers about updates to our website or problems with their request. 
                    If you do not want to receive e-mail from us in the future, please let us know by sending an e-mail to us or by writing to us and telling us that you do not want to receive e-mail from our company.
                  </p>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Coverage & {" "}
                    <span className="color-lightBlue2">Scope</span>
                  </h2>

                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>
                      This refund policy covers the treatment of refunds by Techverse LLC and/or a website owned and operated by Techverse LLC.
                    </li>
                    <li>
                      This refund policy does not apply to the practices of companies that Techverse LLC does not own or control, or of persons that Techverse LLC does not employ or manage, including any third-party service and/or product providers bound by contract and any third-party websites to which Techverse LLC’ website link.
                    </li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Filing a  {" "}
                    <span className="color-lightBlue2">complaint</span>
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Techverse LLC believes that every project starts with a finished project in mind. Therefore, all possible attempts of amicably working out a mutually acceptable solution should be a priority in case of an unsatisfactory service.  </li>
                    <li>Ultimately, our goal is to a reach a mutually satisfactory solution. If you are unsatisfied for any reason that has caused you to think about filing a refund claim, please a few minutes to write to us at <a href="mailto:info@techversellc.com">info@techversellc.com</a> to initiate a dialog before requesting a refund.</li>
                    <li>
                      Refund claims should only be filed if we are unable to come to a mutually satisfactory solution.
                    </li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Eligibility for {" "}
                    <span className="color-lightBlue2">refund</span>
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>
                    Techverse LLC takes every project very seriously and ensures that the same is handled in a professional manner and the client gets the result as per the terms and conditions of the proposal. However, if the client is not happy with the outcome and has gone through the Customer Care Concern resolution process then he can request for refund. 
                    </li>
                  </ul>
                  {/* <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Sample
                  </p> */}
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Claim Your {" "}
                    <span className="color-lightBlue2">Refund</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    To claim your refund in accordance with our refund policy eligibility, follow the following steps:
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    You can claim your refund by:
                  </p>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Sending us an Email on <a href="mailto:info@techversellc.com">info@techversellc.com</a>.</li>
                    <li>As soon as we receive your refund request, we will respond to it at our earliest, once the required analysis is completed we will initiate the process which generally take 20-25 Working Days.</li>
                    <li>After you have received your refund, you will not have any rights to any designs/source code submitted by Techverse LLC, the information will be submitted to the Copyright Acquisition of the Government Copyright Agencies to maintain legality</li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Applicability of the <span className="color-lightBlue2">Delivery Policy</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Please note that Techverse LLC’ delivery commitment is subject to:
                  </p>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li><b>Timely payments: </b>A project is not considered to be void if the agreed upon / listed payments are not clear.</li>
                    <li><b>Timely communication from the client: </b>Techverse LLC is not bound to respect the Refund Policy, if required information for successful completion of the project is not communicated to us in a timely manner. Any delay or failure of the project arising out of such situations cannot be attributed to Techverse LLC.</li>
                    <li><b>Completeness of information provided by the client:</b>If the information provided to Techverse LLC is incomplete and/or complete information/scope of the project is not provided at the beginning of the project, Techverse LLC is not bound to maintain its delivery and /or refund commitments.</li>
                    <li>Techverse LLC will not make any compensation for the delay of delivery under any circumstances, unless there is a special agreement signed with a penalty clause for delay in delivery.</li>
                  </ul>

                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Concern 
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Client can initiate the concern with company by emailing on <a href="mailto:info@techversellc.com">info@techversellc.com</a> within the 14 days of project initialization, afterwards no request will be entertained for any kind of claims. </li>
                  </ul>
                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Limitation of {" "}
                    <span className="color-lightBlue2">Liability</span>
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Techverse LLC’ liability is limited to the value of the portion of the project (as per Techverse LLC’ proposal) which stands incomplete at any given point of time. At any point of time, Techverse LLC cannot be held responsible for losses arising out of the services delivered / not delivered or the delay in the same. The liability to refund arises only once the project has been cancelled by the client and such cancellation has been communicated to Techverse LLC in writing.</li>
                  </ul>


                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Changes
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC may at any time, without notice to you and in its sole discretion, amend this policy from time to time. Please review this policy periodically. Your continued use of Techverse LLC website after any such amendments signifies your acceptance thereof. 
                  </p>


                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Quality Assurance Policy
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    We do our best to meet your requirements and our team do their best to fulfill your expectations. We believe in providing best service and each of our service is well researched and well created. 
                  </p>

                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    We Offer Satisfaction Guarantee
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>Our unlimited revisions policy is to make sure that you are satisfied.</li>
                    <li>We aim at exceeding your expectations and strive to accomplish it. </li>
                    <li>We do not stop our revisions until you are completely satisfied with your design (number of revisions will be according to your package). </li>
                  </ul>

                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Delivery Policy 
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>The complete order will be sent to the mentioned account on the date stated on Order Confirmation as well as a confirmation email will also be sent.</li>
                    <li>The turnaround time will be according to the package, the minimum time required is 2 business days. </li>
                    <li>In case of urgent order, contact our customer support team. </li>
                  </ul>


                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Record Maintenance 
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >Techverse LLC keeps the records of finalized services so that in case of any misplaced order, you will be provided the exact file. </p>

                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Customer Support
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >Our customer support is present 5 days a week during office timings to answer all of your concerns and queries, our team will answer your concerns anytime and every time. </p>


                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    We Offer Satisfaction Guarantee
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>YOU agree that Techverse LLC is not liable for any correspondence from email address (es) other than the ones followed by our own domain i.e. “...@techversellc.com" or/and any toll-free number that is not mentioned on our website. Techverse LLC should not be held responsible for any damage(s) caused by such correspondence. We only take responsibility of any communication through email address (es) under our own domain name or/and via toll free number i.e. already mentioned on Techverse LLC Website.</li>
                    <li>We are not responsible for any damages caused due to other contact details not provided by us. </li>
                    <li>Project activation charges will apply if client fails to respond over a period of 25 days. </li>
                    <li>We take full responsibility of all the information provided through our official domains.</li>
                  </ul>



                  <h2
                    className="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Contacting Us Regarding Our Policy
                  </h2>
                  <ul
                    className="faqs_ul"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <li>If you have questions or suggestions about this refund policies please e–mail us at <a href="mailto:info@techversellc.com">info@techversellc.com</a>.</li>
                  </ul>

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

export default RefundPolicy;
