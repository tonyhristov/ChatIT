import React from "react";
import styles from "./index.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function PageLayout(props) {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles["inner-container"]}>{props.children}</div>

      <Footer />
    </div>
  );
}

export default PageLayout;
