import React from 'react';
import './index.scss';

const SemiA = () => {
  // Generates ranks 4 through 16 for the table side
  const tableRanks = Array.from({ length: 13 }, (_, i) => i + 4);

  return (
    <div className="app-container">
      <div className="pubg-layout">
        
        {/* Header Section */}
        <header className="header-ui">
          <div className="ngc-badge">NGC</div>
          <div className="title-wrap">
            <h1>NGC PRO <span>SERIES</span></h1>
            <div className="accent-line"></div>
          </div>
        </header>

        {/* Main Leaderboard Grid */}
        <main className="main-grid">
          
          {/* Left Column: Top 3 Winners */}
          <section className="podium-side">
            {[1, 2, 3].map((pos) => (
              <div key={pos} className="podium-card">
                <div className="rank-diamond">
                  <span className="num">{pos}</span>
                </div>
                <div className="empty-name-bar"></div>
              </div>
            ))}
          </section>

          {/* Right Column: Remaining Teams */}
          <section className="table-side">
            <div className="stats-table">
              {/* Table Headers */}
              <div className="thead">
                <span>RANK</span>
                <span>TEAM NAME</span>
                <span>PLACE</span>
                <span>WWCD</span>
                <span>KILLS</span>
                <span>TOTAL</span>
              </div>
              
              {/* Table Rows */}
              <div className="tbody">
                {tableRanks.map((rank) => (
                  <div key={rank} className="trow">
                    <span className="row-rank">{rank}</span>
                    <div className="row-empty"></div>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span className="row-total">-</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer Banner */}
        <footer className="footer-tag">
          SEMI A
        </footer>

      </div>
    </div>
  );
};

export default SemiA;