import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = [
    { id: 1, variant: 'notice' },
    { id: 2, variant: 'warning' },
    { id: 3, variant: 'success' },
    { id: 4, variant: 'error' }];

function ToastPlayground() {
    const [toastVariant, setToastVariant] = useState('notice');
    const [toastMessage, setToastMessage] = useState('');
    const [toastArray, setToastArray] = useState([]);

    const onPopToast = (e) => {
        e.preventDefault();
        const nextToast = [
            ...toastArray,
            {
                id: crypto.randomUUID(),
                toastVariant,
                toastMessage,
            }
        ];
        setToastArray(nextToast);
        setToastMessage('');
        setToastVariant('notice');
    }

    const handleDismiss = (id) => {
        const nextToastArray = toastArray.filter(toast => {
            return toast.id !== id
        });
        setToastArray(nextToastArray);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>


            <ToastShelf
                toastArray={toastArray}
                handleDismiss={handleDismiss}
            />

            <form
                className={styles.controlsWrapper}
                onSubmit={onPopToast}
            >
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
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
