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

        <main className="grow py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
            <h2 className="h2 font-cabinet-grotesk text-gray-100 ">
              Explore Salaries 💸
            </h2>
            <dl className="mt-10 space-y-4 divide-y divide-white/10 ">
              {salaryList.map((oneAirline) => (
                <Disclosure
                  as="div"
                  key={oneAirline.question}
                  className="pt-4 md:px-4"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-100">
                          <span className="text-base font-semibold leading-7">
                            {oneAirline.airline}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2  md:px-12 ">
                        <p className="text-base text-gray-300 ">
                          {/* ************************************************************************* */}
                          {/* Pricing toggle */}
                          <div className="flex justify-center max-w-[18rem] m-auto ">
                            <div className="relative flex w-full mx-6 p-1 bg-black shadow-xl rounded-full">
                              <span
                                className="absolute inset-0 m-1 pointer-events-none"
                                aria-hidden="true"
                              >
                                <span
                                  className={`absolute inset-0 w-1/2 bg-gray-700 rounded-full shadow transform transition duration-150 ease-in-out ${
                                    firstOfficer
                                      ? "translate-x-0"
                                      : "translate-x-full"
                                  }`}
                                />
                              </span>
                              <button
                                className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                                  firstOfficer && "text-white"
                                }`}
                                onClick={() => setFirstOfficer(true)}
                              >
                                First Officer
                              </button>
                              <button
                                className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                                  firstOfficer && "text-white"
                                }`}
                                onClick={() => setFirstOfficer(false)}
                              >
                                Captain
                              </button>
                            </div>
                          </div>
                          {/* ************************************************************************* */}
                          <div className="mx-auto px-4 ">
                            <div className="mt-8 flow-root ">
                              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                  <table className="min-w-full divide-y divide-gray-700 ">
                                    <thead>
                                      <tr>
                                        <th
                                          scope="col"
                                          className="py-3.5 pr-3 text-center text-sm font-semibold text-gray-200 sm:pl-0 "
                                        >
                                          Years of Experience
                                        </th>
                                        <th
                                          scope="col"
                                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-200 "
                                        >
                                          Hourly Rate
                                        </th>
                                        <th
                                          scope="col"
                                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-200 sm:pl-0 "
                                        >
                                          Total Compensation
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800 ">
                                      {firstOfficer
                                        ? oneAirline.positions.firstOfficer?.map(
                                            (one) => (
                                              <tr
                                                // key={one.email}
                                                className="odd:bg-gradient-to-tr from-gray-900 to-gray-800 "
                                              >
                                                <td className="whitespace-nowrap py-3.5 text-sm font-medium text-gray-300  w-1/3 text-center">
                                                  Year {one.experience}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-300 w-1/3 text-center">
                                                  {one.hourlyRate}
                                                </td>

                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm  text-gray-300 w-1/3 text-center">
                                                  {one.totalCompensation}
                                                </td>
                                              </tr>
                                            )
                                          )
                                        : oneAirline.positions.captain?.map(
                                            (one) => (
                                              <tr
                                                // key={one.email}
                                                className="odd:bg-gradient-to-tr from-gray-900 to-gray-800 "
                                              >
                                                <td className="whitespace-nowrap py-3.5 text-sm font-medium text-white  w-1/3 text-center">
                                                  Year {one.experience}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm text-gray-300 w-1/3 text-center">
                                                  {one.hourlyRate}
                                                </td>

                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm  text-gray-300 w-1/3 text-center">
                                                  {one.totalCompensation}
                                                </td>
                                              </tr>
                                            )
                                          )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ************************************************************************* */}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
