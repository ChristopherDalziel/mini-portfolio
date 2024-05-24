import React from "react";
import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./Components/App";

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
