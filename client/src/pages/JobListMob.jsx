import Accordion from "../partials/ui/Accordion";

export default function Terms() {
  const terms = [
    {
      title: "Payment schedule and options",
      text: "Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.",
      active: false,
    },
    {
      title: "Deadlines and timeline",
      text: "Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.",
      active: false,
    },
    {
      title: "Kill fee and cancellation termss",
      text: "Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.",
      active: false,
    },
    {
      title: "Ownership/copyright",
      text: "Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.",
      active: false,
    },
    {
      title: "Equipment and expenses",
      text: "Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.",
      active: false,
    },
  ];
  /* ************************************************************************* */

  const [salaryList, setSalaryList] = useState([]);
  //   const [salaryDetails, setSalaryDetails] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/");
        setSalaryList(res.data);
        console.log(salaryList);
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
    <section className="py-8">
      <h2 className="text-lg text-white font-semibold mb-5">Project Terms</h2>
      <div className="space-y-3 text-white">
        {terms.map((term, index) => (
          <Accordion
            key={index}
            title={term.title}
            id={`terms-${index}`}
            active={term.active}
          >
            {term.text}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
