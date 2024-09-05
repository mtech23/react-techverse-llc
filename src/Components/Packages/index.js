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
    <section className="packages_sec">
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
                <span className="color-darkBlue">We offer</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="2000"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="package_card">
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
                  <h4 className="package_card_title">Basic website package</h4>
                  <span className="package_card_recomned_label">
                    Recommended
                  </span>
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
            <div className="package_card">
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
        </div>
      </div>
    </section>
  );
};

export default Packages;
