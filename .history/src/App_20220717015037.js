import './App.css';
import IncreseByTwoCounter from "./components/IncreaseByTwoCounter"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import Counter from "./components/Counter"


function App() {
  return (
    <div >
    <Counter></Counter>
    <IncreaseCounter>AA</IncreaseCounter>
    <DecreaseCounter></DecreaseCounter>
    <IncreseByTwoCounter></IncreseByTwoCounter>
    </div>
  );
}

export default App;
