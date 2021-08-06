import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Handling submissiong")
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        gender: formState.gender,
        dob: formState.dob,
      },
    });
    console.log("Successful")
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="title">
        <h1>Sign Up</h1>
        <Link to="/login">
          <h2>← Go to Login</h2>
        </Link>
      </div>

      <form className="form" onSubmit={handleFormSubmit}>
      <div className="element">          <label className="label" htmlFor="firstName">Username:</label>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="element">          <label className="label" htmlFor="lastName">Gender:</label>
          <input
            placeholder="Gender"
            name="gender"
            type="gender"
            id="gender"
            onChange={handleChange}
          />
        </div>
        <div className="element">          <label className="label" htmlFor="lastName">Date of Birth:</label>
          <input
            placeholder="dob"
            name="dob"
            type="dob"
            id="dob"
            onChange={handleChange}
          />
        </div>
        <div className="element">          <label className="label" htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="element">          <label className="label" htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
