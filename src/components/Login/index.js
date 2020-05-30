import React, { useState } from "react";
import Logo from "../../static/logo-login.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const loginHandler = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/cats/login",
        data
      );
      if (response.data.status === 1) {
        swal("Great!", "Login Tindercat", "success").then((value) => {
          redirectLogin();
        });
      } else {
        swal("Error", "Try later please", "warning");
      }
    } catch (err) {
      swal("Error", "Try later please", "warning");
    }
  };
  const redirectLogin = () => {
    history.push("/home");
  };

  return (
    <div className="login">
      <form>
        <img src={Logo} />
        <div className="input-custom">
          <label>Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="input-custom">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <br />
        <div className="button-primary">
          <input onClick={loginHandler} type="button" value="Login" />
        </div>
        <br />
        <p className="signup-link">
          ¿Not member yet?
          <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};
