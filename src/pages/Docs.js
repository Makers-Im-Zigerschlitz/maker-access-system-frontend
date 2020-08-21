import React from "react";
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';

function Docs(props) {
    const {t} = props
return (
  <Card id="content">
  <div>
  <h1>{t('menu.documents')}</h1>
  </div>
  </Card>
)
}

export default withTranslation()(Docs);
