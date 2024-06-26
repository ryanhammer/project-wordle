/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

import { CheckGuessLetterResult } from './types';

type CheckGuessLetterStatus = 'correct' | 'misplaced' | 'incorrect';

export function checkGuess(guess: string, answer: string): CheckGuessLetterResult[] {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result: CheckGuessLetterResult[] = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status: CheckGuessLetterStatus = 'incorrect';
    const misplacedIndex = answerChars.findIndex((char) => char === guessChars[i]);
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}
