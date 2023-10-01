import React from "react";

export default function Newsletter() {
  return (
    <div className="relative text-center px-4 py-10 group">
      <div
        className="absolute inset-0 rounded-lg border-0 ring-1 ring-white/20 bg-gradient-to-t from-slate-800 to-slate-800/30 -rotate-1 -z-10 my-3 "
        aria-hidden="true"
      />

      <div className="text-2xl font-bold mb-5 text-white ">
        Get salary updates and new additions straight to your inbox 📩
      </div>
      <form className="inline-flex max-w-sm">
        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
          <input
            type="email"
            className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20 mb-2 sm:mb-0 sm:mr-2"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button
            className="btn-sm text-white bg-sky-400 hover:bg-sky-500 shadow-sm whitespace-nowrap"
            type="submit"
          >
            Sign me up
          </button>
        </div>
        {/* Success message */}
        {/* <p className="font-medium text-emerald-600 text-center sm:text-left sm:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
      </form>
    </div>
  );
}
