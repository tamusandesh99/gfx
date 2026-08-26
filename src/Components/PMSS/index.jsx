import "./PMSS.scss";
import sponsor from "../../../public/pics/sponsor-w.png";
import logo from "../../../public/pics/logo2.png";

const TOTAL_TEAMS = 20;
const teams = Array.from({ length: TOTAL_TEAMS }, (_, i) => ({ rank: i + 1 }));

export default function PMSS() {
  const left = teams.slice(0, 9);
  const right = teams.slice(9, 18);

  const renderRow = (team) => (
    <div className="pmss-row" key={team.rank}>
      <div className="cell cell--rank">
        <span className="rank-chip">#{team.rank}</span>
      </div>
      <div className="cell cell--team" />
      <div className="cell cell--stat" />
      <div className="cell cell--stat" />
      <div className="cell cell--stat" />
      <div className="cell cell--total" />
    </div>
  );

  const TableHead = () => (
    <div className="pmss-thead">
      <div className="cell cell--rank">Rank</div>
      <div className="cell cell--team">Team</div>
      <div className="cell cell--stat">Wwcd</div>
      <div className="cell cell--stat">Place</div>
      <div className="cell cell--stat">Elims</div>
      <div className="cell cell--total">Total</div>
    </div>
  );

  return (
    <div className="pmss-wrap">
      <span className="blob blob--a" />
      <span className="blob blob--b" />
      <span className="grid-lines" />
      <span className="pmss-ghost">NGC ESPORTS</span>

      <div className="pmss-topbar">
        <div className="brand-slot">
          <span className="brand-mark" />
          <span>NGC ESPORTS - PUBG MOBILE</span>
        </div>
        <div className="event-slot">
          <span>PMSS CHAMPIONSHIP</span>
          <span className="brand-mark brand-mark--alt" />
        </div>
      </div>

      <div className="pmss-brandline">
        <span className="brandline-bar" />
        <span className="brandline-diamond" />
        <span className="brandline-text">NGC ESPORTS</span>
        <span className="brandline-diamond" />
        <span className="brandline-bar" />
      </div>

      <div className="pmss-hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-year">2026 PMSS</span>
            <span className="badge-tag">LEAGUE</span>
          </div>
          <h1 className="hero-title">OVERALL RANKINGS</h1>
          <p className="hero-sub">SEASON 5 // PUBG MOBILE</p>
        </div>

        <div className="hero-right">
          <span className="stage-day">PMSS</span>
          <span className="stage-name">Season 5</span>
        </div>
      </div>

      <div className="pmss-frame">
        <div className="pmss-columns">
          <section className="pmss-col">
            <TableHead />
            <div className="pmss-rows">{left.map(renderRow)}</div>
          </section>

          <span className="col-divider" />

          <section className="pmss-col">
            <TableHead />
            <div className="pmss-rows">{right.map(renderRow)}</div>
          </section>
        </div>
      </div>

      <div className="pmss-ticker">
        <span className="ticker-live">WATCH LIVE!</span>
        <span className="ticker-date">Staring AUG 10, 2026</span>
        <span className="ticker-brand">NGCESPORTS.COM</span>
        <span className="ticker-brand">@NGCESPORTSHURICANE</span>
      </div>

      <footer className="pmss-footer">
        <img src={sponsor} alt="sponsor" className="sponsor-logo" />
        <img src={logo} alt="sponsor" className="ngc-logo" />
      </footer>
    </div>
  );
}
