import React from 'react';

import styles from './ToastShelf.module.css';
import Toast from '../Toast/Toast';
import { ToastContext } from '../ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey';

function ToastShelf() {
    const {
        toastArray,
        dismissAll,
        handleDismiss
    } = React.useContext(ToastContext);

    useEscapeKey(dismissAll);

    return (
        <ol
            className={styles.wrapper}
            role='region'
            aria-live='polite'
            aria-label='Notification'
        >
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
