import React from "react";
import styles from "./index.module.css";

const Message = ({ message, authorUsername }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.user}>
          <small>Author: {authorUsername}</small>
        </span>
      </div>
      <div>
        <p className={styles.description}>{message}</p>
      </div>
    </div>
  );
};

export default Message;
