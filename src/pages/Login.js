import React, { useState, useContext } from "react";
import { withTranslation } from 'react-i18next';
import { Link,Redirect } from "react-router-dom";
import axios from 'axios';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import {UserContext, UserDispatchContext} from '../context/UserProvider'

function Login(props) {
  const [userField, setUserField] = useState("");
  const [passField, setPassField] = useState("");
  const [isError, setIsError] = useState(false);
  const { t } = props;

  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const referer = props.location.state ? props.location.state.referer : "/";

  function getUserDetails() {
    axios
      .get("/auth/me")
      .then((result) => {
        if (result.status === 200) {
          setUserDetails({
            uid: result.data.uid,
            username: result.data.username,
            password: result.data.password,
            level: result.data.level,
            loggedIn: true,
          });
        } else {
          setUserDetails({
            uid: "",
            username: "",
            password: "",
            level: "",
            loggedIn: false,
          });
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  function postLogin() {
    axios
      .post("/auth/dologin", {
        username: userField,
        password: passField,
      })
      .then((result) => {
        if (result.data.successful === true) {
          getUserDetails();
          setIsError(false);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }
  if (userDetails.loggedIn) {
    console.log("User logged in - Sending to referer");
    return <Redirect to={referer} />;
  } else {
    console.log("User not logged in - Serving Login-Page");
    return (
      <Card id="content">
        <div>
          <h1>{t('menu.login')}</h1>
            <Card>
            <form
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
            <div className="p-inputgroup">
              <InputText
                type="username"
                value={userField}
                onChange={e => {
                  setUserField(e.target.value);
                }}
                placeholder={t('login.email')}
              />
              <InputText
                type="password"
                value={passField}
                onChange={e => {
                  setPassField(e.target.value);
                }}
                placeholder={t('login.password')}
              />
              <Button type="submit" onClick={postLogin} label={t('login.btn-login')}/>
            </div>
            <Link to="/signup">{t('login.no-account')}</Link>
            { isError &&<Message severity="error">{t('login.incorrect-cred')}</Message> }
            </form>
          </Card>
        </div>
      </Card>
    );
  }
}

export default withTranslation()(Login);
