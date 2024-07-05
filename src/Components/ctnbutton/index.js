import React from 'react'
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
const Ctnbutton = (props) => {


    return (
        <div>

            <div
                class="techVerse_hero_btns"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="3000"
            >
              

                {props.primaryButtonClass && (
                      <a href="#" className={props?.primaryButtonClass}>
                      <img
                          class="btn_with_icon_img"
                          src={props?.phoneicon}
                          alt=""
                      />
                      <span class="btn_with_icon_text">{props?.calltext}</span>
                  </a>
                )}

                {props.secondaryButtonClass && (
                    <a href={props.secondaryButtonLink} className={props.secondaryButtonClass}>
                        <img
                            className="btn_with_icon_img"
                            src={props.chaticon}
                            alt=""
                        />
                        <span className="btn_with_icon_text">{props.chatenow}</span>
                    </a>
                )}

 


                <div class="techVerse_store_links">
                    <a href="#" class="techVerse_store_link">
                        <img src={props?.playstore} alt="" />
                    </a>
                    <a href="#" class="techVerse_store_link">
                        <img src={props?.appstore} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ctnbutton
