import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../create-chat/index.module.css";
import Input from "../../components/input";
import SubmitButton from "../../components/button/submit-button";
import PageLayout from "../../components/page-layout";
import getCookie from "../../utils/cookie";

const JoinChat = () => {
  const [chat, setChat] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const promise = await fetch(`http://localhost:9999/api/chats/join-chat`, {
      method: "PUT",
      body: JSON.stringify({
        name: chat,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("x-auth-token"),
      },
    });

    const response = await promise.json();

    history.push(`/chat-details/${response._id}`);
    alert("You have successfully joined a chat");
  };

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles["inner-container"]}>
          <h1 className={styles.h1}>Join Chat</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              label="Enter name of the chat you want to join"
              id="chat"
            />

            <SubmitButton title="Join Chat" />
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default JoinChat;
