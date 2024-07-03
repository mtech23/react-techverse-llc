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
                                            <a href="#" class="btn_with_icon">
                                                <img
                                                    class="btn_with_icon_img"
                                                    src={props?.phoneicon}
                                                    alt=""
                                                />
                                                <span class="btn_with_icon_text">{props?.calltext}</span>
                                            </a>
                                            <a href="#" class="btn_with_icon btn_secondary">
                                                <img
                                                    class="btn_with_icon_img"
                                                    src={props?.chaticon}
                                                    alt=""
                                                />
                                                <span class="btn_with_icon_text">{props?.chatenow}</span>
                                            </a>
                                        </div>
    </div>
  )
}

export default Ctnbutton
