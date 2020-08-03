import React from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";

function HomePage() {
  return (
    <PageLayout>
      <div>
        <div className={styles.auth}>
          <h1 className={styles["h1"]}>
            Hello! If you are new here you can click on Register, but if you
            already have an account you can just click Login.
          </h1>
        </div>

        <div className={styles.about}>
          {" "}
          <h1 className={styles["h1"]}>
            Hello! If you are new here you can click on Register, but if you
            already have an account you can just click Login.
          </h1>
        </div>
      </div>
    </PageLayout>
  );
}

export default HomePage;
