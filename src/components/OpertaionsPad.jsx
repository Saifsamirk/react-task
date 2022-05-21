import { operations } from "../constants";
import "../App.css";

function OpertaionsPad() {
  return (
    <div className="operations-pad">
      {operations.map(({ label }) => {
        return (
          <span key={label} className="clicked">
            {label}
          </span>
        );
      })}
    </div>
  );
}

export default OpertaionsPad;
