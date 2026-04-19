import React from "react";
import "./index.scss";

import r1 from "../../../public/pics/roster8-png.png";
import r2 from "../../../public/pics/roster6-png.png";
import r3 from "../../../public/pics/roster5-png.png";
import r4 from "../../../public/pics/roster9-png.png";

import cratelogo from "../../../public/pics/crate23-2.png";

import bg from "../../../public/pics/bg4.jpg";
import sponsors from "../../../public/pics/sponsor-b.png";
import ngclogo from "../../../public/pics/logo2.png";
import ngclogoEsports from "../../../public/pics/logo1.png";
import pubgLogo from "../../../public/pics/pubg-logo-b.png";

const SuperSunday = () => {
  const teamSlots = Array.from({ length: 18 });

  return (
    <div className="app-container">
      <div className="bg-image" style={{ backgroundImage: `url(${bg})` }} />
      <div className="bg-overlay" />

      <div className="super-sunday-layout">
        <img src={pubgLogo} alt="PUBG Logo" className="pubg-logo" />
        <img src={ngclogoEsports} alt="NGC Logo" className="NGC-esports-logo" />
        <div className="ribbon-tangle">
          <div className="ribbon ribbon-left"></div>
          <div className="ribbon ribbon-right"></div>
        </div>
        {/* Floating Layer: Absolute Header */}
        <header className="absolute-header">
          <p className="agency-name">
            <span>NGC ESPORTS</span>
          </p>
          <h1 className="main-title">SUPER SUNDAY</h1>
          <div className="header-info-row">
            <div className="badge time">
              <span>23:00 CEST</span>
            </div>
            <div className="badge prize">
              <span>PRIZE: €20</span>
            </div>
          </div>
        </header>

        {/* Stacked Layer: Players Row */}
        <section className="renders-row">
          <div className="render-group left-side">
            <img src={r1} alt="R1" className="r1" />
            <img src={r2} alt="R2" className="r2" />
          </div>

          <div className="trophy-gap">
            <img src={cratelogo} alt="Crate Logo" className="crate-logo" />
          </div>

          <div className="render-group right-side">
            <img src={r3} alt="R1" className="r3" />
            <img src={r4} alt="R2" className="r4" />
          </div>
        </section>

        {/* Stacked Layer: Team Grid */}
        <div className="teams-grid">
          {teamSlots.map((_, index) => (
            <div key={index} className="team-slot" />
          ))}
        </div>

        {/* Stacked Layer: Footer */}
        <footer className="footer-branding">
          <img src={sponsors} alt="Sponsors" className="sponsor-logo" />
          <img src={ngclogo} alt="Logo" className="ngc-logo" />
        </footer>
      </div>
    </div>
  );
};

export default SuperSunday;
