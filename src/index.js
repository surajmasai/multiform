import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./Context/LoginContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LoginContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginContextProvider>
  </StrictMode>
);
