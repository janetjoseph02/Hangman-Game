import img0 from '../../../public/gameMedia/1.png'
import img1 from '../../../public/gameMedia/2.png'
import img2 from '../../../public/gameMedia/3.png'
import img3 from '../../../public/gameMedia/4.png'
import img4 from '../../../public/gameMedia/5.png'
import img5 from '../../../public/gameMedia/6.png'
import img6 from '../../../public/gameMedia/7.png'
import winnerImg from '../../../public/gameMedia/winner.png'

type HangManDrawingProps = {
  nog: number;  
  isWinner: boolean;  
}

const HangmanDrawing = ({nog, isWinner} : HangManDrawingProps) => {

  return (
    <div className=''>
      <img className=' h-[20rem]' src={isWinner ? winnerImg : "" || nog === 0 ? img0 : "" || nog === 1 ? img1 : "" || nog === 2 ? img2 : "" || nog === 3 ? img3 : "" || nog === 4 ? img4 : "" || nog === 5 ? img5 : "" || nog >= 6 ? img6 : "" } alt="" />
    </div>
  )
}

export default HangmanDrawing