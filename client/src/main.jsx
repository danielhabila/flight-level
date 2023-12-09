import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import axios from "axios";
import GetIdsProvider from "./context/GetIdsContext";
import ModalContextProvider from "./context/ModalContext";
import RecoveryProvider from "./context/RecoveryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:8080";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <GetIdsProvider>
          <RecoveryProvider>
            <App />
          </RecoveryProvider>
        </GetIdsProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  </Router>
);
