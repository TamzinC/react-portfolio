import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? styles.navLinkActive : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.logoLink}>
          <img
            src="./images/memoji-7.PNG"
            alt="profile"
            className={styles.headerIcon}
          />
          <h3 className={styles.headerName}>
            {props.title}
          </h3>
        </NavLink>
      </div>

      {/* Hamburger button - only visible on small screens */}
      <button
      className={styles.hamburger}
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation">
        ☰
      </button>

      {/* Nav Links */}
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        <NavLink to="/" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
