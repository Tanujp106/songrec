import { createRoot } from "react-dom/client";
import { DialRoot } from "dialkit";
import App from "./app/App";
import "dialkit/styles.css";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <DialRoot position="top-right" />
    <App />
  </>
);
