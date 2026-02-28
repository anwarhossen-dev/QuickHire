"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-red-600">{error?.message || "Unknown error"}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
