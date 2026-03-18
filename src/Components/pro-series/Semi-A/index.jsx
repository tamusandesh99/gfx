import React from "react";
import "./index.scss";

const ProBanner = () => {
  const emptyRows = Array.from({ length: 9 });

  const Table = ({ startRank }) => (
    <div className="table-wrapper">
      <div className="table-header">
        <span className="h-item">#</span>
        <span className="h-item col-team">TEAM NAME</span>
        <span className="h-item">WWCD</span>
        <span className="h-item">PLACE</span>
        <span className="h-item">ELIMS</span>
        <span className="h-item">TOTAL</span>
      </div>
      <div className="table-body">
        {emptyRows.map((_, index) => {
          const currentRank = startRank + index;
          return (
            <div className={`table-row ${currentRank <= 2 ? "qualified-row" : ""}`} key={currentRank}>
              <span className="col-rank">{currentRank}</span>
              <span className="col-team"></span>
              <span className="data-cell" />
              <span className="data-cell" />
              <span className="data-cell" />
              <span className="col-total" />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="app-container theme-vibrant-industrial">
      <div className="ribbon-container">
        <div className="moving-ribbon r1" />
        <div className="moving-ribbon r2" />
        <div className="moving-ribbon r3" />
        <div className="moving-ribbon r4" />
        <div className="moving-ribbon r5" />
      </div>

      <div className="vertical-division-text">NGC ESPORTS // 2026</div>

      <div className="main-layout">
        {/* Centered Large Brand Header */}
        <div className="brand-header-top">
            <div className="brand-line" />
            <span className="brand-text">NGC ESPORTS</span>
            <div className="brand-line" />
        </div>

        <header className="standings-header">
          <div className="header-left">
            <div className="ngc-label">NGC ESPORTS // PRO DIVISION</div>
            <h1 className="main-title">
              PRO <span className="highlight-text">DIVISION</span>
            </h1>
            <div className="standings-accent-bar">
              <div className="ribbon-line" />
              SEMI FINAL // OVERALL STANDINGS
            </div>
          </div>

          <div className="header-right">
             <div className="qualify-bracket">
                <div className="qualify-box">
                    <span className="live-dot">●</span> TOP 2 TEAMS QUALIFIED
                </div>
             </div>
          </div>
        </header>

        <div className="industrial-ribbon-divider">
          <div className="ribbon-text">STAY FOCUSED // PLAY FAIR // WIN BIG</div>
        </div>

        <div className="dual-tables">
          <Table startRank={1} />
          <Table startRank={10} />
        </div>

        <footer className="standings-footer">
          <div className="footer-container">
            <div className="footer-segment brand">
              <span className="value">NGC // PRO DIVISION</span>
            </div>
            
            <div className="footer-segment system">
              <span className="value">LIVE ON YOUTUBE // FINAL EVERY THURSDAY 20:00 CET</span>
            </div>

            <div className="footer-segment logo-space">
               {/* PLACE PUBG MOBILE LOGO HERE IN PHOTOSHOP */}
            </div>

            <div className="footer-segment live">
              <div className="live-indicator">
                <span className="live-dot">●</span> LIVE @NGCESPORTSHURICANE
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProBanner;