import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'
import * as serviceWorker from './serviceWorker';
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../node_modules/@blueprintjs/table/lib/css/table.css";
import "../node_modules/@blueprintjs/select/lib/css/blueprint-select.css";
import './index.css';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
       <App />
    </I18nextProvider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
