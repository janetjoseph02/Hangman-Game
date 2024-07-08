
type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string
}

const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {

    return (
        <div className='flex items-center gap-6 uppercase text-[4rem] font-bold '>
            {wordToGuess.split("").map((letter, index) => (
                <span className=' border-b-4 border-black w-16 flex items-center justify-center font-mono' key={index}>
                    <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord