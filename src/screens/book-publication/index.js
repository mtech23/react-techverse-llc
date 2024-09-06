import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import Process from "../../Components/Process";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import TrustedPartners from "../../Components/TrustedPartners";
import Portfolio from "../../Components/Portfolio";

import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import digitalmarketinghero from "../../asserts/images/digital-marketing-hero.webp";
import digitalmarketing01 from "../../asserts/images/digital-marketing-01.webp";
import digitalmarketing02 from "../../asserts/images/digital-marketing-02.webp";

import digitalmarketing0111 from "../../asserts/images/digital-marketing-0111.png";
import bookPublicationImg2 from "../../asserts/images/book-publication-img-2.png";
import bookPublicationImg44 from "../../asserts/images/book-publication-img44.png";
// import digitalmarketing0222 from "../../asserts/images/digital-marketing-0222.png";
import brandingImg3 from "../../asserts/images/book-publication-img-3.png";
import bookPublicationImg3After from "../../asserts/images/book-publication-img-2-after.png";
import Helmet from "../../Components/Helmet";
import Packages from "../../Components/Packages";

import chaticons from "../../../src/asserts/images/chat-icon-blue.webp";
import phoneicongreen from "../../../src/asserts/images/phone-icon-green.webp";

import mobileAppimg from "../../../src/asserts/images/mobileAppimg.webp";
import ElevateyourbusinessImg from "../../../src/asserts/images/ElevateyourbusinessImg.png";

import chaticonblue from "../../asserts/images/phone-icon-green.webp";
import donateWhite from "../../asserts/images/donate-white.webp";
import peramidicon from "../../asserts/images/peramid-icon.webp";

import seoIconTop from "../../asserts/images/seo-icon-top.png";
import seoIconBottom from "../../asserts/images/seo-icon-bottom.png";
import ServiceParticle from "../../Components/ServiceParticle/ServiceParticle";
import orangecircle from "../../asserts/images/orange-circle.webp";

import donatewhitesmall from "../../asserts/images/donate-white-small.webp";
import orangehalfcircle from "../../asserts/images/orange-half-circle.webp";
import bluecube from "../../asserts/images/blue-cube.webp";

import youtubeMarketingIcon from "../../asserts/images/business-logo-icon.png";
import socialMarketingIcon from "../../asserts/images/custom-logo-icon.png";
import amazonMarketingIcon from "../../asserts/images/graphic-design-icon.png";
import emailMarketingIcon from "../../asserts/images/business-card-icon.png";
import smsMarketingIcon from "../../asserts/images/enter-prize-icon.png";
import crossplatform from "../../asserts/images/cross-platform.webp";

import brandingbannerImg from "../../asserts/images/book-publication-banner-img.png";
import logoDesignSecImg from "../../asserts/images/logo-design-sec-img.png";
import penImage from "../../asserts/images/pen-img.png";
import PortfoliosTech from "../../Components/PortfoliosTech";

import {
  recomendedcardbg,
  chatIconPurple,
  phoneIconPurple,
  recomendedChatIcon,
  recomendedPhoneIcon,
} from "../../asserts/images";

import Testimonials from "../../Components/Testimonials";

gsap.registerPlugin(MotionPathPlugin);

