import React from "react";
import "./team.css";
import yogya from "../assets/Yogya_Team_Head.jpg";
import rishika from "../assets/Rishika_Kant_Team_Head.jpg";
import srishty from "../assets/Srishty_Member(Tech).jpg";
import tanya from "../assets/TanyaDixit_Member(Tech).png";

export default function Team() {
  return (
    <>
      <div className="team_main">
        <div className="container-fluid text">
          <p style={{ fontSize: "4.25vw", textAlign: "left" }}>MEET THE TEAM</p>
        </div>
        <br />
        <div className="after"></div>

        <hr className="text-center horizontal" />

        <div className="team">TECHNICAL TEAM</div>
        <br />
        <div className="flex">
          <div className="card text-center">
            <img src={yogya} height="100%" width="100%" alt="" />
            <h2>YOGYA KALRA</h2>
            <div className="overlay"></div>
            <div className="hidden">
              <p className="head">
                <i>TEAM HEAD</i>
              </p>
              <div className="icon">
                <a href="https://www.linkedin.com/in/yogya-kalra">
                  <i className="fa fa-linkedin pr-4"></i>
                </a>
                <a href="mailto:yogya128btece20@igdtuw.ac.in">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card text-center">
            <img src={rishika} height="100%" width="100%" alt="" />
            <h2>RISHIKA KANT</h2>
            <div className="overlay"></div>
            <div className="hidden">
              <p className="head">
                <i>TEAM HEAD</i>
              </p>
              <div className="icon">
                <a href="https://www.linkedin.com/in/rishikakant">
                  <i className="fa fa-linkedin pr-4"></i>
                </a>
                <a href="mailto:rishika054btit20@igdtuw.ac.in">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card text-center">
            <img src={srishty} height="100%" width="100%" alt="" />
            <h2>SRISHTY SHARMA</h2>
            <div className="overlay"></div>
            <div className="hidden">
              <p></p>
              <div className="icon">
                <a href="https://www.linkedin.com/in/srishty-sharma11/">
                  <i className="fa fa-linkedin pr-4"></i>
                </a>
                <a href="mailto:srishty135btece20@igdtuw.ac.in">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card text-center">
            <img src={tanya} height="100%" width="100%" alt="" />
            <h2>TANYA DIXIT</h2>
            <div className="overlay"></div>
            <div className="hidden">
              <p></p>
              <div className="icon">
                <a href="https://www.linkedin.com/in/tanya-dixit-a4a256209/">
                  <i className="fa fa-linkedin pr-4"></i>
                </a>
                <a href="mailto:tanya011btcse20@igdtuw.ac.in">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
