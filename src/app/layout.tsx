"use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Semua halaman di folder /game/ tidak akan menampilkan navbar
  const isGamePage = pathname.startsWith("/game/");

  return (
    <html lang="id">
      <body className={`${poppins.className}`}>
        {!isGamePage && <Navbar />}
        {children}
      </body>
    </html>
  );
}
