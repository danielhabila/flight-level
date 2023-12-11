import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";
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
        <Auth0Provider
          domain="dev-8j6g22j10201c6ni.us.auth0.com"
          clientId="4UDDuK25Ti7hEHTAgK751gGMeoWufANN"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <GetIdsProvider>
            <RecoveryProvider>
              <App />
            </RecoveryProvider>
          </GetIdsProvider>
        </Auth0Provider>
      </ModalContextProvider>
    </QueryClientProvider>
  </Router>
);
