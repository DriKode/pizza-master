import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PIZZA MASTER | El Arte de la Masa",
  description: "Vive la experiencia definitiva de la pizza artesanal. Masa hecha a mano, ingredientes premium y el calor de un horno de leña.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-[#FAF9F6] font-inter">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
