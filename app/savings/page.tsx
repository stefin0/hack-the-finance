"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function savings() {
  const [firstName, setFirstName] = useState();

  console.log(firstName);
  return (
    <>
      <h1 className="text-center mt-8 font-extrabold">
        This is the Savings page.
      </h1>
      <div className="flex justify-center">
        <Link href="" className="bg-slate-700 p-3 rounded mx-2">
          Home
        </Link>
      </div>
      <form>
        <div className="flex justify-center mt-8">
          <label htmlFor="">First name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Enter your name"
            className="bg-gray-200 ml-4 rounded"
          />
        </div>
        <p className="mt-8 flex justify-center">
          Your name is: {`${firstName}`}
        </p>
      </form>
    </>
  );
}
