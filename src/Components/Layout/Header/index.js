import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { HeaderTop, Logo } from './../../../Assets/images/'

import logo from "../../../asserts/images/logo.png";

import usaflag from "../../../asserts/images/usa-flag.png";
import "./style.css";


import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import {
  AuthorList1,
  Logo,
  SmallAnime1,
  SmallAnime2,
  User_icon_plus,
  User_icon_white,
  BestSellingBooks,
  BestSellingBook1,
  BestSellingBook2,
  BestSellingBook3,
  BestSellingBook4,
  BestSellingBook5,
  BestSellingBook6,
  BestSellingBook7,
  BestSellingBook8,
  BestSellingBook9,
  BestSellingBook10,
  BestSellingBook11,
  BestSellingBook12,
} from "./../../../asserts/images/";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Header = (props) => {
  const navigate = useNavigate();
  const [mana, setMana] = useState('');
  console.log("mana", mana)

  const Logintoken = localStorage.getItem('loginUser');
  console.log("manas", Logintoken);

  const handleLogout = async (event) => {

    event.preventDefault();

    document.querySelector('.loaderBox').classNameList.remove("d-none");

    const apiUrl = 'https://custom.mystagingserver.site/Tim-WDLLC/public/api/logout';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Logintoken}`
        }
      });

      if (response.ok) {
        // Parse the response data as JSON
        const responseData = await response.json();

        localStorage.removeItem('login');
        localStorage.removeItem('loginUser');

        console.log('Logout Response:', responseData);

        document.querySelector('.loaderBox').classNameList.add("d-none");
        UserCredit()

        navigate('/');
      }
    } catch (error) {
      document.querySelector('.loaderBox').classNameList.add("d-none");
      console.error('Error:', error);
    }
  };

  const UserCredit = () => {
    fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/getbalance',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Logintoken}`
        },
      }
    )

      .then(response =>
        response.json()
      )
      .then((data) => {
        console.log(data?.data)
        setMana(data?.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (Logintoken) {
      UserCredit()
    }
  }, [])









  const LogoutData = localStorage.getItem('loginUser');

  const handleRedirect = () => {
    const LogoutData = localStorage.removeItem('loginUser');
    fetch(`https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/logout`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
      },
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        localStorage.removeItem('login');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className="techVerse_navbar">

<nav className="navbar navbar-expand-lg">
        
        <a className="navbar-brand techVerse_logo" href="index.html">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
                  <span className="navbar-toggler-icon"></span>    
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className=""  aria-labelledby="navbarDropdown">
                        {/* <div className="row">
                  <div className="col-md-9">
                    <div className="customDropdown_left">
                      <div className="dropdown_head">
                        <div className="row align-items-center">
                          <div className="col-md-3">
                            <div className="dropdown_title"><h3>Services</h3></div>
                          </div>
                          <div className="col-md-9">
                            <div className="dropdown_desc"><p>Leading to the next-gen digital solutions that help businesses to fulfill their needs in the digital era.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown_content">
                        <div className="row">
                          <div className="col-md-4">
                            <ul className="custom_dropdown_list">
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                            </ul>
                
                          </div>
                          <div className="col-md-4">
                            <ul className="custom_dropdown_list">
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                            </ul>
                
                          </div>
                          <div className="col-md-4">
                            <ul className="custom_dropdown_list">
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="dropdown_linkBox">
                                  <h4>Mobile Application Development</h4>
                                  <p>Custom Mobile App Development.</p>
                                </a>
                              </li>
                            </ul>
                
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="custom_dropdown_sidebar">
                      <h3 className="custom_dropdown_sidebarTitle">How We Work?</h3>
                      <ul className="custom_dropdown_list">
                        <li>
                          <a href="#" className="dropdown_linkBox">
                            <h4>Mobile Application Development</h4>
                            <p>Custom Mobile App Development.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown_linkBox">
                            <h4>Mobile Application Development</h4>
                            <p>Custom Mobile App Development.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown_linkBox">
                            <h4>Mobile Application Development</h4>
                            <p>Custom Mobile App Development.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown_linkBox">
                            <h4>Mobile Application Development</h4>
                            <p>Custom Mobile App Development.</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>     */}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Industries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Case Studies</a>
            </li>
            <li className="nav-item icon_list_item">
                      {/* <a className="nav-link" href="#">+(1) 23456-7890</a>     */}
              <a href="tel:+(1) 23456-7890" className="nav-link">
                <span className="icon_list_icon">
                  <img src={usaflag} alt="" />
                </span>
                <span className="icon_list_text">+(1) 23456-7890</span>
              </a>
            </li>
          </ul>
      </div>
    
    </nav>













 



    </div>

  );
};
