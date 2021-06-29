import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import getFullPath from 'utils/get-full-path';

import styles from './word-list.less';

const initialWordList = [
  { wordId: 199, word: 'dog', sentence: 'This is a dog' },
];

const WordList = ({ userInfo }) => {
  const history = useHistory();
  const [wordList, setWordList] = useState();

  useEffect(() => {
    const storedWordList = JSON.parse(localStorage.getItem('__wordList__'));

    if (!storedWordList) {
      localStorage.setItem('__wordList__', JSON.stringify(initialWordList));
    }

    setWordList(storedWordList || initialWordList);
  }, []);

  const getTableColumn = () => ([
    {
      title: 'Word Id',
      dataIndex: 'wordId',
      key: 'wordId',
    },
    {
      title: 'Word',
      dataIndex: 'word',
      key: 'word',
    },
    {
      title: 'Sentence',
      dataIndex: 'sentence',
      key: 'sentence',
    },
  ]);

  const redirectToWord = () => {
    history.push(getFullPath('/create-word'));
  };

  return (
    <div className={styles.wordList}>
      <div className={styles.header}>
        <Button
          type="primary"
          className={styles.redirectToWord}
          onClick={redirectToWord}
        >
          Create Word
        </Button>
        <p className={styles.hi}>
          Hi!
          &nbsp;
          <strong>
            {userInfo?.name}
          </strong>
        </p>
      </div>
      <Table
        columns={getTableColumn()}
        dataSource={wordList}
      />
    </div>
  );
};

WordList.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default memo(WordList);
