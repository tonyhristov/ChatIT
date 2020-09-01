import React, { useContext } from "react";
import getNavigation from "../../utils/navigation";
import styles from "./index.module.css";
import LinkComponent from "../link";
import UserContext from "../../context";

const Header = () => {
  const context = useContext(UserContext);
  const { user } = context;
  const links = getNavigation(user);

  return (
    <header className={styles.navigation}>
      <h1 className={styles["h1"]}>CHAT IT</h1>

      <div className={styles["header-links"]}>
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
      </div>
    </header>
  );
};

export default Header;
