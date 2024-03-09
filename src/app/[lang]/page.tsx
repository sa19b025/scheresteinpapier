import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="text-center">
        <h1 className="bg-">{page.home.title}</h1>
        <p className="my-8">
        {page.home.description}
        </p>
        <Link href="/game" className={buttonVariants({ variant: "default" })}>
          Spielen
        </Link>
      </div>
    </div>
  );
}