const BookPublication = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="#1 Digital Marketing Services in California, USA | Techverse LLC"
        description="Techverse LLC provides professional digital marketing services in California, USA. Boost your sales, Take your brand to the next level with our proven strategies"
        keywords="Digital Marketing Services"
      />
      <HeroSection
        innerbgclass="inner-bgColor"
        title="Innovative  "
        subtitle=" Publishing"
        title2="  For A New Era    "
        tagline={`At Techverse LLC, we redefine book publishing with our "Innovative Publishing For A New Era" philosophy. We leverage state-of-the-art technology and forward-thinking strategies to transform your manuscript into a polished, market-ready masterpiece. Our approach integrates advanced digital tools with creative insights, offering streamlined processes from editing and design to distribution. This ensures your book not only meets the highest industry standards but also resonates deeply with today's tech-savvy readers`}
        className="digital-marketing-hero"
        heroimage={brandingbannerImg}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",

          // playstore: playstore,
          // appstore: appstore
        }}
      />
      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      {/* <!-- About Sec --> */}

      <Aboutsection
        classSpace="branding-about-sec"
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title="Professional Publishing "
        subtitle="For Your Unique Voice "
        // title2=""
        para="At Techverse LLC, we understand that every author has a unique voice and story to tell. Our book publishing service is designed to bring your distinct narrative to life with the utmost professionalism. From meticulous editing and high-quality formatting to strategic marketing and distribution, we provide a comprehensive suite of services personalized to showcase your individuality and ensure your book stands out in the market. Trust Techverse LLC to turn your manuscript into a polished, compelling work that resonates with readers and reflects your unique vision."
        para2=""
        CtnbuttonComponent={Ctnbutton}
        // ctnButtonProps={{
        //   phoneicon: phoneicon,
        //   calltext: "Call Now",
        //   primaryButtonClass: "btn_with_icon",
        //   chaticon: chaticon,
        //   chatenow: "Chat Now",
        //   secondaryButtonClass: "btn_with_icon btn_secondary  ",
        // }}
        image={bookPublicationImg2}
        bulletListItems={[
          "10+ Years of Experience",
          "2k+ Satisfied Clients",
          "A Team of 50+ Digital Marketing Experts",
          "150+ Ongoing Projects",
        ]}
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        eduHR="bookPublishImg3"
        classtitle="color-darkBlue"
        title="Publishing Solutions  "
        subtitle=" Designed For Success "
        // title2=""
        para="At Techverse LLC, we make your book from manuscript to marketplace with unparalleled efficiency and impact. We understand that the path to successful publishing is multifaceted, which is why our services encompass every aspect of the process. From careful manuscript evaluation to professional editing and design, we ensure your book meets the highest standards. Our team leverages advanced technology and industry expertise to streamline production, allowing you to focus on your creative vision while we handle the technical and logistical details."
        para1="Moreover, our strategic approach to distribution and marketing is designed to maximize your book’s visibility and reach. We collaborate with you to develop targeted marketing strategies, optimize online presence, and explore diverse distribution channels. At Techverse LLC, we are committed to transforming your publishing ambitions into reality, providing support and solutions that drive success. With our dedication to excellence and personalized service, we turn your book into a standout achievement in the competitive literary landscape."
        // para2=""
        image={brandingImg3}
        imgAfter={bookPublicationImg3After}
        imgAfterClass="imgAfterClass"
        chaticon={chaticon}
        phoneicon={phoneicon}
      />

      {/* MOBILE APP */}

      {/* <Elevateyourbusiness /> */}
      <section className="techVerse_mobileApp techVerse_mobileAppBookPublication">
        <div className="techVerse_mobileAppContent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6">
                <div className="techVerse_mobileApp_content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Where Every Manuscript Becomes A Published Success
                      {/* <span className="color-lightBlue2"> Branding</span> */}
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, our book publishing service is dedicated
                      to transforming every manuscript into a published success.
                      We provide a seamless journey from initial concept to the
                      final print, ensuring that each author's vision is brought
                      to life with the highest quality. Our expert team handles
                      everything from editing and formatting to cover design and
                      distribution, allowing you to focus on what matters
                      most—your story.
                    </p>
                    <div
                      className="techVerse_hero_btns"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                        <img
                          className="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          +(1) 23456-7890
                        </span>
                      </a>
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={chaticons}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          {" "}
                          Start A Live Chat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 px-0">
                <div className="techVerse_mobileApp_img techVerse_mobileApp_bookPublicationImg">
                  <img
                    src={bookPublicationImg44}
                    alt=""
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Packages /> */}
      <Packages />
      {/* <section className="packages_sec bookPublication_packages_sec">
        <div className="container-fluid width-1600">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_title text-center">
                <h2
                  className="sec_title_head color-lightBlue2"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Packages
                  <span className="color-darkBlue"> We offer</span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="package_card special_offer">
                <div className="package_card_head">
                  <div className="package_card_title_div">
                    <h4 className="package_card_title">
                      <span className="color-lightBlue2">Professional</span>
                      <span className="color-darkBlue"> website package</span>
                    </h4>
                  </div>
                  <p className="package_card_p">Basic design solution</p>
                  <div className="package_card_price">
                    <p className="package_card_actual_price">$149</p>
                    <p className="package_card_discount_price">
                      50% off <br />
                      <span className="discount_price">$300</span>
                    </p>
                  </div>
                  <button type="button" className="package_card_btn">
                    Place Your order
                  </button>
                  <p className="package_card_deliveryText">
                    Rush delivery : $500
                  </p>
                </div>
                <div className="package_card_body">
                  <ul>
                    <li>3 pages website</li>
                    <li>3 banner design</li>
                    <li>5 stock photos</li>
                    <li>1 jQuery slider banner</li>
                    <li>Complete W3C certified HTML</li>
                    <li>48 to 72 hours TAT</li>
                    <li>Facebook page design</li>
                    <li>Twitter page design</li>
                    <li>YouTube page design</li>
                    <li>100% satisfaction guarantee</li>
                    <li>100% unique design guarantee</li>
                    <li>100% money back guarantee *</li>
                  </ul>
                </div>
                <div className="package_card_footer">
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={chatIconPurple}
                      alt=""
                    />
                    <span className="btn_with_icon_text">Live Chat</span>
                  </a>
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={phoneIconPurple}
                      alt=""
                    />
                    <span className="btn_with_icon_text">+1-817-783-1583</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="package_card package_card_recomended">
                <div className="package_card_head">
                  <div className="package_card_title_div">
                    <h4 className="package_card_title">
                      Startup website package
                    </h4>
                    <span className="package_card_recomned_label">
                      Recommended
                    </span>
                  </div>
                  <p className="package_card_p">Affordable design solution</p>
                  <div className="package_card_price">
                    <p className="package_card_actual_price">$149</p>
                    <p className="package_card_discount_price">
                      50% off <br />
                      <span className="discount_price">$600</span>
                    </p>
                  </div>
                  <button type="button" className="package_card_btn">
                    Place Your order
                  </button>
                  <p className="package_card_deliveryText">
                    Rush delivery : $500
                  </p>
                </div>
                <div className="package_card_body">
                  <ul>
                    <li>5 unique pages website</li>
                    <li>CMS / admin panel support</li>
                    <li>8 stock images</li>
                    <li>5 banner designs</li>
                    <li>1 jQuery slider banner</li>
                    <li>FREE google friendly sitemap</li>
                    <li>Complete W3C certified HTML</li>
                    <li>48 to 72 hours TAT</li>
                    <li>Facebook page design</li>
                    <li>Twitter page design</li>
                    <li>YouTube page design</li>
                    <li>Complete deployment</li>
                    <li>100% satisfaction guarantee</li>
                    <li>100% unique design guarantee</li>
                    <li>100% money back guarantee *</li>
                  </ul>
                </div>
                <div className="package_card_footer">
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={recomendedChatIcon}
                      alt=""
                    />
                    <span className="btn_with_icon_text">Live Chat</span>
                  </a>
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={recomendedPhoneIcon}
                      alt=""
                    />
                    <span className="btn_with_icon_text">+1-817-783-1583</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="package_card">
                <div className="package_card_head">
                  <div className="package_card_title_div">
                    <h4 className="package_card_title">
                      <span className="color-lightBlue2">Professional </span>
                      <span className="color-darkBlue"> website package</span>
                    </h4>
                  </div>
                  <p className="package_card_p">Premium design solution</p>
                  <div className="package_card_price">
                    <p className="package_card_actual_price">$149</p>
                    <p className="package_card_discount_price">
                      50% off <br />
                      <span className="discount_price">$1000</span>
                    </p>
                  </div>
                  <button type="button" className="package_card_btn">
                    Place Your order
                  </button>
                  <p className="package_card_deliveryText">
                    Rush delivery : $500
                  </p>
                </div>
                <div className="package_card_body">
                  <ul>
                    <li>8-10 pages website</li>
                    <li>Conceptual and dynamic website</li>
                    <li>Online payment integration</li>
                    <li>Online booking tool</li>
                    <li>Content management system</li>
                    <li>Mobile responsive website</li>
                    <li>Custom forms</li>
                    <li>Lead capturing forms</li>
                    <li>Striking hover effects</li>
                    <li>Newsletter subscription</li>
                    <li>Newsfeed integration</li>
                    <li>Social media integration</li>
                    <li>Search engine submission</li>
                    <li>5 Stock Photos</li>
                    <li>3 Unique Banner Design</li>
                    <li>1 jQuery slider banner</li>
                    <li>Complete W3C certified HTML</li>
                    <li>48 to 72 hours TAT</li>
                    <li>Facebook page design</li>
                    <li>YouTube page design</li>
                    <li>Complete deployment</li>
                    <li>100% satisfaction guarantee</li>
                    <li>100% unique design guarantee</li>
                    <li>100% money back guarantee *</li>
                  </ul>
                </div>
                <div className="package_card_footer">
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={chatIconPurple}
                      alt=""
                    />
                    <span className="btn_with_icon_text">Live Chat</span>
                  </a>
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={phoneIconPurple}
                      alt=""
                    />
                    <span className="btn_with_icon_text">+1-817-783-1583</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="package_card">
                <div className="package_card_head">
                  <div className="package_card_title_div">
                    <h4 className="package_card_title">
                      <span className="color-lightBlue2">Elite</span>
                      <span className="color-darkBlue"> website package</span>
                    </h4>
                  </div>
                  <p className="package_card_p">Smart design solution</p>
                  <div className="package_card_price">
                    <p className="package_card_actual_price">$149</p>
                    <p className="package_card_discount_price">
                      50% off <br />
                      <span className="discount_price">$1200</span>
                    </p>
                  </div>
                  <button type="button" className="package_card_btn">
                    Place Your order
                  </button>
                  <p className="package_card_deliveryText">
                    Rush delivery : $500
                  </p>
                </div>
                <div className="package_card_body">
                  <ul>
                    <li>10 unique pages website design</li>
                    <li>Custom, interactive, dynamic & high end design</li>
                    <li>Customize WordPress (or) PHP development</li>
                    <li>Interactive sliding banners</li>
                    <li>10 stock images</li>
                    <li>10 banner designs</li>
                    <li>Special hover effects</li>
                    <li>Unlimited revisions</li>
                    <li>Content management system (WordPress or Custom)</li>
                    <li>Mobile responsive</li>
                    <li>10 professional email ID's</li>
                    <li>Google friendly sitemap</li>
                    <li>Search engine submission</li>
                    <li>Complete W3C certified HTML</li>
                    <li>
                      Industry specified team of award winning designers and
                      developers
                    </li>
                    <li>Complete deployment</li>
                    <li>Value added services</li>
                    <li>Dedicated project panager</li>
                    <li>100% ownership rights</li>
                    <li>100% satisfaction guarantee</li>
                    <li>100% oney back guarantee</li>
                    <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
                    <li>You'll get</li>
                    <li>90 days free maintenance (Post-launch support)</li>
                    <li>How-to-use training manual for CMS</li>
                    <li>
                      Industry specified team of expert designers and developers
                    </li>
                    <li>Dedicated account manager</li>
                    <li>24/7 customer support</li>
                    <li>100% satisfaction guarantee</li>
                    <li>100% unique design guarantee</li>
                    <li>Money back Guarantee</li>
                    <li>100% ownership rights</li>
                  </ul>
                </div>
                <div className="package_card_footer">
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={chatIconPurple}
                      alt=""
                    />
                    <span className="btn_with_icon_text">Live Chat</span>
                  </a>
                  <a href="#" className="btn_with_icon">
                    <img
                      className="btn_with_icon_img"
                      src={phoneIconPurple}
                      alt=""
                    />
                    <span className="btn_with_icon_text">+1-817-783-1583</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* process we use */}
      <Process para="At Techverse LLC, we begin with a thorough consultation to understand your business needs and goals. We then create a customized strategy and design drafts, incorporating your feedback. After finalizing the design, we handle robust development and rigorous testing. Our process concludes with ongoing support and maintenance, ensuring a seamless and innovative online presence for your business." />

      <section className="connect_min_sec">
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="connect_min_img">
                  <img src={penImage} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="connect_min_content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Optimize Your Operations Contact Us For A Free Assessment!
                      {/* <span className="color-lightBlue2"> Branding</span> */}
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Our team of experts is dedicated to providing personalized
                      solutions that enhance efficiency and drive growth.
                      Whether you need to refine your website, optimize internal
                      processes, or implement new technologies, we offer a
                      comprehensive free assessment to identify opportunities
                      for improvement.
                    </p>
                    <div
                      className="techVerse_hero_btns"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                        <img
                          className="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          +(1) 23456-7890
                        </span>
                      </a>
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={chaticons}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          {" "}
                          Start A Live Chat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* <!-- Technologies --> */}
      {/* <TechnologiesUse /> */}

      {/* FAQ section */}

      {/* <Frequentlyaskquestion /> */}
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
                            What is book publishing, and how can Techverse LLC
                            help?
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
                          Book publishing is the process of preparing and
                          releasing a book to the public. At Techverse LLC, we
                          help authors with every step of the publishing
                          process, including editing, formatting, designing the
                          cover, and managing distribution. We make sure your
                          book is polished and ready for readers.
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
                            What does branding involve, and why is it important?
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
                          Branding is creating a unique image and identity for
                          your business. It includes your logo, colors, and
                          messaging. Good branding helps you stand out from
                          competitors and build a strong connection with your
                          customers. Techverse LLC can help you develop a
                          compelling brand that represents your business well.
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
                            What is ecommerce website development, and what
                            services do you offer?
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
                          Ecommerce website development is creating and setting
                          up an online store where you can sell products or
                          services. Techverse LLC builds user-friendly and
                          secure ecommerce websites that make it easy for
                          customers to shop. We handle everything from setting
                          up the shopping cart to payment processing.
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
                            How does website design differ from website
                            development?
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
                          Website design focuses on how a website looks,
                          including its layout, colors, and images. Website
                          development is about making the site work, including
                          coding and functionality. Techverse LLC offers both
                          services to ensure your website is both beautiful and
                          functional.
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
                            What is digital marketing, and how can Techverse LLC
                            assist with it?
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
                          Digital marketing is promoting your business online
                          through channels like social media, email, and search
                          engines. It helps attract and engage customers.
                          Techverse LLC provides digital marketing services to
                          boost your online presence, increase traffic, and
                          drive sales.
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
    </UserLayout>
  );
};

export default BookPublication;
