import React from "react";
import "./App.css";
import { range } from "./utils/Iterator";
import { rangeGenerator } from "./utils/Generator";

function App() {
  const iteratorRange = range(0, 10, 1.5);
  const generatorRange = rangeGenerator(0, 10, 2);

  return (
    <div className="bg-slate-500 flex items-center justify-center rounded-2xl h-auto">
      <header className=" flex top-80 gap-4 flex-col justify-center items-center">
        <h1 className="flex  size-40 font-serif text-3xl w-full justify-center items-center ">
          ↓ Range Function Example ↓
        </h1>

        <h2 className="flex s font-serif text-3xl w-full justify-center items-center border border-b-8 rounded-md">
          Iterator Range
        </h2>
        <ul className="flex font-serif gap-7 w-full justify-center items-center">
          {Array.from(iteratorRange).map((value) => (
            <li
              className="border rounded-sm p-2 border-blue-900 bg-slate-300 gap-7"
              key={value}
            >
              {value}
            </li>
          ))}
        </ul>

        <h2 className="flex font-serif text-3xl w-full justify-center items-center border border-b-8 rounded-md border-red-950">
          Generator Range
        </h2>
        <ul className="flex font-serif gap-7 w-full justify-center items-center ">
          {Array.from(generatorRange).map((value) => (
            <li
              className="border rounded-sm p-2 border-red-950 bg-slate-200 gap-7"
              key={value}
            >
              {value}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
