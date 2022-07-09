import styles from "./PrimaryContent.module.scss";
function PrimaryContent() {
  return (
    <div className={styles.wrapper}>
      <h1>Network Glossary</h1>
      <p>
        Polkadot unites a network of heterogeneous blockchains called parachains
        and parathreads. These chains connect to and are secured by the Polkadot
        Relay Chain. They can also connect with external networks via bridges.
      </p>
    </div>
  );
}

export default PrimaryContent;
