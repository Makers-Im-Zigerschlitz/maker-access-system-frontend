import React from "react";
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';

function Accounting(props) {
    const {t} = props
return (
  <Card id="content">
  <div>
  <h1>{t('menu.accounting')}</h1>
  </div>
  </Card>
)
}

export default withTranslation()(Accounting);
