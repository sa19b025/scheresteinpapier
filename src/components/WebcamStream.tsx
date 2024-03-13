/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Webcam from "react-webcam";
import aiPrediction from "./aiPrediction.jsx";
import Image from "next/image.js";
import { Button } from "@/components/ui/button";

type Props = {};

const WebcamStream = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  let prediction;

  // create a capture function
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      console.log(imageSrc);
      const imageData = "";
      console.log(aiPrediction(imageData));
    }
  }, [webcamRef]);

  return (
    <>
      <div className="container">
        {imgSrc ? (
          <img src={imgSrc} height={600} width={600} alt="webcam" />
        ) : (
          <Webcam
            height={600}
            width={600}
            ref={webcamRef}
            mirrored={true}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.8}
          />
        )}
        <div>
          <Button
            variant="secondary"
            onClick={capture}
            className="mt-4 bg-gray-300 p-4"
          >
            <Image
              src="/diaphragm.png"
              alt="Camera"
              width={30}
              height={30}
              className="mx-2"
            />
          </Button>
          <p>Prediction: {prediction}</p>
        </div>
      </div>
    </>
  );
};

export default WebcamStream;
