import React from "react";

import canada from "../images/canada-image.jpg";
import usa from "../images/usa-image.jpg";

const countries = [
  {
    countryName: "Canada 🇨🇦",
    image: canada,
  },
  {
    countryName: "United States 🇺🇸",
    image: usa,
  },
];

function Services() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative ">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-cabinet-grotesk text-gray-100">
                Know your worth!
              </h2>
            </div>

            {/* Grid */}
            <div className="max-w-2xl mx-auto grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-none  pb-6 ">
              {countries.map((country) => (
                <div className="h-full flex flex-col relative">
                  {/* Image */}
                  <div className="mb-4 relative ">
                    <a
                      className="block group overflow-hidden rounded-md"
                      href="/details"
                    >
                      <img
                        className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out  "
                        src={country.image}
                        width="202"
                        height="128"
                        alt="Item 01"
                      />
                    </a>
                    {/* Absolute position the text in the middle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full ">
                      <a
                        className="font-cabinet-grotesk font-bold text-white text-2xl tracking-wider shadow-2xl"
                        href="/details"
                      >
                        {country.countryName}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
