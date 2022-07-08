import styles from "./BottomContent.module.scss";
import Button from "../../../Components/Button";
// import ReactWOW from "react-wow";

function BottomContent() {
  return (
    <div className={styles.wrapper}>
      {/* <ReactWOW animation="fadeIn">
        <div> */}
      <p>Founded by some of the blockchain industry’s foremost builders</p>
      <Button customClassName={styles["button-img"]} url="/about">
        Learn About the Polkadot Team
      </Button>
      {/* </div>
      </ReactWOW> */}
    </div>
  );
}

export default BottomContent;
