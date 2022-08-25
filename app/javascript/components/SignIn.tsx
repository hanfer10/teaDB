import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  // const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const user = useSelector(state => state.user.user);

  const onChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    if (field == "username") {
      setUsername(value)
    } else if (field == "password") {
      setPassword(value);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(username, password);
  }

  return (
    <form>
      <h1>Sign In</h1>
      <div className="">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="form-control"
          onChange={onChange}
          name="username"
          value={username}
          placeholder="username"
        />
      </div>

      <div className="">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          className="form-control"
          onChange={onChange}
          name="password"
          value={password}
          placeholder="password"
        />
      </div>

      <button value="Sign In" onClick={onSubmit}>Sign In</button>
    </form>
  );
}

export default SignIn;
