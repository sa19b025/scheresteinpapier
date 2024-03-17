import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ResultButton = () => {
  const resultUrl = "/de/result";

  return (
    <>
      <Link href={resultUrl}>
        <Button>ResultButton</Button>
      </Link>
    </>
  );
};

export default ResultButton;
