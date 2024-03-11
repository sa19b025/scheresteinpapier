import React from "react";
import { useTranslations } from "next-intl";
import WebcamStream from "@/components/WebcamStream";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Game() {
  const t = useTranslations("game");
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="">{t("title")}</h1>
      <WebcamStream />
      <p className="mb-4">{t("description")}</p>
      <p>{t("predictionText")}</p>
      <Button variant="secondary" className="mt-4 bg-gray-300 p-4">
        <Image
          src="/diaphragm.png"
          alt={t("kamera")}
          width={30}
          height={30}
          className="mx-2"
        />
      </Button>
    </div>
  );
}
