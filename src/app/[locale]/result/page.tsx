"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePredictionStore } from "@/components/predictionState";

const Result = () => {
  // const t = useTranslations("result");
  const { prediction } = usePredictionStore();

  const keyValuePairs = prediction.split(", ").map((pair) => pair.split(": "));

  const predictionObject: { [key: string]: number } = {};
  keyValuePairs.forEach(([key, value]) => {
    predictionObject[key] = parseFloat(value);
  });

  console.log(predictionObject.Rock);
  console.log(predictionObject.Paper);
  console.log(predictionObject.Scissors);

  function findHighestValueKey(obj: { [key: string]: number }): string {
    return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  }

  const highestValueKey = findHighestValueKey(predictionObject);

  const aiValue = "rock";

  return (
    <div>
      {highestValueKey && <p>The AI predicts you said: {highestValueKey}</p>}
      {highestValueKey && <p>It chose: {aiValue}</p>}
    </div>
  );
};

export default Result;
