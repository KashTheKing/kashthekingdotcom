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
      <h1>👋 Welcome to my website!</h1>
      <p>I'll turn this into something great soon!</p>
      
      <SkibidiCounter skibidis={skibidis} />
      <SkibidiToilet onSkibidiClick={SkibidiClick} />
      
      <footer>@KashTheKing 2024</footer>
    </>
  )
}

export default App
