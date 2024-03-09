import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="align-center container mx-auto flex h-[10vh] items-center justify-around text-2xl">
      <div className="align-center">
        <Link href="/" className="flex">
          <div className="align-center flex justify-between">
            <div>
              <Image src="/logo.png" width={65} height={65} alt="Logo" />
            </div>
            <h1 className="ml-2 flex items-center font-semibold">
              Schere Stein Papier
            </h1>
          </div>
        </Link>
      </div>
      <nav className="flex flex-row justify-center">
        <div className="flex flex-row justify-center gap-1">
          <Link href="/" className="p-4">
            Start
          </Link>
          <Link href="/game" className="p-4">
            Spiel
          </Link>
          <Link href="/result" className="p-4">
            Ergebnis
          </Link>
          <div className="text- flex flex-row items-center">
            <select className="rounded-lg bg-blue-400 p-2">
              <option value="de">Deutsch</option>
              <option value="en">Englisch</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}
