import React from "react";
import styles from "./index.module.css";

const SocialMedia = () => {
  return (
    <div>
      <a className={styles.instagram} href="https://www.instagram.com">
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a className={styles.facebook} href="https://www.facebook.com">
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <h2 className={styles["h2"]}>Follow us on:</h2>
    </div>
  );
};

export default SocialMedia;
