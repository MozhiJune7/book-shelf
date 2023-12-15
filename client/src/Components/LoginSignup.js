import React from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdLockOutline } from "react-icons/md";

const LoginSignup = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/book_details");
  };

  return (
    <div className="containerlogin">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          &nbsp;<HiOutlineEnvelope/>&nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="Email" />
        </div>
        <div className="input">
          &nbsp;<MdLockOutline />&nbsp;&nbsp;&nbsp;
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
