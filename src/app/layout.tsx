import Footer from "_c/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "_c/header";

import cn from "classnames";
import { ThemeSwitcher } from "_c/theme-switcher";

import "./globals.css";
import CowSay from "_c/cow-say";
import BG from "_c/bg";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devan Huapaya",
  description: `Full-stack Typescript Developer.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/male-technologist.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/male-technologist.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/male-technologist.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/assets/images/male-technologist.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(montserrat.className, "dark:bg-zinc-900 dark:text-neutral-50 transition-colors  duration-200")}
      >
        <ThemeSwitcher />
        <CowSay />
  
        <main className="min-h-screen">{children}</main>
        
        <Footer />
        <BG />
      </body>
    </html>
  );
}
