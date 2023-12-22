import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./css/style.css";
import Sticky from "sticky-js";
import About from "./pages/About";
import ContactMe from "./partials/ContactMe";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Account from "./pages/Account";
import SubmitToFL from "./pages/SubmitToFL";
import PrivateRoutes from "./pages/PrivateRoutes";
import Listing from "./pages/Listing";
import JobListing from "./pages/JobListing";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

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
        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/submit" element={<SubmitToFL />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/salaries" element={<Listing />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ContactMe />
    </div>
  );
}

export default App;
