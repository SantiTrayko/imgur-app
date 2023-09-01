import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { imgurApi } from "./api/features/apiSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
      <ApiProvider api={imgurApi}>
        <App />
      </ApiProvider>
  // </React.StrictMode>
);
