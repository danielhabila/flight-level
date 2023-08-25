import { createContext, useState } from "react";

export const PaginationContext = createContext();

function PaginationContextProvider(props) {
  const [crawledJobs, setCrawledJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postPerPage = 20;

  const value = {
    crawledJobs,
    setCrawledJobs,
    postPerPage,
    loading,
    setLoading,
    currentPage,
    setCurrentPage,
  };
  return (
    <PaginationContext.Provider value={value}>
      {props.children}
    </PaginationContext.Provider>
  );
}

export default PaginationContextProvider;
