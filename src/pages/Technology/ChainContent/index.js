import styles from "./ChainContent.module.scss";
import CardTech from "../../../Components/CardTech";
import CardTeam from "../../../Components/CardTeam";

function ChainContent() {
  return (
    <div className={styles.wrapper}>
      <h1>Connecting the dots</h1>
      <div className={styles.container1}>
        <CardTech src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-relay-chain.svg?v=96b0dfa78e">
          <h2>Relay Chain </h2>
          <p>
            The heart of Polkadot, responsible for the network’s shared
            security, consensus and cross-chain interoperability.
          </p>
        </CardTech>
        <CardTech src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parachain.svg?v=96b0dfa78e">
          <h2>Parachains</h2>
          <p>
            Sovereign blockchains that can have their own tokens and optimize
            their functionality for specific use cases.
          </p>
        </CardTech>
        <CardTech src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parathread.svg?v=96b0dfa78e">
          <h2>Parathreads </h2>
          <p>
            Similar to parachains but with a pay-as-you-go model. More
            economical for blockchains that don’t need continuous connectivity
            to the network.
          </p>
        </CardTech>
        <CardTech src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-bridge.svg?v=96b0dfa78e">
          <h2>Bridges</h2>
          <p>
            Allow parachains and parathreads to connect and communicate with
            external networks like Ethereum and Bitcoin.
          </p>
        </CardTech>
      </div>
      <h1>Consensus Roles</h1>
      <div className={styles.container2}>
        <CardTech src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-nominator.svg?v=96b0dfa78e">
          <h2>Nominators</h2>
          <p>
            Secure the Relay Chain by selecting trustworthy validators and
            staking dots.
          </p>
        </CardTech>
        <CardTech src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-validator.svg?v=96b0dfa78e">
          <h2>Validators</h2>
          <p>
            Secure the relay chain by staking dots, validating proofs from
            collators and participating in consensus with other validators.
          </p>
        </CardTech>{" "}
        <CardTech src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-collator.svg?v=96b0dfa78e">
          <h2>Collators</h2>
          <p>
            Maintain shards by collecting shard transactions from users and
            producing proofs for validator.
          </p>
        </CardTech>
        <CardTeam />
      </div>
    </div>
  );
}

export default ChainContent;
