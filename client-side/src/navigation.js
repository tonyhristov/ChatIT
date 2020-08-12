import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserContext from "./context";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import AuthHomePage from "./pages/auth-home";
import ProfilePage from "./pages/profile";

const Navigation = () => {
  const context = useContext(UserContext);
  const loggedIn = context.user && context.user.loggedIn;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home/:userId">
          {loggedIn ? <AuthHomePage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route path="/my-profile/:userId" component={AuthHomePage}>
          {loggedIn ? <ProfilePage /> : <Redirect to="/login" />}
        </Route>

        <Route path="/register">
          {loggedIn ? <Redirect to="/" /> : <RegisterPage />}
        </Route>
        <Route path="/login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
