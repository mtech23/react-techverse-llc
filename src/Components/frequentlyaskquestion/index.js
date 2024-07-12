import React from "react";
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";

import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";

const Frequentlyaskquestion = (props) => {
  return (
    <div>
      {/* <!-- FAQS Section --> */}
      {/* <!-- FAQS Section --> */}
      {/* <section class="width-1600 techVerse_faqs">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="sec_title text-center">
                <h2 class="sec_title_head color-lightBlue2">
                  FREQUENTLY
                  <span class="color-darkBlue">ASKED QUESTIONS</span>
                </h2>
              </div>
            </div>

            <div class="col-md-9 col-lg-6">
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <span class="numbering">01.</span>
                        <span class="card_btn_content">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry.
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class=" btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span class="numbering">02.</span>
                        <span class="card_btn_content">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry.
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button
                        class=" btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span class="numbering">03.</span>
                        <span class="card_btn_content">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry.
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9 col-lg-6">
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingfour">
                    <h5 class="mb-0">
                      <button
                        class=" btn-link"
                        data-toggle="collapse"
                        data-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        <span class="numbering">04.</span>
                        <span class="card_btn_content">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry.
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapsefour"
                    class="collapse"
                    aria-labelledby="headingfour"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingfive">
                    <h5 class="mb-0">
                      <button
                        class=" btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        <span class="numbering">05.</span>
                        <span class="card_btn_content">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry.
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapsefive"
                    class="collapse"
                    aria-labelledby="headingfive"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingsix">
                    <h5 class="mb-0">
                      <button
                        class=" btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"
                      >
                        <span class="numbering">06.</span>
                        <span class="card_btn_content">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry.
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapsesix"
                    class="collapse"
                    aria-labelledby="headingsix"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="techVerse_faqs">
        <div className="width-1600 faqs-container-parent">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="sec_title text-center">
                  <h2 className="sec_title_head color-lightBlue2">
                    FREQUENTLY
                    <span className="color-darkBlue"> ASKED QUESTIONS</span>
                  </h2>
                </div>
              </div>

              <div className="col-md-9 col-lg-6">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <span className="numbering">01.</span>
                          <span className="card_btn_content">
                            {" "}
                            What services does Techverse LLC provide?
                          </span>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Techverse LLC specializes in a range of services,
                          including:
                        </p>
                        <ul className="faqs_ul">
                          <li>Mobile Application Development</li>
                          <li>E-Commerce Development</li>
                          <li>App Store Optimization</li>
                          <li>Business Development</li>
                          <li>Web Development</li>
                          <li>Digital Marketing</li>
                          <li>Web Application Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className="numbering">02.</span>
                          <span className="card_btn_content">
                            How experienced is Techverse LLC in mobile
                            application development?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Techverse LLC has extensive experience in mobile
                          application development, having successfully delivered
                          numerous projects across various platforms, including
                          iOS and Android.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className="numbering">03.</span>
                          <span className="card_btn_content">
                            Can Techverse LLC help in develop an e-commerce
                            platform for my business?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Yes, Techverse LLC offers comprehensive e-commerce
                          development services tailored to meet your business
                          needs. We create scalable and secure e-commerce
                          solutions that drive sales and enhance user
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          <span className="numbering">04.</span>
                          <span className="card_btn_content">
                            What is App Store Optimization (ASO) and how can
                            Techverse LLC assist?
                          </span>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapsefour"
                      className="collapse"
                      aria-labelledby="headingfour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          App Store Optimization (ASO) involves optimizing
                          mobile apps to rank higher in app store search
                          results. Techverse LLC provides ASO services to
                          improve app visibility, increase downloads, and
                          enhance app performance metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfive">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          <span className="numbering">05.</span>
                          <span className="card_btn_content">
                            How does Techverse LLC approach business development
                            services?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsefive"
                      className="collapse"
                      aria-labelledby="headingfive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Techverse LLC offers strategic business development
                          services aimed at identifying growth opportunities,
                          expanding market reach, and enhancing business
                          profitability through innovative solutions and
                          partnerships.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9 col-lg-6">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingsix">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapsesix"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          <span className="numbering">06.</span>
                          <span className="card_btn_content">
                            What types of web development services does
                            Techverse LLC offer?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsesix"
                      className="collapse"
                      aria-labelledby="headingsix"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Techverse LLC provides customized web development
                          solutions ranging from static websites to dynamic web
                          applications, ensuring responsive design, robust
                          functionality, and seamless user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingseven">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseseven"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          <span className="numbering">07.</span>
                          <span className="card_btn_content">
                            How can Techverse LLC help in digital marketing
                            efforts?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseseven"
                      className="collapse"
                      aria-labelledby="headingseven"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Techverse LLC offers comprehensive digital marketing
                          services, including SEO, PPC advertising, social media
                          marketing, content marketing, and more. We tailor
                          strategies to boost online visibility and drive
                          targeted traffic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingeight">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseeight"
                          aria-expanded="false"
                          aria-controls="collapseeight"
                        >
                          <span className="numbering">08.</span>
                          <span className="card_btn_content">
                            What are web applications, and how does Techverse
                            LLC develop them?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseeight"
                      className="collapse"
                      aria-labelledby="headingeight"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Web applications are dynamic software programs
                          accessible via web browsers. Techverse LLC specializes
                          in developing scalable, secure, and feature-rich web
                          applications to meet specific business requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingnine">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapsenine"
                          aria-expanded="false"
                          aria-controls="collapsenine"
                        >
                          <span className="numbering">09.</span>
                          <span className="card_btn_content">
                            Does Techverse LLC provide ongoing support and
                            maintenance for developed solutions?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsenine"
                      className="collapse"
                      aria-labelledby="headingnine"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Yes, Techverse LLC offers reliable support and
                          maintenance services post-development. We ensure that
                          your applications and websites remain secure, updated,
                          and optimized for performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingten">
                      <h5 className="mb-0">
                        <button
                          className=" btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseten"
                          aria-expanded="false"
                          aria-controls="collapseten"
                        >
                          <span className="numbering">10.</span>
                          <span className="card_btn_content">
                            How can I get started with Techverse LLC for my
                            project?
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseten"
                      className="collapse"
                      aria-labelledby="headingten"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          To get started with Techverse LLC, get to us via our
                          site or contact us straight, and our team will engage
                          with you to discuss your project requirements,
                          offering personalized solutions tailored to your
                          needs. detailed proposal, and guide you through the
                          development process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frequentlyaskquestion;
