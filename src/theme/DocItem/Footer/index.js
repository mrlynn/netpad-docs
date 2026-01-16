import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import CopyPageButton from '@site/src/components/CopyPageButton';
import styles from './styles.module.css';

export default function FooterWrapper(props) {
  return (
    <>
      <div className={styles.copyButtonContainer}>
        <CopyPageButton />
      </div>
      <Footer {...props} />
    </>
  );
}
