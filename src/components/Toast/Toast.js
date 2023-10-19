import React from "react";
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

import { ToastContext } from "../ToastProvider";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ id, variant, children }) {
    const { dismissToast } = React.useContext(ToastContext);
    const Icon = ICONS_BY_VARIANT[variant];

    function handleKeydown(event) {
        if (event.key === "Escape") {
            dismissToast(id);
        }
    }

    React.useEffect(() => {
        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24} />
            </div>
            <p className={styles.content}>
                <VisuallyHidden>{variant} - </VisuallyHidden>
                {children}
            </p>
            <button
                onClick={() => dismissToast(id)}
                className={styles.closeButton}
                aria-label="Dissmiss message"
                aria-live="off"
            >
                <X size={24} />
            </button>
        </div>
    );
}

export default Toast;
