"use client";
import { use, useState } from "react";
import { getRandomInt } from "./utils";
import { ROCK_PAPER_ROCK } from "@/app/constant/index";

export default function game() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const [user, setUser] = useState(0);
  const [computer, setComputer] = useState(0);
  console.log(computer);

  function handleClick(userInput) {
    const compChoice = Math.floor(Math.random() * 3) + 1;
    setComputer(compChoice);
    setUser(userInput);

    if (userInput === compChoice) {
      alert("Tie");
    } else if (
      (userInput === 1 && compChoice === 2) ||
      (userInput === 2 && compChoice === 3) ||
      (userInput === 3 && compChoice === 1)
    ) {
      alert("Computer wins");
    } else {
      alert("Player wins!");
    }
  }

  return (
    <div>
      <p className="flex justify-center text-[50px] font-bold">
        Rock Paper Scissors!
      </p>
      <div className="grid grid-cols-3 pl-[200px]">
        <button onClick={() => handleClick(1)}>
          <img
            className="w-[200px]"
            src="https://media.baamboozle.com/uploads/images/287919/1615834675_13271_gif-url.gif"
            
          />
        </button>
        <button onClick={() => handleClick(2)}>
          <img
            className="w-[200px] bg-white-900"
            src="https://media1.giphy.com/media/LQneD1zXEV4LO4hZPD/giphy.gif?cid=a267dfa36khnom1wlmtxfyv7ox9ir4s2a27sf3eb33rwpbqu&rid=giphy.gif&ct=s"
          />
        </button>
        <button onClick={() => handleClick(3)}>
          <img
            className="w-[200px]"
            src="https://media.lordicon.com/icons/wired/flat/114-scissors.gif"
          />
        </button>
        {computer !== 0 && (
          <span className="col-span-3 flex items-center justify-center">
            {ROCK_PAPER_ROCK[computer]}
          </span>
        )}
      </div>
    </div>
  );
}
