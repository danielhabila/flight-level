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
              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                Hey there, welcome to Flightlevel.fyi – a project I kicked off
                to help us pilots navigate the aviation world a bit easier. My
                goal here is simple: provide you with all the info you need to
                compare salaries across different airlines, plan your career
                path, negotiate your pay, and bring some much-needed
                transparency to our community.{" "}
              </p>
              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                Now, we all know that pilots in Canada often get the short end
                of the stick when it comes to pay. But together, we can shine a
                light on this issue and work towards getting the compensation we
                truly deserve.
              </p>

              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                My mission? Well, it's all about helping every pro like you
                build a better career by dishing out the most accurate insights
                and services possible.
              </p>
              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                Here's where you come in – use the 'Add your salary' feature to
                share your own data. It's not just about helping us improve the
                site; it's about helping each other out. A bunch of pilots have
                already stepped up, and I gotta say, big thanks to them!
              </p>
              <p className="mt-6 md:text-lg leading-8 text-gray-300 ">
                Got some cool ideas for the site or just want to share some
                info? Hit me up using that 'contact me' button down there at the
                bottom right of the screen. I'm all ears.
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
