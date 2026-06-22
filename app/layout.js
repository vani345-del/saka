import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Saka — Financiamento de Smartphones em Angola",
  description:
    "Financiamos smartphones para trabalhadores em Angola, com pagamento dividido em prestações simples e acessíveis. Sem burocracia, sem surpresas.",
  keywords: "financiamento, smartphones, Angola, prestações, Saka, tecnologia",
  authors: [{ name: "Saka" }],
  openGraph: {
    title: "Saka — Financiamento de Smartphones em Angola",
    description:
      "Financiamos smartphones para trabalhadores em Angola, com pagamento dividido em prestações simples e acessíveis.",
    locale: "pt_AO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
