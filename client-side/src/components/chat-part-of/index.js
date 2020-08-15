import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";

const ChatPartOf = ({ name, _id }) => {
  const history = useHistory();

  const chatDetails = () => {
    history.push(`/chat-details/${_id}`);
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.info}>{name}</h2>
      </div>

      <div className={styles["container-buttons"]}>
        <div>
          <button className={styles.button} onClick={chatDetails}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPartOf;
