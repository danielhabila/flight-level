import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RecoveryContext } from "../../context/RecoveryContext.jsx";
import axios from "axios";

export default function ResetRequest() {
  const { setEmail, setPage, email, setOTP } = useContext(RecoveryContext);

  function navigateToOtp(event) {
    event.preventDefault();

    if (email) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);
      axios
        .post("/api/v3/send-recovery-email", {
          OTP,
          recipient_email: email,
        })
        .then(setPage("otp"))
        .catch((e) => console.log(e));
      return;
    }
    return alert("Please enter your email");
  }
  return (
    <div className="max-w-3xl mx-auto text-center pb-12">
      <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pt-32 pb-12 md:pt-40 md:pb-20">
        Reset your password
      </h1>

      <div className="max-w-md mx-auto">
        <form onSubmit={navigateToOtp}>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm text-slate-300 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="form-input w-full"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group"
              // onClick={() => navigateToOtp()}
              type="submit"
            >
              Send Verification
              <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
