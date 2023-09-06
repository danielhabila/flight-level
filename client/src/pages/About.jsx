import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import axios from "axios";
import BgSVG from "../partials/ui/bgSVG";

export default function Example() {
  const [firstOfficer, setFirstOfficer] = useState(true);
  const [salaryList, setSalaryList] = useState([]);
  //   const [salaryDetails, setSalaryDetails] = useState(true);
  const [loading, setLoading] = useState(false);

  /* ************************************************************************* */
  useEffect(() => {
    const fetchSalary = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/");
        setSalaryList(res.data);
        console.log("salaryList ", salaryList);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchSalary();
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        <main className="grow py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white ">
              Explore Salaries 💸
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
