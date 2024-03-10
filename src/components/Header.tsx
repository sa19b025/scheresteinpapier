import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");
  const home = "/" + locale + "/";
  const game = "/" + locale + "/game";
  const result = "/" + locale + "/result";

  return (
    <header className="align-center container mx-auto flex h-[10vh] items-center justify-around text-2xl">
      <div className="align-center">
        <Link href="/" className="flex">
          <div className="align-center flex justify-between">
            <div>
              <Image src="/logo.png" width={65} height={65} alt="Logo" />
            </div>
            <h1 className="ml-2 flex items-center font-semibold">
              {t("title")}
            </h1>
          </div>
        </Link>
      </div>
      <nav className="flex flex-row justify-center">
        <div className="flex flex-row justify-center gap-1">
          <Link href={home} className="p-4">
            {t("home")}
          </Link>
          <Link href={game} className="p-4">
            {t("game")}
          </Link>
          <Link href={result} className="p-4">
            {t("result")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
