import React from "react";
import { withTranslation, Trans } from 'react-i18next';

function Bookings(props) {
    const {t} = props
return (
  <div>
  <h1>{t('menu.bookings')}</h1>
  </div>
)
}

export default withTranslation()(Bookings);
