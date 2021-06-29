import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form, Radio, Button, message,
} from 'antd';

import getFullPath from 'utils/get-full-path';

import styles from './check-vocabulary.less';

const CheckVocabulary = () => {
  const history = useHistory();

  const redirectToGameList = () => {
    history.push(getFullPath('/game-list'));
  };

  const handleFormSubmit = (values) => {
    if (values.answer === 'quoc_gia') {
      message.success('Correct');
      return;
    }

    message.error('It\'s wrong!');
  };

  return (
    <div className={styles.checkVocabulary}>
      <Form
        layout="vertical"
        onFinish={handleFormSubmit}
      >
        <p>
          What is the meaning of
          &nbsp;
          <strong>Country</strong>
        </p>
        <Form.Item name="answer">
          <Radio.Group>
            <Radio value="quoc_gia">
              Quốc gia
            </Radio>
            <Radio value="hon_dao">
              Hòn đảo
            </Radio>
            <Radio value="rung_ram">
              Rừng rậm
            </Radio>
          </Radio.Group>
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

export default memo(CheckVocabulary);
