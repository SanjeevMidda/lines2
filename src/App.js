import "./index.css";
import Lines from "./components/Lines";

function App() {
  return (
    <div className="App">
      <Lines color="rgba(0, 0, 255, 0.336)" />
      <Lines color="rgba(255, 0, 0, 0.336)" />
      <Lines color="rgba(255, 166, 0, 0.336)" />
      <Lines color="rgba(172, 255, 47, 0.336)" />
      <Lines color="rgba(165, 42, 42, 0.336)" />
      <h3>squares</h3>
    </div>
  );
}

export default App;
