import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function ToastIcon({ variant }) {
    if (variant === 'notice') {
        return <Info />;
    } else if (variant === 'warning') {
        return <AlertTriangle />;
    } else if (variant === 'success') {
        return <CheckCircle />;
    } else if (variant === 'error') {
        return <AlertOctagon />;
    }
}

const getStyles = (variant) => {
    if (variant === 'notice') {
        return styles.notice;
    } else if (variant === 'warning') {
        return styles.warning;
    } else if (variant === 'success') {
        return styles.success;
    } else if (variant === 'error') {
        return styles.error
    }
}

function Toast({ message, variant, close }) {

    return (
        <div className={`${styles.toast} ${getStyles(variant)}`}>
            <div className={styles.iconContainer}>
                <ToastIcon variant={variant} />
            </div>
            <p className={styles.content}>
                {message}
            </p>
            <button className={styles.closeButton} onClick={(show) => close(!show)}>
                <X size={24} />
                <VisuallyHidden>Dismiss message</VisuallyHidden>
            </button>
        </div>
    );
}

export default Toast;
