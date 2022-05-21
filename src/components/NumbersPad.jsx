import { useCallback, useContext } from "react";
import { numbers } from "../constants";
import AppContext from "../context";
import "../App.css";

function NumbersPad() {
  const { result, setResult } = useContext(AppContext);
  // Create a function that handles the click on the calculator actions
  const handleClick = ({ value }) => {
    // Enable the option of adding a series of digits
    const newValue = `${result + value}`;
    setResult(newValue);
  };
  return (
    <div className="numbers-pad">
      {numbers.map((number) => {
        return (
          <span key={number.value} onClick={() => handleClick(number)}>
            {number.label}
          </span>
        );
      })}
    </div>
  );
}

export default NumbersPad;
