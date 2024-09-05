import React from "react";
import testingandqaicon from "../../asserts/images/testing-and-qa-icon.webp";
import appdevicon from "../../asserts/images/app-dev-icon.webp";
import uiixicon from "../../asserts/images/ui-ix-icon.webp";
import analysisresporticon from "../../asserts/images/analysis-resport-icon.webp";
const App_development_solutions = (props) => {
  return (
    <div>
      <section className="app_devSec services-abbout1">
        <div className="container">
          <div className="row">
            <div className="sec_title">
              <h2
                className="sec_title_head color-darkBlue"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                {props?.title}
                <span className="color-darkBlue1">
                  {" "}
                  {props?.subtitle}{" "}
                </span>{" "}
                {props?.title2}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="2000"
              >
                {props?.para}
              </p>
            </div>
          </div>
        </div>
        <div
          className="app_devBoxes"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="3000"
        >
          <div className="app_devBoxe">
            <div className="app_devBoxeIcon">
              <img src={analysisresporticon} alt="" />
            </div>
            <h4>Analytics & Reporting </h4>
            <p>{props?.para1}</p>
          </div>
          <div className="app_devBoxe">
            <div className="app_devBoxeIcon">
              <img src={uiixicon} alt="" />
            </div>
            <h4>UI/UX Design </h4>
            <p>{props?.para2}</p>
          </div>
          <div className="app_devBoxe">
            <div className="app_devBoxeIcon">
              <img src={appdevicon} alt="" />
            </div>
            <h4>App Development</h4>
            <p>{props?.para3}</p>
          </div>
          <div className="app_devBoxe">
            <div className="app_devBoxeIcon">
              <img src={testingandqaicon} alt="" />
            </div>
            <h4>Testing & QA</h4>
            <p>{props?.para4}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App_development_solutions;
