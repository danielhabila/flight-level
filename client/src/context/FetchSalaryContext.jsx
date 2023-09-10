import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const FetchSalaryContext = createContext();

function FetchSalaryProvider(props) {
  // const [salaryList, setSalaryList] = useState([]);

  const {
    isLoading: loading,
    data: salaryList,
    error,
  } = useQuery(["getsalary"], async () => {
    const response = await axios.get("/api/");
    if (response.status !== 200) {
      throw new Error("Error");
    }
    return response.data;
  });
  // ---------------------------------------------------
  console.log("salaryListFromContext", salaryList);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Sort the salaryList alphabetically by airline name
  salaryList.sort((a, b) => a.airline.localeCompare(b.airline));
  // ---------------------------------------------------
  const value = {
    loading,
    salaryList,
  };

  return (
    <FetchSalaryContext.Provider value={value}>
      {props.children}
    </FetchSalaryContext.Provider>
  );
}

export default FetchSalaryProvider;
