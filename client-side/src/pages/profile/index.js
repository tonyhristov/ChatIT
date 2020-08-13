import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./index.module.css";
import UserContext from "../../context";
import Loading from "../../components/loading";
import PageLayout from "../../components/page-layout";
import MyChats from "../../components/my-chats";

const ProfilePage = () => {
  const [username, setUsername] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [chats, setChats] = useState(null);

  const context = useContext(UserContext);
  const params = useParams();
  const history = useHistory();

  const logOut = () => {
    context.logout();
    history.push("/");
  };

  const getData = useCallback(async () => {
    const id = params.userId;
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

    if (!response.ok) {
      history.push("/error");
    } else {
      const user = await response.json();

      setUsername(user.username);
      setImageUrl(user.imageUrl);
      setChats(user.chats);
    }
  }, [params.userId, history]);

  useEffect(() => {
    getData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!username) {
    return <Loading />;
  }

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles["container-info"]}>
          <img src={imageUrl} alt="ProfilePic" className={styles.image} />
          <h1 className={styles.h1}> {username}</h1>
        </div>

        <div className={styles["container-buttons"]}>
          <div>
            <button className={styles.button} onClick={logOut}>
              Logout
            </button>
          </div>
          <div>
            <button
              className={styles.button}
              onClick={() => {
                history.push(`/${params.userId}/create-chat`);
              }}
            >
              Create Chat
            </button>
          </div>
          <div>
            <button
              className={styles["update-password"]}
              onClick={() => {
                history.push(`/update-password/${params.userId}`);
              }}
            >
              Update Password
            </button>
          </div>
          <div>
            <button
              className={styles["update-profile-image"]}
              onClick={() => {
                history.push(`/update-profile-image/${params.userId}`);
              }}
            >
              Update Profile Image
            </button>
          </div>
        </div>

        <div className={styles["container-chats"]}>
          <h1 className={styles["h1-chats"]}>My Chats</h1>
          <hr className={styles.hr} />
        </div>
        <div>
          <MyChats />
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
