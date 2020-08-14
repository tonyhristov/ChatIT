import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PageLayout from "../../components/page-layout";
import getCookie from "../../utils/cookie";
import styles from "./index.module.css";
import Input from "../../components/input";
import SubmitButton from "../../components/button/submit-button";

const CreateChatPage = () => {
  const [chat, setChat] = useState("");
  const history = useHistory();
  const params = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:9999/api/chats", {
      method: "POST",
      body: JSON.stringify({
        name: chat,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("x-auth-token"),
      },
    });

    setChat("");
    history.push(`/my-profile/${params.userId}`);
    alert("You have successfully created a chat");
  };

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles["inner-container"]}>
          <h1 className={styles.h1}>Create Chat</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              label="Enter name for the chat"
              id="chat"
            />

            <SubmitButton title="Create Chat" />
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreateChatPage;
