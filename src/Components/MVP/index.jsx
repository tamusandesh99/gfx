import React from "react";
import "./index.scss";
import player1 from "../../../public/pics/player3.png";
import player2 from "../../../public/pics/player4.png";
import logo from "../../../public/pics/logoD.png";

import pubgLogo from "../../../public/pics/pubg-sponsors.png";
import ngclogo from "../../../public/pics/logoD.png";

const MVPBoard = () => {
  const players = [
    { rank: 1, name: "", team: "NGC", elims: "", img: player1 },
    { rank: 2, name: "", team: "T1", elims: "", img: player2 },
    { rank: 3, name: "", team: "GENG", elims: "", img: player2 },
    { rank: 4, name: "", team: "FAZE", elims: "", img: player2 },
    { rank: 5, name: "", team: "NAVI", elims: "", img: player2 },
  ];

  return (
    <div className="app-outer-frame">
      <div className="symmetry-wrapper">
        <div className="bg-elements">
          <div className="giant-text">NGC</div>
        </div>
        <header className="header-branding">
          <div className="side-block left">
            <span className="sub-label">ORGANIZED BY</span>
            <span className="main-label">NGC ESPORTS</span>
          </div>

          <div className="center-block">
            <div className="glitch-wrapper">
              <span className="top-title">DAILY SCRIMS</span>
              <h1 className="main-title">TOP FRAGGERS</h1>
            </div>
          </div>

          <div className="side-block right">
            <span className="sub-label">START TIME</span>
            <span className="main-label">20:00 CET</span>
          </div>
        </header>
        <div className="wing-stage">
          {players.map((p) => (
            <div key={p.rank} className={`wing-slot rank-${p.rank}`}>
              <div className="slot-backdrop"></div>
              <div className="back-beam"></div>

              <div className="char-container">
                <img src={p.img} alt={p.name} />
              </div>

              <div className="stats-box">
                {/* NEW: Logo anchored as a badge on the corner */}
                <div className="logo-badge">
                  {/* <img src={logo} alt="team-logo" /> */}
                </div>

                <div className="rank-tag">
                  {p.rank === 1 ? "MVP" : `#${p.rank}`}
                </div>
                <div className="details">
                  <span className="n">{p.name}</span>
                  <span className="e">{p.elims} KILLS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="standings-footer">
          <div className="sponsor-banner">
            {" "}
            <img src={pubgLogo} alt="Sponsors" className="sponsor-logo" />
            <img src={ngclogo} alt="NGC Logo" className="ngc-footer-logo" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MVPBoard;
