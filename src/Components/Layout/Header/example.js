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
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Services
          </a>
          <div className="" aria-labelledby="navbarDropdown">
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
          <a className="nav-link" href="#">
            Industries
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Case Studies
          </a>
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
</div>;
