import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="text-center">
        <h1 className="bg-">Schere Stein Papier</h1>
        <p className="my-8">
          ...this is a description of the game and the project...
        </p>
        <Link href="/game" className={buttonVariants({ variant: "default" })}>
          Spielen
        </Link>
      </div>
    </div>
  );
}
