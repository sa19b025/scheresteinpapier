import React from "react";
import { useTranslations } from "next-intl";

export default function Result() {
  const t = useTranslations("result");
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
