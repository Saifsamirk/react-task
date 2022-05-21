import NumbersPad from "./components/NumbersPad";
import OperationsPad from "./components/OpertaionsPad";
import DisplayPad from "./components/DisplayPad";
import AppProvider from "./provider";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>Custom Calculator</h1>
        <DisplayPad />
        <NumbersPad />
        <OperationsPad />
      </div>
    </AppProvider>
  );
}

export default App;
