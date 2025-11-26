import { NavLink } from 'react-router-dom';
import './SecondaryNav.css';

function SecondaryNav() {
  return (
    <nav className="secondary-nav">
      <div className="secondary-nav-content">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Home
        </NavLink>
        <NavLink
          to="/faelle"
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Fälle
        </NavLink>
        <NavLink
          to="/dokumente"
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Dokumente
        </NavLink>
        <NavLink
          to="/visualisierungen"
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Visualisierungen
        </NavLink>
        <NavLink
          to="/freigaben"
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Freigaben
        </NavLink>
      </div>
    </nav>
  );
}

export default SecondaryNav;
