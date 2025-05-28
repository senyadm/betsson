import React from "react";
import Script from "next/script";
import type { Metadata } from "next";

type BasePageProps = {
  /** SEO-заголовок страницы (h1 ставим внутри children) */
  title: string;
  /** Мета-описание */
  description: string;
  /** Канонический URL (от корня) — напр. "/faq" */
  canonical: string;
  /** Сам контент страницы */
  children: React.ReactNode;
  /** Объект JSON-LD (Schema.org). Необязателен. */
  jsonLd?: Record<string, unknown>;
};

/**
 * Компонент-обёртка: выводит <main> + (при необходимости) JSON-LD.
 */
export function BasePage({
  children,
  jsonLd,
}: Omit<BasePageProps, "title" | "description" | "canonical">) {
  return (
    <>
      <main className="bg-white py-16">{children}</main>

      {jsonLd && (
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
      )}
    </>
  );
}

/**
 * Хелпер-функция, чтобы не дублировать мета-данные в каждом page.tsx
 */
export function baseMetadata(
  title: string,
  description: string,
  canonical: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Betsson GR",
    },
  };
}
