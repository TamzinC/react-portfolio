import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
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

      <nav>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={getNavLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={getNavLinkClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
