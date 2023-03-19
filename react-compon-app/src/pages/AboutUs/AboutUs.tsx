import React from 'react';

import styles from './AboutUs.module.scss';

function AboutUs() {
  return (
    <div className={styles['about-us']} data-testid="about-us-page">
      <div className={styles['content']}>
        <h1>About content</h1>
      </div>
    </div>
  );
}

export default AboutUs;
