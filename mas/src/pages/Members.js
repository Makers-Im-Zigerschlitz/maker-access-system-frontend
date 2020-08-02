import React from "react";
import { withTranslation, Trans } from 'react-i18next';
import {Table,Column} from "@blueprintjs/table";

function Members(props) {
    const {t} = props
return (
  <div>
  <h1>{t('menu.members')}</h1>
  <Table numRows={5}>
    <Column name="ID"/>
    <Column name="First name"/>
    <Column name="Last name"/>
    <Column name="Street"/>
    <Column name="ZIP"/>
    <Column name="State"/>
    <Column name="City"/>
    <Column name="Country"/>
</Table>
  </div>
)
}

export default withTranslation()(Members);
