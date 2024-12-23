import React, { useState, useContext } from "react";
import { FetchSalaryContext } from "../context/FetchSalaryContext.jsx";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/BgSVG";
import SearchBar from "../partials/ui/SearchBar";
import RenderListing from "../partials/RenderListing.jsx";
import Loader from "../partials/ui/Loader.jsx";

export default function Example() {
  const { salaryList, loading, error } = useContext(FetchSalaryContext);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

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
    return (
      <div className="grid place-items-center h3 mt-20 text-gray-400">
        Error fetching data :(
      </div>
    );
  }
  // -----------------------------------------------------------------

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        <main className="grow py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
            <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-10 ">
              <h2 className="h4 sm:text-3xl font-cabinet-grotesk text-gray-100 ">
                Explore Salaries
              </h2>

              {/* <button onClick={() => setOpen(!open)}>
                <ModalShare />
                <IoShare className="w-7 h-7 text-white" />
              </button> */}
            </div>
            <dl className="mt-10 ">
              <div id="search-bar" className="sticky">
                <SearchBar handleSearchChange={handleSearchChange} />
              </div>

              <div className="mt-4">
                {loading ? (
                  <div className="grid place-content-center">
                    <Loader w={16} h={16} />
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
            <p className="mt-10 leading-8 text-gray-400 italic">
              ** Spot any errors? Please notify us, we are a work in progress :)
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
