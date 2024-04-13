import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ResultButton = () => {
  const resultUrl = "/de/result";
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
