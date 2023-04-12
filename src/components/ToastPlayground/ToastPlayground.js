import React from 'react';
import Button from '../Button';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [variant, setVariant] = React.useState(null)
  const [msg, setMsg] = React.useState('')
  const { addToast } = React.useContext(ToastContext)





  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <form onSubmit={(e) => {
        e.preventDefault();
        addToast(msg, variant);
        setMsg('');
        setVariant(null)
      }} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={msg} onChange={(e) => { setMsg(e.target.value) }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((e, idx) => {
              return (
                <label key={e} htmlFor={`variant-${e}`}>
                  <input
                    id={`variant-${e}`}
                    type="radio"
                    name='variant-picker'
                    value={e}
                    checked={variant === e}
                    onChange={(e) => {
                      setVariant(e.target.value)
                    }}
                  />
                  {e}
                </label>
              )
            })}


          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
