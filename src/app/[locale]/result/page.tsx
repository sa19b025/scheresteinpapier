"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePredictionStore } from "@/components/variableState";
import { usePlayerStore } from "@/components/variableState";
import { usePcStore } from "@/components/variableState";
import Image from "next/image";
import rockImage from "../../../../public/icons/rock.png";
import paperImage from "../../../../public/icons/paper.png";
import scissorsImage from "../../../../public/icons/scissors.png";
import altImage from "../../../../public/icons/undefined.png";

const Result = () => {
  // const t = useTranslations("result");
  const { prediction } = usePredictionStore();
  const { player, setPlayer } = usePlayerStore();
  const { pc, setPc } = usePcStore();

  const keyValuePairs = prediction.split(", ").map((pair) => pair.split(": "));

  const predictionObject: { [key: string]: number } = {};
  keyValuePairs.forEach(([key, value]) => {
    predictionObject[key] = parseFloat(value);
  });

  console.log(predictionObject.Rock);
  console.log(predictionObject.Paper);
  console.log(predictionObject.Scissors);

  const highestValueKey = findHighestValueKey(predictionObject);

  if (highestValueKey === "Rock") {
    setPlayer({
      choice: highestValueKey,
      imageSrc: rockImage,
      imgAltText: "Rock",
    });
  } else if (highestValueKey === "Paper") {
    setPlayer({
      choice: highestValueKey,
      imageSrc: paperImage,
      imgAltText: "Paper",
    });
  } else if (highestValueKey === "Scissors") {
    setPlayer({
      choice: highestValueKey,
      imageSrc: scissorsImage,
      imgAltText: "Scissors",
    });
  } else {
    setPlayer({
      choice: highestValueKey,
      imageSrc: altImage,
      imgAltText: "Alt Image",
    });
  }
  //calculation random value as a PC Choice
  const aiValue = Math.floor(Math.random() * 3) + 1;

  if (aiValue === 1) {
    setPc({
      choice: "Rock",
      imageSrc: rockImage,
      imgAltText: "Rock",
    });
  } else if (aiValue === 2) {
    setPc({
      choice: "Paper",
      imageSrc: paperImage,
      imgAltText: "Paper",
    });
  } else if (aiValue === 3) {
    setPc({
      choice: "Scissors",
      imageSrc: scissorsImage,
      imgAltText: "Scissors",
    });
  } else {
    setPc({
      choice: "AltImage",
      imageSrc: altImage,
      imgAltText: "Alt Image",
    });
  }

  //deciding Winner
  const winner = determineWinner(player.choice, pc.choice);

  return (
    <div className="mx-auto flex h-full w-[60vw] flex-col items-center">
      <div className="flex flex-row">
        <div className="m-4 flex items-center text-center" id="playerChoice">
          {highestValueKey && (
            <Image
              src={player.imageSrc}
              alt={player.imgAltText}
              width={100}
              height={100}
            />
          )}
          {highestValueKey && (
            <p>
              The AI predicts you said: {highestValueKey}.<br />
              <span className="m-0 inline-flex italic">
                (Calculated randomly.)
              </span>
            </p>
          )}
        </div>
        <div id="pcChoice" className="flex items-center">
          {highestValueKey && (
            <Image
              src={pc.imageSrc}
              alt={pc.imgAltText}
              width={100}
              height={100}
            />
          )}
          {highestValueKey && <p>It chose: {pc.choice}</p>}
        </div>
      </div>
      {highestValueKey && <p>And the winner is: {winner}</p>}
    </div>
  );
};

export default Result;

function findHighestValueKey(obj: { [key: string]: number }): string {
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

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
