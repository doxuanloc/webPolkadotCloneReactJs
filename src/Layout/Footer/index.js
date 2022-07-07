import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faDiscord,
  faGithub,
  faReddit,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const navigate = useNavigate();

  const handleRouteChange = (url) => {
    navigate(url);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.general}>
          <p>General</p>
          <button>About</button>
          <button>FAQ</button>
          <button>Support</button>
          <button>Build</button>
          <button>Grants and Bounties</button>
          <button>Careers</button>
        </div>
        <div className={styles.technology}>
          <p>Technology</p>
          <button>Technology</button>
          <button>Roadmap</button>
          <button>Token</button>
          <button>Telemetry</button>
          <button>Substrate</button>
          <button>Lightpaper</button>
          <button>Whitepaper</button>
        </div>
        <div className={styles.community}>
          <p>Community</p>
          <button>Community</button>
          <button>Documentation</button>
          <button>Brand Assets</button>
          <button>Blog</button>
          <button>Element Chat</button>
          <button>Medium</button>
        </div>
        <div className={styles.social}>
          <a href="https://twitter.com/Polkadot">
            <FontAwesomeIcon icon={faTwitter} border color="white" />
          </a>
          <a href="https://twitter.com/Polkadot">
            <FontAwesomeIcon icon={faReddit} border color="white" />
          </a>
          <a href="https://twitter.com/Polkadot">
            <FontAwesomeIcon icon={faGithub} border color="white" />
          </a>
          <a href="https://twitter.com/Polkadot">
            <FontAwesomeIcon icon={faYoutube} border color="white" />
          </a>
          <a href="https://twitter.com/Polkadot">
            <FontAwesomeIcon icon={faDiscord} border color="white" />
          </a>
          <div className={styles.subscribe}>
            <h1>
              Subscribe to the newsletter to hear about Polkadot updates and
              events.
            </h1>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles["bottom-footer"]}>
        <img
          src="https://polkadot.network/assets/img/logo-polkadot-light.svg?v=96b0dfa78e"
          alt="dot"
        />
        <div className={styles.title}>
          <p>© 2022</p>
          <button onClick={() => handleRouteChange("")}>
            Web3 Foundation |
          </button>
          <button onClick={() => handleRouteChange("/impressum")}>
            Impressum |
          </button>
          <button onClick={() => handleRouteChange("/disclaimer")}>
            Disclaimer |
          </button>
          <button onClick={() => handleRouteChange("/privacy")}>
            Privacy |
          </button>
          <button onClick={() => handleRouteChange("")}>
            Cookie Settings |
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
