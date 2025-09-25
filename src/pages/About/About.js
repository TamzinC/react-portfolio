import styles from "./About.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

// Technical:
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiJson,
  SiNpm,
  SiJest,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import { PiFileJsx } from "react-icons/pi";

// Frameworks/Tools:
import {
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiVercel,
  SiSanity,
  SiGithub,
  SiShopify
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";

// Design:
import {
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeillustrator,
  SiFigma,
  SiCanva,
} from "react-icons/si";

// Soft Skills:
import {
  FaComments,
  FaSitemap,
  FaPaintBrush,
  FaLightbulb,
  FaChartBar,
} from "react-icons/fa";
import { MdSpeed, MdOutlineTimer } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

function About(props) {
  return (
    <div>
      <h1>About Me</h1>

      <div className={styles.aboutContainer}>
        <p className={styles.about}>
          With a strong foundation in Marketing and a passion for design, I've
          thrived in areas like graphic design, marketing strategy, paid social
          advertising, and E-Commerce. Now transitioning into Front-End Web
          Development, I'm eager to fuse my marketing savvy with design
          expertise to create impactful online experiences.
        </p>
        {/* <p className="about" style={styles.about}>
          With a background in Marketing, I have a passion for design. I hold
          experience in areas such as graphic design, marketing strategy, paid
          social advertising and E-Commerce - just to name a few! I've recently
          decided to make a career switch to Front-End Web Development and I'm
          excited to bring my marketing mindset and design skills to the field!
        </p> */}
        <img src={`${process.env.PUBLIC_URL}/images/memoji-6.png`} alt="profile" className={styles.aboutImage} />
      </div>

      <div className={styles.skillsWrapper}>
        <div>
          {/* <h3 className={styles.h3}>Skills</h3> */}
          <section className={styles.skills}>
            <div className={styles.skillsItem}>
              <h5>Technical:</h5>
              <ul className={styles.skillList}>
                <li>
                  <SiHtml5 className={styles.icon} /> HTML
                </li>
                <li>
                  <SiCss3 className={styles.icon} /> CSS
                </li>
                <li>
                  <SiJavascript className={styles.icon} /> JavaScript
                </li>
                <li>
                  <SiJquery className={styles.icon} /> jQuery
                </li>
                <li>
                  <PiFileJsx className={styles.icon} /> JSX
                </li>
                <li>
                  <TbApi className={styles.icon} /> APIs
                </li>
                <li>
                  <SiNpm className={styles.icon} /> npm
                </li>
                <li>
                  <FaNodeJs className={styles.icon} /> Node.js
                </li>
                <li>
                  <BiTimeFive className={styles.icon} /> moment.js
                </li>
                <li>
                  <SiJest className={styles.icon} /> Jest
                </li>
                <li>
                  <SiJson className={styles.icon} /> JSON
                </li>
              </ul>
            </div>

            <div className={styles.skillsItem}>
              <h5>Frameworks & Tools:</h5>
              <ul className={styles.skillList}>
                <li>
                  <SiBootstrap className={styles.icon} /> Bootstrap
                </li>
                <li>
                  <SiReact className={styles.icon} /> React
                </li>
                <li>
                  <SiNextdotjs className={styles.icon} /> Next.js
                </li>
                <li>
                  <SiVercel className={styles.icon} /> Vercel
                </li>
                <li>
                  <SiSanity className={styles.icon} /> Sanity
                </li>
                <li>
                  <SiGithub className={styles.icon} /> GitHub
                </li>
                <li>
                  <FaGitAlt className={styles.icon} /> Git
                </li>
                <li>
                  <BiLogoVisualStudio className={styles.icon} /> VS Code
                </li>
                <li>
                  <SiShopify className={styles.icon} /> Shopify
                </li>
              </ul>
            </div>

            <div className={styles.skillsItem}>
              <h5>Design:</h5>
              <ul className={styles.skillList}>
                <li>
                  <SiAdobephotoshop className={styles.icon} /> Photoshop
                </li>
                <li>
                  <SiAdobeindesign className={styles.icon} /> InDesign
                </li>
                <li>
                  <SiAdobeillustrator className={styles.icon} /> Illustrator
                </li>
                <li>
                  <SiFigma className={styles.icon} /> Figma
                </li>
                <li>
                  <SiCanva className={styles.icon} /> Canva
                </li>
              </ul>
            </div>

            <div className={styles.skillsItem}>
              <h5>Soft Skills:</h5>
              <ul className={styles.skillList}>
                <li>
                  <FaComments className={styles.icon} /> Social Media Management
                </li>
                <li>
                  <FaPaintBrush className={styles.icon} /> Graphic Design
                </li>
                <li>
                  <GiMagnifyingGlass className={styles.icon} /> Attention to
                  Detail
                </li>
                <li>
                  <MdSpeed className={styles.icon} /> Fast Learner / Continuous
                  Learning
                </li>
                <li>
                  <FaLightbulb className={styles.icon} /> Creative Mindset
                </li>
                <li>
                  <FaSitemap className={styles.icon} /> Customer / UX
                  Understanding
                </li>
                <li>
                  <FaChartBar className={styles.icon} /> Analytical
                </li>
                <li>
                  <MdOutlineTimer className={styles.icon} /> Time Management
                </li>
              </ul>
            </div>
          </section>

          <aside className={styles.aside}>
            {/* <p>Contact and Social Links</p> */}
            <p>Psst... The good stuff's here 👀</p>
            <a href="https://github.com/TamzinC" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/tamzin-chikhalia-44a59a188/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="mailto:tamzinchikhalia@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="./assets/tamzin_cv.pdf" target="_blank">
              <FontAwesomeIcon
                icon={faFilePdf}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default About;
