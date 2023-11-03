import React, { createContext, useState } from 'react';

export const ToastContext = createContext();

function ToastProvider({ children }) {
    const [toastVariant, setToastVariant] = useState('notice');
    const [toastMessage, setToastMessage] = useState('');
    const [toastArray, setToastArray] = useState([]);

    const createToast = () => {
        const nextToast = [
            ...toastArray,
            {
                id: crypto.randomUUID(),
                toastVariant,
                toastMessage,
            }
        ];
        setToastArray(nextToast);
    }

    const handleDismiss = (id) => {
        const nextToastArray = toastArray.filter(toast => {
            return toast.id !== id
        });
        setToastArray(nextToastArray);
    }

    const dismissAll = () => {
        setToastArray([]);
    }

    return (
        <ToastContext.Provider value={
            {
                createToast,
                handleDismiss,
                setToastVariant,
                setToastMessage,
                toastArray,
                toastMessage,
                toastVariant,
                dismissAll
            }
        }>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
