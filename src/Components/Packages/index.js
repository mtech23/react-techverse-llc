import React from "react";

import {
  recomendedcardbg,
  chatIconPurple,
  phoneIconPurple,
  recomendedChatIcon,
  recomendedPhoneIcon,
} from "../../asserts/images";

const Packages = (props) => {
  return (
    // <section className="packages_sec">
    //   <div className="container-fluid width-1600">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <div className="sec_title text-center">
    //           <h2
    //             className="sec_title_head color-lightBlue2"
    //             data-aos="fade-up"
    //             data-aos-offset="0"
    //             data-aos-duration="1000"
    //           >
    //             Packages
    //             <span className="color-darkBlue"> We offer</span>
    //           </h2>
    //           <p
    //             data-aos="fade-up"
    //             data-aos-offset="0"
    //             data-aos-duration="2000"
    //           >
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy
    //             text ever since the 1500s,
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-md-6">
    //         <div className="package_card">
    //           <div className="package_card_head">
    //             <div className="package_card_title_div">
    //               <h4 className="package_card_title">
    //                 <span className="color-lightBlue2">Basic</span>
    //                 <span className="color-darkBlue"> website package</span>
    //               </h4>
    //             </div>
    //             <p className="package_card_p">Basic design solution</p>
    //             <div className="package_card_price">
    //               <p className="package_card_actual_price">$149</p>
    //               <p className="package_card_discount_price">
    //                 50% off <br />
    //                 <span className="discount_price">$300</span>
    //               </p>
    //             </div>
    //             <button type="button" className="package_card_btn">
    //               Place Your order
    //             </button>
    //             <p className="package_card_deliveryText">
    //               Rush delivery : $500
    //             </p>
    //           </div>
    //           <div className="package_card_body">
    //             <ul>
    //               <li>3 pages website</li>
    //               <li>3 banner design</li>
    //               <li>5 stock photos</li>
    //               <li>1 jQuery slider banner</li>
    //               <li>Complete W3C certified HTML</li>
    //               <li>48 to 72 hours TAT</li>
    //               <li>Facebook page design</li>
    //               <li>Twitter page design</li>
    //               <li>YouTube page design</li>
    //               <li>100% satisfaction guarantee</li>
    //               <li>100% unique design guarantee</li>
    //               <li>100% money back guarantee *</li>
    //             </ul>
    //           </div>
    //           <div className="package_card_footer">
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={chatIconPurple}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">Live Chat</span>
    //             </a>
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={phoneIconPurple}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">+1-817-783-1583</span>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-md-6">
    //         <div className="package_card package_card_recomended">
    //           <div className="package_card_head">
    //             <div className="package_card_title_div">
    //               <h4 className="package_card_title">
    //                 Startup website package
    //               </h4>
    //               <span className="package_card_recomned_label">
    //                 Recommended
    //               </span>
    //             </div>
    //             <p className="package_card_p">Affordable design solution</p>
    //             <div className="package_card_price">
    //               <p className="package_card_actual_price">$299</p>
    //               <p className="package_card_discount_price">
    //                 50% off <br />
    //                 <span className="discount_price">$600</span>
    //               </p>
    //             </div>
    //             <button type="button" className="package_card_btn">
    //               Place Your order
    //             </button>
    //             <p className="package_card_deliveryText">
    //               Rush delivery : $500
    //             </p>
    //           </div>
    //           <div className="package_card_body">
    //             <ul>
    //               <li>5 unique pages website</li>
    //               <li>CMS / admin panel support</li>
    //               <li>8 stock images</li>
    //               <li>5 banner designs</li>
    //               <li>1 jQuery slider banner</li>
    //               <li>FREE google friendly sitemap</li>
    //               <li>Complete W3C certified HTML</li>
    //               <li>48 to 72 hours TAT</li>
    //               <li>Facebook page design</li>
    //               <li>Twitter page design</li>
    //               <li>YouTube page design</li>
    //               <li>Complete deployment</li>
    //               <li>100% satisfaction guarantee</li>
    //               <li>100% unique design guarantee</li>
    //               <li>100% money back guarantee *</li>
    //             </ul>
    //           </div>
    //           <div className="package_card_footer">
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={recomendedChatIcon}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">Live Chat</span>
    //             </a>
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={recomendedPhoneIcon}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">+1-817-783-1583</span>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-md-6">
    //         <div className="package_card">
    //           <div className="package_card_head">
    //             <div className="package_card_title_div">
    //               <h4 className="package_card_title">
    //                 <span className="color-lightBlue2">Professional </span>
    //                 <span className="color-darkBlue"> website package</span>
    //               </h4>
    //             </div>
    //             <p className="package_card_p">Premium design solution</p>
    //             <div className="package_card_price">
    //               <p className="package_card_actual_price">$499</p>
    //               <p className="package_card_discount_price">
    //                 50% off <br />
    //                 <span className="discount_price">$1000</span>
    //               </p>
    //             </div>
    //             <button type="button" className="package_card_btn">
    //               Place Your order
    //             </button>
    //             <p className="package_card_deliveryText">
    //               Rush delivery : $500
    //             </p>
    //           </div>
    //           <div className="package_card_body">
    //             <ul>
    //               <li>8-10 pages website</li>
    //               <li>Conceptual and dynamic website</li>
    //               <li>Online payment integration</li>
    //               <li>Online booking tool</li>
    //               <li>Content management system</li>
    //               <li>Mobile responsive website</li>
    //               <li>Custom forms</li>
    //               <li>Lead capturing forms</li>
    //               <li>Striking hover effects</li>
    //               <li>Newsletter subscription</li>
    //               <li>Newsfeed integration</li>
    //               <li>Social media integration</li>
    //               <li>Search engine submission</li>
    //               <li>5 Stock Photos</li>
    //               <li>3 Unique Banner Design</li>
    //               <li>1 jQuery slider banner</li>
    //               <li>Complete W3C certified HTML</li>
    //               <li>48 to 72 hours TAT</li>
    //               <li>Facebook page design</li>
    //             </ul>
    //           </div>
    //           <div className="package_card_footer">
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={chatIconPurple}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">Live Chat</span>
    //             </a>
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={phoneIconPurple}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">+1-817-783-1583</span>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-md-6">
    //         <div className="package_card">
    //           <div className="package_card_head">
    //             <div className="package_card_title_div">
    //               <h4 className="package_card_title">
    //                 <span className="color-lightBlue2">Elite</span>
    //                 <span className="color-darkBlue"> website package</span>
    //               </h4>
    //             </div>
    //             <p className="package_card_p">Smart design solution</p>
    //             <div className="package_card_price">
    //               <p className="package_card_actual_price">$599</p>
    //               <p className="package_card_discount_price">
    //                 50% off <br />
    //                 <span className="discount_price">$1200</span>
    //               </p>
    //             </div>
    //             <button type="button" className="package_card_btn">
    //               Place Your order
    //             </button>
    //             <p className="package_card_deliveryText">
    //               Rush delivery : $500
    //             </p>
    //           </div>
    //           <div className="package_card_body">
    //             <ul>
    //               <li>10 unique pages website design</li>
    //               <li>Custom, interactive, dynamic & high end design</li>
    //               <li>Customize WordPress (or) PHP development</li>
    //               <li>Interactive sliding banners</li>
    //               <li>10 stock images</li>
    //               <li>10 banner designs</li>
    //               <li>Special hover effects</li>
    //               <li>Unlimited revisions</li>
    //               <li>Content management system (WordPress or Custom)</li>
    //               <li>Mobile responsive</li>
    //               <li>10 professional email ID's</li>
    //               <li>Google friendly sitemap</li>
    //               <li>Search engine submission</li>
    //               <li>Complete W3C certified HTML</li>
    //               <li>
    //                 Industry specified team of award winning designers and
    //                 developers
    //               </li>
    //               <li>Complete deployment</li>
    //               <li>Value added services</li>
    //               <li>Dedicated project manager</li>
    //               <li>100% ownership rights</li>
    //               <li>100% satisfaction guarantee</li>
    //               <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
    //               <li>You'll get</li>
    //               <li>90 days free maintenance (Post-launch support)</li>
    //               <li>How-to-use training manual for CMS</li>
    //               <li>
    //                 Industry specified team of expert designers and developers
    //               </li>
    //               <li>Dedicated account manager</li>
    //               <li>24/7 customer support</li>
    //               <li>100% unique design guarantee</li>
    //               <li>Money back Guarantee</li>
    //             </ul>
    //           </div>
    //           <div className="package_card_footer">
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={chatIconPurple}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">Live Chat</span>
    //             </a>
    //             <a href="#" className="btn_with_icon">
    //               <img
    //                 className="btn_with_icon_img"
    //                 src={phoneIconPurple}
    //                 alt=""
    //               />
    //               <span className="btn_with_icon_text">+1-817-783-1583</span>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="packages_sec bookPublication_packages_sec">
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
                At Techverse LLC, we offer a range of comprehensive packages
                designed to meet the diverse needs of businesses and individuals
                seeking top-notch digital solutions.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="package_card special_offer">
              <div className="package_card_head">
                <div className="package_card_title_div">
                  <h4 className="package_card_title">
                    <span className="color-lightBlue2">Basic</span>
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
    </section>
  );
};

export default Packages;
