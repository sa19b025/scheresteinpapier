import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("home");
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="text-center">
        <h1 className="">{t("title")}</h1>
        <p className="my-8">{t("description")}</p>
        <Link href="/game" className={buttonVariants({ variant: "default" })}>
          {t("playButton")}
        </Link>
      </div>
    </div>
  );
}
