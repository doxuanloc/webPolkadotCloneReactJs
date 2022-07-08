import styles from "./CardProject.module.scss";

const DATA_CARD = [
  {
    id: 1,
    img: "https://polkadot.network/content/images/2022/06/Staking_blogpost.png",
    name: "Polkadot",
    title:
      "Introducing the Polkadot Staking Dashboard: The Easiest Way to Nominate and Stake Your DOT",
    content:
      "Staking your DOT just got a whole lot easier with Polkadot’s new staking dashboard, a user-friendly interface for staking natively on Polkadot....",
  },
  {
    id: 2,
    img: "https://polkadot.network/content/images/2022/04/XCMv2--2-.png",
    name: "Polkadot",
    title: "XCMv2 Audit Completed by Quarkslab",
    content:
      "XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service, and incorrect lock/unlock or burn/mint on both chains...",
  },
  {
    id: 3,
    img: "https://polkadot.network/content/images/2022/01/Encointer-Blog-Cover-1.jpeg",
    name: "Kusama",
    title: "Introducing Encointer: Making Web3 Truly Inclusive",
    content:
      "Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity....",
  },
];
function CardProject() {
  return (
    <div className={styles.wrapper}>
      {DATA_CARD.map((item) => (
        <div className={styles.card} key={item.id}>
          <img src={item.img} alt={item.id} />
          <div className={styles.content}>
            <h1>{item.name}</h1>
            <p>{item.title}</p>
            <h1 style={{ color: "#1e1e1e", fontWeight: 100 }}>
              {item.content}
            </h1>
          </div>
          <div className={styles["card-footer"]}>
            <img
              src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png"
              alt="dot"
            ></img>
            <h2>Polkadot</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProject;
