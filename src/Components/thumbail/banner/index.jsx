import React from 'react';
import './index.scss';

const ProBanner = () => {
  return (
    <div className="app-container">
      <div className="banner-content">
        {/* Top Accents */}
        <div className="top-branding">
          <span className="platform-tag">PUBG MOBILE</span>
          <div className="shield-logo">NGC</div>
        </div>

        {/* Main Title Group */}
        <div className="main-title-stack">
          <h2 className="sub-title">NGC</h2>
          <h1 className="main-title">PRO SERIES</h1>
          <div className="decoration-line"></div>
        </div>

        {/* Prize Pool Callout */}
        <div className="prize-callout">
          <div className="prize-row-top">$100 USD</div>
          <div className="prize-row-bottom">PRIZEPOOL</div>
        </div>

        {/* Bottom Bar matching your reference logos */}
        <footer className="footer-logos">
          <div className="logo-strip">
            <span>KRAFTON</span>
            <span className="dot">•</span>
            <span>LEVEL INFINITE</span>
            <span className="dot">•</span>
            <span>LIGHTSPEED</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProBanner;