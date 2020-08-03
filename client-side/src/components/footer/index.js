import React from "react";

import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles["h1"]}>CHAT IT</h1>
      <div>
        <p className={styles.rights}>CHAT IT 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
