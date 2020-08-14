import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import Messages from "../../components/messages";
import SubmitButton from "../../components/button/submit-button";
import getCookie from "../../utils/cookie";

const ChatDetails = () => {
  const [chat, setChat] = useState({});
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [updatedMessages, setUpdatedMessages] = useState([]);

  const params = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:9999/api/messages`, {
      method: "POST",
      body: JSON.stringify({
        message: message,
        chatId: params.userId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("x-auth-token"),
      },
    });

    setMessage("");
    setUpdatedMessages([...updatedMessages, 1]);
  };

  const getChat = useCallback(async () => {
    const promise = await fetch(
      `http://localhost:9999/api/chats/getChat/${params.id}`
    );
    const chat = await promise.json();

    setChat(chat);
    setMessages(chat.messages);
  }, []);

  useEffect(() => {
    getChat();
  }, [getChat]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{chat.name}</h1>
        </div>

        <div>
          <Messages updatedMessages={updatedMessages} />
        </div>

        <form className={styles.send} onSubmit={handleSubmit}>
          <div>
            <textarea
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <SubmitButton title="SEND" />
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default ChatDetails;
