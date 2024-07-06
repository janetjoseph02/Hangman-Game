import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generate, count } from "random-words";

function App() {


  const [wordToGuess, setWordToGuess] = useState(generate({ minLength: 3 }));
  const [guessedLetters, setuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess)

  return (
    <>
      <h1 className="text-pink-600">
        Hello world!
      </h1>
    </>
  )
}

export default App
