import "./App.css";
import { useContext } from "react";
import { UserContext } from "./Components/UserAuthenticationContext.jsx";
function App() {
  const {isAuthenticated, handleAuthentication} = useContext(UserContext);
  return (
    <>
      <p>{isAuthenticated? "User is loged in ": "User is loged out"}</p>
      <button onClick={handleAuthentication}>
        {isAuthenticated ? "Log in" : "Log out"}
      </button>
    </>
  );
}

export default App;
