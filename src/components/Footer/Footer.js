import {useEffect, useState, useRef} from "react";
import {useLocation} from "react-router-dom";
import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";



function Footer(props) {
  // console.log("styles", styles);
  const [visible, setVisible] = useState(true);
  const scrollTimeoutRef = useRef(null);
  const prevScrollYRef = useRef(0);
  const location = useLocation();

  const resetTimer = () => {
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const showFooter = () => {
    setVisible(true);
    resetTimer();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < prevScrollYRef.current;

      if (isScrollingUp) {
        showFooter();
      }

      prevScrollYRef.current = currentScrollY;
    };

    const handleMouseMove = () => {
      showFooter();
    };

    const handleTouch = () => {
      showFooter();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouch);
    window.addEventListener("touchmove", handleTouch);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);
  
  useEffect(() => {
    showFooter();
  }, [location]);


  return (
    <footer className={`${styles.footer} ${visible ? styles.footerVisible : ""}`}>
      <div style={{width: "100px"}}></div> {/* Placeholder for spacing */}

      <div className={styles.footerTxt}>
        <p className={styles.caption}>Made with ❤️ by {props.title}</p>
        <p className={styles.copyright}>&copy;{new Date().getFullYear()}</p>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://github.com/TamzinC" target="_blank" className={styles.iconLink}>
          <FontAwesomeIcon
            icon={faGithub}
            className={styles.socialBadge}
          ></FontAwesomeIcon>
        </a>

        <a
          href="https://www.linkedin.com/in/tamzin-chikhalia-44a59a188/"
          target="_blank" className={styles.iconLink}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles.socialBadge}
          ></FontAwesomeIcon>
        </a>

        <a href="mailto:tamzinchikhalia@gmail.com" target="_blank" className={styles.iconLink}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.socialBadge}
          ></FontAwesomeIcon>
        </a>

        <a href="./assets/tamzin_cv.pdf" target="_blank" className={styles.iconLink}>
          <FontAwesomeIcon
            icon={faFilePdf}
            className={styles.socialBadge}
          ></FontAwesomeIcon>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
