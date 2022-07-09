import styles from "./Tag.module.scss";
function Tag({ children, img }) {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={img} />
      <div className={styles.content}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Tag;
