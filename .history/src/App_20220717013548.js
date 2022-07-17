import logo from './logo.svg';
import './App.css';
import IncreseByTwoCounter from "./components/increaseByTwoCounter"
import IncreaseCounter from "./components/increaseCounter"
import DecreaseCounter from "./components/decreaseCounter"
import Counter from "./components/Counter"


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
