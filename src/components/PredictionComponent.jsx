"use client";

import React, { useRef } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import aiPrediction from "./aiPrediction";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
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
        data.current = result;
      })
      .catch((error) => {
        console.error("Error during prediction:", error);
      });
  }

  // Convert the string to an object
  const resultObject = data.current.split(",").reduce((acc, item) => {
    const [key, value] = item.split(":").map((s) => s.trim()); // Split by ':' and trim spaces
    acc[key] = parseFloat(value); // Convert string value to a number
    return acc;
  }, {});

  console.log(resultObject);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
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
        {data.current && <p>{data.current}</p>}
      </div>
    </>
  );
};

export default WebcamCapture;
