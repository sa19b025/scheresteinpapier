import React from "react";
import Image from "next/image";
import rockImage from "../../../../public/icons/rock.png";
import paperImage from "../../../../public/icons/paper.png";
import scissorsImage from "../../../../public/icons/scissors.png";
import altImage from "../../../../public/icons/undefined.png";

function page({ searchParams }: { searchParams: { selectedValue: string } }) {
  console.log(searchParams);

  const value = searchParams.selectedValue;

  console.log(value);

  let player = {
    choice: "Alt Image",
    imageSrc: altImage as any,
    imgAltText: "Alt Image",
  };

  if (value === "Rock") {
    player = {
      choice: "Rock",
      imageSrc: rockImage,
      imgAltText: "Rock Image",
    };
  }
  if (value === "Paper") {
    player = {
      choice: "Paper",
      imageSrc: paperImage,
      imgAltText: "Paper Image",
    };
  }
  if (value === "Scissors") {
    player = {
      choice: "Scissors",
      imageSrc: scissorsImage,
      imgAltText: "Scissors Image",
    };
  }
  const pcValue = Math.floor(Math.random() * 3) + 1;

  let pc = {
    choice: "Alt Image",
    imageSrc: altImage as any,
    imgAltText: "Alt Image",
  };

  if (pcValue === 1) {
    pc = {
      choice: "Rock",
      imageSrc: rockImage,
      imgAltText: "Rock Image",
    };
  }
  if (pcValue === 2) {
    pc = {
      choice: "Paper",
      imageSrc: paperImage,
      imgAltText: "Paper Image",
    };
  }
  if (pcValue === 3) {
    pc = {
      choice: "Scissors",
      imageSrc: scissorsImage,
      imgAltText: "Scissors Image",
    };
  }

  const winner = determineWinner(player.choice, pc.choice);

  return (
    <div className="mx-auto flex h-full w-[60vw] flex-col items-center">
      <div className="flex h-[50vh] flex-row items-center">
        <div
          className="m-4 flex flex-col items-center text-center"
          id="playerChoice"
        >
          {value && (
            <Image
              src={player.imageSrc}
              alt={player.imgAltText}
              width={100}
              height={100}
            />
          )}
          {value && (
            <p>
              You chose: {value}.<br />
            </p>
          )}
        </div>
        <div
          id="pcChoice"
          className="m-4 flex flex-col items-center text-center"
        >
          {value && (
            <Image
              src={pc.imageSrc}
              alt={pc.imgAltText}
              width={100}
              height={100}
            />
          )}
          {value && <p>It chose: {pc.choice}</p>}
        </div>
      </div>
      {value && <p>And the winner is: {winner}</p>}
    </div>
  );
}

export default page;

function determineWinner(playerChoice: string, pcChoice: string) {
  if (playerChoice === pcChoice) {
    return "Tie";
  }
  switch (playerChoice) {
    case "Rock":
      return pcChoice === "Scissors" ? "Player wins" : "PC wins";
    case "Paper":
      return pcChoice === "Rock" ? "Player wins" : "PC wins";
    case "Scissors":
      return pcChoice === "Paper" ? "Player wins" : "PC wins";
    default:
      return "Invalid input";
  }
}
