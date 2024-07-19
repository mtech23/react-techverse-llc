import React from "react";

const Frequentlyaskquestion = (props) => {
  return (
    <>
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
                          Techverse LLC offers services, including mobile
                          application development, web development, digital
                          marketing, e-commerce solutions, business development,
                          and ongoing support and maintenance for developed
                          solutions.
                        </p>
                        {/* <ul className="faqs_ul">
                          <li>Mobile Application Development</li>
                          <li>E-Commerce Development</li>
                          <li>App Store Optimization</li>
                          <li>Business Development</li>
                          <li>Web Development</li>
                          <li>Digital Marketing</li>
                          <li>Web Application Development</li>
                        </ul> */}
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
                          Techverse LLC boasts extensive experience in mobile
                          application development. It specializes in creating
                          robust, user-centric apps across various platforms.
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
                          Yes, Techverse LLC provides comprehensive e-commerce
                          development services designed to meet your business's
                          specific needs, ensuring scalable and secure
                          solutions.
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
                          results. Techverse LLC can boost your app's visibility
                          and downloads through effective ASO strategies.
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
                          Techverse LLC approaches business development by
                          understanding client goals, conducting market
                          research, developing strategic plans, and implementing
                          growth-oriented solutions to drive business success.
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
                          Techverse LLC provides a range of web development
                          services, including custom website development, CMS
                          integration, e-commerce solutions, web applications,
                          and responsive design.
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
                          Techverse LLC leverages digital marketing strategies
                          such as SEO, PPC advertising, social media marketing,
                          content marketing, and email campaigns to boost brand
                          visibility and drive customer engagement.
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
                          Web applications are software applications accessed
                          via web browsers. Techverse LLC develops customized
                          web applications using modern technologies and
                          frameworks to meet client specifications and business
                          requirements.
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
                          Yes, Techverse LLC offers comprehensive support and
                          maintenance services post-launch, ensuring optimal
                          performance, updates, and improvements for sustained
                          business operations.
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
                          To start your project with Techverse LLC, simply
                          contact us through our website or email. Our team will
                          discuss your requirements, provide consultation, and
                          outline a plan to initiate and execute your project
                          effectively.
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
    </>
  );
};

export default Frequentlyaskquestion;
