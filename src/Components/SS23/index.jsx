import React from "react";
import "./index.scss";
import r1 from "../../../public/pics/roster1-png.png";
import r2 from "../../../public/pics/roster16-png.png";
import r3 from "../../../public/pics/roster12-png.png";
import r4 from "../../../public/pics/roster6-png.png";
import pubgLogo from "../../../public/pics/pubg-logo-w.png";
import sponsors from "../../../public/pics/sponsor-w.png";
import ngclogo from "../../../public/pics/logo2.png";
import ngclogoEsports from "../../../public/pics/logo1.png";
import bg from "../../../public/pics/bg4.jpg";

const SuperSunday = () => {
  // Defining the rows specifically to meet the 4-5-4-5 requirement
  const rows = [4, 5, 4, 5];

  return (
    <div className="thumbnail-canvas">
      <div className="background-overlay">
        <div className="spotlight"></div>
        <div className="trophy-silhouette"></div>
      </div>
      <div className="bg-image" style={{ backgroundImage: `url(${bg})` }} />

      <div className="bg-overlay" />
      {/* Corner Logos */}
      <img src={pubgLogo} alt="" className="corner tl" />
      <img src={ngclogo} alt="" className="corner tr" />
      <img src={sponsors} alt="" className="corner bl" />
      <img src={ngclogoEsports} alt="" className="corner br" />

      <div className="header-section">
        <h1 className="main-title">
          <span className="silver">SUPER</span>{" "}
          <span className="gold">SUNDAY</span>
        </h1>
        <div className="branding">
          <span className="white-text">PRESENTED BY</span>
          <span className="gold-text"> NGC</span>
          <span className="white-text"> ESPORTS</span>
        </div>
      </div>

      <div className="content-wrap">
        {/* Players - Framing the grid */}
        <div className="player-wrapper player-tl">
          <img src={r1} alt="p1" />
        </div>
        <div className="player-wrapper player-bl">
          <img src={r2} alt="p2" />
        </div>
        <div className="player-wrapper player-tr">
          <img src={r3} alt="p3" />
        </div>
        <div className="player-wrapper player-br">
          <img src={r4} alt="p4" />
        </div>

        <div className="honeycomb-grid">
          {rows.map((count, rowIndex) => (
            <div key={rowIndex} className={`hex-row row-${count}`}>
              {[...Array(count)].map((_, i) => (
                <div key={i} className="hexagon">
                  <div className="hex-inner">
                    <div className="logo-placeholder"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperSunday;
