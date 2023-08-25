import Hero from "../partials/Hero";
import LogoCloud from "../partials/LogoCloud";
import Feature from "../partials/Feature";
import Feature2 from "../partials/Feature2";
import Stats from "../partials/Stats";
import Cta from "../partials/Cta";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function HomeRecruiter() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <Header />

      <main className="grow">
        <Hero />
        <LogoCloud />
        <Feature />
        <Feature2 />
        <Stats />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}

export default HomeRecruiter;
