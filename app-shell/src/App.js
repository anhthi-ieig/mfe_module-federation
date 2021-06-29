import React, {
  memo, lazy, Suspense, useState,
} from 'react';
import { Button } from 'antd';
import { Route, Redirect, useHistory } from 'react-router-dom';

import Loading from 'components/loading';

import { ActiveTab } from './App.constants';
import styles from './App.less';

const Intro = lazy(() => import('modules/intro'));
const CMS = lazy(() => import('modules/cms'));
const Games = lazy(() => import('modules/games'));

const Homepage = () => {
  const history = useHistory();
  const [userInfo] = useState({
    name: 'Jarvis',
    age: 25,
  });

  const [activeTab, setActiveTab] = useState();

  const renderNavigation = () => {
    const handleCmsClick = () => {
      setActiveTab(ActiveTab.CMS);
      history.push(`/${ActiveTab.CMS}`);
    };

    const handleGamesClick = () => {
      setActiveTab(ActiveTab.GAMES);
      history.push(`/${ActiveTab.GAMES}`);
    };

    return (
      <div className={styles.navigation}>
        <Button
          type={activeTab === ActiveTab.CMS ? 'primary' : 'default'}
          onClick={handleCmsClick}
        >
          CMS
        </Button>
        <Button
          type={activeTab === ActiveTab.GAMES ? 'primary' : 'default'}
          onClick={handleGamesClick}
        >
          Games
        </Button>
      </div>
    );
  };

  const renderModules = () => (
    <Suspense fallback={<Loading />}>
      <Route
        path="/intro"
        component={Intro}
      />
      <Route
        path="/cms"
        render={(props) => (
          <CMS {...props} userInfo={userInfo} />
        )}
      />
      <Route
        path="/games"
        render={(props) => (
          <Games {...props} userInfo={userInfo} />
        )}
      />
      <Route
        path="/"
        render={() => (
          <Redirect to="/intro" />
        )}
      />
    </Suspense>
  );

  return (
    <div className={styles.app}>
      {renderNavigation()}
      {renderModules()}
    </div>
  );
};

export default memo(Homepage);
