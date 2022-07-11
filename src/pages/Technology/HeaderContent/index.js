import TagSocial from "../../../Components/TagSocial";
import styles from "./HeaderContent.module.scss";

function HeaderContent() {
  return (
    <div className={styles["wrapper-main"]}>
      <div className={styles.title}>
        <h2>
          A scalable, interoperable & secure network protocol for the next web
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.tag}>
          <TagSocial img="https://polkadot.network/assets/img/logos/logo-circle-github.svg?v=96b0dfa78e">
            <p>GitHub</p>
            <h1>Latest version & history.</h1>
          </TagSocial>
          <TagSocial img="https://polkadot.network/assets/img/logos/logo-circle-github.svg?v=96b0dfa78e">
            <p>GitHub</p>
            <h1>Latest version & history.</h1>
          </TagSocial>
          <TagSocial img="https://polkadot.network/assets/img/logos/logo-circle-github.svg?v=96b0dfa78e">
            <p>GitHub</p>
            <h1>Latest version & history.</h1>
          </TagSocial>
        </div>
        <div className={styles.text}>
          <h1>Any type of data across any type of blockchain</h1>
          <h4>
            Polkadot is a network protocol that allows arbitrary data—not just
            tokens—to be transferred across blockchains.
          </h4>
          <p>
            This means Polkadot is a true multi-chain application environment
            where things like cross-chain registries and cross-chain computation
            are possible.
          </p>
          <p>
            Polkadot can transfer this data across public, open, permissionless
            blockchains as well as private, permissioned blockchains.
          </p>
          <p>
            This makes it possible to build applications that get permissioned
            data from a private blockchain and use it on a public blockchain.
            For instance, a school's private, permissioned academic records
            chain could send a proof to a degree-verification smart contract on
            a public chain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
