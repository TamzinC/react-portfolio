import styles from './Footer.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
    return (
      <footer>
        <p>{props.title} &copy;{new Date().getFullYear()}</p>
        <div className={styles.socialIcons}>
          <a href="https://github.com/TamzinC" target="_blank">
          <FontAwesomeIcon
          icon={faGithub}
          className={styles.socialBadge}></FontAwesomeIcon>
          </a>

          <a href="https://www.linkedin.com/in/tamzin-chikhalia-44a59a188/" target="_blank">
          <FontAwesomeIcon
          icon={faLinkedin}
          className={styles.socialBadge}></FontAwesomeIcon>
          </a>

          <a href="mailto:tamzinchikhalia@gmail.com" target="_blank">
          <FontAwesomeIcon
          icon={faEnvelope}
          className={styles.socialBadge}></FontAwesomeIcon>
          </a>

          <a href="./assets/tamzin_cv.pdf" target="_blank">
          <FontAwesomeIcon
          icon={faFilePdf}
          className={styles.socialBadge}></FontAwesomeIcon>
          </a>
        </div>
      </footer>
    )
  }
  
  export default Footer;