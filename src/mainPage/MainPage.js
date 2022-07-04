import React from "react";
import "./mainPage.css";
import Login from "../LoginPage/Login";
import ig from "../assets/igdtuw_logo.png";
import csd from "../assets/csd_logo.png";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.JPG";

export default function MainPage() {
  return (
    <div className="container-fluid" id="MainPage">
      {/* <div className="header">
        <a href="/">
          <i class="fa fa-envelope"></i>
          <span>sakhi@gmail.com</span>
        </a>
        <a href="/">
          <i className="fa fa-phone"></i>
          <span>011-41063127</span>
        </a>
      </div>

      <hr className="line" />

      <nav className="navbar navbar-dark navbar-expand-sm">
        <div className="container">
          <img className="logo" src={csd} alt="" />
          <a href="/" className="navbar-brand">
            <span className="Heading">CSD ERP PORTAL</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Grievances
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Return
                </a>
              </li>
              <li className="nav-item">
                <a href={Login} className="nav-link active">
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <hr className="line" />

      <div className="container main">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div class="typewriter">
              <h1>WELCOME TO THE ERP PORTAL</h1>
            </div>
            <div className="carousel-item active">
              <img src={c1} alt="/" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={c2} alt="/" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={c3} alt="/" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={c4} alt="/" className="d-block w-100" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* <div className="col-12 col-md-4">
            <div class=" flex-r container">
              <div class="flex-r login-wrapper">
                <div class="login-text">
                  <h1>Sign Up</h1>
                  <form class="flex-c">
                    <div class="input-box">
                      <span class="label">E-mail</span>
                      <div class=" flex-r input">
                        <input type="text" placeholder="name@abc.com" />
                      </div>
                    </div>

                    <div class="input-box">
                      <span class="label">Password</span>
                      <div class="flex-r input">
                        <input type="password" placeholder="8+ (a, A, 1, #)" />
                      </div>
                    </div>
                    <input
                      class="btn"
                      type="submit"
                      value="Create an Account"
                    />
                    <span class="extra-line">
                      <span>Already have an account?</span>
                      <a href="#">Sign In</a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
      </div>

      <hr className="line" />

      <div className="socials">
        {/* <a href="/">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="/">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="/">
          <i class="fa fa-youtube-play"></i>
        </a> */}
      </div>

      {/* <hr className="line" /> */}
      <div className="copyright">
        <span>CopyRight(c)CSD IGDTUW, 2022, All Rights Reserved</span>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
