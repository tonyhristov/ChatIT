import React from "react";
import getNavigation from "../../utils/navigation";
import styles from "./index.module.css";
import LinkComponent from "../link";

const Header = () => {
  const links = getNavigation();

  return (
    <header className={styles.navigation}>
      <h1 className={styles["h1"]}>CHAT IT</h1>
      {links.map((navElement) => {
        return (
          <LinkComponent
            key={navElement.title}
            href={navElement.link}
            title={navElement.title}
            type={"header"}
          />
        );
      })}
    </header>
  );
};

export default Header;
