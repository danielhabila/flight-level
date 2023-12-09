import { createContext, useState } from "react";

export const RecoveryContext = createContext();

function RecoveryProvider(props) {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  const value = { page, setPage, otp, setOTP, setEmail, email };
  return (
    <RecoveryContext.Provider value={value}>
      {props.children}
    </RecoveryContext.Provider>
  );
}

export default RecoveryProvider;
