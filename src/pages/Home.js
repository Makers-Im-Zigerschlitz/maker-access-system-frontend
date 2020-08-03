import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core";

function Home(props) {
  const {t} = props
return (
  <Card id="content" elevation={Elevation.TWO}>
  <div>
  <h1>{t('menu.home')}</h1>
  </div>
  </Card>
)
}

export default withTranslation()(Home);
