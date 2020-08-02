import React from "react";
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {Button,Card,InputGroup,FormGroup} from "@blueprintjs/core"

function Signup(props) {
  const {t} = props
  return (
    <div>
    <h1>{t('menu.signup')}</h1>
    <Card>
      <FormGroup>
        <InputGroup type="email" placeholder={t('signup.email')} />
        <InputGroup type="password" placeholder={t('signup.password')} />
        <InputGroup type="password" placeholder={t('signup.retype-password')} />
        <Button>{t('signup.btn-signup')}</Button>
      </FormGroup>
      <Link to="/login">{t('signup.has-account')}</Link>
    </Card>
    </div>
  );
}

export default withTranslation()(Signup);
