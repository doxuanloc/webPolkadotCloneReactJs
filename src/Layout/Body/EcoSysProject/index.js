import CardProject from "../../../Components/Modal/ModalCardProject";
import styles from "./EcoSysProject.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
function EcoSys() {
  const navigate = useNavigate();

  const handleRouteChange = (url) => {
    navigate(url);
  };
  return (
    <div className={styles.wrapper}>
      <p style={{ textAlign: "center", fontSize: 46, fontWeight: 700 }}>
        From the blog
      </p>
      <CardProject />
      <div className={styles.footer}>
        <h1>Want to get involved?</h1>
        <Button url="/community">join the Community</Button>
        <h3>
          or learn about how to{" "}
          <span
            className={styles.text}
            onClick={() => handleRouteChange("/build")}
          >
            build on Polkadot.
          </span>
        </h3>
      </div>
    </div>
  );
}

export default EcoSys;
