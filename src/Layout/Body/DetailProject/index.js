import styles from "./DetailProject.module.scss";
import { useNavigate } from "react-router-dom";

function Detail() {
  const DETAIL_PROJECT = [
    {
      id: 1,
      img: "https://polkadot.network/assets/img/icons/home-icon1.svg?v=96b0dfa78e",
      title: "True interoperability",
      content:
        "Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.",
    },
    {
      id: 2,
      img: "https://polkadot.network/assets/img/icons/home-icon2.svg?v=96b0dfa78e",
      title: "Economic & transactional scalability",
      content:
        "Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains.",
    },
    {
      id: 3,
      img: "https://polkadot.network/assets/img/icons/home-icon3.svg?v=96b0dfa78e",
      title: "Easy blockchain innovation",
      content:
        "Create a custom blockchain in minutes using the Substrate framework. Connect your chain to Polkadot and get interoperability and security from day one. This ease of development helps Polkadot's network grow.",
    },
    {
      id: 4,
      img: "https://polkadot.network/assets/img/icons/home-icon4-b.svg?v=96b0dfa78e",
      title: "High energy efficiency",
      content:
        "Polkadot consumes a small fraction of the energy used by conventional blockchains thanks to its next-generation nominated proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US households worth of energy per year, Polkadot has the lowest carbon footprint among proof-of-stake protocols analyzed in recent research.",
    },
    {
      id: 5,
      img: "https://polkadot.network/assets/img/icons/home-icon5.svg?v=96b0dfa78e",
      title: "Security for everyone",
      content:
        "Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security.",
    },
    {
      id: 6,
      img: "https://polkadot.network/assets/img/icons/home-icon6.svg?v=96b0dfa78e",
      title: "User-driven governance",
      content:
        "Polkadot has a sophisticated governance system where all stakeholders have a voice. Network upgrades are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Polkadot’s development remains future-proof and community-driven.",
    },
  ];
  const navigate = useNavigate();

  const handleRouteChange = (url) => {
    navigate(url);
  };

  return (
    <div className={styles.wrapper}>
      {DETAIL_PROJECT.map((item) => (
        <div key={item.id} className={styles.item}>
          <img alt={item.id} src={item.img} />
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      ))}
      <div className={styles.bottom}>
        <p>Learn more about Polkadot's technology</p>
        <button onClick={() => handleRouteChange("/technology")}>
          Discover Polkadot
        </button>
      </div>
    </div>
  );
}

export default Detail;
