import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "VitaCare Hospital | Cuidado humanizado e excelência médica",
    template: "%s | VitaCare Hospital",
  },
  description:
    "Hospital VitaCare — atendimento 24h, especialidades médicas, exames e agendamento online. Cuidado humanizado com tecnologia de ponta.",
  keywords: ["hospital", "saúde", "agendamento", "emergência", "exames", "médicos"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <EmergencyBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
