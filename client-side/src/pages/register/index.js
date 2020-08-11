import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import ImageBackground from "../../components/image-background";
import Input from "../../components/input";
import UserContext from "../../context";
import authenticate from "../../utils/authenticate";
import SubmitButton from "../../components/button/submit-button";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await authenticate(
      "http://localhost:9999/api/user/register",
      {
        username,
        password,
      },
      (user) => {
        context.logIn(user);
        history.push("/");
      },
      (e) => {
        console.log(e);
      }
    );
  };

  return (
    <PageLayout>
      <ImageBackground page="register">
        <div className={styles.container}>
          <h1 className={styles["h1"]}>Register Page</h1>

          <form onSubmit={handleSubmit}>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              id="username"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              id="password"
              type="password"
            />
            <Input
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              label="Re-Password"
              id="rePassword"
              type="password"
            />

            <SubmitButton title="Register" />
          </form>
        </div>
      </ImageBackground>
    </PageLayout>
  );
};

export default RegisterPage;
