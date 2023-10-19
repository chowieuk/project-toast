import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
    return (
        <ol className={styles.wrapper}>
            {toasts.map((toast) => (
                <li
                    key={toast.id}
                    className={styles.toastWrapper}
                >
                    <Toast
                        id={toast.id}
                        variant={toast.variant}
                        handleDismiss={toast.handleDismiss}
                    >
                        {toast.message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
