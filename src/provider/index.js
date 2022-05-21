import { useState } from "react";
import AppContext from "../context";

function AppProvider(props) {
  // Declare the local state of the component that will be passed on
  // to child components
  const [result, setResult] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
        isFinished,
        setIsFinished,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
