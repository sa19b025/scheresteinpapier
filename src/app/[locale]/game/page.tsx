import React from "react";
import { useTranslations } from "next-intl";
import WebcamStream from "@/components/WebcamStream";

export default function Game() {
  const t = useTranslations("game");
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <h1 className="">{t("title")}</h1>
      <WebcamStream />
      <p>{t("description")}</p>
    </div>
  );
}
