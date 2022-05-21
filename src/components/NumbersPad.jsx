import { useCallback, useContext } from "react";
import { numbers } from "../constants";
import AppContext from "../context";
import "../App.css";

function NumbersPad() {
  const { result, setResult, isFinished, setIsFinished } =
    useContext(AppContext);
  // Create a function that handles the click on the calculator actions
  const handleClick = useCallback(
    ({ label, value }) => {
      // Check if the number inserted is 0 and also the display is 0 so
      // don't do anything
      if (result === "0" && label === "0") {
        return;
      }
      // Check if the isFinished flag is true so that means we need
      // to clear the result to start a new operation
      if (isFinished) {
        setResult(value);
        setIsFinished(false);
        return;
      }
      // Enable the option of adding a series of digits
      const newValue = result === 0 ? value : result + label;
      setResult(newValue);
    },
    [result, setResult, isFinished, setIsFinished]
  );
  return (
    <div className="numbers-pad">
      {numbers.map((number) => {
        return (
          <span
            key={number.value}
            onClick={() => handleClick(number)}
            className="action-btn clicked"
          >
            {number.label}
          </span>
        );
      })}
    </div>
  );
}

export default NumbersPad;
