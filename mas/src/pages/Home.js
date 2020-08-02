import React from "react";
import { withTranslation, Trans } from 'react-i18next';

function Home(props) {
  const {t} = props
return (
  <div>
  <h1>{t('menu.home')}</h1>
  </div>
)
}

export default withTranslation()(Home);
