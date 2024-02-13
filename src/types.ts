export interface CheckGuessLetterResult {
  letter: string;
  status: 'correct' | 'misplaced' | 'incorrect';
}

export type CheckedGuessResult = CheckGuessLetterResult[];

export type GameStatus = 'in-progress' | 'won' | 'lost';
