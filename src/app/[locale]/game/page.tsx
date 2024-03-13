import React from "react";
import WebcamStream from "@/components/WebcamStream03.jsx";
import Link from "next/link";

export default function Game() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <div>
        <WebcamStream />
        <Link href="/[locale]/result">Weiter</Link>
      </div>
    </div>
  );
}
