import { useState } from "react";
import React from "react";

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    if (field === "username") {
      setUsername(value);
    } else if (field === "email") {
      setEmail(value);
    }else if (field === "password") {
      setPassword(value);
    } else if (field === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(username, email, password, confirmPassword);
  }

  return(
    <form>
      <h1>Register</h1>
      <div className="">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="form-control"
          name="username"
          placeholder="username"
          onChange={onChange}
        />
      </div>

      <div className="">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          className="form-control"
          name="email"
          placeholder="youremail@domain.com"
          onChange={onChange}
        />
      </div>

      <div className="">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          className="form-control"
          name="password"
          placeholder="password"
          onChange={onChange}
        />
      </div>

      <div className="">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="text"
          className="form-control"
          name="confirmPassword"
          placeholder="confirmPassword"
          onChange={onChange}
        />
      </div>

      <div className="submit">
        <button value="signup" onClick={onSubmit}>Sign Up</button>
      </div>
    </form>
  );
}

export default SignUp;
