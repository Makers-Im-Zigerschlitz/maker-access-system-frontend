import React, {useState} from "react";
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';
import {Button,Card,Input,FormGroup,Callout} from "@blueprintjs/core";
import {useAuth} from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = props.location.state.referer || '/';

  function postLogin() {
    axios.post("https://www.somePlace.com/auth/login", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <div>
    <p>Login</p>
    <Card interactive={true} elevation={2}>
    <FormGroup>
      <Input
        type="username"
        value={userName}
        onChange={e => {
          setUserName(e.target.value);
        }}
        placeholder="email"
      />
      <Input
        type="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <Button onClick={postLogin}>Sign In</Button>
    </FormGroup>
    <Link to="/signup">Don't have an account?</Link>
      { isError &&<Callout>The username or password provided were incorrect!</Callout> }
    </Card>
    </div>
  );
}

export default Login;
