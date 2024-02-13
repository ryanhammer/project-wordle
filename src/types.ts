export interface CheckGuessLetterResult {
  letter: string;
  status: 'correct' | 'misplaced' | 'incorrect';
}

export type CheckedGuessResult = CheckGuessLetterResult[];
