import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import Sticky from "sticky-js";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import About from "./pages/About";
import AddSalary from "./pages/AddSalary";
import ContactMe from "./partials/ContactMe";
import ErrorPage from "./pages/ErrorPage";

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
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Listing />} />
        {/* <Route path="/details" element={<Listing />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/add-salary" element={<AddSalary />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ContactMe />
    </div>
  );
}

export default App;
