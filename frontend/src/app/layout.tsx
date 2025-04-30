import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { TariffProvider } from "@/contexts/TariffContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tariff Impact Tracker - Monitor Global Trade Policies",
  description:
    "Track U.S. and global tariff changes and their impact on key economic sectors including healthcare, transportation, and technology.",
  keywords:
    "tariff, trade, economics, politics, analysis, visualization, AI, impact analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <TariffProvider>{children}</TariffProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
