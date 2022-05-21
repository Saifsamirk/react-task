import { useContext } from "react";
import { operations } from "../constants";
import AppContext from "../context";
import "../App.css";

function OpertaionsPad() {
  const { result, setResult } = useContext(AppContext);
  // Create a function to check if the plus can be added or not and then
  // display the current operation properly
  const handleClick = (label) => {
    if (result === 0) {
      return;
    }
    if (String(result).endsWith("+")) {
      return;
    }
    setResult(result + label);
  };
  return (
    <div className="operations-pad">
      {operations.map(({ label }) => {
        return (
          <span
            key={label}
            className="clicked"
            onClick={() => handleClick(label)}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}

export default OpertaionsPad;
