import React from "react";

import Service05 from "../images/ame.jpeg";

import Service04 from "../images/instructor.jpeg";
import Service01 from "../images/pilots.jpg";
import Service08 from "../images/flight-attendant .png";

function Services() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-cabinet-grotesk text-gray-100">
                Know your worth!
              </h2>
            </div>

            {/* Grid */}
            <div className="max-w-2xl mx-auto grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:max-w-none items-start pb-6">
              {/* Item #1 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="/details">
                    <img
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service01}
                      width="202"
                      height="128"
                      alt="Item 01"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a
                    className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Pilot
                  </a>
                </div>
              </div>

              {/* Item #4 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <img
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service04}
                      width="202"
                      height="128"
                      alt="Item 04"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a
                    className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Flight Instructor
                  </a>
                </div>
              </div>
              {/* Item #5 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <img
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service05}
                      width="202"
                      height="128"
                      alt="Item 05"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a
                    className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Engineer
                  </a>
                </div>
              </div>

              {/* Item #8 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <img
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service08}
                      width="202"
                      height="128"
                      alt="Item 08"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a
                    className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Flight attendant
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom gradient */}
            <div className="flex justify-center items-center absolute bottom-0 w-full h-36 bg-gradient-to-t from-gray-900 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
