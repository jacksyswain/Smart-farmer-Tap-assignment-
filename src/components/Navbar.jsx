import './Navbar.css';

export default function Navbar({ onDetectFarm }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <i className="fas fa-tractor"></i>
          <span>AgroSmart</span>
        </div>
        <button className="detect-btn" onClick={onDetectFarm}>
          <i className="fas fa-location-dot"></i>
          <span>Detect Farm</span>
        </button>
      </div>
    </nav>
  );
}
