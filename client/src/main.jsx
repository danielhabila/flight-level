import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";
import GetIdsProvider from "./context/GetIdsContext";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchSalaryProvider from "./context/FetchSalaryContext";

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
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENTID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <GetIdsProvider>
          <FetchSalaryProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </FetchSalaryProvider>
        </GetIdsProvider>
      </Auth0Provider>
    </QueryClientProvider>
  </Router>
);
