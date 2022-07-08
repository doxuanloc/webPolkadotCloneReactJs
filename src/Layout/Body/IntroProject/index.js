import Button from "../../../Components/Button";
import styles from "./Intro.module.scss";

function Intro() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <h2>The multichain vision for Web3 starts here.</h2>
        <p>
          Polkadot unites and secures a growing ecosystem of specialized
          blockchains called parachains. Apps and services on Polkadot can
          securely communicate across chains, forming the basis for a truly
          interoperable decentralized web.
        </p>
        <div className={styles.btn}>
          <Button url="/parachains">Learn parachains</Button>
          <Button>Start building</Button>
        </div>
      </div>
      <div className={styles.img}>
        <img
          alt="Polkadot"
          src="https://polkadot.network/assets/img/hero/xcm-animation-inner.png?v=96b0dfa78e"
        ></img>
      </div>
    </main>
  );
}

export default Intro;
