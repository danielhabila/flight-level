import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./css/style.css";
import Sticky from "sticky-js";
import About from "./pages/About";
import ContactMe from "./partials/ContactMe";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoutes from "./pages/PrivateRoutes";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const stickyEls = document.querySelectorAll("[data-sticky]");
    if (stickyEls.length > 0) {
      const sticky = new Sticky("[data-sticky]");
    }
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/news" element={<Home />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ContactMe />
    </div>
  );
}

export default App;
