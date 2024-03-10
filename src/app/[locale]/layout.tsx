import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./styles/styles.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rock paper scissors",
  description: "Created with next.js",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        <main className="h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
