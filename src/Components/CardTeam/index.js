import styles from "./CardTeam.module.scss";
function CardTeam() {
  return (
    <div className={styles["wrapper-card-team"]}>
      <p>
        <span style={{ fontWeight: 700 }}>Smart contract chains</span> with
        WebAssembly smart contracts{" ("}
        <span className={styles.link}>
          <a href="https://astar.network/">Astar</a>
        </span>
        {" )"}
      </p>
    </div>
  );
}

export default CardTeam;
