import "./NGCPricing.scss";
import logo from "../../../public/pics/logo2.png";

const FEATURES = [
  "Single Regular Slot (20 or 23 CET)",
  "No Ban for Missed Matches",
  "Automatic Staff Registration",
  "Both Regular Slots (20 & 23 CET)",
  "One Sunday Special Slot",
  "Both Sunday Special Slots",
  "Full VIP Access",
];

const TIERS = [
  {
    id: 1,
    name: "Tier 1",
    price: "€25",
    accent: "t1",
    included: [true, true, true, false, false, false, false],
  },
  {
    id: 2,
    name: "Tier 2",
    price: "€35",
    accent: "t2",
    included: [true, true, true, false, true, false, false],
  
  },
  {
    id: 3,
    name: "Tier 3",
    price: "€40",
    accent: "t3",
     included: [true, true, true, true, false, false, false],
  },
  {
    id: 4,
    name: "Tier 4",
    price: "€45",
    accent: "t4",
    included: [true, true, true, false, true, true, false],
  },
  {
    id: 5,
    name: "Tier 5",
    price: "€50",
    accent: "t5",
    included: [true, true, true, true, true, false, false],
  },
  {
    id: 6,
    name: "Tier 6",
    price: "€60",
    accent: "t6",
    included: [true, true, true, true, true, true, true],
  },
];

const SINGLE_ENTRY = [
  { name: "One day VIP slot", note: "One regular scrim day", price: "€3" },
  { name: "Sunday Special Entry", note: "One Sunday day", price: "€4" },
  { name: "Remove Temporary Ban", note: "Lift a temporary ban", price: "€5" },
  { name: "Remove Permanent Ban", note: "Lift a permanent ban", price: "€25" },
];

export default function NGCPricing() {
  return (
    <div className="ngc-price-wrap">
      <span className="ghost-text">NGC ESPORTS</span>
      <span className="grid-lines" />

      <header className="price-header">
        <div className="brandline">
          <span className="brandline-bar" />
          <span className="brandline-diamond" />
          <span className="brandline-text">NGC ESPORTS</span>
          <span className="brandline-diamond" />
          <span className="brandline-bar" />
        </div>
        <h1 className="price-title">VIP PRICING</h1>
        <p className="price-sub">PUBG MOBILE // NGC SERVICES</p>
      </header>

      <section className="quick-info">
        <div className="info-chip">
          <span className="info-label">Slots</span>
          <span className="info-value">20:00 &amp; 23:00 CET</span>
        </div>
        <div className="info-chip">
          <span className="info-label">Regular</span>
          <span className="info-value">Mon – Sat</span>
        </div>
        <div className="info-chip">
          <span className="info-label">Special</span>
          <span className="info-value">Sunday</span>
        </div>
      </section>

      <section className="single-entry-section">
        <h2 className="section-heading">Single Entry</h2>
        <div className="single-entry-grid">
          {SINGLE_ENTRY.map((item) => (
            <div className="entry-card" key={item.name}>
              <span className="entry-name">{item.name}</span>
              <span className="entry-note">{item.note}</span>
              <span className="entry-price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tiers-section">
        <h2 className="section-heading">Monthly Bundles</h2>
        <div className="tiers-row">
          {TIERS.map((tier) => (
            <div
              className={`tier-card tier-card--${tier.accent}`}
              key={tier.id}
            >
              <span className="tier-name">{tier.name}</span>
              <span className="tier-price">{tier.price}</span>
              <div className="tier-divider" />
              <ul className="tier-features">
                {FEATURES.map((feature, i) => (
                  <li
                    key={feature}
                    className={tier.included[i] ? "is-included" : "is-excluded"}
                  >
                    <span className="feature-icon">
                      {tier.included[i] ? "✓" : "✗"}
                    </span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="price-footer">
        <img src={logo} alt="NGC Esports" className="footer-logo" />
        <span className="footer-text">All prices in EUR // ngcesports.com</span>
      </footer>
    </div>
  );
}
