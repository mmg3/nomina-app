import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { firebase } from "../Firebase/Config-firebase";
import { useDispatch } from "react-redux";
import { login } from "../Actions/AuthAction";
import PrivateRouter from "./PrivateRouter";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/login" componenent={AuthRouter} />
        <PrivateRouter log={log} componenent={AppRouter} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
