import React from "react";

const SignUp = () => {
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
        />
      </div>

      <div className="submit">
        <button value="signup">Sign In</button>
      </div>
    </form>
  );
}

export default SignUp;
