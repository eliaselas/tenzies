import "./App.css";
import Die from "./componentes/Die";
function App() {
  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="3" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  );
}

export default App;
