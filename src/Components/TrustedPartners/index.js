import React from "react";
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";
import tpblue from "./.././../asserts/images/t-p-blue.png";
import tpblack from "./.././../asserts/images/t-p-black.png";

// import partnerImg1 from "../../asserts/images/partner-img-1.png";
// import partnerImg2 from "../../asserts/images/partner-img-2.png";
// import partnerImg3 from "../../asserts/images/partner-img-3.png";
// import partnerImg4 from "../../asserts/images/partner-img-4.png";
// import partnerImg5 from "../../asserts/images/partner-img-5.png";
// import partnerImg6 from "../../asserts/images/partner-img-6.png";
// import partnerImg7 from "../../asserts/images/partner-img-7.png";
// import partnerImg8 from "../../asserts/images/partner-img-8.png";

// import innerTpImg1 from "../../asserts/images/inner-tp-img-1.png";
// import innerTpImg2 from "../../asserts/images/inner-tp-img-2.png";
// import innerTpImg3 from "../../asserts/images/inner-tp-img-3.png";
// import innerTpImg4 from "../../asserts/images/inner-tp-img-4.png";
// import innerTpImg5 from "../../asserts/images/inner-tp-img-5.png";
// import innerTpImg6 from "../../asserts/images/inner-tp-img-6.png";
// import innerTpImg7 from "../../asserts/images/inner-tp-img-7.png";
// import innerTpImg8 from "../../asserts/images/inner-tp-img-8.png";

import innerTpImg1 from "../../asserts/images/inner-tp-img-1.svg";
import innerTpImg2 from "../../asserts/images/inner-tp-img-2.svg";
import innerTpImg3 from "../../asserts/images/inner-tp-img-3.svg";
import innerTpImg4 from "../../asserts/images/inner-tp-img-4.svg";
import innerTpImg5 from "../../asserts/images/inner-tp-img-5.svg";
import innerTpImg6 from "../../asserts/images/inner-tp-img-6.svg";
import innerTpImg7 from "../../asserts/images/inner-tp-img-7.svg";
import innerTpImg8 from "../../asserts/images/inner-tp-img-8.svg";

import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";

const TrustedPartners = (props) => {
  return (
    <div>
      <section class="techVerse_trustedPartners techVerse_trustedPartnersServices">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="row flex-nowrap gap-4 custom_trusted_partners_seprator">
                {/* <marquee>
                  <div class="trustedPartners">
                    <div class="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblue} alt="" />
                    </div>
                    <div class="trustedPartner col">
                      <img src={tpblack} alt="" />
                    </div>
                  </div>
                </marquee> */}
                <div class="marquee-container trusted-partnerContainer">
                  <div class="marquee">
                    {/* <div class="trustedPartners">
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                    </div> */}
                    <div class="trustedPartners">
                      <div class="trustedPartner col">
                        <img src={innerTpImg1} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg2} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg3} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg4} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg5} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg6} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg7} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg8} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg1} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg2} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg3} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg4} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg5} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg6} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg7} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={innerTpImg8} alt="" />
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

export default TrustedPartners;
