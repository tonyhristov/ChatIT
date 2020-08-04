import React from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import Welcome from "../../components/welcome";
import LearnMore from "../../components/learn-more";

function HomePage() {
  return (
    <PageLayout>
      <div>
        <Welcome />
        <LearnMore />
      </div>
    </PageLayout>
  );
}

export default HomePage;
