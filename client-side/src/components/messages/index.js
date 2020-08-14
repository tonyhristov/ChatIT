import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../message";
import styles from "../my-chats/index.module.css";

const Messages = (props) => {
  const [message, setMessage] = useState([]);
  const params = useParams();

  const getMessages = useCallback(async () => {
    const promise = await fetch(
      `http://localhost:9999/api/messages/getMessages/${params.userId}`
    );
    const chat = await promise.json();

    setMessage(chat);
  }, []);

  const renderMessages = () => {
    return message.map((messages) => {
      return <Message key={messages} {...messages} />;
    });
  };

  useEffect(() => {
    getMessages();
  }, [props.updatedMessages, getMessages]);

  return <div className={styles["messages-wrapper"]}>{renderMessages()}</div>;
};

export default Messages;
