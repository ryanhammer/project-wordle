import { useState } from 'react';

interface GuessFormProps {
  className?: string;
}

export default function GuessForm({ className }: GuessFormProps): JSX.Element {
  const [guess, setGuess] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  return (
    <form className={`${className} flex flex-col gap-2 h-24`}>
      <label htmlFor="guess-input" className='text-xl'>Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        placeholder="Enter your guess"
        className='block w-full border border-gray-300 rounded-md p-2 text-xl'
      />
    </form>
  );
}