import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

function SignIn(props) {
  const history = useHistory();
  var username = '';
  var password = '';

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
    if (event.target.name === 'username') {
      if (verifyString(event.target.value)) {
        username = event.target.value;
      }
    } else {
      if (verifyString(event.target.value)) {
        password = event.target.value;
      }
    }
  };

  function handleClick(event) {
    if (username.length > 0 && password.length > 0) {
      if (event.target.value === 'Log In') {
        history.push('/bagCreator');
        return props.loginUser({ username, password }, '/api/login');
      } else {
        return props.loginUser({ username, password }, '/api/createUser');
      }
    }
  };

  return (
    <div className="signInContainer">
      <div className="inputContainer">
        <h2>Sign In</h2>
        <input placeholder="username" name="username" onChange={handleChange} />
        <input placeholder="password" type="password" name="password" onChange={handleChange} />
        <input type="submit" value="Log In" onClick={handleClick}/>
        <input type="submit" value="Create New Account" onClick={handleClick}/>
      </div>
    </div>
  )
};

export default SignIn;