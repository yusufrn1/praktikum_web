import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const tautan = [
  { href: "/", label: "Beranda" },
  { href: "/katalog", label: "Katalog" },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Energi & Lingkungan Kampus",
  description: "Pemantauan energi dan lingkungan kampus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#konten" className="sr-only focus:not-sr-only focus:p-2">
          Lewati ke konten utama
        </a>
        <SiteHeader namaProduk="Energi Kampus" tautan={tautan} />
        {children}
        <SiteFooter namaProduk="Energi Kampus" />
      </body>
    </html>
  );
}
