import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <div className={styles.main}>
        Some Camera input...
      </div>
    </>
  );
}
