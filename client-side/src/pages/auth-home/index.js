import React, { useCallback, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import ImageBackground from "../../components/image-background";
import LinkComponent from "../../components/link";

const AuthHomePage = () => {
  const [username, setUsername] = useState(null);
  const params = useParams();
  const history = useHistory();

  const getData = useCallback(async () => {
    const id = params.userId;
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

    if (!response.ok) {
      history.push("/error");
    } else {
      const user = await response.json();

      setUsername(user.username);
    }
  }, [params.userId, history]);

  useEffect(() => {
    getData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLayout>
      <ImageBackground page="home">
        <h1 className={styles.welcome}>WELCOME "{username}"</h1>
        <h2 className={styles["h2"]}>
          When you are here we have a few options: You can check your profile at{" "}
          <LinkComponent
            key={"My Profile"}
            href={`/my-profile/${params.userId}`}
            title={"My Profile"}
            type={"link"}
          />
          {""}, or you can go to{" "}
          <LinkComponent
            key={"Chats Part Of"}
            href={"/chats-part-of"}
            title={"Chats that you are part of"}
            type={"link"}
          />{" "}
          , or you can just create one at{" "}
          <LinkComponent
            key={"Create Chat"}
            href={"/create-chat"}
            title={"Create Chat"}
            type={"link"}
          />
          {""}.
        </h2>
      </ImageBackground>
    </PageLayout>
  );
};

export default AuthHomePage;
