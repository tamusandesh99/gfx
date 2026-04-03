// import React from "react";
// import "./index.scss";
// import pubgLogo from "../../../../public/pics/pubg-sponsors.png";
// import ngclogo from "../../../../public/pics/ngc.png";
// import textureImg from "../../../../public/pics/bg4.jpg";
// import erangle from "../../../../public/pics/erangle.jpg";
// import miramar from "../../../../public/pics/miramar.png";
// import rondo from "../../../../public/pics/rondo.png";

// const ProBanner = () => {
//   const emptyRows = Array.from({ length: 9 });

//   const Table = ({ startRank }) => (
//     <div className="table-wrapper">
//       <div className="table-header">
//         <span className="h-item">#</span>
//         <span className="h-item col-team">TEAM NAME</span>
//         <span className="h-item">WWCD</span>
//         <span className="h-item">PLACE</span>
//         <span className="h-item">ELIMS</span>
//         <span className="h-item">TOTAL</span>
//       </div>
//       <div className="table-body">
//         {emptyRows.map((_, index) => {
//           const currentRank = startRank + index;
//           return (
//             <div
//               className={`table-row ${currentRank <= 2 ? "qualified-row" : ""}`}
//               key={currentRank}
//             >
//               <div className="col-rank">
//                 <span>{currentRank}</span>
//               </div>
//               <span className="data-cell"></span>
//               <span className="data-cell"></span>
//               <span className="data-cell"></span>
//               <span className="col-total"></span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );

//   return (
//     <div className="app-container theme-vibrant-industrial">
//       <div
//         className="bg-texture-layer"
//         style={{ backgroundImage: `url(${textureImg})` }}
//       />
//       <div className="ribbon-container">
//         <div className="moving-ribbon r1" />
//         <div className="moving-ribbon r2" />
//         <div className="moving-ribbon r3" />
//         <div className="moving-ribbon r4" />
//         <div className="moving-ribbon r5" />
//       </div>

//       <div className="vertical-division-text">NGC ESPORTS // NGC</div>

//       <div className="main-layout">
//         {/* Centered Large Brand Header */}
//         <div className="brand-header-top">
//           <div className="brand-line" />
//           <span className="brand-text">NGC ESPORTS</span>
//           <div className="brand-line" />
//         </div>

//         <header className="standings-header">
//           <div className="header-left">
//             <div className="ngc-label">NGC ESPORTS // PRO DIVISION</div>
//             <h1 className="main-title">
//               PRO <span className="highlight-text">DIVISION</span>
//             </h1>
//             <div className="standings-accent-bar">
//               <div className="ribbon-line" />
//               SEMI FINAL // STANDINGS
//             </div>
//           </div>

//           <div className="header-right">
//             <div className="qualify-bracket">
//               {/* Moved Logo BEFORE the box */}
//               <div className="qualify-box">
//                 <span className="live-dot">●</span> TOP 2 TEAMS QUALIFIED
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="group-title-row">
//           <div className="group-title-inner">
//             <div className="title-accent-box" />
//             <span className="title-label">GROUP</span>
//             <span className="title-value">SEMI C</span>
//           </div>
//         </div>

//         <div className="industrial-ribbon-divider">
//           <div className="ribbon-text">
//             STAY FOCUSED // PLAY FAIR // WIN BIG
//           </div>
//         </div>

//         {/* <div className="map-pool-container">
//           <div className="map-card">
//             <img src={erangle} alt="Match 1" />
//           </div>
//           <div className="map-card">
//             <img src={miramar} alt="Match 2" />
//           </div>
//           <div className="map-card">
//             <img src={rondo} alt="Match 3" />
//           </div>
//           <div className="map-card">
//             <img src={erangle} alt="Match 4" />
//           </div>
//         </div> */}

//         <div className="dual-tables">
//           <Table startRank={1} />
//           <Table startRank={10} />
//         </div>

//         <footer className="standings-footer">
//           <div className="footer-container">
//             <div className="footer-segment brand">
//               <span className="value">NGC // PRO DIVISION</span>
//             </div>

//             <div className="footer-segment system">
//               <span className="value">
//                 LIVE ON YOUTUBE // FINAL EVERY THURSDAY 20:00 CET
//               </span>
//             </div>

//             <div className="footer-segment logo-space">
//               {/* You can still put a logo here if you want a small one, otherwise keep empty */}
//             </div>

//             <div className="footer-segment live">
//               <div className="live-indicator">
//                 <span className="live-dot">●</span> LIVE @NGCESPORTSHURICANE
//               </div>
//             </div>
//           </div>

//           {/* NEW SPONSOR SECTION */}
//           <div className="sponsor-banner">
//             {/* Left Aligned */}
//             <img src={pubgLogo} alt="Sponsors" className="sponsor-logo" />

//             {/* Right Aligned */}
//             <img src={ngclogo} alt="NGC Logo" className="ngc-footer-logo" />
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ProBanner;
