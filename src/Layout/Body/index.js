import { useEffect, useState } from "react";
import styles from "./Body.module.scss";
import BottomContent from "./BottomContent";
import Content from "./ContentProject";
import Detail from "./DetailProject";
import EcoSys from "./EcoSysProject";
import IntroProject from "./IntroProject";
import SidebarContent from "./SidebarContent";

function Body() {
  const [showMess, setShowMess] = useState(false);
  const controlMess = () => {
    if (window.scrollY > 100) {
      setShowMess(true);
    } else {
      setShowMess(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlMess);
    return () => {
      window.removeEventListener("scroll", controlMess);
    };
  }, []);
  return (
    <main className={styles.wrapper}>
      <IntroProject />
      {showMess && (
        <a href="https://support.polkadot.network/support/home">
          <img
            className={styles.image}
            src="https://polkadot.network/assets/img/icons/support.svg?v=96b0dfa78e"
            alt="mess"
          ></img>
        </a>
      )}
      <Detail />
      <Content />
      <SidebarContent />
      <BottomContent />
      <EcoSys />
    </main>
  );
}

export default Body;
