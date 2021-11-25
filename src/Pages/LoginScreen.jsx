import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { googleLogin, emailAndPasswordLogin } from "../Actions/AuthAction";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className="container">
      <h3>Login page</h3>
      <hr />
      <div className="container">
        <form className="col s12 m10 l12 xl6" onSubmit={handleEmailLogin}>
          <div className="row">
            <div className="input-field col s12 m10 l12 xl6">
              <i className="material-icons prefix">account_circle</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                id="email"
                type="email"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12 m10 l12 xl6">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="password"
                type="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Login
            <i className="material-icons right">send</i>
          </button>
          <br />
          <GoogleButton onClick={handleGoogleLogin} />
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
