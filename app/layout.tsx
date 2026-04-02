import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EVO LIFE — Construis une carrière à 6 chiffres | Recrutement Québec",
  description:
    "Rejoins EVO LIFE au Québec. Formation d'élite en 34 modules, système IA, revenus illimités. Deviens conseiller en assurance vie et investissement.",
  openGraph: {
    title: "EVO LIFE — Carrière à 6 chiffres dans les services financiers",
    description:
      "Formation d'élite. Système IA. Revenus illimités. Rejoins l'équipe EVO LIFE au Québec.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
