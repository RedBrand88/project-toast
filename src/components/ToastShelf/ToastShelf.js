import React from 'react';

import styles from './ToastShelf.module.css';
import Toast from '../Toast/Toast';

function ToastShelf({ toastArray, handleDismiss }) {
    return (
        <ol className={styles.wrapper}>
            {toastArray?.map(({ id, toastVariant, toastMessage }) => (
                <li key={id} className={styles.toastWrapper} >
                    <Toast
                        id={id}
                        dismiss={handleDismiss}
                        variant={toastVariant}
                    >
                        {toastMessage}
                    </Toast>
                </li>
            ))
            }
        </ol >
    );
}

export default ToastShelf;
