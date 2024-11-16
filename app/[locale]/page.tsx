"use client";

import { useI18n } from "@/locales/client";

export default function Home() {
  const t = useI18n();

  return (
    <main className="flex flex-col justify-center items-center gap-4 p-24">
      <h1 className="text-8xl">{t("title")}</h1>
      <h2 className="text-5xl">{t("subtitle")}</h2>
      <h3 className="text-2xl">{t("description")}</h3>
    </main>
  );
}
