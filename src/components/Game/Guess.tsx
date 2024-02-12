import { PreviousGuess } from '../../types';
import { range } from '../../utils';

interface GuessProps {
  className?: string;
  previousGuesses: PreviousGuess[];
  guessNumber: number;
}

export default function Guess({ className, previousGuesses, guessNumber }: GuessProps): JSX.Element {
  const isPreviousGuess = previousGuesses.length > 0 && previousGuesses.length <= guessNumber;

  const guessBlocks = range(0, 5).map((val) => {
    return {
      blockKey: `Guess ${guessNumber} character ${val + 1}`,
      blockValue: isPreviousGuess ? previousGuesses[guessNumber - 1].value[val] : '',
    };
  });

  return (
    <p className={`${className} flex gap-1 mb-1`}>
      {guessBlocks.map((block) => {
        return (
          <span
            className='relative w-[20%] grid border-2 border-gray-700 place-content-center text-[2rem] aspect-square'
            key={block.blockKey}
          >
            {block.blockValue}
          </span>
        );
      })}
    </p>
  );
}
