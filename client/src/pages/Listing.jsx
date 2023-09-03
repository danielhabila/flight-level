import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import axios from "axios";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function Example() {
  const [annual, setAnnual] = useState(true);
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
        console.log(salaryList[0].Captain);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchSalary();
  }, []);
  /* ************************************************************************* */

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <Header />

      <main className="grow py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {people.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.name}
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
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {/* ************************************************************************* */}
                        {/* Pricing toggle */}
                        <div className="flex justify-center max-w-[18rem] m-auto mb-8 lg:mb-16">
                          <div className="relative flex w-full mx-6 p-1 bg-gray-200 rounded-full">
                            <span
                              className="absolute inset-0 m-1 pointer-events-none"
                              aria-hidden="true"
                            >
                              <span
                                className={`absolute inset-0 w-1/2 bg-white rounded-full shadow transform transition duration-150 ease-in-out ${
                                  annual ? "translate-x-0" : "translate-x-full"
                                }`}
                              />
                            </span>
                            <button
                              className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                                annual && "text-gray-500"
                              }`}
                              onClick={() => setAnnual(true)}
                            >
                              First Officer
                            </button>
                            <button
                              className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                                annual && "text-gray-500"
                              }`}
                              onClick={() => setAnnual(false)}
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
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                                      >
                                        Years of Experience
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                      >
                                        Hourly Rate
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white sm:pl-0"
                                      >
                                        Total Compensation
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-800">
                                    {people.map((person) => (
                                      <tr
                                        key={person.email}
                                        className="odd:bg-gradient-to-tr from-gray-900 to-gray-800"
                                      >
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                          {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                          {person.title}
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                          {person.role}
                                        </td>
                                      </tr>
                                    ))}
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
  );
}
