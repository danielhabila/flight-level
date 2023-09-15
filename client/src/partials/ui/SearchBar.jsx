import React from "react";

export default function SearchBar({ handleSearchChange }) {
  return (
    <>
      <form className="w-full pb-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block text-sm sr-only" htmlFor="search">
              Search
            </label>
            <div className="relative flex items-center">
              <input
                id="search"
                name="search"
                type="text"
                className="form-input py-2 w-full pl-10 bg-transparent border-0 rounded-md shadow-md ring-1 ring-white/10"
                placeholder="Search airline..."
                onChange={handleSearchChange}
                onKeyDown={(e) => e.keyCode === 13 && e.preventDefault()}
              />
              <div className="absolute inset-0 right-auto flex items-center justify-center">
                <svg
                  className="w-4 h-4 shrink-0 mx-3"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-400"
                    d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
