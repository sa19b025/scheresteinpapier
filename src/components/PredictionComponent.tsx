import React, { useRef, useState, useCallback } from "react";
import Webcam, { WebcamProps } from "react-webcam";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import ResultButton from "@/components/ResultButton";
import aiPrediction from "./aiPrediction";
import { usePredictionStore } from "@/components/variableState";

type PredictionComponentProps = {};

const WebcamCapture: React.FC<PredictionComponentProps> = () => {
  const webcamRef = useRef<WebcamProps>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const { prediction, setPrediction } = usePredictionStore();

  const t = useTranslations("PredictionComponent");

  const screenshotSrc = useRef<string>("initialValue");
  const data = useRef<string>("");

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?
    .getScreenshot();
    setImgSrc(imageSrc);
    screenshotSrc.current = imageSrc || "";
  }, [webcamRef, setImgSrc]);

  if (data.current !== "initialValue") {
    aiPrediction(screenshotSrc.current)
      .then((result: string) => {
        setPrediction(result);
      })
      .catch((error: Error) => {
        console.error(t("errormsg"), error); //"Error during prediction:"
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
            {t("captureButton")}
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
        {imgSrc && (
          <div>
            <ResultButton />
          </div>
        )}
      </div>
    </>
  );
};

export default WebcamCapture;
