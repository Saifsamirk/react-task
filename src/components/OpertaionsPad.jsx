import { useContext } from "react";
import { operations } from "../constants";
import AppContext from "../context";
import "../App.css";

function OpertaionsPad() {
  const { result, setResult } = useContext(AppContext);
  // Create a function to check if the plus can be added or not and then
  // display the current operation properly
  const handleAdd = (label) => {
    if (result === 0) {
      return;
    }
    if (String(result).endsWith("+")) {
      return;
    }
    setResult(result + label);
  };

  // create a function that handles the display of the result
  const handleResult = (result) => {
    if (result.endsWith("+")) {
      return;
    }
    let sum = result
      .split("+")
      .reduce((prev, curr) => Number(prev) + Number(curr));
    // Set the final result with the sum
    setResult(sum);
  };

  const process = {
    add: ({ label }) => handleAdd(label),
    equal: ({ result, setResult }) => handleResult(result, setResult),
  };

  return (
    <div className="operations-pad">
      {operations.map(({ label, value }) => {
        return (
          <span
            key={label}
            className="clicked"
            onClick={() => process[value]({ label, result, setResult })}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}

export default OpertaionsPad;
