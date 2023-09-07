import Hero from "../partials/Hero";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function HomeRecruiter() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <Header />

      <main className="grow">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default HomeRecruiter;
