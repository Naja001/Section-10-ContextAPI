import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserAuthenticationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleAuthentication() {
    setIsAuthenticated((prevState) => (prevState === false ? true : false));
  }
  return <UserContext.Provider value={{isAuthenticated, handleAuthentication}}>{children}</UserContext.Provider>;
}
