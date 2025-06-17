import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// App is Root Component
createRoot(document.getElementById("root")).render(<App />);
