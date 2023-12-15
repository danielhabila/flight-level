import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/BgSVG";
import NewsList from "../partials/BlogPartials/NewsList";
import Hero from "../partials/Hero";
import { Helmet } from "react-helmet-async";

export default function Home() {
  // ---------------------------Search---------------------------

  return (
    <>
      <Helmet>
        <title>Home - A Hub For Aviation Geeks {"  "}✈</title>
        <meta
          name="description"
          content="A Hub For Aviation Geeks. Carefully selected stories, videos, tools, and resources to keep you informed.  "
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-gray-900">
        <BgSVG />
        <div className="flex flex-col min-h-screen overflow-hidden ">
          <Header />

          <main className=" grow py-16 md:py-24">
            <Hero />
            <NewsList />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
