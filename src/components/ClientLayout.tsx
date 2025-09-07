"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Semua halaman di folder /game/ tidak akan menampilkan navbar
  const isGamePage = pathname.startsWith("/game/");

  return (
    <>
      {!isGamePage && <Navbar />}
      {children}
    </>
  );
}
