import { useEffect } from "react";
import Input from "../../Input";
import styles from "./index.module.scss";

function ModalStart({ showFormStart, setShowFormStart }) {
  const handleCloserForm = (e) => {
    const { id } = e.target;
    if (id === "modal" || id === "close-button") setShowFormStart(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {showFormStart && (
        <div className={styles.container} id="modal" onClick={handleCloserForm}>
          <div className={styles.wrapper}>
            <aside>
              <button id="close-button" onClick={handleCloserForm}>
                X
              </button>
            </aside>
            <main className={styles.form}>
              <p>Let's connect</p>
              <h1>
                Please note: If you are seeking help from Polkadot Support,
                please visit
                <span>
                  {" "}
                  <a href="https://support.polkadot.network/support/home">
                    support.polkadot.network.
                  </a>
                </span>
              </h1>
              <div className={styles.submit}>
                <h1>Please describe how we can help you:*</h1>
                <div className={styles["option-help"]}>
                  <select className={styles.option}>
                    <option value="Please Select" selected disabled>
                      Please Select
                    </option>
                    <option value="Parachains">Parachains</option>
                    <option value="Substrate">Saab</option>
                    <option value="User-facing Applications">
                      User-facing Applications
                    </option>
                    <option value="Developer Tools">Developer Tools</option>
                  </select>
                </div>
                <div className={styles.email}></div>
                <div className={styles["info-user"]}>
                  <Input title="Email*" />
                  <Input title="First name*" />
                  <Input title="Last name*" />
                  <Input title="Job Title" required />
                  <Input title="Company name (if applicable):" required />
                  <Input
                    title="What is your company, team, or project website (if applicable)?"
                    required
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalStart;
