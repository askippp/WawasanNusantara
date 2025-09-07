import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Metadata untuk favicon
export const metadata: Metadata = {
  title: "NUSPHERE - Digital Culture",
  description: "Menghubungkan Generasi Dengan Budaya Melalui Inovasi Digital",
  icons: {
    icon: "/images/NUSPHERE_FULL.png",
    shortcut: "/images/NUSPHERE_FULL.png",
    apple: "/images/NUSPHERE_FULL.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
