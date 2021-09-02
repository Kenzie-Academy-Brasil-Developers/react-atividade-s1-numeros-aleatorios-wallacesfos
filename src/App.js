import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {

  const [counters, setCounters] = useState(1)

  function randomNumber(){
    setCounters(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counters}</h1>
        <button onClick={randomNumber}>Criar novo numero</button>
      </header>
    </div>
  );
}

export default App;
