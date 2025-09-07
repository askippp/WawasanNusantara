import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permainan Budaya Indonesia - Wawasan Nusantara",
  description: "Main game seru tentang budaya Indonesia",
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="game-layout">
      {/* Tidak ada Navbar disini */}
      {children}
    </div>
  );
}
