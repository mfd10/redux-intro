import './App.css';
import IncreseByTwoCounter from "./components/IncreaseByTwoCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import Counter from "./components/Counter"
import IncreaseCounter from './components/IncreaseCounter'
import DecreaseByTwoCounter from './components/DecreaseByTwoCounter';


function App() {
  return (
    <div >
    <Counter></Counter>
    <IncreaseCounter></IncreaseCounter>
    <DecreaseCounter></DecreaseCounter>
    <IncreseByTwoCounter></IncreseByTwoCounter>
    <DecreaseByTwoCounter></DecreaseByTwoCounter>
    </div>
  );
}

export default App;
