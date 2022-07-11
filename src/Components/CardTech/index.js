import styles from "./CardTech.module.scss";
function CardTech({ children, src }) {
  return (
    <div className={styles["wrapper-card-tech"]}>
      <img src={src} alt="dot" />
      {children}
    </div>
  );
}

export default CardTech;
