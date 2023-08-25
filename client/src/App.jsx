import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import Sticky from "sticky-js";
import Home from "./pages/Home";

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
        {/* <Route path="/" element={<Lpage />} /> */}
        {/*  <Route path="/jobDescription/:id" element={<JobPost />} /> */}
      </Routes>

      {/* <FeedbackButton /> */}
    </div>
  );
}

export default App;
