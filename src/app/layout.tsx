import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/providers/I18nProvider"; // 👈 import the provider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influencer Search",
  description: "Search and manage influencers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>{children}</I18nProvider> {/* 👈 wrap your app */}
      </body>
    </html>
  );
}
