import Button from "../../../Components/Button";
import styles from "./index.module.scss";

const DETAIL_CONTENT = [
  {
    id: 1,
    img: "https://polkadot.network/assets/img/icons/home-icon-token-1.svg?v=96b0dfa78e",
    title: "Governance",
    content:
      "Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes.",
  },
  {
    id: 2,
    img: "https://polkadot.network/assets/img/icons/home-icon-token-2.svg?v=96b0dfa78e",
    title: "Staking",
    content:
      "Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure.",
  },
  {
    id: 3,
    img: "https://polkadot.network/assets/img/icons/home-icon-token-3.svg?v=96b0dfa78e",
    title: "Bonding",
    content:
      "New parachains are added by bonding tokens. Outdated or non-useful parachains are removed by removing bonded tokens. This is a form of proof of stake.",
  },
];

console.log(styles["button-black"]);

function Content() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Powering the Polkadot network</p>
        <h1>
          The DOT token serves three distinct purposes: governance over the
          network, staking and bonding.
        </h1>
      </div>
      <div className={styles.content}>
        {DETAIL_CONTENT.map((item) => (
          <div className={styles.title}>
            <img src={item.img} alt={item.id} />
            <p>{item.title}</p>
            <h1>{item.content}</h1>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <h1>Learn more about the DOT token</h1>
        <Button url="/dot-token" customClassName={styles["button-black"]}>
          Discover DOT
        </Button>
      </div>
    </div>
  );
}

export default Content;
