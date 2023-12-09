import React, { useState, useContext } from "react";
import Header from "../partials/Header.jsx";
import Footer from "../partials/Footer.jsx";
import BgSVG from "../partials/ui/BgSVG.jsx";
import { Link } from "react-router-dom";
import Illustration from "../images/hero-illustration.svg";
import { RecoveryContext } from "../context/RecoveryContext";
import Login from "../partials/auth/Login.jsx";
import OTPInput from "../partials/auth/OTPInput.jsx";
import ChangePassword from "../partials/auth/ChangePassword.jsx";
import ResetRequest from "../partials/auth/ResetRequest.jsx";
import Signup from "../partials/auth/Signup.jsx";

export default function Auth() {
  const { page } = useContext(RecoveryContext);

  const Display = () => {
    if (page === "login") return <Login />;
    if (page === "signup") return <Signup />;
    if (page === "reset-request") return <ResetRequest />;
    if (page === "otp") return <OTPInput />;
    if (page === "reset") return <ChangePassword />;

    return alert("Password successfully changed!");
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />
        {/* ----------------------- */}
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <main className="grow">
            <section className="relative">
              {/* Illustration */}
              <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
                aria-hidden="true"
              >
                <img
                  src={Illustration}
                  className="max-w-none"
                  width="1905"
                  height="622"
                  alt="Hero Illustration"
                />
              </div>

              {/* Content here */}
              <div className="px-4 sm:px-6 lg:px-8">{Display()}</div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
