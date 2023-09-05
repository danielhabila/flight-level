import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import Sticky from "sticky-js";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import JobList2 from "./pages/JobList2";
import JobListMob from "./pages/JobListMob";

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
        <Route path="/details" element={<Listing />} />
        {/* <Route path="/details" element={<JobListMob />} /> */}
        {/*  <Route path="/jobDescription/:id" element={<JobPost />} /> */}
      </Routes>

      {/* <FeedbackButton /> */}
    </div>
  );
}

export default App;
