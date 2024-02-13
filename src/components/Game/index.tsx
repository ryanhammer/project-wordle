import { useState } from 'react';
import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { CheckedGuessResult } from '../../types';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm from './GuessForm';
import Guess from './Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [checkedGuessResults, setCheckedGuessResults] = useState<CheckedGuessResult[]>([]);

  const guesses = range(0, NUM_OF_GUESSES_ALLOWED).map((val) => val + 1);

  return (
    <>
      <div className='flex flex-col justify-center mb-4'>
        {guesses.map((guessNumber) => {
          return (
            <Guess
              key={guessNumber}
              previousGuess={checkedGuessResults[guessNumber - 1]}
              guessNumber={guessNumber}
              checkedGuessResult={checkedGuessResults[guessNumber - 1]}
            />
          );
        })}
      </div>
      <GuessForm
        checkedGuessResults={checkedGuessResults}
        setCheckedGuessResults={setCheckedGuessResults}
        answer={answer}
      />
    </>
  );
}

export default Game;
