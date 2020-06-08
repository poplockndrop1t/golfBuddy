import React from 'react';
import './SignIn.css';

function SignIn() {
  var username;
  var password;

  function verifyString(string) {
    var result = true;
    for (var i = 0; i < string.length; i++) {
      if (/[a-z]/gi.test(string[i]) === false) {
        result = false;
      }
    }
    return result;
  };

  function handleChange(event) {
    console.log('event', event.target.name, event.target.value, test);
  };

  return (
    <div className="signInContainer">
      <div className="inputContainer">
        <h2>Sign In</h2>
        <input placeholder="username" name="username" onChange={handleChange} />
        <input placeholder="password" type="password" name="password" onChange={handleChange} />
        <input type="submit" value="submit" />
      </div>
    </div>
  )
};

export default SignIn;