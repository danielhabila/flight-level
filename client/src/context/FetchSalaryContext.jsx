// import { useState, createContext } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export const FetchSalaryContext = createContext();

// function FetchSalaryProvider(props) {
//   //this useState is for SalaryProof upload
//   const [salaryProof, setSalaryProof] = useState([]);
//   const [typeIndex, setTypeIndex] = useState(0);

//   const {
//     isLoading: loading,
//     data: salaryList,
//     error,
//   } = useQuery(["getsalary"], async () => {
//     const response = await axios.get("/api/");
//     if (response.status !== 200) {
//       throw new Error("Error");
//     }
//     return response.data;
//   });

//   // Sort the salaryList alphabetically by airline name
//   salaryList?.sort((a, b) => a.airline.localeCompare(b.airline));

//   const value = {
//     loading,
//     salaryList,
//     salaryProof,
//     setSalaryProof,
//     typeIndex,
//     setTypeIndex,
//   };

//   return (
//     <FetchSalaryContext.Provider value={value}>
//       {props.children}
//     </FetchSalaryContext.Provider>
//   );
// }

// export default FetchSalaryProvider;
