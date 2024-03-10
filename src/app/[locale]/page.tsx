import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";

export default function Index() {
  const locale = useLocale();
  const gameUrl = "/" + locale + "/game";
  const t = useTranslations("home");
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold">{t("title")}</h1>
        <p className="my-4">{t("descriptionP1")}</p>
        <p className="my-4">{t("descriptionP2")}</p>
        <p className="my-4">{t("descriptionP3")}</p>
        <p className="my-4">{t("descriptionP4")}</p>
        <p className="my-4">{t("descriptionP5")}</p>
        <p className="my-4">{t("descriptionP6")}</p>
        <p className="my-4">{t("descriptionP7")}</p>
        <Link href={gameUrl} className={buttonVariants({ variant: "default" })}>
          {t("playButton")}
        </Link>
        <h2 className="my-4 text-lg font-semibold">{t("rulesTitle")}</h2>
        <p className="my-4">{t("rules")}</p>
      </div>
    </div>
  );
}
