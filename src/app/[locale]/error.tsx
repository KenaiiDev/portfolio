"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="w-full min-h-screen px-4 py-6 mx-auto max-w-screen-lg flex flex-col items-center justify-center">
      <div className="backdrop-blur-3xl rounded-xl bg-black/[.1] p-12 text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-razzmatazz-500 mb-4">Oops!</h1>
        <h2 className="text-3xl font-firacode text-purple-haze-100 mb-4">
          Something went wrong
        </h2>
        <p className="text-lg font-mono text-purple-haze-200 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block px-8 py-4 bg-purple-haze-600 hover:bg-purple-haze-700 text-white font-mono rounded-lg transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
