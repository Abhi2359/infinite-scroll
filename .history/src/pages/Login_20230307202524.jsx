import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validate from "../LoginFormValidationRules";
import useForm from "../hooks/useForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const { dispatch } = useAuthContext();

  function login() {
    //call the login api here
    if (
      values.email === "user@gmail.com" &&
      values.password === "User@123"
    ) {
      localStorage.setItem("user", JSON.stringify({ user: values.email }));
      dispatch({ type: "LOGIN", payload: { user: { email: values.email } } });
      setLoggedIn(true);
      return navigate("/home", {});
    } else {
      alert("Wrong username or password");
    }
  }

  const navigate = useNavigate();
  return (
    <div className="section is-fullheight">
      {loggedIn && navigate("/home", {})}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth "
                style={{background-color: var(--primary-color)}}
              
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
