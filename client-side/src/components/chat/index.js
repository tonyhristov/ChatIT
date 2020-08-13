import React from "react";
import styles from "./index.module.css";

const Chat = ({ name, author }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.info}>{name}</h2>
        <h3 className={styles.info}>Creator: {author.username}</h3>
      </div>

      <div className={styles["container-buttons"]}>
        <div>
          <button className={styles.button}>View</button>
        </div>
        <div>
          <button className={styles.button}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
