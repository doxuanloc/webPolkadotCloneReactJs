import styles from "./BottomContent.module.scss";
import { useNavigate } from "react-router-dom";
// import ReactWOW from "react-wow";

function BottomContent() {
  const navigate = useNavigate();

  const handleRouteChange = (url) => {
    navigate(url);
  };
  return (
    <div className={styles.wrapper}>
      {/* <ReactWOW animation="fadeIn">
        <div> */}
      <p>Founded by some of the blockchain industry’s foremost builders</p>
      <button onClick={() => handleRouteChange("/about")}>
        Learn About the Polkadot Team
      </button>
      {/* </div>
      </ReactWOW> */}
    </div>
  );
}

export default BottomContent;
