import { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GetIdsContext = createContext();

function GetIdsProvider(props) {
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const getUserId = () => {
      return window.localStorage.getItem("userId");
    };
    setCurrentUserId(getUserId());
  }, []);
  // ------------------------------ Fetching savedIds
  const {
    isLoading: loading,
    data: fetchedSavedIds,
    error,
  } = useQuery(
    ["getIds"],
    async () => {
      const response = await axios.get("/api/savedNews/getIds", {
        params: { currentUserId: currentUserId },
      });
      if (!response === 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
    {
      enabled: !!currentUserId, // Enable the query only when userObject is not null
    }
  );

  const value = {
    fetchedSavedIds,
    currentUserId,
    loading,
  };
  return (
    <GetIdsContext.Provider value={value}>
      {props.children}
    </GetIdsContext.Provider>
  );
}

export default GetIdsProvider;
