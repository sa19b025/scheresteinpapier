import React from "react";
import PredictionComponent from "@/components/PredictionComponent";

export default function Game() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <PredictionComponent />
      </div>
    </div>
  );
}
