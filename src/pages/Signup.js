import React from "react";
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function Signup(props) {
  const {t} = props
  return (
    <Card id="content">
    <div>
    <h1>{t('menu.signup')}</h1>
    <Card>
      <div className="p-inputgroup">
        <InputText type="email" placeholder={t('signup.email')} />
        <InputText type="password" placeholder={t('signup.password')} />
        <InputText type="password" placeholder={t('signup.retype-password')} />
        <Button>{t('signup.btn-signup')}</Button>
      </div>
      <Link to="/login">{t('signup.has-account')}</Link>
    </Card>
    </div>
    </Card>
  );
}

export default withTranslation()(Signup);
