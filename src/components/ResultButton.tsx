import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ResultButton = () => {
  const locale = useLocale();
  const resultUrl = "/" + locale + "/airesult";
  const t = useTranslations("resultButton");
  return (
    <>
      <Link href={resultUrl}>
        <Button>{t("btnText")}</Button>
      </Link>
    </>
  );
};

export default ResultButton;
