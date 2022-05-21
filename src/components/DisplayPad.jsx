import { useState } from "react";
import "../App.css";

function DisplayPad({ result = 0 }) {
  return <div className="display-pad">{result}</div>;
}

export default DisplayPad;
