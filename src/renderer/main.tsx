import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./pages/_/_root";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
