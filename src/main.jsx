import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HabbitProvider from "./components/context/HabbitContext.jsx";

createRoot(document.getElementById("root")).render(
<HabbitProvider>
      <App />

</HabbitProvider>
);
