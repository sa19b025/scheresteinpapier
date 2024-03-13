import React from "react";
import PredictionComponent from "@/components/PredictionComponent";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Game() {
  const locale = useLocale();
  const resultUrl = "/" + locale + "/result";
  const t = useTranslations("game");
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <PredictionComponent />
        <Link href={resultUrl}>
          <Button>Weiter</Button>
        </Link>
      </div>
    </div>
  );
}
