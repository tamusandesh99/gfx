import React from 'react';
import './index.scss'; 
import r1 from '../../../public/pics/roster1-png.png';
import r2 from '../../../public/pics/roster2-png.png';

const SuperSunday = () => {
  // Creating an array for the 18 teams (4-5-4-5 layout)
  const teams = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="thumbnail-canvas">
      <div className="background-overlay">
        <div className="spotlight"></div>
        <div className="embers"></div>
      </div>

      {/* Title Section */}
      <div className="header-section">
        <div className="trophy-silhouette"></div>
        <h1 className="main-title">
          <span className="silver">SUPER</span> <span className="gold">SUNDAY</span>
        </h1>
        <div className="branding">
          <span className="white-text">PRESENTED BY</span>
          <span className="gold-text"> NGC</span>
          <span className="white-text"> ESPORTS</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="content-wrap">
        {/* Player Cutouts - Left */}
        <div className="player player-tl"><img src={r1} alt="Player" /></div>
        <div className="player player-bl"><img src={r2} alt="Player" /></div>

        {/* Honeycomb Grid */}
        <div className="honeycomb-container">
            {teams.map((team) => (
              <div key={team} className="hexagon">
                <div className="hex-inner">
                  {/* <img src={`/logos/team${team}.png`} alt="logo" /> */}
                  <div className="logo-placeholder"></div>
                </div>
              </div>
            ))}
        </div>

        {/* Player Cutouts - Right */}
        <div className="player player-tr"><img src={r1} alt="Player" /></div>
        <div className="player player-br"><img src={r2} alt="Player" /></div>
      </div>
    </div>
  );
};

export default SuperSunday;