"use client";

import KeyboardComponent from "@/components/KeyboardComponent";
import { usePredictionStore } from "@/components/variableState";

function KeyboardgamePage() {
  const { setPrediction } = usePredictionStore();

  const page = document.getElementById("page");

  if (page) {
    page.addEventListener("keydown", function (event) {
      const key = event.key;
      if (key === "r") {
        setPrediction("rock");
        window.open("/results", "_blank");
      }
      if (key === "p") {
        setPrediction("paper");
        window.open("/results", "_blank");
      }
      if (key === "s") {
        setPrediction("scissors");
        window.open("/results", "_blank");
      }
    });
  }

  return (
    <div id="page">
      <KeyboardComponent />;
    </div>
  );
}

export default KeyboardgamePage;
