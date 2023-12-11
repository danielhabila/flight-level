import React from "react";

import Illustration from "../images/hero-illustration.svg";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="pt-14">
          {/* Copy */}
          <div className="md:pr-32">
            <h1 className="h3 md:text-4xl font-aspekta bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-6">
              A community for aviation geeks {"  "}✈
            </h1>
            <p className="text-md md:text-lg text-slate-400 mb-8">
              Carefully selected stories, videos, tools, and resources to keep
              you informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
