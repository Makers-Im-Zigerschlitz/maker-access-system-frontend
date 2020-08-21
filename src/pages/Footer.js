import React from "react";
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';

function Footer(props) {
  const {t} = props
return (
  <Card id="footer">
  <p>{t('footer.copyright')}</p>
  </Card>
)
}

export default withTranslation()(Footer);
