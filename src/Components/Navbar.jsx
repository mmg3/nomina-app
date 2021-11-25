import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Actions/AuthAction";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">Nomina</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              onClick={handleLogout}
              className="btn red waves-effect waves-light"
            >
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
