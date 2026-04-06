import React from "react";
import "./index.scss";

// Ensure these paths match your folder structure
import player1 from "../../../public/pics/player3.png";
import player2 from "../../../public/pics/player4.png";
import logo from "../../../public/pics/logo2.png";
import pubgLogo from "../../../public/pics/pubg-sponsors.png";
import ngclogo from "../../../public/pics/logo2.png";

const MVPBoard = () => {
  const players = [
    { rank: 1, name: "", elims: "", img: player1 },
    { rank: 2, name: "", elims: "", img: player2 },
    { rank: 3, name: "", elims: "", img: player2 },
    { rank: 4, name: "", elims: "", img: player2 },
    { rank: 5, name: "", elims: "", img: player2 },
  ];

  return (
    <div className="app-outer-frame">
      <div className="symmetry-wrapper">
        <span className="vertical-outer-label left-side">NGC Esports</span>
        <span className="vertical-outer-label right-side">Presents</span>
        <div class="bg-center-watermark">
          <span class="ghost-text">NGC</span>
        </div>

        <header className="header-branding">
          <div className="side-block left">
            <span className="sub-label">ORGANIZED BY</span>
            <span className="main-label">NGC ESPORTS</span>
          </div>

          <div className="center-block">
            <span className="top-title">DAILY SCRIMS</span>
            <h1 className="main-title">TOP FRAGGERS</h1>
          </div>

          <div className="side-block right">
            <span className="sub-label">START TIME</span>
            <span className="main-label">23:00 CET</span>
          </div>
        </header>

        <div className="wing-stage">
          {players.map((p) => (
            <div key={p.rank} className={`wing-slot rank-${p.rank}`}>
              {/* CELL 1: PHOTO */}
              <div className="char-container">
                <img src={p.img} alt="player" />
              </div>

              <div className="vertical-divider"></div>

              <div className="stats-box">
                {/* CELL 2: LOGO */}
                <div className="logo-badge">
                  {/* <img src={logo} alt="team" /> */}
                </div>

                <div className="vertical-divider"></div>

                {/* CELL 3: NAME */}
                <div className="name-cell">
                  <span className="n">{p.name}</span>
                </div>

                <div className="vertical-divider"></div>

                {/* CELL 4: BRANDING WATERMARK */}

                <div className="vertical-divider"></div>

                {/* CELL 5: RANK & KILLS */}
                <div className="rank-indicator">
                  {p.rank === 1 ? "MVP" : `#${p.rank}`}
                </div>
                <div className="e">{p.elims}</div>
              </div>
            </div>
          ))}
        </div>

        <footer className="standings-footer">
          <div className="sponsor-banner">
            <img src={pubgLogo} alt="Sponsors" className="sponsor-logo" />
            <img src={ngclogo} alt="NGC Logo" className="ngc-footer-logo" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MVPBoard;
