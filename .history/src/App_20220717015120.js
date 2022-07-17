import './App.css';
import IncreseByTwoCounter from "./components/IncreaseByTwoCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import Counter from "./components/Counter"
import IncreaseCounter from './components/IncreaseCounter'

function App() {
  return (
    <div >
    <Counter></Counter>
    <IncreaseCounter></IncreaseCounter>
    <DecreaseCounter></DecreaseCounter>
    <IncreseByTwoCounter></IncreseByTwoCounter>
    </div>
  );
}

export default App;
