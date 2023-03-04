"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col mt-8">
      <p className="text-center">You clicked me {count} times</p>
      <div className="flex justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-red-500 p-3 rounded"
        >
          Click me
        </button>
      </div>
    </div>
  );
}
