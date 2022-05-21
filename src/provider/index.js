import { useState } from "react";
import AppContext from "../context";

function AppProvider(props) {
  // Declare the local state of the component that will be passed on
  // to child components
  const [result, setResult] = useState(0);

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
