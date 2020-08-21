import React from "react";
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import {Column} from 'primereact/column';

function Members(props) {
    const {t} = props
return (
  <Card id="content">
  <div>
  <h1>{t('menu.members')}</h1>
  <DataTable>
    <Column field="id" header="ID"></Column>
    <Column field="first" header="First Name"></Column>
    <Column field="last" header="Last Name"></Column>
    <Column field="street" header="Street"></Column>
    <Column field="zip" header="ZIP"></Column>
    <Column field="state" header="State"></Column>
    <Column field="city" header="City"></Column>
    <Column field="country" header="Country"></Column>
</DataTable>
  </div>
  </Card>
)
}

export default withTranslation()(Members);
