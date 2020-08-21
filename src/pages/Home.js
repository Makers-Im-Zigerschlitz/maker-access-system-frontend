import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';

function Home(props) {
  const { t } = props;

  return (
    <Card id="content" title="Title">
    <div>
    <h1>{t('menu.home')}</h1>
    </div>
    </Card>
  );
}

export default withTranslation()(Home);
