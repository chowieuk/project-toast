import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import { ToastContext } from "../ToastProvider";

import ToastVariantRadioButton from "../ToastVariantRadioButton/ToastVariantRadioButton";
import ToastShelf from "../ToastShelf/ToastShelf";

function ToastPlayground() {
    const { VARIANT_OPTIONS, activeToasts, dismissToast, createToast } =
        React.useContext(ToastContext);

    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [message, setMessage] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        createToast(variant, message);
        setVariant(VARIANT_OPTIONS[0]);
        setMessage("");
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img
                    alt="Cute toast mascot"
                    src="/toast.png"
                />
                <h1>Toast Playground</h1>
            </header>

            {activeToasts.length !== 0 && (
                <ToastShelf
                    toasts={activeToasts}
                    handleDismiss={dismissToast}
                ></ToastShelf>
            )}

            <form
                onSubmit={handleSubmit}
                className={styles.controlsWrapper}
            >
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((option) => (
                            <ToastVariantRadioButton
                                key={option}
                                value={option}
                                checked={variant === option}
                                onChange={(event) => {
                                    setVariant(event.target.value);
                                }}
                            />
                        ))}
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
