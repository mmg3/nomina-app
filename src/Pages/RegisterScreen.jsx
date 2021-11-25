import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../Actions/AuthAction";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 6) {
      alert("Password must have 6 characters or more.");
      return;
    } else if (password.trim() !== password2.trim()) {
      alert("Password and confirmation didn't match.");
      return;
    }

    dispatch(register(email, password, username));
  };

  return (
    <div className="container">
      <h3>Register page</h3>
      <hr />
      <div className="container">
        <form onSubmit={handleRegister} className="col s12 m10 l12 xl6">
          <div className="row">
            <div className="input-field col s12 m10 l12 xl6">
              <i className="material-icons prefix">contact_mail</i>
              <input
                onChange={handleChange}
                value={email}
                id="email"
                name="email"
                type="email"
                className="validate"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12 m10 l12 xl6">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                id="username"
                name="username"
                type="text"
                className="validate"
                required
              />
              <label htmlFor="username">UserName</label>
            </div>
            <div className="input-field col s12 m10 l12 xl6">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                id="password"
                name="password"
                type="password"
                className="validate"
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12 m10 l12 xl6">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password2}
                id="password2"
                name="password2"
                type="password"
                className="validate"
                required
              />
              <label htmlFor="password2">Confirm Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Register
            <i className="material-icons right">send</i>
          </button>
          <br />
          <Link to="/login">Do you have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
