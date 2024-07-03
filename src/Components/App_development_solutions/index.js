import React from 'react'
import testingandqaicon from '../../asserts/images/testing-and-qa-icon.png'
import appdevicon from '../../asserts/images/app-dev-icon.png'
import uiixicon from '../../asserts/images/ui-ix-icon.png'
import analysisresporticon from '../../asserts/images/analysis-resport-icon.png'
const App_development_solutions = () => {
    return (
        <div>
            <section class="app_devSec services-abbout1">
                <div class="container">
                    <div class="row">
                        <div class="sec_title">
                            <h2
                                class="sec_title_head color-darkBlue"
                                data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-duration="1000"
                            >Transform Your Real Estate Business with a Wide Spectrum Of
                                <span class="color-darkBlue1">App Development</span> Solutions
                            </h2>
                            <p
                                data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-duration="2000"
                            >
                                We offer comprehensive real estate mobile app development solutions tailored to your business requirements.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="app_devBoxes" data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="3000">
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon"><img src={analysisresporticon} alt="" /></div>
                        <h4>Analytics & Reporting</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon"><img src={uiixicon} alt="" /></div>
                        <h4>UI/UX Design</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon"><img src={appdevicon} alt="" /></div>
                        <h4>App Development</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                    <div class="app_devBoxe">
                        <div class="app_devBoxeIcon"><img src={testingandqaicon} alt="" /></div>
                        <h4>Testing & QA</h4>
                        <p>We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App_development_solutions
