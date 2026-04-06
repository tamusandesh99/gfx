import React from "react";
import "./index.scss";
import pubgLogo from "../../../public/pics/pubg-sponsors.png";
import ngclogo from "../../../public/pics/logo2.png";
import textureImg from "../../../public/pics/bg4.jpg";
import erangle from "../../../public/pics/erangle.jpg";
import miramar from "../../../public/pics/miramar.png";
import rondo from "../../../public/pics/rondo.png";

const Daily_20 = () => {
  const emptyRows = Array.from({ length: 8 });

  const Table = ({ startRank }) => (
    <div className="table-module">
      {/* Removed tag to save vertical space for Overall Standings */}
      <div className="table-grid">
        <div className="grid-header">
          <span>#</span>
          <span className="name">TEAM NAME</span>
          <span>WWCD</span>
          <span>PLACE</span>
          <span>ELIMS</span>
          <span className="tot">TOTAL</span>
        </div>
        {emptyRows.map((_, i) => {
          const rank = startRank + i;
          return (
            <div
              className={`grid-row ${rank === 1 ? "rank-1" : ""}`}
              key={rank}
            >
              <div className="rank-cell">{rank}</div>
              <div className="name-cell"></div>
              <div className="data-cell"></div>
              <div className="data-cell"></div>
              <div className="data-cell"></div>
              <div className="total-cell"></div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="scrims-layout-container">
      <div
        className="background-dimmer"
        style={{ backgroundImage: `url(${textureImg})` }}
      />

      <div className="content-boundary">
        {/* TOP SECTION */}
        <header className="main-esports-header">
          <div className="header-top-row">
            <span className="brand-identifier">
              NGC ESPORTS // DAILY SCRIMS
            </span>
            <span className="cet-stamp">20 CET</span>
          </div>

          <div className="header-title-box">
            <h1 className="main-scrims-title">OVERALL STANDINGS</h1>
            <div className="qualify-info">
              <span className="bullet">■</span> TOP 1 QUALIFIES TO SS
            </div>
          </div>
        </header>

        {/* CENTER ACTION BAR */}
        <div className="action-center-bar">
          <div className="ticker-wrap left">
            <span>STAY FOCUSED // PLAY FAIR</span>
          </div>

          <div className="match-counter-module">
            <div className="counter-inner">
              <span className="label">MATCH</span>
              <div className="value-box">
                <span className="spacer-for-ps"></span>{" "}
                {/* Space for Photoshop number */}
                <span className="denominator">/4</span>
              </div>
            </div>
          </div>

          <div className="ticker-wrap right">
            <span>WIN BIG // STAY FOCUSED</span>
          </div>
          <div className="vertical-division-text">NGC ESPORTS // NGC</div>
        </div>

        {/* TABLE SECTION */}
        <div className="tables-composition">
          <Table startRank={1} />
          <Table startRank={9} />
        </div>

        {/* MAP SECTION */}
        <div className="map-footer-grid">
          {[
            { img: erangle, name: "ERANGLE" },
            { img: miramar, name: "MIRAMAR" },
            { img: rondo, name: "RONDO" },
            { img: erangle, name: "ERANGLE" },
          ].map((map, i) => (
            <div className="map-container" key={i}>
              <div className="map-panel">
                <img src={map.img} alt={map.name} />
              </div>
              <div className="map-name-label">{map.name}</div>
            </div>
          ))}
        </div>

        <footer className="standings-footer">
          {/* TOP SEGMENTED BAR */}
          <div className="footer-container">
            <div className="footer-segment brand">
              <span className="value">NGC // DAILY SCRIMS</span>
            </div>

            <div className="footer-segment system">
              <span className="value">LIVE ON YOUTUBE EVERY SUNDAY</span>
            </div>

            <div className="footer-segment logo-space">
              {/* Keeping space for visual balance */}
            </div>

            <div className="footer-segment live">
              <div className="live-indicator">
                <span className="live-dot">●</span> LIVE @NGCESPORTSHURICANE
              </div>
            </div>
          </div>

          {/* FULL WIDTH SPONSOR SECTION */}
          <div className="sponsor-banner">
            <img src={pubgLogo} alt="Sponsors" className="sponsor-logo" />
            <img src={ngclogo} alt="NGC Logo" className="ngc-footer-logo" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Daily_20;
