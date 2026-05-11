import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "La Lora — Comida Fresca, Entrega Rápida",
  description:
    "Plataforma integral de gestión para restaurante/bar. Administra órdenes, productos, mesas y más.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${bricolage.variable} ${inter.variable} font-sans bg-background text-on-surface antialiased selection:bg-secondary/30`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
