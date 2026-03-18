import React from 'react';
import './index.scss';
import bgLogo from '../../../../public/pics/bg1.png'; // Your blue logo
import bgPubg from '../../../../public/pics/bg2.png'; // Your HD wallpaper
import imgErangel from '../../../../public/pics/erangle.jpg';
import imgMiramar from '../../../../public/pics/miramar.png';
import imgRondo from '../../../../public/pics/rondo.png';

const ProBanner = () => {
  return (
    <div className="glass-canvas" style={{ "--bg-pubg": `url(${bgPubg})` }}>
      {/* ATMOSPHERIC GLOWS (Smoke/Shine) */}
      <div className="ambient-glow blue"></div>
      <div className="ambient-glow yellow"></div>

      {/* TOP: LOGO HEADER */}
      <header className="glass-header">
        <div className="header-inner">
          <img src={bgLogo} alt="NGC" className="side-logo" />
          <div className="brand-data">
            <h1>NGC ESPORTS</h1>
            <span>OPERATIONAL HUB // @ngc-esports</span>
          </div>
          <div className="glare-line header-glare"></div>
        </div>
      </header>

      {/* CENTER: MASSIVE TITLE ZONE */}
      <main className="glass-main">
        <div className="title-stack">
          <h2 className="event-title">PRO SERIES</h2>
          
          <div className="prize-pod">
            <div className="glare-shine"></div>
            <div className="pod-content">
              <label>REWARD_BOUNTY</label>
              <div className="value">
                <span className="unit">$</span>100
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM: DATA & MAPS */}
      <footer className="glass-footer">
        {[
          { label: 'TIME', value: '20:00 CET', img: imgErangel, name: 'ERANGEL' },
          { label: 'DISCORD', value: '@ngc-esports', img: imgMiramar, name: 'MIRAMAR' },
          { label: 'FORMAT', value: 'TPP SQUAD', img: imgRondo, name: 'RONDO' }
        ].map((item, i) => (
          <div key={i} className="data-card">
            <div className="map-frame"><img src={item.img} alt={item.name} /></div>
            <div className="card-info">
              <label>{item.label}</label>
              <span>{item.value}</span>
            </div>
            <div className="map-badge">{item.name}</div>
            <div className="glare-line card-glare"></div>
          </div>
        ))}
      </footer>

      {/* FRAME NOISE OVERLAY */}
      <div className="vignette"></div>
    </div>
  );
};

export default ProBanner;