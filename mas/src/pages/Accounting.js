import React from "react";
import { withTranslation, Trans } from 'react-i18next';

function Accounting(props) {
    const {t} = props
return (
  <div>
  <h1>{t('menu.accounting')}</h1>
  </div>
)
}

export default withTranslation()(Accounting);
