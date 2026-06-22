import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "CriadorIA - Marketing Inteligente com IA",
  description:
    "Crie conteúdos, copies de vendas, calendários de conteúdo e estratégias completas utilizando Inteligência Artificial.",
  keywords: [
    "IA",
    "Marketing Digital",
    "Copy de Vendas",
    "ChatGPT",
    "Conteúdo",
    "CriadorIA",
    "Marketing Inteligente",
  ],
  openGraph: {
    title: "CriadorIA",
    description:
      "Seu agente de Marketing Inteligente para criar conteúdos e vender mais.",
    images: ["/images/banner-criadoria.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}