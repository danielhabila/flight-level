import { useState } from "react";
export default function SalaryStats({
  mmg,
  equipment,
  perDiem,
  setSelectedEquipmentIndex,
}) {
  const stats = [
    {
      name: "MMG (Minimum Monthly Guarantee)",
      stat: mmg === "" ? "--" : `${mmg} hours`,
    },
    { name: "Airplane", stat: equipment },
    { name: "Per Diem", stat: perDiem === "" ? "--" : ` ${perDiem}/hour ` },
  ];

  return (
    <div>
      <dl className="grid gap-2 sm:gap-5 grid-cols-3 px-2 sm:px-0 text-center">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-gray-300 p-2 sm:p-4 shadow sm:py-2 sm:px-6"
          >
            <dt className="truncate font-medium text-gray-600">{item.name}</dt>
            <dd className="mt-1 text-sm sm:text-base font-semibold tracking-tight text-gray-900 flex justify-center items-center px-2">
              {item.name === "Airplane" ? (
                equipment.length > 1 ? ( // Check if there are multiple items
                  <select
                    className="block bg-gray-300 rounded-md border-0 py-0 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-0 text-sm sm:text-base cursor-pointer"
                    onChange={(e) => {
                      setSelectedEquipmentIndex(e.target.selectedIndex);
                    }}
                  >
                    {equipment?.map((airplane, index) => (
                      <option key={index} value={airplane.type}>
                        {airplane.type}
                      </option>
                    ))}
                  </select>
                ) : (
                  // Render the item directly if there's only one
                  equipment[0]?.type
                )
              ) : (
                item.stat
              )}

              {/* {item.stat} */}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
