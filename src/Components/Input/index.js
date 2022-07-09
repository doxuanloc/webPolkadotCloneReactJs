import { useState } from "react";
import styles from "./index.module.scss";
function Input({ title, required }) {
  const [textInput, setTextInput] = useState("");
  const handleInput = (e) => {
    setTextInput(e);
  };
  return (
    <div className={styles["wrapper-input"]}>
      <h1>{title}</h1>
      <input
        value={textInput}
        onChange={(e) => handleInput(e.target.value)}
      ></input>
      {!required && textInput === "" && (
        <h3>Please complete this required field.</h3>
      )}
    </div>
  );
}

export default Input;
