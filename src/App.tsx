import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generate, count } from "random-words";
import HangmanDrawing from './Components/HangmanDrawing/HangmanDrawing';
import HangmanWord from './Components/HangmanWord/HangmanWord';
import Keyboard from './Components/Keyboard/Keyboard';


function App() {


  const [wordToGuess, setWordToGuess] = useState(generate({ minLength: 3 }));
  const [guessedLetters, setuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess)

  return (
    <>
      <div className="main flex flex-col gap-8 items-center max-w-[800px] m-10 bg-purple-200">

        <h1 className="message text-2xl font-semibold text-center">Lose/Win Message</h1>
        <HangmanDrawing/>
        <HangmanWord/>
        <Keyboard/>

      </div>
    </>
  )
}

export default App
