import styles from "./HeaderSidebar.module.scss";
import { useNavigate } from "react-router-dom";

function SideBar({ showHeaderMenu }) {
  const navigate = useNavigate();

  const handleRouteChange = (url) => {
    navigate(url);
  };

  return (
    <div
      className={showHeaderMenu ? styles["wrapper"] : styles["wrapper-hide"]}
    >
      <div className={styles["logo"]}>
        <img
          onClick={() => handleRouteChange("/")}
          alt="Polkadot"
          src="https://polkadot.network/assets/img/logo-polkadot.svg?v=7f5cfb2a3a"
        ></img>
      </div>
      <div className={styles["sidebar"]}>
        <button
          className={styles["sidebar-item"]}
          onClick={() => handleRouteChange("/technology")}
        >
          Technology
        </button>
        <button
          className={styles["sidebar-item"]}
          onClick={() => handleRouteChange("/community")}
        >
          Community
        </button>
        <button
          className={styles["sidebar-item"]}
          onClick={() => handleRouteChange("/about")}
        >
          About
        </button>
        <button
          className={styles["sidebar-item"]}
          onClick={() => handleRouteChange("/blog")}
        >
          Blog
        </button>
        <button
          className={styles["sidebar-item"]}
          onClick={() => handleRouteChange("/build")}
        >
          Build
        </button>
        <button
          className={styles["sidebar-item"]}
          onClick={() => handleRouteChange("/contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default SideBar;
