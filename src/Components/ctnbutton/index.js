import React from "react";
const Ctnbutton = (props) => {
  return (
    <div>
      <div
        className="techVerse_hero_btns"
        data-aos="fade-up"
        data-aos-offset="00"
        // data-aos-offset="0"
        data-aos-duration="3000"
      >
        {props.primaryButtonClass && (
          <a href="#" className={props?.primaryButtonClass}>
            <img className="btn_with_icon_img" src={props?.phoneicon} alt="" />
            <span className="btn_with_icon_text">{props?.calltext}</span>
          </a>
        )}

        {props.secondaryButtonClass && (
          <a
            href={props.secondaryButtonLink}
            className={props.secondaryButtonClass}
          >
            <img className="btn_with_icon_img" src={props.chaticon} alt="" />
            <span className="btn_with_icon_text">{props.chatenow}</span>
          </a>
        )}

        <div className="techVerse_store_links">
          <a href="#" className="techVerse_store_link">
            <img src={props?.playstore} alt="" />
          </a>
          <a href="#" className="techVerse_store_link">
            <img src={props?.appstore} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ctnbutton;
