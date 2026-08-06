import { createRoot } from "react-dom/client";
import "dialkit/styles.css";
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
