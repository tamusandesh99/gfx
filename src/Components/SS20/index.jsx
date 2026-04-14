import React from 'react';
import './index.scss';
import r1 from '../../../public/pics/roster1-png.png';
import r2 from '../../../public/pics/roster2-png.png';
import bg from '../../../public/pics/bg4.jpg';
import sponsors from '../../../public/pics/pubg-sponsors.png';
import ngclogo from '../../../public/pics/logo2.png';

const SuperSunday = () => {
  const teamSlots = Array.from({ length: 18 });

  return (
    <div className="app-container">
      {/* Background Layers */}
      <div 
        className="bg-image" 
        style={{ backgroundImage: `url(${bg})` }} 
      />
      <div className="bg-overlay" />

      {/* Main Layout */}
      <div className="super-sunday-layout">
        
        <div className="teams-section">
          <header className="header-area">
            <p className="agency-name">NGC ESPORTS</p>
            <h1 className="main-title">SUPER<br/>SUNDAY</h1>
            <div className="prize-badge">
              <span>PRIZE: 20 EURO</span>
            </div>
          </header>
          
          <div className="teams-grid">
            {teamSlots.map((_, index) => (
              <div key={index} className="team-slot" />
            ))}
          </div>
        </div>

        <div className="renders-section">
          <img src={r1} alt="Roster 1" className="player-image r1" />
          <img src={r2} alt="Roster 2" className="player-image r2" />
        </div>

        <footer className="footer-branding">
          <img src={sponsors} alt="PUBG Sponsors" className="sponsor-logo" />
          <img src={ngclogo} alt="NGC Logo" className="ngc-logo" />
        </footer>

      </div>
    </div>
  );
};

export default SuperSunday;