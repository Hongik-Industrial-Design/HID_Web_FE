import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme/theme.js";
import { BrowserRouter } from "react-router-dom";
import "@styles/main.scss";
import App from "./App.jsx";
import ScrollToTop from "./utils/ScrollToTop.js";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
