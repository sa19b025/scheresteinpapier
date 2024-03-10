"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExampleClientComponent() {
  const pathname = usePathname();

  let locale = "de";

  if (pathname.includes(locale)) {
    console.log("The string contains '" + locale + "'");
  } else {
    locale = "en";
    console.log("The string does not contain '" + locale + "'");
  }

  return (
    <>
      <div className="flex flex-row items-center">
        <select className="rounded-lg bg-blue-100 p-2 text-lg">
          <option value="de">Deutsch</option>
          <option value="en">Englisch</option>
        </select>
      </div>

      <p className="flex flex-row items-center text-xs">
        Current locale: {locale}, current path: {pathname}
      </p>
    </>
  );
}
