import styles from "./Tag.module.scss";
function TagSocial({ children, img }) {
  return (
    <div className={styles["wrapper-tag"]}>
      <img src={img} alt={img} />
      <div className={styles.content}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default TagSocial;
