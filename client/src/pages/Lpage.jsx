import Hero from "../partials/Hero";
import LogoCloud from "../partials/LogoCloud";
import Feature from "../partials/Feature";
import Feature2 from "../partials/Feature2";
import Stats from "../partials/Stats";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

export default function Example() {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <Hero />

        {/* Logo cloud */}
        <LogoCloud />

        {/* Feature section */}
        <Feature />

        {/* Feature section */}
        <Feature2 />

        {/* Stats */}
        <Stats />

        {/* CTA section */}
        <Cta />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
