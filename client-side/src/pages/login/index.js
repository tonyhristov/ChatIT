import React, { Component, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import ImageBackground from "../../components/image-background";
import Input from "../../components/input";
import UserContext from "../../context";
import SubmitButton from "../../components/button/submit-button";
import authenticate from "../../utils/authenticate";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await authenticate(
      "http://localhost:9999/api/user/login",
      {
        username,
        password,
      },
      (user) => {
        context.logIn(user);
        history.push(`/home/${user.id}`);
      },
      (e) => {
        alert("Username or Password are not valid! Please try correct ones.");
      }
    );
  };

  return (
    <PageLayout>
      <ImageBackground page="login">
        <div className={styles.login}>
          <h1 className={styles["h1"]}>Login Page</h1>

          <div className={styles.form}>
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

              <SubmitButton title="Login" />
            </form>
          </div>
        </div>
      </ImageBackground>
    </PageLayout>
  );
};

export default LoginPage;
