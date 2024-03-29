"use client";

import React, { useRef } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import ResultButton from "@/components/ResultButton";
import aiPrediction from "./aiPrediction";
import { usePredictionStore } from "@/components/predictionState";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const { prediction, setPrediction } = usePredictionStore();

  const screenshotSrc = useRef("initialValue");
  const data = useRef("");
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    screenshotSrc.current = imageSrc;
  }, [webcamRef, setImgSrc]);

  if (data.current !== "initialValue") {
    aiPrediction(screenshotSrc.current)
      .then((result) => {
        setPrediction(result);
      })
      .catch((error) => {
        console.error("Error during prediction:", error);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        {!imgSrc && (
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        )}
        {!imgSrc && (
          <Button onClick={capture} id="firstButton">
            Capture photo
          </Button>
        )}
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="Screenshot"
            id="screenshot"
            width={450}
            height={450}
          />
        )}
        {imgSrc && (
          <div>
            <p>{prediction}</p>
          </div>
        )}
      </div>
      <ResultButton />
    </>
  );
};

export default WebcamCapture;
