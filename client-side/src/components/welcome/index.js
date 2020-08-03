import React from "react";
import styles from "./index.module.css";
import LinkComponent from "../link";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.welcome}> Welcome to CHAT IT!</h1>
      </div>
      <h1 className={styles["h1"]}>
        If you are new here you can click on{" "}
        <LinkComponent
          key={"Register"}
          href={"/register"}
          title={"Register"}
          type={"link"}
        />
        {""}, but if you already have an account you can just click{" "}
        <LinkComponent
          key={"Login"}
          href={"/login"}
          title={"Login"}
          type={"link"}
        />
        {""}.
      </h1>
    </div>
  );
};

export default Welcome;
