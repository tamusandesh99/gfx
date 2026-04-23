import React from "react";
import "./index.scss";

import pubgLogo from "../../../public/pics/pubg-logo-b.png";
import sponsors from "../../../public/pics/sponsor-b.png";
import ngclogo from "../../../public/pics/logo2.png";
import ngclogoEsports from "../../../public/pics/logo1.png";
import buggy from "../../../public/pics/buggy.jpg";
import r1 from "../../../public/pics/respect.png";
import r2 from "../../../public/pics/roster2-png.png";
import bg from "../../../public/pics/bg8.jpg";

const Tournament = () => {
  return (
    <div className="banner-container">
      <div className="bg-image" style={{ backgroundImage: `url(${bg})` }} />
        <div className="bg-overlay" />

      {/* Corner Logos */}
      <img src={pubgLogo} alt="" className="corner tl" />
      <img src={ngclogo} alt="" className="corner tr" />
      <img src={sponsors} alt="" className="corner bl" />
      <img src={ngclogoEsports} alt="" className="corner br" />

      <div className="main-content">
        {/* Left Side: Information */}
        <div className="info-section">
          <div className="sub-header-bar">
            <span>NGC ESPORTS</span>
          </div>

          <h1 className="main-title">
            BIRTHDAY
            <br />
            <span className="heavy">BLITZ</span>
          </h1>

          <div className="meta-info">
            <div className="stat-box">
              <span className="label">PRIZE</span>
              <span className="val">$150</span>
            </div>
            <div className="stat-box">
              <span className="label">REG DATE</span>
              <span className="val">APRIL 30</span>
            </div>
          </div>

          <div className="tags">
            <span>LIVE PRODUCTION</span>
            <span>FREE ENTRY</span>
            <span>64 TEAMS</span>
          </div>

          <p className="agency-tag">PRESENTED BY NGC ESPORTS</p>
        </div>

        <div className="player-section">
          <div className="player-wrapper">
            <img src={r2} alt="Player 2" className="player-img p2" />
            <img src={r1} alt="Player 1" className="player-img p1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
