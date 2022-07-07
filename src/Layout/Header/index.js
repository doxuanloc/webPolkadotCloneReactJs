import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import SideBar from "./HeaderSidebar";

function Header() {
  const [showHeaderMenu, setShowHeaderMenu] = useState(true);

  const controlHeaderMenu = () => {
    if (window.scrollY > 70) {
      setShowHeaderMenu(false);
    } else {
      setShowHeaderMenu(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlHeaderMenu);
    return () => {
      window.removeEventListener("scroll", controlHeaderMenu);
    };
  }, []);
  return (
    <div className={styles["wrapper"]}>
      <HeaderMenu showHeaderMenu={showHeaderMenu} />
      <SideBar showHeaderMenu={showHeaderMenu} />
    </div>
  );
}

export default Header;
