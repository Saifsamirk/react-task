import { useContext } from "react";
import { numbers } from "../constants";
import AppContext from "../context";
import "../App.css";

function NumbersPad() {
  const { result, setResult } = useContext(AppContext);
  console.log(result);
  return (
    <div className="numbers-pad">
      {numbers.map((number) => {
        return <span key={number.value}>{number.label}</span>;
      })}
    </div>
  );
}

export default NumbersPad;
