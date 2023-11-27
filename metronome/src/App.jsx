import React from 'react';
import Metronome from '/home/tiago/projects/Metronome/metronome/src/components/Metronome.jsx';
import './App.css'
import clickSound from "/home/tiago/projects/Metronome/metronome/src/assets/sounds/clickSound.wav"

// import decodeAudio from 'audio-decode'
// import buffer from 'audio-lena/mp3'



function App() {


  return (
    <div className="App">
    <Metronome />
    </div>
    );
}
export default App;
