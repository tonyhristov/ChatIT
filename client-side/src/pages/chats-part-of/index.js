import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import NoChats from "../../components/no-chats";
import getChatsPartOf from "../../utils/chatsPartOf";
import ChatPartOf from "../../components/chat-part-of";

const ChatsPartOfPage = () => {
  const [chats, setChats] = useState([]);
  const params = useParams();

  const getChats = useCallback(async () => {
    const chats = await getChatsPartOf(params.userId);
    console.log(chats);
    setChats(chats);
  }, []);

  const renderChats = () => {
    if (chats.length > 0) {
      return chats.map((chats) => {
        return <ChatPartOf key={chats._id} {...chats} />;
      });
    } else {
      return <NoChats />;
    }
  };

  useEffect(() => {
    getChats();
  }, [getChats]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Here are listed all the chats that you have chosen to be in.
        </h1>
        <hr className={styles.hr} />

        <div>
          <div className={styles["chats-wrapper"]}>{renderChats()}</div>;
        </div>
      </div>
    </PageLayout>
  );
};

export default ChatsPartOfPage;
