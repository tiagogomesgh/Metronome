import React, { useState, useEffect } from 'react';
//import clickSound from "/home/tiago/projects/Metronome/metronome/src/assets/sounds/clickSound.wav"

const Metronome = () => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;

    const playClick = () => {
      const audio = new Audio("/home/tiago/projects/Metronome/metronome/src/assets/sounds/clickSound.wav");
      audio.play();
    };

    const startMetronome = () => {
      const intervalMs = (60 / bpm) * 1000;
      interval = setInterval(() => {
        playClick();
      }, intervalMs);
    };

    const stopMetronome = () => {
      clearInterval(interval);
    };

    if (isPlaying) {
      startMetronome();
    } else {
      stopMetronome();
    }

    return () => {
      stopMetronome(); // Clean up the interval on component unmount
    };
  }, [bpm, isPlaying]);

  const toggleMetronome = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBpmChange = (event) => {
    const newBpm = parseInt(event.target.value, 10);
    setBpm(newBpm);
  };

  return (
    <div>
      <h1>Metronome</h1>
      <button onClick={toggleMetronome}>{isPlaying ? 'Stop' : 'Start'}</button>
      <div>
        <label>BPM: {bpm}</label>
        <input type="number" value={bpm} onChange={handleBpmChange} />
      </div>
    </div>
  );
};

export default Metronome;
