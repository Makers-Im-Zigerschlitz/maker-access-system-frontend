import React from 'react'
import {UserContext} from '../context/UserProvider'
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core";

function Home(props) {
  const {t} = props
  const userDetails = React.useContext(UserContext);

  return (
    <Card id="content" elevation={Elevation.TWO}>
    <div>
    <h1>{t('menu.home')}</h1>
    <h2>{userDetails.username}</h2>
    </div>
    </Card>
  )
}

export default withTranslation()(Home);
