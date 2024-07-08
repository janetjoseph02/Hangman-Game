import { useState, useEffect } from 'react';
import './App.css';
import { generate } from 'random-words';
import HangmanDrawing from './Components/HangmanDrawing/HangmanDrawing';
import HangmanWord from './Components/HangmanWord/HangmanWord';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(generate({ minLength: 4 }));
  // const [wordToGuess, setWordToGuess] = useState("SARMAD");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isLoser, setIsLoser] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const incorrectGuesses = guessedLetters.filter(item => !wordToGuess.includes(item));

  // console.log(wordToGuess)


  useEffect(() => {
    if (incorrectGuesses.length >= 6 && !isLoser) {
      setIsLoser(true);
    }

    if (wordToGuess
      .toString()
      .split("")
      .every(letter => guessedLetters.includes(letter)) && !isWinner) {
      setIsWinner(true);
    }
  }, [guessedLetters, incorrectGuesses, wordToGuess, isLoser, isWinner]);

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!key.match(/[a-z]/i)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);
    return () => document.removeEventListener('keypress', handler);
  }, [guessedLetters]);

  return (
    <div className="main flex flex-col gap-8 items-center max-w-[800px] m-10 h-auto w-screen">
      <h1
        className={`message text-2xl font-semibold text-center cursor-pointer hover:opacity-80 ${isWinner ? "text-green-600" : "text-red-600"}`}
        onClick={() => window.location.reload()}
      >
        {isLoser && (
          <span>
            Correct word was{" "}
            <span className='text-black font-bold font-mono'>
              {wordToGuess}
            </span>
            . Click to Try Again. 😞
          </span>
        )}
        {isWinner && "You Won 👏 Click to Play again"}
      </h1>

      <HangmanDrawing nog={incorrectGuesses.length} isWinner={isWinner}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetter={incorrectGuesses}
        addGuessedLetter={addGuessedLetter}
        isWinner={isWinner}
        isLoser={isLoser}
      />
    </div>
  );
}

export default App;
