import React, { memo } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import getFullPath from 'utils/get-full-path';

import styles from './create-word.less';

const CreateWord = () => {
  const history = useHistory();

  const redirectToWordList = () => {
    history.push(getFullPath('/word-list'));
  };

  const handleFormSubmit = (values) => {
    const newWord = {
      wordId: Math.floor(Math.random() * 1000),
      ...values,
    };

    const storedWordList = JSON.parse(localStorage.getItem('__wordList__')) || [];
    localStorage.setItem('__wordList__', JSON.stringify([
      newWord,
      ...storedWordList,
    ]));

    redirectToWordList();
  };

  return (
    <div className={styles.createWord}>
      <Form
        layout="vertical"
        onFinish={handleFormSubmit}
      >
        <Form.Item
          label="Word"
          name="word"
          rules={[{ required: true, message: 'Please input word' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Sentence"
          name="sentence"
          rules={[{ required: true, message: 'Please input sentence' }]}
        >
          <Input />
        </Form.Item>
        <div className={styles.footer}>
          <Button
            type="default"
            onClick={redirectToWordList}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submit}
          >
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default memo(CreateWord);
