import { useState, useEffect } from "react";
import { useChoices } from "./game/useChoices";
import { options } from "./game/options";

function OptionButton({ option, handlePlay, disabled }) {
  return (
    <button
      className="px-4 py-2 m-2 text-xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={() => handlePlay(option.id)}
      title={option.name}
    >
      {option.emoji}
    </button>
  );
}

export default function Game() {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-center text-2xl font-bold text-blue-800">Piedra Papel Tijera Lagarto Spock</h1>
      <div className="rounded-lg p-8 bg-white">

        <h1 className="text-center text-blue-400">Eloi Pellin 2 DAW</h1>
        <h1 className="text-3xl mb-8 text-center font-bold text-blue-500">¡A jugar de nuevo!</h1>
        <div className="max-w-md mx-auto">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              handlePlay={handlePlay}
              disabled={disabled}
            />
          ))}
          {userChoice !== null && <p className="text-xl mt-4 text-blue-500">{userMessage}</p>}
          {computerChoice !== null && (
            <p className="text-xl mt-4 text-blue-500">{computerMessage}</p>
          )}
          {result !== null && (
            <div className="mt-8">
              {result === 0 && <p className="text-xl mt-4 text-blue-500">🤷🏽‍♀️ Empate 🤷🏽‍♀️</p>}
              {result === 1 && (
                <p className="text-xl mt-4 text-green-500">
                  ✅ Has ganado con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name} ✅
                </p>
              )}
              {result === 2 && (
                <p className="text-xl mt-4 text-red-500">
                  ❌ Has perdido con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name} ❌
                </p>
              )}

              <div className="flex justify-center">
                <button className="px-4 py-2 m-2 text-xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={reset}>Jugar de nuevo</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}