import React from 'react'


const HEAD = <div className=' w-[50px] h-[50px] bg-transparent border-[5px] border-red-700 z-10 rounded-full absolute top-[45px] right-[-18px]'/>
const BODY = <div className=' w-[5px] h-[60px] bg-red-700 z-10  absolute top-[95px] right-[5px] '/>
const RIGHT_ARM = <div className=' w-[5px] h-[30px] bg-red-700 z-10  absolute top-[95px] right-[15px] rotate-45 rounded-b-[30px]'/>
const LEFT_ARM = <div className=' w-[5px] h-[30px] bg-red-700 z-10  absolute top-[95px] right-[-5px] rotate-[-45deg] rounded-b-[30px]'/>
const RIGHT_LEG = <div className=' w-[5px] h-[40px] bg-red-700 z-10  absolute top-[145px] right-[20px] rotate-45 rounded-b-[30px]'/>
const LEFT_LEG = <div className=' w-[5px] h-[40px] bg-red-700 z-10  absolute top-[145px] right-[-10px] rotate-[-45deg] rounded-b-[30px]'/>



type HangManDrawingProps = {
  numberOfGuess: number;  
}

const HangmanDrawing = ({numberOfGuess} : HangManDrawingProps) => {

  return (
    <div className="main relative">

        {numberOfGuess >= 1 ? (HEAD) : null}
        {numberOfGuess >= 2 ? (BODY) : null}
        {numberOfGuess >= 3 ? (RIGHT_ARM) : null}
        {numberOfGuess >= 4 ? (LEFT_ARM) : null}
        {numberOfGuess >= 5 ? (RIGHT_LEG) : null}
        {numberOfGuess >= 6 ? (LEFT_LEG) : null}
       
        <div className='topLeft h-[50px] w-[6px] bg-blue-900 absolute top-0 right-[5px] rounded-b-3xl '/>
        <div className='top h-[10px] w-[125px] bg-blue-900 rounded-3xl rounded-l-none ml-[120px] '/>
        <div className='mid w-[10px] h-[250px] bg-blue-900  ml-[120px] '/>
        <div className="bottom h-[10px] w-[250px] bg-blue-900 rounded-3xl "/>

    </div>
  )
}

export default HangmanDrawing