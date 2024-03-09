import React from "react";
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang)
  return (
    <footer>
      <span className="font-semibold">{footer.project} &copy; Thomas Scheiber 2024</span>
    </footer>
  );
}
