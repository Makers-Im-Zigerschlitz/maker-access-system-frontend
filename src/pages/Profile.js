import React from 'react'
import {UserContext} from '../context/UserProvider'
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core";

function Profile(props) {
  const {t} = props
  const userDetails = React.useContext(UserContext);

  return (
    <Card id="content" elevation={Elevation.TWO}>
    <div>
    <h1>{t('menu.profile')}</h1>
    <p>{t('profile.userid')}: {userDetails.uid}</p>
    <p>{t('profile.username')}: {userDetails.username}</p>
    <p>{t('profile.passwordhash')}: {userDetails.password}</p>
    <p>{t('profile.level')}: {userDetails.level}</p>
    </div>
    </Card>
  )
}

export default withTranslation()(Profile);
