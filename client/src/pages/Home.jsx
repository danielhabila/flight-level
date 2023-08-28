import Hero from "../partials/Hero";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ContactMe from "../partials/ContactMe";

function HomeRecruiter() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <Header />

      <main className="grow">
        <Hero />
      </main>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default HomeRecruiter;
