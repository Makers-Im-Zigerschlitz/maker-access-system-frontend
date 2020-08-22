import React, {useState,useContext} from 'react'
import {UserContext,UserDispatchContext} from '../context/UserProvider'
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import axios from 'axios';

function Profile(props) {
  const { t } = props;
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const [passOne, setPassOne] = useState("");
  const [passTwo, setPassTwo] = useState("");
  const [isErrorRep, setErrorRep] = useState(false);
  const [isErrorSend, setErrorSend] = useState(false);

  function getUserDetails() {
    axios
      .get("/api/auth/me")
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
        setErrorSend(true);
      });
  }

  function changePass() {
    if (passOne === passTwo) {
      setErrorRep(false);
      axios
        .post("/api/auth/me/setpass", {
          password: passOne,
        })
        .then((result) => {
          if (result.data.successful === true) {
            getUserDetails();
            setErrorSend(false);
          } else {
            setErrorSend(true);
          }
        })
        .catch((e) => {
          setErrorSend(true);
        });
    } else {
      setErrorRep(true);
    }
  }
  return (
    <Card id="content">
    <h1>{t('menu.profile')}</h1>
    <p>{t('profile.userid')}: {userDetails.uid}</p>
    <p>{t('profile.username')}: {userDetails.username}</p>
    <p>{t('profile.passwordhash')}: {userDetails.password}</p>
    <p>{t('profile.level')}: {userDetails.level}</p>
    <h2>{t('profile.changepass')}:</h2>
    <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
    <div className="p-inputgroup">
      <InputText
        type="password"
        value={passOne}
        onChange={e => {
          setPassOne(e.target.value);
        }}
        placeholder={t('signup.password')}
      />
      <InputText
        type="password"
        value={passTwo}
        onChange={e => {
          setPassTwo(e.target.value);
        }}
        placeholder={t('signup.retype-password')}
      />
      <Button type="submit" onClick={changePass}>{t('profile.changepass')}</Button>
    </div>
    { isErrorSend &&<Message severity="error">{t('profile.errorsend')}</Message> }
    { isErrorRep &&<Message severity="error">{t('profile.errorrep')}</Message> }
    </form>
    </Card>
  );
}

export default withTranslation()(Profile);
