import React, { memo } from 'react';
import { Skeleton } from 'antd';

import styles from './loading.less';

const Loading = () => (
    <div className={styles.loading}>
        <Skeleton />
    </div>
);

export default memo(Loading);
