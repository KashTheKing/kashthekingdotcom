import { useState } from 'react'

import SkibidiToilet from './components/SkibidiToilet'
import SkibidiCounter from './components/SkibidiCounter'
import CookieAgreement from './components/CookieAgreement'

import SkibidiOne from './assets/SkibidiOne.mp3'
import SkibidiTwo from './assets/PhoenixSkibidi.mp3'
import SkibidiThree from './assets/DanSkibidi.mp3'

import './App.css'

function SetCookie(name: string, value: any, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function GetCookie(name: string): any | null {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}

function App() {
  const [skibidis, updateSkibidis] = useState(Number(GetCookie("skibidis")) || 0);
  let skibidiSounds = [new Audio(SkibidiOne), new Audio(SkibidiTwo), new Audio(SkibidiThree)]
  
  let lastAudio = skibidiSounds[0];

  for (let i = 0; i < skibidiSounds.length; i++) {
    skibidiSounds[i].volume = 0.25
  }

  function SkibidiClick() {
    updateSkibidis(skibidis + 1);
    SetCookie("skibidis", skibidis + 1, 365)

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
      <CookieAgreement />
      
      <footer className="d-flex justify-content-center">@KashTheKing 2024</footer>
    </>
  )
}

export default App
