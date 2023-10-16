import { useState } from 'react'

import './App.css'
// import clickSound from "src/assets/clickSound.wav"
// import decodeAudio from 'audio-decode'
// import buffer from 'audio-lena/mp3'



function App() {

 let [bpm , setBPM] = useState(40)

  let play = () => {
    new Audio(clickSound).play()
  }

  // const playMetronome = () => {
  //   const click = new Audio('metronome/src/assets/sounds/clickSound.wav');
  //   click.play();
  //   Math.round(60000 / bpm);
  // }
  
  

  // document.getElementById('start').addEventListener('click', playMetronome);


  return (
    <div>
      <div>     
        
      </div>
      <h1>Metronome</h1>
      <div className="card">
        <p>{bpm}</p>
        <button onClick={() => setBPM(bpm + 5)}>
          +
        </button>
        <button onClick={() => setBPM(bpm - 5)}>
          -
        </button>
        <button onClick={() => play(clickSound)}>
          Play
        </button>
        {/* <button id="+" onClick={bpmIncrement}>
          +
        </button>
        <button id="-" onClick={bpmDecrement}>
          -
        </button>
        <button id="start" onClick={playMetronome()}>
        Start
        </button> */}
        
      </div>
      
    </div>
  )
}

export default App
