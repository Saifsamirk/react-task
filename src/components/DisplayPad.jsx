import { useContext } from "react";
import AppContext from "../context";
import "../App.css";

function DisplayPad() {
  const { result } = useContext(AppContext);
  console.log({ result });
  return <div className="display-pad">{result}</div>;
}

export default DisplayPad;
