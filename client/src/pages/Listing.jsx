import React, { useState, useContext } from "react";
import { FetchSalaryContext } from "../context/FetchSalaryContext.jsx";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/BgSVG";
import SearchBar from "../partials/ui/SearchBar";
import RenderListing from "../partials/RenderListing.jsx";

export default function Example() {
  const { salaryList, loading, error } = useContext(FetchSalaryContext);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  console.log("searchedResults", searchedResults);
  // ---------------------------Search---------------------------
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = salaryList.filter(
          (item) =>
            item.airline.toLowerCase().includes(searchText.toLowerCase())
          // || item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        <main className="grow py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
            <h2 className="h2 font-cabinet-grotesk text-gray-100 ">
              Explore Salaries 💸
            </h2>
            <dl className="mt-10 ">
              <SearchBar handleSearchChange={handleSearchChange} />

              <div className="mt-8">
                {loading ? (
                  <div className="flex justify-center items-center">
                    Loading...
                  </div>
                ) : (
                  <>
                    {searchText && (
                      <h2 className="font-normal italic text-gray-400 text-lg mb-3">
                        Showing results for{" "}
                        <span className="font-semibold text-slate-300">
                          {searchText}
                        </span>
                        :
                      </h2>
                    )}
                    <div className="">
                      {searchText ? (
                        <RenderListing
                          data={searchedResults}
                          title="No Search Results Found"
                        />
                      ) : (
                        <RenderListing data={salaryList} />
                      )}
                    </div>
                  </>
                )}
              </div>
              {/* -------------------------------------------------------- */}
            </dl>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
