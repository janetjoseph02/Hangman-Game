import React, { useEffect } from 'react'
import styles from './Keyboard.module.css'

const KEY: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
// console.log(KEY)
const Keyboard = () => {



    return (
        <div className='flex flex-wrap items-center justify-center gap-2'>
            {KEY.map((key, index) => (
                <button className={`w-12 h-14 border border-black rounded-2xl hover:bg-blue-900 hover:text-white transition select-none active:bg-blue-700 ${styles.btn} ${styles.active}`} key={index}>
                    {key.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export default Keyboard