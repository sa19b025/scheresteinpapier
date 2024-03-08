import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  return (
    <header className="h-[10vh]">
      <nav className=" h-[10vh] flex justify-between items-center">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold flex">
            <Image src="/logo.png" width={50} height={50} alt="Logo" />
            <h1 className="p-0 m-0 flex justify-between items-center ml-5">
              Schere Stein Papier
            </h1>
          </Link>
          <div className="flex md:flex space-x-7">
            <Link href="/" className="hover:text-gray-300">
              Start
            </Link>
            <Link href="/game" className="hover:text-gray-300">
              Spiel
            </Link>
            <Link href="/result" className="hover:text-gray-300">
              Ergebnis
            </Link>
            <div className="flex flex-row"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
