import { useState } from 'react';
import { z } from 'zod';

interface GuessFormProps {
  className?: string;
}

export default function GuessForm({ className }: GuessFormProps): JSX.Element {
  const [guess, setGuess] = useState('');
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const guessSchema = z.string().length(5, 'All guesses must be 5 characters long.');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      guessSchema.parse(guess);
      setFormErrors([]);
      console.log('Guess is valid:', guess);
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        setFormErrors(error.errors.map((err) => err.message));
      }
    }

    setGuess('');
  };

  return (
    <form className={`${className} flex flex-col gap-2 h-24`} onSubmit={handleSubmit}>
      <label htmlFor='guess-input' className='text-xl'>
        Enter guess:
      </label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={handleChange}
        placeholder='Enter your guess'
        className='block w-full border-2 border-gray-700 rounded-[4px] outline outline-offset-4 outline-2 outline-blue-700 py-2 px-4 text-[2rem]'
      />
      {formErrors.length > 0 && (
        <div className='text-red-600'>
          {formErrors.map((error) => {
            return <p key={error}>{error}</p>;
          })}
        </div>
      )}
    </form>
  );
}
