import { useNavigate } from "react-router-dom";
import styles from "./Button.module.scss";

function Button({ children, url, customClassName }) {
  const navigate = useNavigate();

  const handleRouteChange = (_url) => {
    navigate(_url);
  };
  return (
    <button
      className={`${customClassName} ${styles["button-primary"]}`}
      onClick={() => handleRouteChange(url)}
    >
      {children}
    </button>
  );
}

export default Button;
