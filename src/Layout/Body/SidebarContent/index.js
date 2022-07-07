import styles from "./SidebarContent.module.scss";
import Tippy from "@tippyjs/react";
// import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling
function SidebarContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>An open-source protocol built for everyone</h1>
        <div>
          <p>
            Polkadot is an open-source project founded by the Web3 Foundation.
          </p>
          <p>
            Web3 Foundation has commissioned five teams and over 100 developers
            to build Polkadot, including:
          </p>
        </div>
      </div>
      <div className={styles.image}>
        <Tippy content="Parity Technologies">
          <img
            src="https://polkadot.network/assets/img/logos/logo-circle-parity-white.svg?v=96b0dfa78e"
            alt="a"
          ></img>
        </Tippy>

        <Tippy content="ChainSafe">
          <img
            src="	https://polkadot.network/assets/img/logos/logo-circle-chainsafe-white.svg?v=96b0dfa78e"
            alt="a"
          ></img>
        </Tippy>
        <Tippy content="Soramitsu">
          <img
            src="https://polkadot.network/assets/img/logos/logo-circle-soramitsu-white.svg?v=96b0dfa78e"
            alt="a"
          ></img>
        </Tippy>
        <Tippy content="PolkadotJS">
          <img
            src="	https://polkadot.network/assets/img/logos/logo-circle-polkadot-js-white.svg?v=96b0dfa78e"
            alt="a"
          ></img>
        </Tippy>
      </div>
    </div>
  );
}

export default SidebarContent;
