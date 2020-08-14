import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./index.module.css";
import getCookie from "../../utils/cookie";

const Chat = ({ name, author, _id }) => {
  const history = useHistory();
  const params = useParams();

  const chatDetails = () => {
    history.push(`/chat-details/${_id}`);
  };

  const removeChat = async () => {
    await fetch(`http://localhost:9999/api/chats/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("x-auth-token"),
      },
    });

    history.push(`/home/${params.userId}`);
    alert("You have successfully deleted a chat.");
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.info}>{name}</h2>
        <h3 className={styles.info}>Creator: {author.username}</h3>
      </div>

      <div className={styles["container-buttons"]}>
        <div>
          <button className={styles.button} onClick={chatDetails}>
            View
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={removeChat}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
