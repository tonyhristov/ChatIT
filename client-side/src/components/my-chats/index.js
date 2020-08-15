import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import getMyChat from "../../utils/chats";
import Chat from "../chat";

const MyChats = () => {
  const [chats, setChats] = useState([]);

  const getChats = useCallback(async () => {
    const chats = await getMyChat();
    setChats(chats);
  }, []);

  const renderChats = () => {
    if (chats.length > 0) {
      return chats.map((chats) => {
        return <Chat key={chats._id} {...chats} />;
      });
    } else {
      return <h1 className={styles.empty}>Currently you haven't created chats.</h1>;
    }
  };

  useEffect(() => {
    getChats();
  }, [getChats]);

  return <div className={styles["chats-wrapper"]}>{renderChats()}</div>;
};

export default MyChats;
