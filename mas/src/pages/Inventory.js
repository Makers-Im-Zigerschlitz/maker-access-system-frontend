import React from "react";
import { withTranslation } from 'react-i18next';

function Inventory(props) {
    const {t} = props
return (
  <div>
  <h1>{t('menu.inventory')}</h1>
  </div>
)
}

export default withTranslation()(Inventory);
