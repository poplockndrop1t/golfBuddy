import React from 'react';
import './SignIn.css';

function SignIn() {
  return (
    <div className="signInContainer">
      <div className="inputContainer">
        <h2>Sign In</h2>
        <input placeholder="username" name="username"/>
        <input placeholder="password" type="password" password="password"/>
      </div>
    </div>
  )
};

export default SignIn;