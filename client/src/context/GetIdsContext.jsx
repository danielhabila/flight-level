import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const GetIdsContext = createContext();

function GetIdsProvider(props) {
  const { isAuthenticated, user } = useAuth0();
  const currentUserEmail = isAuthenticated ? user.email : null;

  // ------------------------------ Fetching savedIds
  const {
    isLoading: loading,
    data: fetchedSavedIds,
    error,
  } = useQuery(
    ["getIds"],
    async () => {
      const response = await axios.get("/api/savedNews/getIds", {
        params: { currentUserEmail: currentUserEmail },
      });
      if (!response === 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
    {
      enabled: !!currentUserEmail, // Enable the query only when userObject is not null
    }
  );

  const value = {
    fetchedSavedIds,
    currentUserEmail,
    loading,
  };
  return (
    <GetIdsContext.Provider value={value}>
      {props.children}
    </GetIdsContext.Provider>
  );
}

export default GetIdsProvider;
