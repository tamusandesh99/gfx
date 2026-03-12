import React from 'react';
import './index.scss';
import bgImg3 from '../../../../public/pics/bg3.png';
import imgErangel from '../../../../public/pics/erangle.jpg';
import imgMiramar from '../../../../public/pics/miramar.png';
import imgRondo from '../../../../public/pics/rondo.png';

const ProBanner = () => {
  return (
    <div className="app-container" style={{ "--bg-concrete": `url(${bgImg3})` }}>
      
      {/* MASSIVE HAZARD & 3D BRANDING GRID */}
      <div className="security-layer">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="security-row">
            <div className="block-tag-3d">NGC ESPORTS</div>
            <div className="hazard-emblem">
              <div className="tri">!</div>
              <span>NGC ESPORTS PROPERTY</span>
            </div>
          </div>
        ))}
      </div>

      <div className="urban-zoom-wrapper">
        
        <div className="hazard-tape top">
          <div className="tape-inner">
            WARNING // NGC ESPORTS AUTHORIZED // WARNING // NGC ESPORTS AUTHORIZED
          </div>
        </div>

        <div className="urban-layout">
          
          <div className="intel-stack">
            {/* Direct Hazard Sign in the stack */}
            <div className="stack-hazard">
              <div className="tri-large">!</div>
              <div className="text-wrap">
                <strong>NGC ESPORTS</strong>
                <small>RESTRICTED AREA</small>
              </div>
            </div>

            {[
              { name: 'ERANGEL', img: imgErangel, rot: '-2deg' },
              { name: 'MIRAMAR', img: imgMiramar, rot: '3deg' },
            ].map((map, i) => (
              <div key={i} className="intel-card" style={{ transform: `rotate(${map.rot})` }}>
                <div className="red-line-top"></div>
                <img src={map.img} alt={map.name} />
                <div className="intel-label">INTEL: {map.name}</div>
              </div>
            ))}
          </div>

          <main className="heavy-poster">
            {/* HUGE STAMPED HAZARD */}
            <div className="poster-hazard-stamp">
              <div className="stamp-inner">NGC ESPORTS</div>
            </div>

            <div className="poster-inner">
              <span className="sub-head">OFFICIAL TOURNAMENT BRIEF</span>
              <h1 className="main-head">PRO SERIES</h1>
              
              <div className="bounty-stencil">
                <span className="b-label">PRIZE POOL</span>
                <span className="b-val">$100</span>
              </div>

              <div className="footer-meta">
                <span>DAILY SCRIMS</span>
                <span className="sep">|</span>
                <span>21:00 PM</span>
                <span className="sep">|</span>
                <span>MOBILE TPP</span>
              </div>
            </div>
            <div className="poster-tear"></div>
          </main>

        </div>

        <div className="hazard-tape bottom">
          <div className="tape-inner">
            PROPERTY OF NGC ESPORTS // DO NOT USE WITHOUT PERMISSION // NGC ESPORTS
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProBanner;