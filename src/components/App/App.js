import React, { StrictMode } from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastProvider from "../ToastProvider/ToastProvider";

function App() {
    return (
        <StrictMode>
            <ToastProvider>
                <ToastPlayground />
                <Footer />
            </ToastProvider>
        </StrictMode>
    );
}

export default App;
