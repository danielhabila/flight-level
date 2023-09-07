import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import axios from "axios";
import BgSVG from "../partials/ui/bgSVG";
import SalaryForm from "../partials/SalaryForm";

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

        <SalaryForm />

        <Footer />
      </div>
    </div>
  );
}
