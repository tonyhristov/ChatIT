import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PageLayout from "../../components/page-layout";
import ImageBackground from "../../components/image-background";
import styles from "./index.module.css";
import Input from "../../components/input";
import SubmitButton from "../../components/button/submit-button";
import UserContext from "../../context";
import ChangeUser from "../../utils/change-user";

const UpdatePasswordPage = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();
  const params = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === rePassword) {
      await ChangeUser(
        `http://localhost:9999/api/user/${params.userId}`,
        {
          password,
        },
        (user) => {
          context.logIn(user);
          history.push(`/my-profile/${user.id}`);
        },
        (e) => {
          alert("Something went wrong. Please try again.");
        }
      );
    } else {
      alert("Password does not match!");
    }
  };
  return (
    <PageLayout>
      <ImageBackground page="change-password">
        <div className={styles.container}>
          <h1 className={styles["h1"]}>Change Password</h1>

          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                id="password"
              />
              <Input
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                label="rePassword"
                id="rePassword"
                type="rePassword"
              />

              <SubmitButton title="Change Password" />
            </form>
          </div>
        </div>
      </ImageBackground>
    </PageLayout>
  );
};

export default UpdatePasswordPage;
