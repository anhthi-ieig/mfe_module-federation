import React, { memo } from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

/* eslint-disable import/no-unresolved */
import 'container/styles/initial.less';
import getFullPath from './utils/get-full-path';

import GameList from './pages/game-list';
import CheckVocabulary from './pages/check-vocabulary';
import CompleteSentence from './pages/complete-sentence';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route
          path={getFullPath('/game-list')}
          component={GameList}
        />
        <Route
          path={getFullPath('/check-vocabulary')}
          component={CheckVocabulary}
        />
        <Route
          path={getFullPath('/complete-sentence')}
          component={CompleteSentence}
        />
        <Route
          path="/"
          render={() => (<Redirect to={getFullPath('/game-list')} />)}
        />
      </Switch>
    </Router>
  );
};

export default memo(App);
