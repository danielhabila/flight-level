import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/BgSVG";
import SalaryForm from "../partials/SalaryForm";

export default function AddSalary() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        <SalaryForm />

        <Footer />
      </div>
    </div>
  );
}
