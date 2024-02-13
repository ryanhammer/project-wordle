import { useState } from 'react';
import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { CheckedGuessResult, GameStatus } from '../../types';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm from './GuessForm';
import Guess from './Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [checkedGuessResults, setCheckedGuessResults] = useState<CheckedGuessResult[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>('in-progress');

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
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        answer={answer}
      />
      {gameStatus === 'won' && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {checkedGuessResults.length} guess{checkedGuessResults.length === 1 ? '' : 'es'}
            </strong>
            .
          </p>
        </div>
      )}
      {gameStatus === 'lost' && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
