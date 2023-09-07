import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/bgSVG";

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        <main className="grow py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">About</h2>
            <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
              Levels.fyi started in 2017 as a side project to help people
              compare career levels across tech companies is now one of the most
              popular destination for tech professionals. Our mission is to help
              every professional build a better career through the most accurate
              insights and services. Over 1 million professionals use Levels.fyi
              each month to find and evaluate their next job. It's a painful
              process - for people and companies alike. We're building the
              future of hiring by centering ourselves around professionals.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
