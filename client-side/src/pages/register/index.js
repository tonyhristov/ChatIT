import React, { Component } from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import ImageBackground from "../../components/image-background";
import Input from "../../components/input";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rePassword: "",
    };
  }

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;

    this.setState(newState);
  };

  render() {
    const { username, password, rePassword } = this.state;

    return (
      <PageLayout>
        <ImageBackground page="register">
          <div className={styles.container}>
            <h1 className={styles["h1"]}>Register Page</h1>

            <form>
              <Input
                value={username}
                onChange={(e) => this.onChange(e, "username")}
                label="Username"
                id="username"
              />
              <Input
                value={password}
                onChange={(e) => this.onChange(e, "password")}
                label="Password"
                id="password"
              />
              <Input
                value={rePassword}
                onChange={(e) => this.onChange(e, "rePassword")}
                label="Re-Password"
                id="rePassword"
              />
            </form>
          </div>
        </ImageBackground>
      </PageLayout>
    );
  }
}

export default RegisterPage;
