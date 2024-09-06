import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import logo from "../../../asserts/images/logo.webp";
import "./style.css";

import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap";

export const Header = (props) => {
  const navigate = useNavigate();
  const [mana, setMana] = useState("");
  console.log("mana", mana);

  const Logintoken = localStorage.getItem("loginUser");
  console.log("manas", Logintoken);

  const handleLogout = async (event) => {
    event.preventDefault();

    document.querySelector(".loaderBox").classNameList.remove("d-none");

    const apiUrl =
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/logout";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Logintoken}`,
        },
      });

      if (response.ok) {
        // Parse the response data as JSON
        const responseData = await response.json();

        localStorage.removeItem("login");
        localStorage.removeItem("loginUser");

        console.log("Logout Response:", responseData);

        document.querySelector(".loaderBox").classNameList.add("d-none");
        UserCredit();

        navigate("/");
      }
    } catch (error) {
      document.querySelector(".loaderBox").classNameList.add("d-none");
      console.error("Error:", error);
    }
  };

  const UserCredit = () => {
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/getbalance",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Logintoken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.data);
        setMana(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Logintoken) {
      UserCredit();
    }
  }, []);

  const LogoutData = localStorage.getItem("loginUser");

  const handleRedirect = () => {
    const LogoutData = localStorage.removeItem("loginUser");
    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/logout`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LogoutData}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.removeItem("login");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [naveshow, setNavshow] = useState(false);
  const handleclick = () => {
    setNavshow((prevState) => !prevState);
    setindustriesshow(false);
  };

  const [industries, setindustriesshow] = useState(false);
  const handleindustriea = () => {
    setNavshow(false);
    setindustriesshow(!industries);
  };
  console.log("naveshow", naveshow);

  return (
    <section className="techVerse_navbar">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand techVerse_logo" to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/about-us"}>
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <Link
                type="button"
                onClick={handleclick}
                className="nav-link dropdown-toggle"
              >
                Services
              </Link>
              <div className="" aria-labelledby="navbarDropdown"></div>
            </li>
            <li className="nav-item dropdown">
              <Link
                onClick={handleindustriea}
                type="button"
                className="nav-link dropdown-toggle"
              >
                Industries
              </Link>
              <div className="" aria-labelledby="navbarDropdown"></div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/case-study"}>
                Case study
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://techversellc.com/blogs/">
                Blogs
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>

            <li className="nav-item icon_list_item">
              <Link to="/" className="nav-link">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="icon_list_text"> info@techversellc.com </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {naveshow === true && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 col-md-8 customDropdown_leftCol">
              <div className="customDropdown_left">
                <div className="dropdown_head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-12">
                      <div className="dropdown_title">
                        <h3>Services</h3>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12">
                      <div className="dropdown_desc">
                        <p>
                          Leading to the next-gen digital solutions that help
                          businesses to fulfill their needs in the digital era.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dropdown_content">
                  <div className="row">
                    <div className="col-md-6 col-xl-4">
                      <ul className="custom_dropdown_list">
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/app-store"}>
                              <h4>App Store</h4>
                            </Link>
                            <p>Optimization Development Company</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/branding"}>
                              <h4>Branding</h4>
                            </Link>
                            <p>Branding</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/book-publication"}>
                              <h4>Book Publication</h4>
                            </Link>
                            <p>Book Publication</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/business-devlopment"}>
                              <h4>Business Development</h4>
                            </Link>
                            <p>Optimization Development Company</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <ul className="custom_dropdown_list">
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/Devops"}>
                              <h4>DevOps</h4>
                            </Link>
                            <p>DevOps</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/digital-marketing"}>
                              <h4>Digital Marketing</h4>
                            </Link>
                            <p>Digital Marketing Agency USA</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/ecommerse-development"}>
                              <h4>E-Commerce Development</h4>
                            </Link>
                            <p>Top-Of-The-Line Ecommerce Solutions</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/mobile-app"}>
                              <h4>Mobile Application Development</h4>
                            </Link>
                            <p>Custom Mobile App Development</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <ul className="custom_dropdown_list">
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/out-sourcing"}>
                              <h4>Out Source</h4>
                            </Link>
                            <p>Out Source</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/web-application"}>
                              <h4>Web Application</h4>
                            </Link>
                            <p>Web Application</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/web-development"}>
                              <h4>Web Development</h4>
                            </Link>
                            <p>Optimization Development Company</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 custom_dropdown_sidebar">
              <div className="">
                <h3 className="custom_dropdown_sidebarTitle">How We Work?</h3>
                <ul className="custom_dropdown_list">
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Design</h4>
                      </Link>
                      <p>Compelling and Eye-Catching Designs.</p>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Development</h4>
                      </Link>
                      <p>Agile Working Methodologies.</p>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Testing</h4>
                      </Link>
                      <p>Agile Working Methodologies.</p>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Deployment</h4>
                      </Link>
                      <p>Seamless Launch of Product.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {industries === true && (
        <div className="container-fluid ">
          <div className="row">
            <div className="col-xl-9 col-md-8 customDropdown_leftCol">
              <div className="customDropdown_left">
                <div className="dropdown_head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-12">
                      <div className="dropdown_title">
                        <h3>Industries</h3>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-12">
                      <div className="dropdown_desc">
                        <p>
                          We have been successfully delivering the finest mobile
                          applications and eCommerce solutions for clients
                          belonging to a wide range of industries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dropdown_content">
                  <div className="row">
                    <div className="col-md-6 col-xl-4">
                      <ul className="custom_dropdown_list">
                        {/* <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/"}>
                              <h4>Advertising </h4>
                            </Link>
                            <p>Advertising Apps Development.</p>
                          </div>
                        </li> */}
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/automotive"}>
                              <h4>Automotive and Transport </h4>
                            </Link>
                            <p>Best Automotive Apps.</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/ecommerse"}>
                              <h4>E-commerce & Retails </h4>
                            </Link>
                            <p>Revolutionized Apps for Retail.</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/education-hr"}>
                              <h4>Education & HR </h4>
                            </Link>
                            <p>Advertising Apps Development.</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/finance"}>
                              <h4>Finance</h4>
                            </Link>
                            <p>Fintech Software Developers.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <ul className="custom_dropdown_list">
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/health-care"}>
                              <h4>Health and Life Sciences</h4>
                            </Link>
                            <p>Seamless Healthcare App.</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/media"}>
                              <h4>Media & Entertainment </h4>
                            </Link>
                            <p>Application Development Services.</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/realEstate-and-property"}>
                              <h4>Real Estate & Property </h4>
                            </Link>
                            <p>Custom-Built Real Estate Solutions.</p>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/sports"}>
                              <h4>Sports Teams & Leagues </h4>
                            </Link>
                            <p>Application Development Services.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <ul className="custom_dropdown_list">
                        <li>
                          <div className="dropdown_linkBox">
                            <Link to={"/travel"}>
                              <h4>Travel & Hospitality</h4>
                            </Link>
                            <p>Application Development Services.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 custom_dropdown_sidebar">
              <div className="">
                <h3 className="custom_dropdown_sidebarTitle">Core Solutions</h3>
                <ul className="custom_dropdown_list">
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>E-Commerce Solution</h4>
                      </Link>
                      <p>Ecommerce for Small Business.</p>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Booking App</h4>
                      </Link>
                      <p>Booking App Development Solutions.</p>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>On Demand Delivery</h4>
                      </Link>
                      <p>On Demand Delivery App.</p>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Restaurant Management</h4>
                      </Link>
                      <p>Cloud Based Restaurant Management.</p>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Real Estate</h4>
                      </Link>
                      <p>Commercial Real Estate App.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
