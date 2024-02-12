import { CheckedGuessResult, PreviousGuess } from '../../types';
import { range } from '../../utils';

interface GuessProps {
  className?: string;
  previousGuess: PreviousGuess | undefined;
  guessNumber: number;
  checkedGuessResult: CheckedGuessResult | undefined;
}

export default function Guess({ className, previousGuess, guessNumber, checkedGuessResult }: GuessProps): JSX.Element {
  const checkedGuessClasses = {
    correct: 'bg-success border-success',
    misplaced: 'bg-warning border-warning',
    incorrect: 'bg-error border-error',
  };

  const guessBlocks = range(0, 5).map((val) => {
    return {
      blockKey: `Guess ${guessNumber} character ${val + 1}`,
      blockValue: previousGuess ? previousGuess.value[val] : '',
      blockClasses: checkedGuessResult ? checkedGuessClasses[checkedGuessResult[val].status] : 'border-gray-700',
    };
  });

  return (
    <p className={`${className ? className : ''} flex gap-1 mb-1`}>
      {guessBlocks.map((block) => {
        return (
          <span
            className={`relative w-[20%] grid border-2 ${block.blockClasses} place-content-center text-[2rem] aspect-square`}
            key={block.blockKey}
          >
            {block.blockValue}
          </span>
        );
      })}
    </p>
  );
}
