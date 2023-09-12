export default function SalaryStats({ mmg, equipment, perDiem }) {
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
            <dt className="truncate text-sm font-medium text-gray-600">
              {item.name}
            </dt>
            <dd className="mt-1 text-md font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
