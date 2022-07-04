import React from "react";
import "./navbar.css";
import "../Form/Form";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section id="topbar" className="d-none d-lg-block">
        <div className="container clearfix">
          <div className="contact-info float-left">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto:sakhi@gmail.com">sakhi@gmail.com</a>
            <i className="fa fa-phone"></i>
            <a href="tel:011-41063127">011-41063127</a>
          </div>
          <div className="social-links float-right">
            <a href="https://twitter.com/csd_igdtuw" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://discord.gg/Q8ANUz2C" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/csd.igdtuw?utm_medium=copy_link"
              className="instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com/channel/UCCPvAJgV16oLDF2BbJhflTw"
              className="google-plus"
            >
              <i className="fa fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/centre-for-sustainable-development-igdtuw"
              className="linkedin"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <header id="header">
        <div className="container">
          <div id="logoo" className="pull-left">
            <a href="index.html">
              <img src="logo.png" alt="" title="" />
            </a>
          </div>
          <div id="logo" className="pull-left">
            <h1>
              <a href="/" className="scrollto">
                CSD
                <span>IGDTUW</span>
              </a>
            </h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <a href="../mainPage/MainPage">DKM Grievances</a>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <a href="https://csd-igdtuw.github.io/website/">Return</a>
              </li>
              <li>
                <a
                  href="https://forms.gle/2p5iL8651v25rvbx9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Registration(EMP)
                </a>
                {/* <Link class="nav-link" to="/register">
                  Registration(EMP)
                </Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
