"use client";

import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Webcam from "react-webcam";

type Props = {};

const WebcamStream = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const [mirrored, setMirrored] = useState<boolean>(false);
  return (
    <div className="m-4 h-[60vh] w-[80vw] items-center text-center">
      <div className="relative">
        <div className="relative h-full w-full">
          <Webcam
            ref={webcamRef}
            mirrored={mirrored}
            className="mx-auto h-fit w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default WebcamStream;
