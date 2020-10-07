import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../message";
import styles from "../my-chats/index.module.css";
import getMessages from "../../utils/messages";

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const params = useParams();

  const getData = useCallback(async () => {
    const promise = await getMessages(params.userId);
    setMessages(promise);
  }, []);

  const renderMessages = () => {
    return messages.map((messages) => {
      return <Message key={messages._id} {...messages} />;
    });
  };

  useEffect(() => {
    getData();
  }, [props.updatedMessages, getData]);

  return <div className={styles["messages-wrapper"]}>{renderMessages()}</div>;
};

export default Messages;
