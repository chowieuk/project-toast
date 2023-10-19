import React from "react";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
    const [activeToasts, setActiveToasts] = React.useState([]);

    function dismissToast(id) {
        const nextToasts = activeToasts.filter((toast) => {
            return toast.id !== id;
        });

        setActiveToasts(nextToasts);
    }

    function createToast(toastVariant, toastMessage) {
        const id = crypto.randomUUID();
        const newToast = {
            variant: toastVariant,
            message: toastMessage,
            id: id,
        };

        const nextToasts = [...activeToasts, newToast];

        setActiveToasts(nextToasts);
    }

    function dismissAllToasts() {
        setActiveToasts([]);
    }

    function handleKeydown(event) {
        if (event.key === "Escape") {
            dismissAllToasts();
        }
    }

    React.useEffect(() => {
        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
        //eslint-disable-next-line
    }, []);

    return (
        <ToastContext.Provider
            value={{
                VARIANT_OPTIONS,
                activeToasts,
                createToast,
                dismissToast,
                dismissAllToasts,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
