import { useState } from 'react'
import './App.css'

function App() {

  const [bpm , setBPM] = useState(40)

  const playMetronome = () => {
    const click = new Audio('metronome/src/sounds');
    click.play();
    Math.round(60000 / bpm);
  }
  // const bpmIncrement = (bpm) => {
  //   setBPM(bpm + 5);
  // }
  // const bpmDecrement = (bpm) => {
  //   setBPM(bpm - 5);
  // }
  

  // document.getElementById('start').addEventListener('click', playMetronome);


  return (
    <div>
      <div>     
        
      </div>
      <h1>Metronome</h1>
      <div className="card">
        <p>{bpm}</p>
        
        <button id="+" onClick={setBPM(bpm)}>
          +
        </button>
        <button id="-" onClick={setBPM(bpm)}>
          -
        </button>

        <button id="start" onClick={playMetronome()}>
        Start
        </button>
        
      </div>
      
    </div>
  )
}

export default App
