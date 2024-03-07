import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="/../rock-paper-scissors.png"
          width={500}
          height={500}
          alt="Logo Image"
        />
        Schere Stein Papier
      </Link>
    </header>
  );
}
