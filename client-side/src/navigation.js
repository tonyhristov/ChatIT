import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserContext from "./context";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import AuthHomePage from "./pages/auth-home";

const Navigation = () => {
  const context = useContext(UserContext);
  const loggedIn = context.user && context.user.loggedIn;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home/:userId" component={AuthHomePage} />
        <Route path="/about" component={AboutPage} />

        {/*{loggedIn ? (<ProfilePage />): (<Redirect to="/login" />)}*/}
        {/*{loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}*/}

        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
