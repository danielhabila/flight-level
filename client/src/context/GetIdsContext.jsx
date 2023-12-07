import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const MatchesContext = createContext();

function GetIdsProvider(props) {
  // PENDING MATCHES --------------------------------------------------

  const {
    isLoading: loading,
    data,
    error,
  } = useQuery(
    ["getIds"],
    async () => {
      console.log("userObjectFromInbox", userObject);

      const response = await axios.get("/api/getIds", {
        params: userObject,
      });
      if (!response === 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
    {
      enabled: !!userObject, // Enable the query only when userObject is not null
    }
  );

  const createConversation = async (inboundReqGoogleId) => {
    const response = await axios.post("/conversation", [
      userObject.googleId,
      inboundReqGoogleId,
    ]);

    console.log(inboundReqGoogleId);
    const response2 = await axios.patch("/api/match-accepted", {
      userObject,
      inboundReqGoogleId,
    });

    if (response.status == 201 && response2.status == 201) {
      return alert("Match was successful!");
    } else {
      throw new Error("Network response was not ok");
    }
    // console.log(response.data);
  };

  const value = {
    conversations,
    userObject,
    data,
    createConversation,
  };
  return (
    <MatchesContext.Provider value={value}>
      {props.children}
    </MatchesContext.Provider>
  );
}

export default MatchesProvider;
