export interface PreviousGuess {
  guessNumber: number;
  guess: string;
}

interface PreviousGuessListProps {
  className?: string;
  previousGuesses: PreviousGuess[];
}

export default function PreviousGuessList({ className, previousGuesses }: PreviousGuessListProps): JSX.Element {
  return (
    <div className={`${className} flex flex-col gap-2 min-h-80`}>
      {previousGuesses.map((guess) => {
        return <p key={guess.guessNumber}>{guess.guess}</p>;
      })}
    </div>
  );
}
