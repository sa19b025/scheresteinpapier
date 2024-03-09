import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./styles/styles.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, i18n } from "@/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rock paper scissors",
  description: "Created with next.js",
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main className="h-[80vh]">{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
