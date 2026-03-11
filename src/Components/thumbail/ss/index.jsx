import React from 'react';
import './index.scss'; // Specific styles for this GFX

const SuperSunday = () => {
  return (
    <div className="app-container">
      <div className="super-sunday-layout">
        
        <div className="header-meta">TIME 23:00 — NGC ESPORTS — EVERY SUNDAY</div>
        <h1 className="main-title">SUPER SUNDAY - 20€</h1>

        <div className="grid-container">
          <div className="portrait-area">{/* Left Player */}</div>

          <div className="slots-center">
            <div className="row">
               <span>|</span><span>|</span><span>|</span><span>|</span><span>|</span>
            </div>
            <div className="row">
               <span>|</span><span>|</span><span>|</span><span>|</span><span>|</span>
            </div>
            <div className="row short">
               <span>|</span><span>|</span><span>|</span>
            </div>
          </div>

          <div className="portrait-area">{/* Right Player */}</div>
        </div>

        <footer className="footer-brand">
          <span>KRAFTON</span><span>LEVEL INFINITE</span><span>LIGHTSPEED</span><span>NGC ESPORTS</span>
        </footer>

      </div>
    </div>
  );
};

export default SuperSunday;