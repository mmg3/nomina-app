import { Route } from "react-router-dom";
import LoginScreen from "../Pages/LoginScreen";
import RegisterScreen from "../Pages/RegisterScreen";

const AuthRouter = () => {
  return (
    <>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
    </>
  );
};

export default AuthRouter;
