import React from "react";
import styles from "./index.module.css";
import LinkComponent from "../link";
import SocialMedia from "../social-media";

const LearnMore = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles["h1"]}>
        If you want to learn more about CHAT IT, you can go to{" "}
        <LinkComponent
          key={"About"}
          href={"/about"}
          title={"About"}
          type={"link"}
        />
        .
      </h1>

      <SocialMedia />
    </div>
  );
};

export default LearnMore;
