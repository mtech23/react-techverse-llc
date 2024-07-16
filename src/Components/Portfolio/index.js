import React, { useCallback, useEffect } from "react";
import phoneicon from "../../../src/asserts/images/phone-icon.png";
import chaticon from "../../../src/asserts/images/chat-icon.png";
import androidiconw from "../../../src/asserts/images/android-icon-w.png";
import angularicon from "../../../src/asserts/images/angular-icon.png";
import appleicon from "../../../src/asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";
import "particles.js";
import fluttericon from "../../../src/asserts/images/flutter-icon.png";
import reacticon from "../../../src/asserts/images/react-icon.png";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import ParticlesBackground from "../ParticleBg/ParticlesBackground";

const Portfolio = (props) => {
  // useEffect(() => {
  //   window.particlesJS("particles-jss", {
  //     particles: {
  //       number: { value: 150, density: { enable: true, value_area: 800 } },
  //       color: { value: "#ffffff" },
  //       shape: {
  //         type: "triangle",
  //         stroke: { width: 0, color: "#000000" },
  //         polygon: { nb_sides: 5 },
  //         image: { src: "img/github.svg", width: 100, height: 100 },
  //       },
  //       opacity: {
  //         value: 0.5,
  //         random: false,
  //         anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
  //       },
  //       size: {
  //         value: 3,
  //         random: true,
  //         anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
  //       },
  //       line_linked: {
  //         enable: true,
  //         distance: 150,
  //         color: "#ffffff",
  //         opacity: 0.4,
  //         width: 1,
  //       },
  //       move: {
  //         enable: true,
  //         speed: 6,
  //         direction: "none",
  //         random: false,
  //         straight: false,
  //         out_mode: "out",
  //         bounce: false,
  //         attract: { enable: false, rotateX: 600, rotateY: 1200 },
  //       },
  //     },
  //     interactivity: {
  //       detect_on: "canvas",
  //       events: {
  //         onhover: { enable: true, mode: "repulse" },
  //         onclick: { enable: true, mode: "push" },
  //         resize: true,
  //       },
  //       modes: {
  //         grab: { distance: 400, line_linked: { opacity: 1 } },
  //         bubble: {
  //           distance: 400,
  //           size: 40,
  //           duration: 2,
  //           opacity: 8,
  //           speed: 3,
  //         },
  //         repulse: { distance: 200, duration: 0.4 },
  //         push: { particles_nb: 4 },
  //         remove: { particles_nb: 2 },
  //       },
  //     },
  //     retina_detect: true,
  //   });

  //   // Clean up
  //   return () => {
  //     window.pJSDom && window.pJSDom[0].pJS.fn.vendors.destroypJS();
  //     window.pJSDom = [];
  //   };
  // }, []);
  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);

  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <div>
      <ParticlesBackground/>
      <section
        class={`techVerse_about techVerse_aboutServices2 ${props?.newClass}`}
      >
        <img
          class="techVerse_about_icon1 animation11"
          src={props?.pinkcapsol}
          alt=""
        />

        <img
          class="techVerse_about_icon3 animation11"
          src={props?.greencube}
          alt=""
        />
        <img
          class="techVerse_about_icon4 animation11"
          src={props?.donatorange}
          alt=""
        />
        <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
          <div class="container-fluid">
          
            <div class="row">
            

              <div class="col-md-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img">
                    <img
                      src={props?.image}
                      // class="about-laptopImg"
                      class={`about-laptopImg ${props?.eduHR}`}
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    />
                    <img
                      src={props?.travelimg}
                      class={props?.laptopFrame}
                      data-aos="fade-left"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="techVerse_about_content services-abbout2">
                  <div class="sec_title">
                    <h2
                      class={` sec_title_head ${props?.classtitle} aos-init aos-animate`}
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      {props?.title}
                      <span class="color-lightBlue2"> {props?.subtitle} </span>
                      {props?.title2}
                    </h2>
                    <p
                      className={`${props?.classpara} aos-init aos-animate`}
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      {props?.para}
                    </p>

                    <div
                      class="techVerse_hero_btns"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon">
                        <img
                          class="btn_with_icon_img"
                          src={props?.phoneicon}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={props?.chaticon}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Chat Now</span>
                      </a>
                    </div>
                    <div>
                      <div
                        class="techVerse_store_links aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="3000"
                      >
                        <a href="#" class="techVerse_store_link">
                          <img src={props?.playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={props?.appstore} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="tsparticlessssssss">
          <Particles
            id="tsparticlessssssss"
            canvasClassName=""
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "",
                },
                height: 20,
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#22B6FB",
                },
                links: {
                  color: "#22B6FB",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div> */}
      </section>
    </div>
  );
};

export default Portfolio;
