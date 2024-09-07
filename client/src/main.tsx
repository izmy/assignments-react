import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

export const SETTINGS = {
    environment: import.meta.env.VITE_ENVIRONMENT ?? "development",
    backendApiUrl: import.meta.env.VITE_BACKEND_API_URL ?? "http://localhost:3000",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
