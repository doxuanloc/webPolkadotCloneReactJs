import { useState } from "react";
import styles from "./HeaderMenu.module.scss";
import MenuModule from "./MenuModule";
import OutsideClickHandler from "react-outside-click-handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function HeaderMenu({ showHeaderMenu }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuModule = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutSite = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={
        showHeaderMenu
          ? styles["header-wrapper"]
          : styles["header-wrapper-hide"]
      }
    >
      <div className={styles["container"]}>
        <div className={styles["btn-language"]}>
          <button
            onClick={handleMenuModule}
            className={showMenu ? styles["btn-list-arrow"] : styles["btn-list"]}
          >
            <span className={styles["btn-item"]}>EN</span>
          </button>
        </div>
        <div className={styles["header-language"]}>
          <OutsideClickHandler onOutsideClick={handleClickOutSite} />
          {showMenu && <MenuModule />}
        </div>
        <div className={styles["sidebar-header"]}>
          <a href="https://polkadot.network/Polkadot-lightpaper.pdf">
            Lightpaper
          </a>
          <a href="https://polkadot.network/PolkaDotPaper.pdf">Whitepaper</a>
          <a href="https://wiki.polkadot.network/">Wiki</a>
          <div className={styles["icon"]}>
            <a href="https://github.com/paritytech/polkadot">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://discord.com/invite/wGUDt2p">
              <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 15 }} />
            </a>
            <a href="https://twitter.com/Polkadot">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://support.polkadot.network/support/home"
              style={{ borderRadius: 40 }}
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
