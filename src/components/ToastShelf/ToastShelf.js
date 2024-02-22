import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
    const {toasts, dismissToast} = React.useContext(ToastContext);

    const handleDismiss = id => {
       dismissToast(id);
    }

    return (
        <ol
            role="region"
            aria-live="polite"
            aria-label="Notification"
            className={styles.wrapper}
        >
            {toasts.map((toast) =>
                <li key={toast.id} className={styles.toastWrapper}>
                    <Toast variant={toast.variant} dismiss={() => handleDismiss(toast.id)}>{toast.message}</Toast>
                </li>
            )}
        </ol>
    );
}

export default ToastShelf;
