import React, { useState, useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import SalaryStats from "./ui/SalaryStats";
import Newsletter from "./Newsletter";

export default function RenderListing({ data }) {
  const [firstOfficer, setFirstOfficer] = useState(true);
  const [selectedEquipmentIndex, setSelectedEquipmentIndex] = useState(0);
  return (
    <>
      {data?.length === 0 ? (
        <h2 className="grid place-content-center mt-20 font-bold text-red-400 text-xl uppercase">
          No match found
        </h2>
      ) : (
        data?.map((oneAirline, i) => (
          <>
            <Disclosure as="div" key={oneAirline._id} className="pt-3 ">
              {({ open }) => (
                <>
                  <dt className="border-0 odd:bg-gradient-to-tr from-gray-900 to-gray-800 rounded-md ring-1 ring-white/20 p-5">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-100 ">
                      <span className="text-base font-semibold leading-7 ">
                        {oneAirline.airline}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <span className="mr-3 sm:mr-10 rounded-full flex-none py-0.5 sm:py-1 px-2 text-xs  font-medium ring-1 ring-inset  italic text-indigo-400">
                          Starting $
                          {Math.floor(
                            parseFloat(
                              oneAirline.airplanes[0].positions?.firstOfficer[0].totalCompensation
                                .replace("$", "")
                                .replace(",", "")
                            ) / 1000
                          )}
                          K
                        </span>
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
                  <Disclosure.Panel
                    as="dd"
                    className="mt-2 py-2 md:px-12 ring-1 ring-white/20 rounded-md"
                  >
                    <p className="text-base text-gray-300 ">
                      {/* ************************************************************************* */}
                      {/* Captain/FO toggle */}
                      <div className="flex justify-center max-w-[18rem] m-auto pt-2">
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
                      {/* ********************************  SALARY TABLE ********************************** */}
                      <div className="mx-auto px-4 ">
                        <div className="mt-4 flow-root ">
                          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                              <div className="py-8">
                                <SalaryStats
                                  mmg={oneAirline.mmg}
                                  equipment={oneAirline.airplanes}
                                  perDiem={oneAirline.perDiem}
                                  selectedEquipmentIndex={
                                    selectedEquipmentIndex
                                  }
                                  setSelectedEquipmentIndex={
                                    setSelectedEquipmentIndex
                                  }
                                />
                              </div>
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
                                      Hourly Rate ($CAD)
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-200 sm:pl-0 "
                                    >
                                      Annual Compensation ($CAD)
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800 ">
                                  {firstOfficer
                                    ? oneAirline.airplanes[
                                        selectedEquipmentIndex
                                      ]?.positions?.firstOfficer?.map(
                                        (one, i) => (
                                          <tr
                                            key={i}
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
                                    : oneAirline.airplanes[
                                        selectedEquipmentIndex
                                      ]?.positions?.captain?.map((one) => (
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
            {/* Email collection */}
            {/* {i === 5 && (
              <div className="pt-3 border-gray-200">
                <Newsletter heading={"Send me job updates!"} />
              </div>
            )} */}
          </>
        ))
      )}
    </>
  );
}
