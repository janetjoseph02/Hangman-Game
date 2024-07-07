import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generate, count } from "random-words";
import HangmanDrawing from './Components/HangmanDrawing/HangmanDrawing';
import HangmanWord from './Components/HangmanWord/HangmanWord';
import Keyboard from './Components/Keyboard/Keyboard';


function App() {


  const [wordToGuess, setWordToGuess] = useState(generate({ minLength: 3 }));
  // const [wordToGuess, setWordToGuess] = useState("SARMAD");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter(item => !wordToGuess.includes(item))

  console.log(wordToGuess)

  const addGuessedLetter = (letter:string) => {
    if(guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
    
  }


  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/[a-z]/i)) {
        return null;
      }

      else {
        e.preventDefault();
        addGuessedLetter(key)
      }
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  return (
    <>
      <div className="main flex flex-col gap-8 items-center max-w-[800px] m-10 h-auto w-screen">

        <h1 className="message text-2xl font-semibold text-center">Lose/Win Message</h1>
        <HangmanDrawing numberOfGuess={incorrectGuesses.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <Keyboard 
          activeLetter = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetter = {incorrectGuesses}
          addGuessedLetter= {addGuessedLetter}
        />

      </div>
    </>
  )
}

export default App
