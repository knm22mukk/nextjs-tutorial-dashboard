'use client';

import { useEffect } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Optinally log the error to an error repoating servise
    console.log(error);
  }, [error]);
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h2 className='text-center'>Something went Wrong!!</h2>
      <button
        type='button'
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        onClick={() => reset()}
      >
        Try Again!
      </button>
    </main>
  );
}
