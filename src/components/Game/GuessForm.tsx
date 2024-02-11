import { useState } from 'react';

interface GuessFormProps {
  className?: string;
}

export default function GuessForm({ className }: GuessFormProps): JSX.Element {
  const [guess, setGuess] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value.toUpperCase());
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
        className='block w-full border-2 border-gray-700 rounded-[4px] outline outline-offset-4 outline-2 outline-blue-700 py-2 px-4 text-[2rem]'
      />
    </form>
  );
}