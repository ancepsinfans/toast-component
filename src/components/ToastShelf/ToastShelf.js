import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  const { toastArray } = React.useContext(ToastContext)



  return (
    <ol className={styles.wrapper}>

      {toastArray.map((e) => {
        return (
          <li key={e.id} className={styles.toastWrapper}>
            <Toast id={e.id} variant={e.variant}>{e.msg}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
