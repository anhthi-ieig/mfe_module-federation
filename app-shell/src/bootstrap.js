import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './styles/initial.less';
import App from './App';

const browserHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={browserHistory}>
        <Switch>
            <App />
        </Switch>
    </Router>,
    document.getElementById('container-root'),
);
