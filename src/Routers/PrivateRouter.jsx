import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRouter = ({ log, component: Component }) => {
  return (
    <Route
      component={(props) =>
        log ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouter;
