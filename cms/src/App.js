import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

/* eslint-disable import/no-unresolved */
import 'container/styles/initial.less';
import getFullPath from './utils/get-full-path';

import WordList from './pages/word-list';
import CreateWord from './pages/create-word';

const App = ({ userInfo }) => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route
          path={getFullPath('/word-list')}
          render={(props) => (<WordList {...props} userInfo={userInfo} />)}
        />
        <Route
          path={getFullPath('/create-word')}
          render={(props) => (<CreateWord {...props} />)}
        />
        <Route
          path="/"
          render={() => (<Redirect to={getFullPath('/word-list')} />)}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  userInfo: PropTypes.object,
};

App.defaultProps = {
  userInfo: {},
};

export default memo(App);
