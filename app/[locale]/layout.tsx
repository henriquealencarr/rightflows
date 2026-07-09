import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { locales, hasLocale, getDictionary, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
    },
    alternates: {
      languages: {
        en: "/en",
        pt: "/pt",
        "x-default": "/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html lang={locale as Locale} className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen antialiased bg-[#080808] text-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
