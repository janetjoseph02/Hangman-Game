import React from 'react';
import styles from './Keyboard.module.css';

const KEY: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

type KeyboardProps = {
  activeLetter: string[],
  inactiveLetter: string[],
  addGuessedLetter: (letter: string) => void,
};

const Keyboard: React.FC<KeyboardProps> = ({ activeLetter, inactiveLetter, addGuessedLetter }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      {KEY.map(key => {
        const isActive = activeLetter.includes(key);
        const isInActive = inactiveLetter.includes(key);

        return (
          <button
            onClick={() => { addGuessedLetter(key) }}
            className={`w-12 h-14 border border-black rounded-2xl hover:bg-blue-900 hover:text-white transition select-none active:bg-blue-700 ${styles.btn} ${isActive ? 'bg-blue-900 text-white active:bg-blue-900' : ''} ${isInActive ? ' bg-red-600 text-white opacity-50 hover:bg-red-600 active:bg-red-600' : ''}`}
            key={key}
            disabled={isActive || isInActive}
          >
            {key.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
