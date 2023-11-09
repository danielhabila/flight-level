import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/BgSVG";

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        <main className="grow py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">About</h2>
            <div>
              <p className="mt-6 md:text-lg leading-8 text-slate-300 ">
                Welcome to Flightlevel.fyi, your ultimate aviation resource! Our
                mission is to empower pilots like you with valuable insights and
                information to navigate the aviation world more efficiently.
                Whether you're looking for the latest aviation news or need to
                compare salaries across different airlines, we've got you
                covered.
              </p>
              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                We're dedicated to providing a one-stop hub for all the key
                stories in aviation, sharing news in a straightforward and
                accessible manner. Our coverage spans all regions and aspects of
                aviation, and we take a digital-first approach, ensuring that
                all of our content is freely accessible.
              </p>

              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                But that's not all. We recognize that pilots in regions like
                Canada often face challenges when it comes to fair compensation.
                That's why we've decided to bring transparency to our community
                by providing you with the tools and information you need to
                compare salaries across different airlines and plan your career
                path.{" "}
                <span className="italic">
                  (only Canadian Payscale info available at the moment, more to
                  come)
                </span>
              </p>
              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                Our mission is all about helping professionals like you build
                better careers by providing the most accurate insights and
                services possible. Your feedback is invaluable, and if you come
                across any inaccuracies, please don't hesitate to let us know so
                we can continually improve and serve you better.
              </p>

              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                Got some cool ideas for the site or just want to share some
                info? Feel free to reach out to us through the 'contact' button
                at the bottom right of the screen. We're always eager to hear
                from you and welcome your input.
              </p>
              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                Thanks for being part of this journey, and here's to reaching
                new heights together! ✈️
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
