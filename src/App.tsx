import { useState } from 'react'
import SkibidiToilet from './components/SkibidiToilet'
import SkibidiCounter from './components/SkibidiCounter'
import SkibidiOne from './assets/SkibidiOne.mp3'
import SkibidiTwo from './assets/PhoenixSkibidi.mp3'
import SkibidiThree from './assets/DanSkibidi.mp3'

import './App.css'

function App() {
  const [skibidis, updateSkibidis] = useState(0);
  let skibidiSounds = [new Audio(SkibidiOne), new Audio(SkibidiTwo), new Audio(SkibidiThree)]
  
  let lastAudio = skibidiSounds[0];

  for (let i = 0; i < skibidiSounds.length; i++) {
    skibidiSounds[i].volume = 0.25
  }

  function SkibidiClick() {
    updateSkibidis(skibidis + 1);

    let skibidiSoundIndex = Math.floor(Math.random() * skibidiSounds.length)
    
    lastAudio.pause();
    lastAudio.currentTime = 0;

    lastAudio = skibidiSounds[skibidiSoundIndex]
    lastAudio.play()
  }

  return (
    <>
      <h1 className="d-flex justify-content-center">👋 Welcome to my website!</h1>
      <p className="d-flex justify-content-center">I'll turn this into something great soon!</p>
      
      <SkibidiCounter skibidis={skibidis} />
      <SkibidiToilet onSkibidiClick={SkibidiClick} />
      
      <footer className="d-flex justify-content-center">@KashTheKing 2024</footer>
    </>
  )
}

export default App
