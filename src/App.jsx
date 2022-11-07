import logo from "./logo.svg";
import "./App.css";
import CountComponent from "./components/counterApp";

function App() {
  return (
    <div className="App m-5">
      <CountComponent min={-15} max={20} initial={7} step={2}></CountComponent>
    </div>
  );
}

export default App;
