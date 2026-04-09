import React from "react";
import "./index.scss";

// Ensure these paths match your folder structure
import player1 from "../../../public/pics/player3.png";
import player2 from "../../../public/pics/player4.png";
import logo from "../../../public/pics/logo2.png";
import pubgLogo from "../../../public/pics/pubg-sponsors.png";
import ngclogo from "../../../public/pics/logo2.png";

const MVPBoard = () => {
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
          {/* --- ROW 1: THE MVP (SPECIAL) --- */}
          <div className="wing-slot rank-1">
            <div className="char-container">
              <img src={player1} alt="Rank 2" />
              <div className="char-name"></div>
            </div>
            <div className="stats-box">
              <div className="rank-indicator"></div>
              <div className="e">Elims</div>
            </div>
          </div>

          {/* --- ROW 2: RANK 2 --- */}
          <div className="wing-slot rank-2">
            <div className="char-container">
              <img src={player2} alt="Rank 2" />
              <div className="char-name"></div>
            </div>
            <div className="stats-box">
              <div className="rank-indicator">#2</div>
              <div className="e">Elims</div>
            </div>
          </div>

          {/* --- ROW 3: RANK 3 --- */}
          <div className="wing-slot rank-3">
            <div className="char-container">
              <img src={player2} alt="Rank 2" />
              <div className="char-name"></div>
            </div>
            <div className="stats-box">
              <div className="rank-indicator">#3</div>
              <div className="e">Elims</div>
            </div>
          </div>

          {/* --- ROW 4: RANK 4 --- */}
          <div className="wing-slot rank-4">
            <div className="char-container">
              <img src={player2} alt="Rank 2" />
              <div className="char-name"></div>
            </div>
            <div className="stats-box">
              <div className="rank-indicator">#4</div>
              <div className="e">Elims</div>
            </div>
          </div>

          {/* --- ROW 5: RANK 5 --- */}
          <div className="wing-slot rank-5">
            <div className="char-container">
              <img src={player2} alt="Rank 2" />
              <div className="char-name"></div>
            </div>
            <div className="stats-box">
              <div className="rank-indicator">#5</div>
              <div className="e">Elims</div>
            </div>
          </div>
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
