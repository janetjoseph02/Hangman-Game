import { useEffect, useState } from 'react';
import img0 from '../../../public/gameMedia/1.png';
import img1 from '../../../public/gameMedia/2.png';
import img2 from '../../../public/gameMedia/3.png';
import img3 from '../../../public/gameMedia/4.png';
import img4 from '../../../public/gameMedia/5.png';
import img5 from '../../../public/gameMedia/6.png';
import img6 from '../../../public/gameMedia/7.png';
import darkImg0 from '../../../public/gameMedia/dark1.png';
import darkImg1 from '../../../public/gameMedia/dark2.png';
import darkImg2 from '../../../public/gameMedia/dark3.png';
import darkImg3 from '../../../public/gameMedia/dark4.png';
import darkImg4 from '../../../public/gameMedia/dark5.png';
import darkImg5 from '../../../public/gameMedia/dark6.png';
import darkImg6 from '../../../public/gameMedia/dark7.png';
import winnerImg from '../../../public/gameMedia/winner.png';
import winnerDarkImg from '../../../public/gameMedia/winnerDark.png';

type HangmanDrawingProps = {
  nog: number;
  isWinner: boolean;
  theme: string;
};

const HangmanDrawing = ({ nog, isWinner, theme }: HangmanDrawingProps) => {
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    const lightImages = [img0, img1, img2, img3, img4, img5, img6];
    const darkImages = [darkImg0, darkImg1, darkImg2, darkImg3, darkImg4, darkImg5, darkImg6];

    if (theme === 'dark') {
      setCurrentImage(isWinner ? winnerDarkImg : darkImages[nog]);
    } else {
      setCurrentImage(isWinner ? winnerImg : lightImages[nog]);
    }
  }, [theme, isWinner, nog]);

  return (
    <div>
      <img className='h-[20rem]' src={currentImage} alt='Hangman drawing' />
    </div>
  );
};

export default HangmanDrawing;
