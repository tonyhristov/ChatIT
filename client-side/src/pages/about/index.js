import React from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import SocialMedia from "../../components/social-media";

const AboutPage = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1 className={styles.about}>Learn more about CHAT IT</h1>
        <h2 className={styles.h2}>
          ChatIT is a Q&A platform for business meetings and events, but it
          works great for chats between friends as well. It offers an
          interactive Q&A and gives you some information about your audience. If
          you need to host a meeting online, ChatIT is here to help you make it
          interactive. The platform makes it easy to engage with your audience,
          whether you run a large video conference, a small team meeting, or you
          just want to ask your friends a question. Because in the end, the
          important thing is everyone to become part of the conversation.{" "}
        </h2>

        <SocialMedia />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
