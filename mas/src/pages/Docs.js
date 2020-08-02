import React from "react";
import { withTranslation, Trans } from 'react-i18next';

function Docs(props) {
    const {t} = props
return (
  <div>
  <h1>{t('menu.documents')}</h1>
  </div>
)
}

export default withTranslation()(Docs);
