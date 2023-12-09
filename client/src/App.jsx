import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import Sticky from "sticky-js";
import Auth from "./pages/Auth";
import About from "./pages/About";
import ContactMe from "./partials/ContactMe";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NewsPost from "./pages/NewsPost";
import SavedNews from "./pages/SavedNews";

function App() {
  const location = useLocation();

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
        <Route path="/saved" element={<SavedNews />} />

        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/reset-request" element={<ResetRequest />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/verify" element={<OTPInput />} /> */}

        <Route path="/news/:slug" element={<NewsPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ContactMe />
    </div>
  );
}

export default App;
