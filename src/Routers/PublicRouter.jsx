import React from "react";
import { Route } from "react-router";
import LoginScreen from "../Pages/LoginScreen";
import RegisterScreen from "../Pages/RegisterScreen";

const PublicRouter = () => {
  return (
    <div>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
    </div>
  );
};

export default PublicRouter;
