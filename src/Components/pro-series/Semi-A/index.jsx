import React from 'react';
import './index.scss';

const SemiA = () => {
  const leftTeams = Array.from({ length: 10 }, (_, i) => i + 1);
  const rightTeams = Array.from({ length: 10 }, (_, i) => i + 11);

  const RankingSide = ({ ranks }) => (
    <div className="ranking-table">
      <div className="thead-row">
        <span>#</span>
        <span>TEAMS</span>
        <span>WWCD</span>
        <span>PP</span>
        <span>FP</span>
        <span>TOTAL</span>
      </div>
      <div className="tbody-content">
        {ranks.map((rank) => (
          <div key={rank} className="data-row">
            <span className="rank-box">{rank}</span>
            <span className="team-name-cell">--- TEAM NAME ---</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span className="stat-total">0</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="rankings-wrapper">
        <header className="header-section">
          <div className="ngc-top-label">NGC ESPORTS</div>
          <h1>OVERALL RANKINGS</h1>
          <div className="match-pill">NGC Pro Series | SEMI B </div>
        </header>

        <main className="tables-grid">
          <RankingSide ranks={leftTeams} />
          <RankingSide ranks={rightTeams} />
        </main>
      </div>
    </div>
  );
};

export default SemiA;