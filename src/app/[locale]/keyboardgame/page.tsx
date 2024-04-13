"use client";

import KeyboardComponent from "@/components/KeyboardComponent";
import { useLocale } from "next-intl";

function KeyboardgamePage() {
  const locale = useLocale();
  const resultUrl = "/" + locale + "/result";

  addEventListener("keydown", (e) => {
    if (e.key === "r") {
      window.location.href = resultUrl + "?selectedValue=Rock";
    }
    if (e.key === "p") {
      window.location.href = resultUrl + "?selectedValue=Paper";
    }
    if (e.key === "s") {
      window.location.href = resultUrl + "?selectedValue=Scissors";
    }
  });

  return (
    <div>
      <KeyboardComponent />;
    </div>
  );
}

export default KeyboardgamePage;
