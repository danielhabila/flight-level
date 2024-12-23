import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/BgSVG";
import NewsList from "../partials/BlogPartials/NewsList";

export default function Saved() {
  // ---------------------------Search---------------------------

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        <main className=" grow py-16 md:py-24">
          <NewsList />
        </main>
        <Footer />
      </div>
    </div>
  );
}
