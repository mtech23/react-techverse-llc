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

  const [naveshow, setNavshow] = useState(false)
  const handleclick = () => {
    setNavshow(prevState => !prevState);
    setindustriesshow(false);
  }



  const [industries, setindustriesshow] = useState(false)
  const handleindustriea = () => {
    setNavshow(false);
    setindustriesshow(!industries);
  }
  console.log("naveshow", naveshow)
  return (
    <section class="techVerse_navbar">
      <nav class="navbar navbar-expand-lg">

        <Link class="navbar-brand techVerse_logo" href="/">
          <img src={logo} alt="" />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" href="about-us.php">About Us</Link>
            </li>
            <li class="nav-item dropdown " >
              <Link type="button" onClick={handleclick} class="nav-link dropdown-toggle"  >
                Services
              </Link>
              <div class="" aria-labelledby="navbarDropdown">
              </div>
            </li>
            <li class="nav-item dropdown">
              <Link onClick={handleindustriea} type="button" class="nav-link dropdown-toggle" >
                Industries
              </Link>
              <div class="" aria-labelledby="navbarDropdown">
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="contact.php">Contact</Link>
            </li>
            {/* <!--<li class="nav-item">--> */}
            {/* <!--    <Link class="nav-link" to={"/"}>About Us</Link>--> */}
            {/* <!--</li>--> */}
            {/* <!--<li class="nav-item">--> */}
            {/* <!--    <Link class="nav-link" to={"/"}>Case Studies</Link>--> */}
            {/* <!--</li>--> */}
            <li class="nav-item icon_list_item">
              {/* <!-- <Link class="nav-link" to={"/"}>+(1) 23456-7890</Link> --> */}
              <Link href="mailto:info@techversellc.com" class="nav-link">
                <span class="icon_list_icon">
                  {/* <!--<img src="images/usa-flag.png" alt="" />--> */}
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span class="icon_list_text">info@techversellc.com</span>
              </Link>

            </li>
          </ul>
        </div>

      </nav>


      {naveshow === true && (<div class="container-fluid  ">
        <div class="row">
          <div class="col-xl-9 col-md-8 customDropdown_leftCol">
            <div class="customDropdown_left">
              <div class="dropdown_head">
                <div class="row align-items-center">
                  <div class="col-lg-3 col-md-12">
                    <div class="dropdown_title">
                      <h3>Services</h3>
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-12">
                    <div class="dropdown_desc">
                      <p>Leading to the next-gen digital solutions that help businesses to fulfill their needs in the digital era.</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="dropdown_content">
                <div class="row">
                  <div class="col-md-6 col-xl-4">
                    <ul class="custom_dropdown_list">
                      <li>
                        <Link to={"/mobile-app"} class="dropdown_linkBox">
                          <h4>Mobile Application Development</h4>
                          <p>Custom Mobile App Development.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/ecommerse-development"}   class="dropdown_linkBox">
                          <h4>E-Commerce Development</h4>
                          <p>Custom Mobile App Development.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/app-store"}   class="dropdown_linkBox">
                          <h4>App Store</h4>
                          <p>Custom Mobile App Development.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/business-devlopment"} class="dropdown_linkBox">
                          <h4>Business Development</h4>
                          <p>Custom Mobile App Development.</p>
                        </Link>
                      </li>
                    </ul>

                  </div>
                  <div class="col-md-6 col-xl-4">
                    <ul class="custom_dropdown_list">
                      <li>
                        <Link to={"/web-development"} class="dropdown_linkBox">
                          <h4>Web Development</h4>
                          <p>Custom Mobile App Development.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/digital-marketing"} class="dropdown_linkBox">
                          <h4>Digital Marketing</h4>
                          <p>Custom Mobile App Development.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/web-application"} class="dropdown_linkBox">
                          <h4>Web Application</h4>
                          <p>Custom Mobile App Development.</p>
                        </Link>
                      </li>
             
                    </ul>

                  </div>
            

                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 custom_dropdown_sidebar">
            <div class="">
              <h3 class="custom_dropdown_sidebarTitle">How We Work?</h3>
              <ul class="custom_dropdown_list">
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>Design</h4>
                    <p>Compelling and Eye-Catching Designs.</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>Development</h4>
                    <p>Agile Working Methodologies.</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>Testing</h4>
                    <p>Rigorous Testing & QA</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>Deployment</h4>
                    <p>Seamless Launch of Product.</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>)}
      {industries === true && (<div class="container-fluid ">
        <div class="row">
          <div class="col-xl-9 col-md-8 customDropdown_leftCol">
            <div class="customDropdown_left">
              <div class="dropdown_head">
                <div class="row align-items-center">
                  <div class="col-lg-3 col-md-12">
                    <div class="dropdown_title">
                      <h3>Industries</h3>
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-12">
                    <div class="dropdown_desc">
                      <p>We have been successfully delivering the finest mobile applications and eCommerce solutions for clients belonging to a wide range of industries.</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="dropdown_content">
                <div class="row">

                  <div class="col-md-6 col-xl-4">
                    <ul class="custom_dropdown_list">

                      <li>
                        <Link to={"/realEstate-and-property"} class="dropdown_linkBox">
                          <h4>Real Estate & Property </h4>
                          <p>Custom-Built Real Estate Solutions.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/automotive"} class="dropdown_linkBox">
                          <h4>Automotive and Transport </h4>
                          <p>Best Automotive Apps.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/ecommerse"} class="dropdown_linkBox">
                          <h4>E-commerce & Retails </h4>
                          <p>Revolutionized Apps for Retail.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} class="dropdown_linkBox">
                          <h4>Advertising </h4>
                          <p>Advertising Apps Development.</p>
                        </Link>
                      </li>
                    </ul>

                  </div>
                  <div class="col-md-6 col-xl-4">
                    <ul class="custom_dropdown_list">

                      <li>
                        <Link to={"/education-hr"} class="dropdown_linkBox">
                          <h4>Education & HR </h4>
                          <p>Educational App Development.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/health-care"} class="dropdown_linkBox">
                          <h4>Health and Life Sciences</h4>
                          <p>Seamless Healthcare App.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} class="dropdown_linkBox">
                          <h4>Software & High Tech</h4>
                          <p>Custom Software Apps.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/finance"} class="dropdown_linkBox">
                          <h4>Finance</h4>
                          <p>Fintech Software Developers.</p>
                        </Link>
                      </li>
                    </ul>

                  </div>
                  <div class="col-md-6 col-xl-4">
                    <ul class="custom_dropdown_list">

                      <li>
                        <Link to={"/media"} class="dropdown_linkBox">
                          <h4>Media & Entertainment </h4>
                          <p>Application Development Services.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} class="dropdown_linkBox">
                          <h4>Sports Teams & Leagues </h4>
                          <p>Sports Teams Management Apps.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} class="dropdown_linkBox">
                          <h4>Gaming & Leisure </h4>
                          <p>Top Game Developers.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} class="dropdown_linkBox">
                          <h4>Travel & Hospitality</h4>
                          <p>Application Development Services.</p>
                        </Link>
                      </li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 custom_dropdown_sidebar">
            <div class="">
              <h3 class="custom_dropdown_sidebarTitle">Core Solutions</h3>
              <ul class="custom_dropdown_list">
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>E-Commerce Solution</h4>
                    <p>Ecommerce for Small Business.</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>Booking App</h4>
                    <p>Booking App Development Solutions.</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>On Demand Delivery</h4>
                    <p>On Demand Delivery App.</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>Restaurant Management</h4>
                    <p>Cloud Based Restaurant Management.</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} class="dropdown_linkBox">
                    <h4>Real Estate</h4>
                    <p>Commercial Real Estate App.</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>)}



    </section>
  );
};
