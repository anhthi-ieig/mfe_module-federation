import React, { memo } from 'react';

import styles from './intro.less';

const Intro = () => (
    <div className={styles.intro}>
        Hi! Microfrontend
        <br />
        Allow teams develop modules in isolation
    </div>
);

export default memo(Intro);
