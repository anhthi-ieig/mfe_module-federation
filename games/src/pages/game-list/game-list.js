import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import getFullPath from 'utils/get-full-path';

import styles from './game-list.less';

const GameList = () => {
  const history = useHistory();

  const redirectToCheckVocabulary = () => {
    history.push(getFullPath('/check-vocabulary'));
  };

  const redirectToCompleteSentence = () => {
    history.push(getFullPath('/complete-sentence'));
  };

  return (
    <div className={styles.gameList}>
      <div
        role="button"
        className={styles.checkVocabulary}
        onClick={redirectToCheckVocabulary}
      >
        Check Vocabulary
      </div>
      <div
        role="button"
        className={styles.completeSentence}
        onClick={redirectToCompleteSentence}
      >
        Complete Sentence
      </div>
    </div>
  );
};

export default memo(GameList);
