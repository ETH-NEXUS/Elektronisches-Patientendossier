import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestion, FaCog, FaSearch, FaUser } from 'react-icons/fa';
import HelpSidebar from './HelpSidebar';
import './Navbar.css';

function Navbar() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo / EPD Text */}
        <div className="navbar-logo">
          <h1>EPD</h1>
        </div>

        {/* Suchfeld */}
        <div className="navbar-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="KI-Suche in der gesamten App..."
            className="search-input"
          />
        </div>

        {/* Rechte Icons */}
        <div className="navbar-actions">
          <button
            className="navbar-icon-btn"
            title="Einstellungen"
          >
            <Link to="/einstellungen">
              <FaCog />
            </Link>
          </button>

          <button
            className="navbar-icon-btn"
            title="Hilfe"
            onClick={() => setShowHelp(!showHelp)}
          >
            <FaQuestion />
          </button>

          <button
            className="navbar-icon-btn profile-btn"
            title="Profil"
          >
            <Link to="/profile">
              <FaUser />
            </Link>
          </button>
        </div>
      </div>

      {/* Help Sidebar */}
      {showHelp && <HelpSidebar onClose={() => setShowHelp(false)} />}
    </nav>
  );
}

export default Navbar;
