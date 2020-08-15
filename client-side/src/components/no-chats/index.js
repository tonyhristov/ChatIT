import React from "react";
import styles from "./index.module.css";
import LinkComponent from "../link";

const NoChats = () => {
  return (
    <div>
      <h1 className={styles["no-chats"]}>
        Unfortunately, you haven't taken part of any chat, but you can do it
        from here:{" "}
        <LinkComponent
          key={"Join Chat"}
          href={"/join-chat"}
          title={"Join Chat"}
          type={"no-chat-link"}
        />
        {"."}
      </h1>
    </div>
  );
};

export default NoChats;
