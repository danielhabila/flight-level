const stats = [
  { name: "Minimum monthly guarantee (MMG)", stat: "80 hours" },
  { name: "Equipment", stat: "Boeing 737" },
  { name: "Per Diem", stat: "$10" },
];

export default function SalaryStats() {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3 px-2 sm:px-0">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-gray-300 p-4 shadow sm:py-2 sm:px-6"
          >
            <dt className="truncate text-sm font-medium text-gray-600">
              {item.name}
            </dt>
            <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
