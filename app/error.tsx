"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h2 className="text-red-500 text-2xl font-bold">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
