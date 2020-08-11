import React from "react";
import styles from "./index.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div>
        <header className={styles.navigation}>
          <h1 className={styles["h1"]}>CHAT IT</h1>
        </header>
      </div>

      <div className={styles["inner-container"]}>
        <h1>Loading...</h1>
      </div>

      <div>
        <footer className={styles.footer}>
          <h1 className={styles["h1-footer"]}>CHAT IT</h1>
          <div>
            <p className={styles.rights}>CHAT IT 2020</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Loading;
