// LoadingSpinner.js
import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
      <div className={styles.dot3}></div>
    </div>
  );
};

export default Loading;
