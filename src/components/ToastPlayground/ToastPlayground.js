import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = [
    { id: 1, variant: 'notice' },
    { id: 2, variant: 'warning' },
    { id: 3, variant: 'success' },
    { id: 4, variant: 'error' }];

function ToastPlayground() {
    const [toastVariant, setToastVariant] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            {showToast &&

                <Toast
                    message={toastMessage}
                    variant={toastVariant}
                    close={setShowToast}
                />
            }

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={toastMessage}
                            onChange={(e) => setToastMessage(e.target.value)} />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map(({ id, variant }) => {
                            return (<label key={`variant-notice-${id}`} htmlFor={`variant-notice-${id}`}>
                                <input
                                    id={`variant-notice-${id}`}
                                    type="radio"
                                    name="variant"
                                    value={variant}
                                    checked={variant === toastVariant}
                                    onChange={() => setToastVariant(variant)}
                                />
                                {variant}
                            </label>)

                        })}

                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button onClick={setShowToast}>Pop Toast!</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
