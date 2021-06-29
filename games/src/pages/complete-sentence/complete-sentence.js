import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form, Input, Button, message,
} from 'antd';

import getFullPath from 'utils/get-full-path';

import styles from './complete-sentence.less';

const CompleteSentence = () => {
  const history = useHistory();

  const redirectToGameList = () => {
    history.push(getFullPath('/game-list'));
  };

  const handleFormSubmit = (values) => {
    if (values.answer === 'country') {
      message.success('Correct');
      return;
    }

    message.error('It\'s wrong!');
  };

  return (
    <div className={styles.completeSentence}>
      <Form
        layout="vertical"
        onFinish={handleFormSubmit}
      >
        <p>
          Wellcome to our _____!
        </p>
        <Form.Item name="answer">
          <Input />
        </Form.Item>
        <div className={styles.actions}>
          <Button
            type="default"
            onClick={redirectToGameList}
          >
            Back
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submit}
          >
            Check
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CompleteSentence;
