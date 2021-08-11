import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    gender: "",
    dob: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Sign Up</h1>
        <Link to="/login">
          <h2>← Go to Login</h2>
        </Link>
      </div>

      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="element">
            {" "}
            <label className="label" htmlFor="userName">
              Username:
            </label>
            <input
              placeholder="Username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>

          <div className="element">
            {" "}
            <label className="label" htmlFor="gender">
              Gender:
            </label>
            <input
              className="form-input"
              placeholder="male/female"
              name="gender"
              type="text"
              value={formState.gender}
              onChange={handleChange}
            />
          </div>
          <div className="element">
            {" "}
            <label className="label" htmlFor="dob">
              Date of Birth:
            </label>
            <input
              className="form-input"
              placeholder="ddmmyy"
              name="dob"
              type="text"
              value={formState.dob}
              onChange={handleChange}
            />
          </div>
          <div className="element">
            {" "}
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="element">
            {" "}
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              className="form-input"
              placeholder="enter password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-block btn-info"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}

      {error && (
        <div className="text-white">
          <text>
            Error! Please sign up with new user details and enter ALL required
            fields
          </text>
          {/* {error.message} */}
        </div>
      )}
    </div>
  );
};

export default Signup;
