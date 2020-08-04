import React, { useState } from "react";
import { withTranslation } from 'react-i18next';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import {Button,Card,InputGroup,FormGroup,Callout,Elevation} from "@blueprintjs/core";
import { useAuth } from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = props.location.state.referer || '/';
  const {t} = props

  function postLogin() {
    axios.post("/auth/dologin", {
      username,
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
    <Card id="content" elevation={Elevation.TWO}>
    <div>
    <h1>{t('menu.login')}</h1>
    <Card interactive={true} elevation={2}>
    <FormGroup>
    <InputGroup
        type="username"
    value={username}
    onChange={e => {
      setUserName(e.target.value);
    }}
    placeholder={t('login.email')}
  />
  <InputGroup
    type="password"
    value={password}
    onChange={e => {
      setPassword(e.target.value);
    }}
    placeholder={t('login.password')}
  />
      <Button onClick={postLogin}>{t('login.btn-login')}</Button>
    </FormGroup>
    <Link to="/signup">{t('login.no-account')}</Link>
      { isError &&<Callout intent="danger">{t('login.incorrect-cred')}</Callout> }
    </Card>
    </div>
    </Card>
  );
}

export default withTranslation()(Login);
